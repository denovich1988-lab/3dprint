#!/bin/sh
# Adds my3dprinter.io to an existing nginx server (the promt-site Hetzner server).
# Run once as root:  sh add-site.sh my3dprinter.io
# It does NOT change other sites on the server: it only adds its own folder, timer and nginx block.
set -e
DOMAIN="${1:-my3dprinter.io}"
NAME=my3dprinter
REPO=https://github.com/denovich1988-lab/3dprint.git
SRC=/opt/$NAME-site
WWW=/var/www/$NAME

cat > /usr/local/bin/$NAME-update <<SCRIPT
#!/bin/sh
set -e
if [ ! -d "$SRC/.git" ]; then
  git clone -q --depth 1 --branch site "$REPO" "$SRC"
else
  git -C "$SRC" fetch -q --depth 1 origin site
  git -C "$SRC" reset -q --hard origin/site
fi
mkdir -p "$WWW"
rsync -a --delete --exclude .git "$SRC/" "$WWW/"
SCRIPT
chmod 755 /usr/local/bin/$NAME-update

cat > /etc/systemd/system/$NAME-update.service <<UNIT
[Unit]
Description=Pull the latest $DOMAIN build from GitHub
Wants=network-online.target
After=network-online.target
[Service]
Type=oneshot
ExecStart=/usr/local/bin/$NAME-update
UNIT

cat > /etc/systemd/system/$NAME-update.timer <<UNIT
[Unit]
Description=Update $DOMAIN every 5 minutes
[Timer]
OnBootSec=1min
OnUnitActiveSec=5min
[Install]
WantedBy=timers.target
UNIT

cat > /etc/nginx/sites-available/$NAME <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $DOMAIN www.$DOMAIN;
    root $WWW;
    index index.html;

    gzip on;
    gzip_types text/css application/javascript application/json application/xml image/svg+xml application/wasm;

    if (\$host = www.$DOMAIN) { return 301 https://$DOMAIN\$request_uri; }

    location / { try_files \$uri \$uri/ =404; }
    location /_next/static/ { expires 365d; add_header Cache-Control "public, immutable"; }
    location /occt/ { expires 30d; add_header Cache-Control "public"; types { application/wasm wasm; application/javascript js; } }
    location ~ /\. { deny all; }
    error_page 404 /404.html;

    add_header X-Content-Type-Options nosniff;
    add_header Referrer-Policy strict-origin-when-cross-origin;
}
NGINX
ln -sf /etc/nginx/sites-available/$NAME /etc/nginx/sites-enabled/$NAME

/usr/local/bin/$NAME-update
systemctl daemon-reload
systemctl enable --now $NAME-update.timer
nginx -t && systemctl reload nginx

# HTTPS (Let's Encrypt). Needs the domain's A record pointing to this server first.
if ! command -v certbot >/dev/null 2>&1; then apt-get update -q && apt-get install -y -q certbot python3-certbot-nginx; fi
certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --redirect --agree-tos --register-unsafely-without-email -n || echo "certbot failed: check DNS, then run: certbot --nginx -d $DOMAIN -d www.$DOMAIN --redirect"
echo "Done: https://$DOMAIN"

'use client';
import { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import * as THREE from 'three';

export type ViewportHandle = {
  screenshot: () => string | null;
  resetView: () => void;
};

type Props = {
  object: THREE.Object3D | null;
  zUp?: boolean;           // model uses Z as "up" (STL, 3MF, STEP…)
  wireframe?: boolean;
  autoRotate?: boolean;
  bed?: boolean;           // draw a print-bed grid under the model
  className?: string;
  onReady?: () => void;
};

const Viewport = forwardRef<ViewportHandle, Props>(function Viewport(
  { object, zUp = true, wireframe = false, autoRotate = false, bed = true, className, onReady },
  ref
) {
  const host = useRef<HTMLDivElement>(null);
  const st = useRef<any>({});

  useEffect(() => {
    let disposed = false;
    const el = host.current!;
    let cleanup = () => {};
    (async () => {
      const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
      const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js');
      if (disposed) return;
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      el.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
      const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 100000);
      camera.position.set(1.6, 1.1, 1.8);
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.08;
      const key = new THREE.DirectionalLight(0xffffff, 1.4);
      key.position.set(3, 6, 4);
      scene.add(key, new THREE.HemisphereLight(0xffffff, 0x334155, 0.6));
      const holder = new THREE.Group();
      scene.add(holder);
      const bedGroup = new THREE.Group();
      scene.add(bedGroup);
      Object.assign(st.current, { renderer, scene, camera, controls, holder, bedGroup });
      const resize = () => {
        const w = el.clientWidth || 1, h = el.clientHeight || 1;
        renderer.setSize(w, h, false);
        renderer.domElement.style.width = '100%';
        renderer.domElement.style.height = '100%';
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      const ro = new ResizeObserver(resize);
      ro.observe(el);
      resize();
      let raf = 0;
      const loop = () => {
        raf = requestAnimationFrame(loop);
        controls.update();
        renderer.render(scene, camera);
      };
      loop();
      st.current.ready = true;
      st.current.apply?.();
      onReady?.();
      cleanup = () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        controls.dispose();
        renderer.dispose();
        pmrem.dispose();
        el.removeChild(renderer.domElement);
      };
    })();
    return () => { disposed = true; cleanup(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const apply = () => {
      const s = st.current;
      if (!s.ready) return;
      const { holder, bedGroup, camera, controls } = s;
      holder.clear();
      bedGroup.clear();
      if (!object) return;
      const pivot = new THREE.Group();
      pivot.add(object);
      if (zUp) pivot.rotation.x = -Math.PI / 2;
      holder.add(pivot);
      pivot.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(pivot);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      // stand the model on the bed, centred
      pivot.position.set(-center.x, -box.min.y, -center.z);
      const radius = Math.max(size.x, size.y, size.z) || 1;
      if (bed) {
        const span = radius * 1.8;
        const grid = new THREE.GridHelper(span, 18, 0xe8590c, 0x3b4654);
        (grid.material as THREE.Material).transparent = true;
        (grid.material as THREE.Material).opacity = 0.55;
        bedGroup.add(grid);
        const plate = new THREE.Mesh(new THREE.PlaneGeometry(span, span), new THREE.MeshStandardMaterial({ color: 0x202833, roughness: 0.9, metalness: 0 }));
        plate.rotation.x = -Math.PI / 2;
        plate.position.y = -radius * 0.002;
        bedGroup.add(plate);
      }
      camera.near = radius / 1000;
      camera.far = radius * 100;
      camera.position.set(radius * 1.5, radius * 1.05, radius * 1.75);
      controls.target.set(0, size.y * 0.45, 0);
      camera.updateProjectionMatrix();
      controls.update();
      s.home = { pos: camera.position.clone(), target: controls.target.clone() };
    };
    st.current.apply = apply;
    apply();
  }, [object, zUp, bed]);

  useEffect(() => {
    const s = st.current;
    const set = () => {
      if (!s.ready) return;
      s.controls.autoRotate = autoRotate;
      s.controls.autoRotateSpeed = 1.6;
      s.holder.traverse((o: any) => {
        if (!o.isMesh) return;
        (Array.isArray(o.material) ? o.material : [o.material]).forEach((m: any) => { if (m) m.wireframe = wireframe; });
      });
    };
    set();
    const t = setTimeout(set, 300);
    return () => clearTimeout(t);
  }, [wireframe, autoRotate, object]);

  useImperativeHandle(ref, () => ({
    screenshot: () => st.current.renderer?.domElement.toDataURL('image/png') ?? null,
    resetView: () => {
      const s = st.current;
      if (!s.home) return;
      s.camera.position.copy(s.home.pos);
      s.controls.target.copy(s.home.target);
    },
  }));

  return <div ref={host} className={className} style={{ position: 'relative', width: '100%', height: '100%', touchAction: 'none' }} />;
});

export default Viewport;

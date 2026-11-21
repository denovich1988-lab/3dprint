export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3 28 10v12L16 29 4 22V10Z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M4 10l12 7 12-7M16 17v12" fill="none" stroke="#E8590C" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
}

export function Squiggly({
  width = "100%",
  height = 8,
  color = "currentcolor",
  strokeWidth = 1.8,
  className = "",
}) {
  return (
    <svg
      viewBox="0 0 90 8"
      preserveAspectRatio="none"
      aria-hidden="true"
      width={width}
      height={height}
      className={className}
    >
      <path
        d="M2 4C25 1 45 7 70 4C95 1 115 7 138 3"
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

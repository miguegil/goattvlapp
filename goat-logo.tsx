export function GoatLogo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src="/goat-logo.png"
      alt="GOAT TV"
      loading={priority ? "eager" : "lazy"}
      className={className}
    />
  );
}

interface SizeIndicatorProps {
  width: number;
  height: number;
  name: string;
  dpi: number;
}

export default function SizeIndicator({
  width,
  height,
  name,
  dpi,
}: SizeIndicatorProps) {
  return (
    <div className="absolute -top-8 left-0 text-xs text-neutral-400">
      <span className="font-bold">Master Size:</span> {width} x {height}px (
      {name}) <span className="font-bold">DPI:</span> {dpi}
    </div>
  );
}

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
    <div className="flex justify-between text-neutral-400 text-xs">
      <div>
        <span className="font-bold">Master Size:</span> {width} x {height}px (
        {name})
      </div>
      <div>
        <span className="font-bold">DPI:</span> {dpi}
      </div>
    </div>
  );
}

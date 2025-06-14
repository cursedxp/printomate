interface SizeIndicatorProps {
  width: number;
  height: number;
  dpi: number;
}

export default function SizeIndicator({
  width,
  height,
  dpi,
}: SizeIndicatorProps) {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col justify-between text-neutral-400 text-[10px] bg-neutral-800 rounded-lg p-2">
      <div>
        <span className="font-bold">Master Size:</span> {width} x {height}
      </div>
      <div>
        <span className="font-bold">DPI:</span> {dpi}
      </div>
    </div>
  );
}

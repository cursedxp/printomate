interface FrameProps {
  width: number;
  height: number;
}

export default function Frame({ width, height }: FrameProps) {
  const aspectRatio = width / height;
  return (
    <div
      className=" bg-white shadow-lg"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        aspectRatio: `${aspectRatio}`,
      }}
    ></div>
  );
}

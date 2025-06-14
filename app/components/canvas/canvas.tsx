import { useState } from "react";

export default function Canvas({ children }: { children: React.ReactNode }) {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  return (
    <div className="flex-1">
      <div
        className={`flex flex-col items-center bg-neutral-800 w-full h-full ${
          selectedBlock === "TextBlock"
            ? "cursor-text"
            : selectedBlock === "ShapeBlock"
            ? "cursor-crosshair"
            : selectedBlock === null
            ? "cursor-default"
            : selectedBlock === "ImageBlock"
            ? "cursor-crosshair"
            : "cursor-default"
        }`}
        id="editor-canvas"
      >
        {children}
      </div>
    </div>
  );
}

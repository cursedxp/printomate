import { RxText, RxTransform, RxImage } from "react-icons/rx";

import { useState, useEffect } from "react";

export default function ToolBar() {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  useEffect(() => {
    const pressEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedBlock(null);
      }
    };
    window.addEventListener("keydown", pressEscape);
    return () => {
      window.removeEventListener("keydown", pressEscape);
    };
  }, []);

  return (
    <div className="flex flex-col items-center bg-neutral-900 gap-2 p-2 rounded-l-lg h-fit w-10 ">
      <button
        onClick={() => {
          setSelectedBlock("TextBlock");
        }}
        className={`p-1 rounded-md transition-colors focus:outline-none ${
          selectedBlock === "TextBlock"
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
      >
        <RxText className="text-xl" />
      </button>
      <button
        onClick={() => {
          setSelectedBlock("ShapeBlock");
        }}
        className={`p-1 rounded-md transition-colors focus:outline-none ${
          selectedBlock === "ShapeBlock"
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
      >
        <RxTransform className="text-xl" />
      </button>
      <button
        onClick={() => {
          setSelectedBlock("ImageBlock");
        }}
        className={`p-1 rounded-md transition-colors focus:outline-none ${
          selectedBlock === "ImageBlock"
            ? "bg-white text-black"
            : "hover:bg-white hover:text-black"
        }`}
      >
        <RxImage className="text-xl" />
      </button>
    </div>
  );
}

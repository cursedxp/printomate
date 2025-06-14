import {
  IoText,
  IoShapesOutline,
  IoImage,
  IoArrowUndo,
  IoArrowRedo,
} from "react-icons/io5";
import { RxText, RxTransform, RxImage } from "react-icons/rx";

import { useState } from "react";

export default function ToolBar() {
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center bg-neutral-800 gap-2 p-2 rounded-l-lg h-fit w-10 ">
      <button
        onClick={() => {
          setSelectedBlock("TextBlock");
        }}
        className={`p-1 rounded-lg transition-colors focus:outline-none ${
          selectedBlock === "TextBlock"
            ? "bg-neutral-700 text-white"
            : "hover:bg-neutral-700/50"
        }`}
      >
        <RxText className="text-xl" />
      </button>
      <button
        onClick={() => {
          setSelectedBlock("ShapeBlock");
        }}
        className={`p-1 rounded-lg transition-colors focus:outline-none ${
          selectedBlock === "ShapeBlock"
            ? "bg-neutral-700 text-white"
            : "hover:bg-neutral-700/50"
        }`}
      >
        <RxTransform className="text-xl" />
      </button>
      <button
        onClick={() => {
          setSelectedBlock("ImageBlock");
        }}
        className={`p-1 rounded-lg transition-colors focus:outline-none ${
          selectedBlock === "ImageBlock"
            ? "bg-neutral-700 text-white"
            : "hover:bg-neutral-700/50"
        }`}
      >
        <RxImage className="text-xl" />
      </button>
    </div>
  );
}

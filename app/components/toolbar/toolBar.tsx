import { RxText, RxTransform, RxImage } from "react-icons/rx";

import { useState, useEffect } from "react";
import ToolBarButton from "./toolBarButton";

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
      <ToolBarButton
        icon={<RxText className="text-xl" />}
        onClick={() => {
          setSelectedBlock("TextBlock");
        }}
        selectedBlock={selectedBlock}
        blockType="TextBlock"
      />
      <ToolBarButton
        icon={<RxTransform className="text-xl" />}
        onClick={() => {
          setSelectedBlock("ShapeBlock");
        }}
        selectedBlock={selectedBlock}
        blockType="ShapeBlock"
      />
      <ToolBarButton
        icon={<RxImage className="text-xl" />}
        onClick={() => {
          setSelectedBlock("ImageBlock");
        }}
        selectedBlock={selectedBlock}
        blockType="ImageBlock"
      />
    </div>
  );
}

import ToolBar from "../toolbar/toolBar";
import ToolBarButton from "../toolbar/toolBarButton";
import Frame from "./frame";
import { RxText, RxTransform, RxImage } from "react-icons/rx";
import { useEffect, useState } from "react";

interface MasterTemplateProps {
  width: number;
  height: number;
}

export default function MasterTemplate({ width, height }: MasterTemplateProps) {
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
    <div className="flex mt-4">
      <ToolBar className="flex-col items-center gap-2 rounded-l-lg h-fit p-2">
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
      </ToolBar>
      <Frame width={width} height={height} />
    </div>
  );
}

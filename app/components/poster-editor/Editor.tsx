"use client";
import { useState, useEffect } from "react";
import { ImageBlock, ShapeBlock, TextBlock } from "@/app/types/poster";
import MasterTemplate from "../master-template/masterTemplate";
import ToolBar from "../toolbar/toolBar";
import Canvas from "../canvas/canvas";

interface EditorProps {
  onSave?: (blocks: (TextBlock | ShapeBlock | ImageBlock)[]) => void;
}

export default function Editor({ onSave }: EditorProps) {
  const [blocks, setBlocks] = useState<(TextBlock | ShapeBlock | ImageBlock)[]>(
    []
  );
  const [selectedBlock, setSelectedBlock] = useState<
    "TextBlock" | "ShapeBlock" | "ImageBlock" | null
  >(null);

  useEffect(() => {
    console.log(selectedBlock);
  }, [selectedBlock]);

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
    <div className="flex h-full w-full text-white ">
      <Canvas>
        <MasterTemplate width={600} height={900} />
      </Canvas>
    </div>
  );
}

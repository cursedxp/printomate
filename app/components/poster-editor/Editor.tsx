"use client";
import { useState, useEffect } from "react";
import { ImageBlock, ShapeBlock, TextBlock } from "@/app/types/poster";
import MasterTemplate from "../master-template/masterTemplate";
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

  return (
    <div className="flex h-full w-full text-white ">
      <Canvas>
        <MasterTemplate width={600} height={900} />
      </Canvas>
    </div>
  );
}

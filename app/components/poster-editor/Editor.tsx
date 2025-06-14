"use client";
import { useState, useRef, useEffect } from "react";
import { ImageBlock, ShapeBlock, TextBlock } from "@/app/types/poster";
import MasterTemplate from "../master-template/masterTemplate";
import Canvas from "../canvas/canvas";
import ToolBar from "../toolbar/toolBar";
import ToolBarButton from "../toolbar/toolBarButton";
import { RxZoomIn } from "react-icons/rx";
import { Input } from "@/components/ui/input";

interface EditorProps {
  onSave?: (blocks: (TextBlock | ShapeBlock | ImageBlock)[]) => void;
}

export default function Editor({ onSave }: EditorProps) {
  const [blocks, setBlocks] = useState<(TextBlock | ShapeBlock | ImageBlock)[]>(
    []
  );
  const [zoom, setZoom] = useState(50);
  const [isZooming, setIsZooming] = useState(false);
  const zoomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (zoomRef.current && !zoomRef.current.contains(e.target as Node)) {
        setIsZooming(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isZooming]);

  return (
    <div className="flex h-full w-full text-white ">
      <Canvas>
        <MasterTemplate width={600} height={900} />
        <ToolBar className="flex justify-center absolute bottom-5 right-5 rounded-lg gap-4 h-fit p-2">
          {!isZooming && (
            <ToolBarButton
              icon={<RxZoomIn className="text-xl" />}
              onClick={() => {
                setIsZooming(true);
              }}
              selectedBlock={null}
              blockType="TextBlock"
            />
          )}
          {isZooming && (
            <div className="flex items-center gap-2" ref={zoomRef}>
              <Input
                type="number"
                value={zoom}
                min={0}
                max={100}
                onChange={(e) => setZoom(parseInt(e.target.value))}
                className="w-10 h-7 text-center p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border border-white/20 hover:border-white/40 focus-visible:ring-1 focus-visible:ring-ring"
              />
              <span className="text-sm">%</span>
            </div>
          )}
        </ToolBar>
      </Canvas>
    </div>
  );
}

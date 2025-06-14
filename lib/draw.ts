import { TextBlock, ShapeBlock, ImageBlock } from "@/app/types/poster";

export const createTextBlock = (position: { x: number; y: number }) => {
  const newBlock: TextBlock = {
    id: `text-${Date.now()}`,
    position,
    maxWidth: 100,
    font: {
      size: 16,
      family: "Inter",
      weight: 400,
    },
    alignment: "left",
    text: "",
    color: "#ffffff",
    opacity: 1,
    rotation: 0,
    scale: 1,
    lineHeight: 1.5,
  };
  return newBlock;
};

export const createShapeBlock = (position: { x: number; y: number }) => {
  const newBlock: ShapeBlock = {
    id: `shape-${Date.now()}`,
    position,
    type: "rectangle",
    size: {
      width: 100,
      height: 100,
    },
    color: "#ffffff",
    opacity: 1,
    rotation: 0,
    scale: 1,
    anchor: {
      x: 0,
      y: 0,
    },
  };
  return newBlock;
};

export const createImageBlock = (position: { x: number; y: number }) => {
  const newBlock: ImageBlock = {
    id: `image-${Date.now()}`,
    position,
    size: {
      width: 100,
      height: 100,
    },
    image: "",
    opacity: 1,
    rotation: 0,
    scale: 1,
    anchor: {
      x: 0,
      y: 0,
    },
  };
  return newBlock;
};

export const getCursorPosition = (event: MouseEvent) => {
  const canvas = document.getElementById("editor-canvas") as HTMLDivElement;
  const rect = canvas.getBoundingClientRect();

  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
};

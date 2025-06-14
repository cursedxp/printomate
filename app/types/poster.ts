export type AnchorPoint = {
  x: number;
  y: number;
};

export type PosterSize = {
  id: string;
  name: string;
  width: number;
  height: number;
  unit: "px" | "cm" | "in" | "mm";
  dpi: number;
};

export type PosterSizes = Record<string, PosterSize[]>;

export type TextBlock = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  maxWidth: number;
  font: {
    size: number;
    family: string;
    weight: number;
  };
  alignment: "left" | "center" | "right";
  text: string;
  color: string;
  opacity: number;
  rotation: number;
  scale: number;
  lineHeight: number;
};

export type ShapeBlock = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  type: "rectangle" | "circle" | "triangle" | "ellipse";
  size: {
    width: number;
    height: number;
  };
  color: string;
  opacity: number;
  rotation: number;
  scale: number;
  anchor?: AnchorPoint;
};

export type ImageBlock = {
  id: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  image: string;
  opacity: number;
  rotation: number;
  scale: number;
  anchor?: AnchorPoint;
};

export type PosterTemplate = {
  id: string;
  name: string;
  description: string;
  blocks: (TextBlock | ShapeBlock | ImageBlock)[];
  background: {
    type: "color" | "image";
    value: string;
  };
};

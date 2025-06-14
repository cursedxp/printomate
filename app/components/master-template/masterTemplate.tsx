import ToolBar from "../toolbar/toolBar";
import Frame from "./frame";

interface MasterTemplateProps {
  width: number;
  height: number;
}

export default function MasterTemplate({ width, height }: MasterTemplateProps) {
  return (
    <div className="flex mt-4">
      <ToolBar />
      <Frame width={width} height={height} />
    </div>
  );
}

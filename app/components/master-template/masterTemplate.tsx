import ToolBar from "../toolbar/toolBar";
import Frame from "./frame";
import SizeIndicator from "./sizeIndicator";

interface MasterTemplateProps {
  width: number;
  height: number;
}

export default function MasterTemplate({ width, height }: MasterTemplateProps) {
  return (
    <div className="relative">
      <SizeIndicator width={width} height={height} name="2x3" dpi={300} />
      <div className="flex">
        <ToolBar />
        <Frame width={width} height={height} />
      </div>
    </div>
  );
}

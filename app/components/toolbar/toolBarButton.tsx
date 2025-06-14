interface ToolBarButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  selectedBlock: string | null;
  blockType: string;
}

export default function ToolBarButton({
  icon,
  onClick,
  selectedBlock,
  blockType,
}: ToolBarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-1 rounded-md transition-colors focus:outline-none ${
        selectedBlock === blockType
          ? "bg-white text-black"
          : "hover:bg-white hover:text-black"
      }`}
    >
      {icon}
    </button>
  );
}

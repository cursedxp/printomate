interface ToolBarProps {
  children: React.ReactNode;
  className?: string;
}

export default function ToolBar({ children, className }: ToolBarProps) {
  return (
    <div className={`flex bg-neutral-800 items-center ${className}`}>
      {children}
    </div>
  );
}

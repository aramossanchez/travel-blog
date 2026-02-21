interface TooltipAtomProps {
  children: React.ReactNode;
  x?: number;
  y?: number;
}

export default function TooltipAtom({
  children,
  x = 0,
  y = 0,
}: TooltipAtomProps) {
  return (
    <div
      className="bg-background border-2 border-foreground text-foreground px-4 py-2 rounded-md pointer-events-none"
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      {children}
    </div>
  );
}

import "./loader.css";

interface LoaderAtomProps {
  size?: number;
  color?: string;
}

export default function LoaderAtom({
  size = 50,
  color = "currentColor",
}: LoaderAtomProps) {
  return (
    <div
      className="loader"
      style={
        {
          width: size,
          height: size,
          "--loader-color": color,
        } as React.CSSProperties
      }
    ></div>
  );
}

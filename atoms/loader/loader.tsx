import "./loader.css";

interface LoaderAtomProps {
  size?: number;
}

export default function LoaderAtom({ size = 50 }: LoaderAtomProps) {
  return <div className="loader" style={{ width: size, height: size }}></div>;
}

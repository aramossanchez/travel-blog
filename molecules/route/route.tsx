import LocationIcon from "@/atoms/icons/location";
import Image from "next/image";

interface RouteMoleculeProps {
  image?: string;
  title?: string;
  text?: string;
}

export default function RouteMolecule({
  image = "",
  title = "",
  text = "",
}: RouteMoleculeProps) {
  return (
    <div className="h-fit space-y-4">
      <div className="flex  items-center gap-x-4">
        <LocationIcon />
        <h2>{title}</h2>
      </div>
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full max-h-[200px] sepia-100 hover:sepia-0 duration-300 cursor-pointer rounded-lg object-cover object-center"
      />
      <p className="text_route_molecule">{text}</p>
    </div>
  );
}

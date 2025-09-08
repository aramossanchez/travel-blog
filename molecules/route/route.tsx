import LocationIcon from "@/atoms/icons/location";
import Image from "next/image";
import Link from "next/link";

interface RouteMoleculeProps {
  image?: string;
  title?: string;
  text?: string;
  href?: string;
}

export default function RouteMolecule({
  image = "",
  title = "",
  text = "",
  href = "/route/1234",
}: RouteMoleculeProps) {
  return (
    <div className="h-fit flex flex-col gap-y-4">
      <Link href={href} className="flex items-center gap-x-4">
        <LocationIcon color="var(--primaryColor)" />
        <h2>{title}</h2>
      </Link>
      <Link href={href}>
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full max-h-[200px] sepia-100 hover:sepia-0 duration-300 cursor-pointer border-2 border-primaryColor rounded-lg object-cover object-center"
        />
      </Link>
      <p className="text_route_molecule">{text}</p>
    </div>
  );
}

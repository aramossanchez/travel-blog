import LocationIcon from "@/atoms/icons/location";
import Image from "next/image";
import Link from "next/link";

interface RouteInHomeMoleculeProps {
  id?: string;
  image?: string;
  title?: string;
  text?: string;
  href?: string;
  date?: string;
}

export default function RouteInHomeMolecule({
  id = "",
  image = "",
  title = "",
  text = "",
  href = `/route/${id}`,
  date = "",
}: RouteInHomeMoleculeProps) {
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
          className="w-full max-h-[200px] image-card"
        />
      </Link>
      <p className="text-foregroundSecondary italic">{date}</p>
      <p className="text_route_molecule">{text}</p>
    </div>
  );
}

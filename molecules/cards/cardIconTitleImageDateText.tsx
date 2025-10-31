import LocationIcon from "@/atoms/icons/location";
import Image from "next/image";
import Link from "next/link";

interface CardIconTitleImageDateTextMoleculeProps {
  id?: string;
  href?: string;
  icon?: React.ReactNode;
  title?: string;
  image?: string;
  date?: string;
  text?: string;
}

export default function CardIconTitleImageDateTextMolecule({
  id = "",
  href = `/route/${id}`,
  icon = <LocationIcon color="var(--primaryColor)" />,
  title = "",
  image = "",
  date = "",
  text = "",
}: CardIconTitleImageDateTextMoleculeProps) {
  return (
    <div className="h-fit flex flex-col gap-y-4">
      <Link href={href} className="flex items-center gap-x-4">
        {icon}
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

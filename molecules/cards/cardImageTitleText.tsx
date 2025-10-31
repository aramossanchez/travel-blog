import Image from "next/image";
import Link from "next/link";

interface CardImageTitleTextMoleculeProps {
  image?: string;
  title?: string;
  text?: string;
  href?: string;
}

export default function CardImageTitleTextMolecule({
  image = "",
  title = "",
  text = "",
  href = "/section/1234",
}: CardImageTitleTextMoleculeProps) {
  return (
    <div className="h-fit space-y-4">
      <Link href={href} className="flex flex-col gap-y-4">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full max-h-[400px] image-card"
        />
        <h2>{title}</h2>
      </Link>
      <p>{text}</p>
    </div>
  );
}

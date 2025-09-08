import Image from "next/image";
import Link from "next/link";

interface SectionMoleculeProps {
  image?: string;
  title?: string;
  text?: string;
  href?: string;
}

export default function SectionMolecule({
  image = "",
  title = "",
  text = "",
  href = "/section/1234",
}: SectionMoleculeProps) {
  return (
    <div className="h-fit space-y-4">
      <Link href={href} className="flex flex-col gap-y-4">
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full max-h-[400px] sepia-100 hover:sepia-0 duration-300 cursor-pointer border-2 border-primaryColor rounded-lg object-cover object-center"
        />
        <h2>{title}</h2>
      </Link>
      <p>{text}</p>
    </div>
  );
}

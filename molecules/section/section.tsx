import Image from "next/image";

interface SectionMoleculeProps {
  image?: string;
  title?: string;
  text?: string;
}

export default function SectionMolecule({
  image = "",
  title = "",
  text = "",
}: SectionMoleculeProps) {
  return (
    <div className="h-fit space-y-4">
      <Image
        src={image}
        alt={title}
        width={800}
        height={400}
        className="w-full max-h-[400px] sepia-100 hover:sepia-0 duration-300 cursor-pointer rounded-lg object-cover object-center"
      />
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

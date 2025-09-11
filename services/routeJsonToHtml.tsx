import HrAtom from "@/atoms/hr";
import { ContentBlock, SectionKey } from "@/utils/types";
import Image from "next/image";
import iconSelector from "./iconSelector";

interface RouteJsonToHtmlProps {
  data: ContentBlock;
  sectionType: SectionKey;
}

export default function routeJsonToHtml({
  data,
  sectionType,
}: RouteJsonToHtmlProps) {
  switch (data.type) {
    case "primaryTitle":
      return <h1>{data.text}</h1>;
    case "introduction":
      return <h2>{data.text}</h2>;
    case "title":
      return (
        <header className="space-y-2">
          <div className="flex flex-row items-center gap-x-4">
            {iconSelector({ section: sectionType })}
            <h2>{data.text}</h2>
          </div>
          <HrAtom />
        </header>
      );
    case "paragraph":
      return <p>{data.text}</p>;
    case "image":
      return (
        <div className="space-y-1">
          <Image
            id={data.src}
            src={data.src}
            alt={data.alt}
            width={500}
            height={300}
            className="max-w-[500px] max-h-[300px] sepia-100 hover:sepia-0 duration-300 cursor-pointer border-2 border-primaryColor rounded-lg object-cover object-center"
          />
          <label className="italic" htmlFor={data.src}>
            · {data.label}
          </label>
        </div>
      );
    default:
      break;
  }
  return <div></div>;
}

import HrAtom from "@/atoms/hr";
import { ContentBlock, SectionKey } from "@/utils/types";
import Image from "next/image";
import iconSelector from "./iconSelector";
import Link from "next/link";
import ArrowRightIcon from "@/atoms/icons/arrowRight";

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
    case "image-presentation":
      return (
        <Image
          id={data.src}
          src={data.src}
          alt={data.alt}
          width={1000}
          height={700}
          className="w-full border-2 border-primaryColor rounded-lg object-cover object-center"
        />
      );
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
    case "subtitle":
      return <h3>{data.text}</h3>;
    case "paragraph":
      return <p>{data.text}</p>;
    case "link":
      return (
        <p className="group flex flex-row items-center gap-x-1 w-fit">
          <p className="group-hover:text-primaryColor duration-200 group-hover:pr-3">
            <ArrowRightIcon size={20} />
          </p>
          <Link
            href={data.src}
            target="_blank"
            className="underline hover:text-primaryColor duration-200"
          >
            {data.text}
          </Link>
        </p>
      );
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
    case "carrousel":
      return (
        <div className="grid grid-cols-4 gap-4">
          {data.carrousel.map((image) => {
            return (
              <div key={image.src}>
                <Image
                  id={image.src}
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="min-h-[250px] max-h-[250px] sepia-100 hover:sepia-0 duration-300 cursor-pointer border-2 border-primaryColor rounded-lg object-cover object-center"
                />
                <label className="italic" htmlFor={image.src}>
                  · {image.label}
                </label>
              </div>
            );
          })}
        </div>
      );
    case "video":
      return (
        <div className="space-y-1">
          <iframe
            className="border-2 border-primaryColor rounded-lg overflow-hidden"
            id={data.src}
            width="500"
            height="300"
            src={data.src}
            title={data.alt}
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
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

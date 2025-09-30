import HrAtom from "@/atoms/hr";
import { ContentBlock, SectionKey } from "@/utils/types";
import Image from "next/image";
import iconSelector from "./iconSelector";
import Link from "next/link";
import ArrowRightIcon from "@/atoms/icons/arrowRight";
import ImageModal from "@/molecules/imageModal";
import SliderImages from "@/molecules/sliderImages";
import { Fragment } from "react";

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
    case "published":
      return (
        <div className="flex flex-col italic text-foregroundSecondary">
          <span>Publicado el {data.date}.</span>
          <div>
            <span>Creado por </span>
            {data.authors.map((author: string, index: number) => {
              return (
                <Fragment key={author}>
                  <Link href={`/authors/${author}`} className="underline">
                    {author}
                  </Link>
                  <span>
                    {index === data.authors.length - 2
                      ? " y "
                      : index < data.authors.length - 1
                      ? ", "
                      : "."}
                  </span>
                </Fragment>
              );
            })}
          </div>
        </div>
      );
    case "introduction":
      return <p className="text-lg">{data.text}</p>;
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
      return <ImageModal data={data} maxSize="max-w-[500px] max-h-[300px]" />;
    case "carrousel":
      return (
        <>
          <div className="grid grid-cols-4 gap-4">
            {data.carrousel.map((image) => {
              return (
                <ImageModal
                  key={image.src}
                  data={image}
                  maxSize="min-h-[250px] max-h-[250px]"
                />
              );
            })}
          </div>
          <SliderImages images={data.carrousel} />
        </>
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
    case "separator":
      return <div className="py-2"></div>;
    default:
      break;
  }
  return <div></div>;
}

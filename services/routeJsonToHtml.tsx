import HrAtom from "@/atoms/hr";
import { ContentBlock, SectionKey } from "@/utils/types";
import Image from "next/image";
import iconSelector from "./iconSelector";
import Link from "next/link";
import ImageModal from "@/molecules/imageModal";
import SliderImages from "@/molecules/sliderImages/sliderImages";
import { Fragment } from "react";
import LinkAtom from "@/atoms/link/link";

interface RouteJsonToHtmlProps {
  data: ContentBlock;
  sectionType: SectionKey;
  index?: number;
}

export default function routeJsonToHtml({
  data,
  sectionType,
  index,
}: RouteJsonToHtmlProps) {
  switch (data.type) {
    case "primaryTitle":
      return <h1 key={data.type}>{data.text}</h1>;
    case "published":
      return (
        <div
          key={data.type}
          className="flex flex-col italic text-foregroundSecondary"
        >
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
      return (
        <p key={data.type + "-" + data.text} className="text-lg">
          {data.text}
        </p>
      );
    case "image-presentation":
      return (
        <Image
          key={data.type}
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
        <header key={data.type + "-" + data.text} className="space-y-2">
          <div className="flex flex-row items-center gap-x-4">
            {iconSelector({ string: sectionType })}
            <h2>{data.text}</h2>
          </div>
          <HrAtom />
        </header>
      );
    case "subtitle":
      return <h3 key={data.type + "-" + data.text}>{data.text}</h3>;
    case "paragraph":
      return <p key={data.type + "-" + data.text}>{data.text}</p>;
    case "link":
      return (
        <LinkAtom
          key={data.type + "-" + data.src}
          href={data.src}
          text={data.text}
        />
      );
    case "image":
      return (
        <ImageModal
          key={data.type + "-" + data.alt}
          data={data}
          maxSize="lg:max-w-[500px] lg:max-h-[300px]"
        />
      );
    case "carrousel":
      return (
        <Fragment key={data.type + "-" + index}>
          <div className="grid-cols-4 gap-4 hidden lg:grid">
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
        </Fragment>
      );
    case "video":
      return (
        <div key={data.type + "-" + data.src} className="space-y-1">
          <iframe
            className="border-2 border-primaryColor rounded-lg overflow-hidden lg:min-w-[500px] lg:min-h-[300px] sm:min-h-[400px] min-h-[250px] min-w-full"
            id={data.src}
            width="200"
            height="300%"
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
      return <div key={data.type + "-" + index} className="py-2"></div>;
    default:
      return <div key="no-data-type"></div>;
  }
}

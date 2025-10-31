export type CarouselItem = {
  src: string;
  alt: string;
  label: string;
  id: string;
};

export type Locale = "es" | "en" | "va";

export type CarrouselType = {
  type: "carrousel";
  carrousel: CarouselItem[];
  id: string;
};

export type ContentBlock =
  | { type: "primaryTitle"; text: string }
  | { type: "published"; date: string; authors: string[] }
  | { type: "introduction"; text: string; id: string }
  | { type: "image-presentation"; src: string; alt: string; id: string }
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "paragraph"; text: string; id: string }
  | { type: "link"; src: string; text: string; id: string }
  | { type: "image"; src: string; alt: string; label: string; id: string }
  | { type: "video"; src: string; alt: string; label: string; id: string }
  | CarrouselType
  | { type: "separator" };

export interface Section {
  content: ContentBlock[];
}

export type ContentBlockType =
  | "primaryTitle"
  | "published"
  | "introduction"
  | "image-presentation"
  | "title"
  | "subtitle"
  | "paragraph"
  | "link"
  | "image"
  | "video"
  | "carrousel"
  | "separator";

export type SectionKey =
  | "route"
  | "travel"
  | "freetour"
  | "hiking"
  | "climb"
  | "roller"
  | "sleep"
  | "eat"
  | "return";

export type RouteDataType = { id: string } & {
  [K in SectionKey]?: Section;
};

export type RouteByGetSectionType = {
  id: string;
  route: Section;
} & {
  [K in SectionKey]?: Section;
};

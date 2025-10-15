export type CarouselItem = {
  src: string;
  alt: string;
  label: string;
};

export type Locale = "es" | "en" | "va";

export type ContentBlock =
  | { type: "primaryTitle"; text: string }
  | { type: "published"; date: string; authors: string[] }
  | { type: "introduction"; text: string }
  | { type: "image-presentation"; src: string; alt: string }
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "link"; src: string; text: string }
  | { type: "image"; src: string; alt: string; label: string }
  | { type: "video"; src: string; alt: string; label: string }
  | { type: "carrousel"; carrousel: CarouselItem[] }
  | { type: "separator" };

export interface Section {
  content: ContentBlock[];
}

export type SectionKey =
  | "route"
  | "travel"
  | "sleep"
  | "eat"
  | "climb"
  | "hiking"
  | "roller"
  | "freetour"
  | "return";

export type RouteDataType = { id: string } & {
  [K in SectionKey]: Section;
};

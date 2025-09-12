export type CarouselItem = {
  src: string;
  alt: string;
  label: string;
};

export type ContentBlock =
  | { type: "title"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "primaryTitle"; text: string }
  | { type: "introduction"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt: string; label: string }
  | { type: "carrousel"; carrousel: CarouselItem[] };

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

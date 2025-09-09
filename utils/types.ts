export type ContentBlock =
  | { type: "title"; text: string }
  | { type: "primaryTitle"; text: string }
  | { type: "introduction"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string };

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

export type RouteDataType = { [K in SectionKey]: Section };

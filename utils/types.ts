import { SPAIN_PROVINCES_AND_IDS } from "./constants";

export type CarouselItem = {
  src: string;
  alt: string;
  label: string;
  id: string;
};

export type Locale = "es" | "en" | "va";

export type CarrouselType = {
  type: "carrousel" | "carrousel-videos";
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
  | "carrousel-videos"
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
  | "return"
  | "motorbike"
  | "experience"
  | "videos"
  | "images";

export type RouteDataType = { id: string } & {
  [K in SectionKey]?: Section;
};

export type RouteByGetSectionType = {
  id: string;
  route: Section;
} & {
  [K in SectionKey]?: Section;
};

export type SortedCriteriaType = "dateAsc" | "dateDesc";

export type RouteForHomeType = {
  id: string;
  primaryTitle: string;
  imagePresentation: string;
  introduction: string;
  published: string;
};

export type SpainProvince =
  | "alava"
  | "albacete"
  | "alicante"
  | "almeria"
  | "avila"
  | "badajoz"
  | "islas baleares"
  | "barcelona"
  | "burgos"
  | "caceres"
  | "cadiz"
  | "castellon"
  | "ciudad real"
  | "cordoba"
  | "a coruna"
  | "cuenca"
  | "girona"
  | "granada"
  | "guadalajara"
  | "guipuzcoa"
  | "huelva"
  | "huesca"
  | "jaen"
  | "leon"
  | "lleida"
  | "la rioja"
  | "lugo"
  | "madrid"
  | "malaga"
  | "murcia"
  | "navarra"
  | "ourense"
  | "asturias"
  | "palencia"
  | "las palmas"
  | "pontevedra"
  | "salamanca"
  | "santa cruz de tenerife"
  | "cantabria"
  | "segovia"
  | "sevilla"
  | "soria"
  | "tarragona"
  | "teruel"
  | "toledo"
  | "valencia"
  | "valladolid"
  | "vizcaya"
  | "zamora"
  | "zaragoza";

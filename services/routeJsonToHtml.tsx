import { ContentBlock } from "@/utils/types";

interface RouteJsonToHtmlProps {
  data: ContentBlock;
}

export default function routeJsonToHtml({ data }: RouteJsonToHtmlProps) {
  switch (data.type) {
    case "primaryTitle":
      return <h1>{data.text}</h1>;
    case "introduction":
      return <h2>{data.text}</h2>;
    case "title":
      return <h2>{data.text}</h2>;
    case "paragraph":
      return <p>{data.text}</p>;
    default:
      break;
  }
  return <div></div>;
}

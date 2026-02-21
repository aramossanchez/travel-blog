import { BLOG_NAME } from "@/utils/constants";

export default function TitleOrganism() {
  return (
    <article className="organism">
      <h1 className="w-full text-center pt-20">{BLOG_NAME}</h1>
    </article>
  );
}

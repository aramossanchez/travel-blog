import { useTranslations } from "next-intl";

export default function IntroductionNewBlogOrganism() {
  const t = useTranslations("NewBlog");

  return (
    <article className="organism space-y-16 relative">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <h2 className="text-2xl font-bold">{t("description")}</h2>
    </article>
  );
}

import { useTranslations } from "next-intl";

export default function NewBlogEditorOrganism() {
  const t = useTranslations("NewBlog");

  return (
    <article className="organism space-y-16 relative">
      <p>Aquí va a ir la creación del json de una ruta</p>
    </article>
  );
}

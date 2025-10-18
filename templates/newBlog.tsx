import NewBlogEditorOrganism from "@/organisms/newBlog/newBlogEditor";
import { Locale } from "@/utils/types";

export default async function NewBlogTemplate({ locale }: { locale: Locale }) {
  return (
    <main className="template">
      <NewBlogEditorOrganism />
    </main>
  );
}

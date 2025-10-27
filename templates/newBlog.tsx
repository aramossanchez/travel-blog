import IntroductionNewBlogOrganism from "@/organisms/newBlog/introduction/introduction";
import NewBlogEditorOrganism from "@/organisms/newBlog/newBlogEditor/newBlogEditor";
import { Locale } from "@/utils/types";

export default async function NewBlogTemplate({ locale }: { locale: Locale }) {
  return (
    <main className="template">
      <IntroductionNewBlogOrganism />
      <NewBlogEditorOrganism />
    </main>
  );
}

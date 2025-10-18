import NewBlogTemplate from "@/templates/newBlog";
import { Locale } from "@/utils/types";

export default async function Route({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <NewBlogTemplate locale={locale} />;
}

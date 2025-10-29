import HomeTemplate from "@/templates/home";
import { Locale } from "@/utils/types";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <HomeTemplate locale={locale} />;
}

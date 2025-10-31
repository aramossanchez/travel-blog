import SectionTemplate from "@/templates/section";
import { Locale, SectionKey } from "@/utils/types";

export default async function Route({
  params,
}: {
  params: Promise<{ section: SectionKey; locale: Locale }>;
}) {
  const { section, locale } = await params;

  return <SectionTemplate locale={locale} section={section} />;
}

import RouteTemplate from "@/templates/route";
import { Locale } from "@/utils/types";

export default async function Route({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;

  return <RouteTemplate id={id} locale={locale} />;
}

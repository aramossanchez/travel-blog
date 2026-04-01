import RouteTemplate from "@/templates/route";
import { Locale } from "@/utils/types";

export default async function Route({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;
  const localizedId = id.slice(0, id.length - 2) + locale;
  console.log("localizedId", localizedId);

  return <RouteTemplate id={localizedId} locale={locale} />;
}

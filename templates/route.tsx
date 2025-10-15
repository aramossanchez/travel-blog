import RouteTextOrganism from "@/organisms/route/routeText";
import { getRouteById } from "@/services/getRouteById";
import { Locale } from "@/utils/types";

export default async function RouteTemplate({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const routeData = await getRouteById(id, locale);
  return (
    <main className="template">
      {routeData ? <RouteTextOrganism data={routeData[0]} /> : <></>}
    </main>
  );
}

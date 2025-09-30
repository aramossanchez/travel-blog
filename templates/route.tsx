import RouteTextOrganism from "@/organisms/route/routeText";
import { getRouteById } from "@/services/getRouteById";

export default async function RouteTemplate({ id }: { id: string }) {
  const routeData = await getRouteById(id);
  return (
    <main className="template">
      {routeData ? <RouteTextOrganism data={routeData[0]} /> : <></>}
    </main>
  );
}

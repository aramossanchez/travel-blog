import RouteTextOrganism from "@/organisms/route/routeText";
import { getRouteById } from "@/services/getRouteById";

export default async function RouteTemplate({ id }: { id: string }) {
  console.log("id desde el template", id);
  const routeData = await getRouteById(id);
  console.log(routeData);
  return (
    <main className="template">
      {routeData ? <RouteTextOrganism data={routeData[0]} /> : <></>}
    </main>
  );
}

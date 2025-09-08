import { getRouteById } from "@/services/getRouteById";

export default async function RouteTemplate({ id }: { id: string }) {
  console.log("id desde el template", id);
  const routeData = await getRouteById(id);
  console.log(routeData);
  return (
    <main className="template">
      <h1>Ruta</h1>
    </main>
  );
}

import RouteTemplate from "@/templates/route";

export default async function Route({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <RouteTemplate id={id} />;
}

import RouteTemplate from "@/templates/route";

export default function Route({ params }: { params: { id: string } }) {
  return <RouteTemplate id={params.id} />;
}

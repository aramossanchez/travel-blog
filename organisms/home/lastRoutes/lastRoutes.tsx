import RouteMolecule from "@/molecules/route/route";

export default function LastRoutesOrganism() {
  return (
    <article className="organism space-y-8">
      <h2>Mis últimas Rutas</h2>
      <main className="grid grid-cols-2 gap-8">
        <RouteMolecule />
        <RouteMolecule />
        <RouteMolecule />
        <RouteMolecule />
      </main>
    </article>
  );
}

import HrAtom from "@/atoms/hr";
import RouteMolecule from "@/molecules/route/route";

export default function LastRoutesOrganism() {
  return (
    <article className="organism space-y-8">
      <h2>Mis últimas Rutas</h2>
      <HrAtom />
      <main className="grid grid-cols-3 gap-8">
        <RouteMolecule
          title="Cuenca"
          image="/cuenca.avif"
          text="Visita express a Cuenca, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
        />
        <RouteMolecule
          title="Albacete"
          image="/albacete.webp"
          text="Visita express a Albacete, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
        />
        <RouteMolecule
          title="Villarreal"
          image="/villarreal.jpg"
          text="Visita express a Villarreal, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
        />
        <RouteMolecule
          title="Getafe"
          image="/getafe.webp"
          text="Visita express a Getafe, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
        />
      </main>
    </article>
  );
}

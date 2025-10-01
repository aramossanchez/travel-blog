import HrAtom from "@/atoms/hr";
import RouteInHomeMolecule from "@/molecules/home/routeInHome";

export default function LastRoutesOrganism() {
  return (
    <article className="organism space-y-8">
      <h2>Últimas Rutas</h2>
      <HrAtom />
      <main className="grid grid-cols-3 gap-8">
        <RouteInHomeMolecule
          title="Cuenca"
          image="/cuenca.avif"
          text="Visita express a Cuenca, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
          date="30 de Septiembre de 2025"
        />
        <RouteInHomeMolecule
          title="Albacete"
          image="/albacete.webp"
          text="Visita express a Albacete, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
          date="20 de Septiembre de 2025"
        />
        <RouteInHomeMolecule
          title="Villarreal"
          image="/villarreal.jpg"
          text="Visita express a Villarreal, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
          date="10 de Septiembre de 2025"
        />
        <RouteInHomeMolecule
          title="Getafe"
          image="/getafe.webp"
          text="Visita express a Getafe, pasando por todas sus zonas más características en su zona antigua, y descubriendo su zona nueva. Empieza el viaje saliendo en moto desde Valencia, pasando por la A3 sin tomar ningún desvío. Parada en gasolinera para tomar café y repostar y viajar tranquilo."
          date="1 de Septiembre de 2025"
        />
      </main>
    </article>
  );
}

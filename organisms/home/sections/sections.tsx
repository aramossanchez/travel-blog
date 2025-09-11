import HrAtom from "@/atoms/hr";
import SectionMolecule from "@/molecules/section/section";
import React from "react";

export default function SectionsOrganism() {
  return (
    <article className="organism space-y-8">
      <h2>Secciones</h2>
      <HrAtom />
      <main className="grid grid-cols-2 gap-8">
        <SectionMolecule
          image="/motorbike.webp"
          title="Explorando en moto"
          text="Una guía completa sobre los mejores destinos para viajar en moto, con vídeo completo de la ruta, ruta de google maps, posibles paradas o desvíos, y más."
        />
        <SectionMolecule
          image="/town.avif"
          title="Descubriendo..."
          text="Visitas guiadas por los pueblos y ciudades que visito. Fotos, vídeos, historia, cultura, gastronomía y más."
        />
        <SectionMolecule
          image="/rocodromo.jpeg"
          title="Rocódromos que no te puedes perder"
          text="Listado de todos los rocódromos que he probado en mis viajes. Toda la información sobre tamaño, cafetería, cantidad de rutas, nivel de dificultad, existencia de vías con autoaseguradores, y más."
        />
        <SectionMolecule
          image="/senderismo.jpg"
          title="Senderismo en los mejores parajes"
          text="Una recopilación de las rutas de senderismo más impresionantes que he recorrido, con detalles sobre la dificultad, duración y paisajes."
        />
        <SectionMolecule
          image="/patinar.jpg"
          title="Rutas de patinaje"
          text="Una guía sobre los mejores lugares para patinar, con información sobre lo viable que es el suelo en cada tramo de la ruta, el entorno y consejos para disfrutar al máximo."
        />
        <SectionMolecule
          image="/comida.jpg"
          title="¿Paro a comer aquí o no?"
          text="Mi experiencia y opinión sobre los lugares donde he parado a comer en cada uno de mis viajes y destinos."
        />
        <SectionMolecule
          image="/casa.webp"
          title="Donde paro a dormir"
          text="Los sitios en los que me alojo (siempre sostenibles y nada invasivos contra el pueblo o barrio) y mi experiencia en cada uno de ellos, con todos los detalles."
        />
      </main>
    </article>
  );
}

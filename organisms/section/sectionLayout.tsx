"use client";

import CardIconTitleImageDateTextMolecule from "@/molecules/cards/cardIconTitleImageDateText";
import iconSelector from "@/services/iconSelector";
import { useSectionData } from "@/templates/section/sectionProvider";
import { RouteByGetSectionType, SectionKey } from "@/utils/types";

interface SectionsLayoutOrganismProps {
  section: SectionKey;
}

export default function SectionsLayoutOrganism({
  section,
}: SectionsLayoutOrganismProps) {
  const { sortedRouteData } = useSectionData();
  return (
    <article className="organism space-y-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {sortedRouteData?.map((route: RouteByGetSectionType) => {
          // OBTENER TODOS LOS DATOS NECESARIOS DE LA RUTA PARA RENDERIZAR CORRECTAMENTE LA CARD
          const id = route.id;
          const routeInfo = route.route.content;
          const title = routeInfo.find(
            (block) => block.type === "primaryTitle"
          )?.text;
          const sectionSelected = route[section]?.content;
          const date = routeInfo.find(
            (block) => block.type === "published"
          )?.date;
          if (!sectionSelected) {
            return null;
          }
          // REVISAR SI LA SECCIÓN ELEGIDA TIENE IMAGEN O CARRUSEL. SI NO LO TIENE, USAR LA IMAGEN DE LA SECCIÓN ROUTE
          const image = sectionSelected.find((block) => block.type === "image")
            ? sectionSelected.find((block) => block.type === "image")?.src
            : sectionSelected.find((block) => block.type === "carrousel")
            ? sectionSelected.find((block) => block.type === "carrousel")
                ?.carrousel[0].src
            : routeInfo.find((block) => block.type === "image-presentation")
                ?.src;
          const text = sectionSelected.find(
            (block) => block.type === "paragraph"
          )?.text;

          return (
            <CardIconTitleImageDateTextMolecule
              key={id}
              href={`/route/${id}#${section}`}
              icon={iconSelector({ string: section })}
              title={title}
              image={image}
              text={text}
              date={date}
            />
          );
        })}
      </div>
    </article>
  );
}

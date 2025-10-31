import MotorcycleIcon from "@/atoms/icons/motorcycle";
import CardIconTitleImageDateTextMolecule from "@/molecules/cards/cardIconTitleImageDateText";
import iconSelector from "@/services/iconSelector";
import { RouteByGetSectionType, SectionKey } from "@/utils/types";

interface SectionsLayoutOrganismProps {
  section: SectionKey;
  routesData?: RouteByGetSectionType[];
}

export default function SectionsLayoutOrganism({
  section,
  routesData,
}: SectionsLayoutOrganismProps) {
  console.log(routesData);
  return (
    <article className="organism space-y-4">
      <div className="grid grid-cols-3 gap-6">
        {routesData?.map((route: RouteByGetSectionType) => {
          const id = route.id;
          const routeInfo = route.route.content;
          console.log(routeInfo);
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
              icon={iconSelector({ section: section })}
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

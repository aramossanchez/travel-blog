import ChevronRightIcon from "@/atoms/icons/chevronRight";
import DropdownMolecule from "@/molecules/dropdown";
import SectionInSingleRouteMolecule from "@/molecules/route/sectionInSingleRoute";
import iconSelector from "@/services/iconSelector";
import routeJsonToHtml from "@/services/routeJsonToHtml";
import { RouteDataType, SectionKey } from "@/utils/types";
import Link from "next/link";

interface RouteTextOrganismProps {
  data: RouteDataType;
}

export default function RouteTextOrganism({ data }: RouteTextOrganismProps) {
  const sectionKeys: SectionKey[] = Object.keys(data).filter(
    (key) => key !== "id"
  ) as SectionKey[];

  return (
    <article className="organism space-y-16 relative">
      <DropdownMolecule text="Secciones" dropdownKeys={sectionKeys} icons />
      {sectionKeys.map((key: SectionKey) => {
        if (key === "route") {
          return (
            <header key={`section-${key}`} className="w-full space-y-4">
              {data.route.content.map((data) => {
                return routeJsonToHtml({ data, sectionType: key });
              })}
            </header>
          );
        }
        return (
          <SectionInSingleRouteMolecule
            key={`section-${key}`}
            content={data?.[key].content}
            sectionType={key}
          />
        );
      })}
    </article>
  );
}

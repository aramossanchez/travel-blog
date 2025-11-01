"use client";

import DropdownMolecule from "@/molecules/dropdown";
import SectionInSingleRouteMolecule from "@/molecules/route/sectionInSingleRoute";
import routeJsonToHtml from "@/services/routeJsonToHtml";
import { RouteDataType, SectionKey } from "@/utils/types";
import { useTranslations } from "next-intl";

interface RouteTextOrganismProps {
  data: RouteDataType;
}

export default function RouteTextOrganism({ data }: RouteTextOrganismProps) {
  const t = useTranslations("Route");

  const sectionKeys: SectionKey[] = Object.keys(data).filter(
    (key) => key !== "id"
  ) as SectionKey[];
  return (
    <article className="organism space-y-16 relative">
      <DropdownMolecule
        text={t("Sections")}
        dropdownKeys={sectionKeys}
        icons
        gapInButton="110"
      />
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

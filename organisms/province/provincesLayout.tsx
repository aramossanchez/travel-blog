"use client";

import CardIconTitleImageDateTextMolecule from "@/molecules/cards/cardIconTitleImageDateText";
import iconSelector from "@/services/iconSelector";
import { useProvinceData } from "@/templates/province/provinceProvider";
import { RouteForHomeType, SpainProvince } from "@/utils/types";

interface ProvincesLayoutOrganismProps {
  province: SpainProvince;
}

export default function ProvincesLayoutOrganism({
  province,
}: ProvincesLayoutOrganismProps) {
  const { sortedRouteData } = useProvinceData();
  return (
    <article className="organism space-y-4">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {sortedRouteData?.map((route: RouteForHomeType) => {
          return (
            <CardIconTitleImageDateTextMolecule
              key={route.id}
              href={`/route/${route.id}#${province}`}
              icon={iconSelector({ string: province })}
              title={route.primaryTitle}
              image={route.imagePresentation}
              text={route.introduction}
              date={route.published}
            />
          );
        })}
      </div>
    </article>
  );
}

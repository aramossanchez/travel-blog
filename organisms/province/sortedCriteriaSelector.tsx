"use client";

import DropdownMolecule from "@/molecules/dropdown";
import { useProvinceData } from "@/templates/province/provinceProvider";
import { SortedCriteriaType } from "@/utils/types";

export default function ProvinceSortedCriteriaSelectorOrganism() {
  const { sortedCriteria, setSortedCriteria } = useProvinceData();

  return (
    <article className="organism">
      <DropdownMolecule
        text="Ordenar por"
        dropdownKeys={["dateDesc", "dateAsc"]}
        icons
        gapInButton="80"
        useTranslationsKey="Section"
        onClick={setSortedCriteria}
        selectedValue={sortedCriteria as SortedCriteriaType}
      />
    </article>
  );
}

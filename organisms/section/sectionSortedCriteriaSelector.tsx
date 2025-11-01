"use client";

import DropdownMolecule from "@/molecules/dropdown";
import { useSectionData } from "@/templates/section/sectionProvider";
import { SortedCriteriaType } from "@/utils/types";

export default function SectionSortedCriteriaSelectorOrganism() {
  const { sortedCriteria, setSortedCriteria } = useSectionData();

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

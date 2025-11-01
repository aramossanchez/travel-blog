"use client";

import { RouteByGetSectionType, SortedCriteriaType } from "@/utils/types";
import { createContext, useContext, useMemo, useState } from "react";

type SectionDataCtx = {
  sortedRouteData: RouteByGetSectionType[];
  sortedCriteria: SortedCriteriaType | string;
  setSortedCriteria: React.Dispatch<
    React.SetStateAction<SortedCriteriaType | string>
  >;
};

const SectionDataContext = createContext<SectionDataCtx | null>(null);

export function SectionDataProvider({
  routesDataInitial,
  children,
}: {
  routesDataInitial: RouteByGetSectionType[];
  children: React.ReactNode;
}) {
  const [sortedCriteria, setSortedCriteria] = useState<
    SortedCriteriaType | string
  >("dateDesc");

  const sortedRouteData = useMemo(() => {
    const sortedData = [...routesDataInitial];
    if (sortedCriteria === "dateAsc") {
      sortedData.sort((a, b) => a.id.localeCompare(b.id));
    } else if (sortedCriteria === "dateDesc") {
      sortedData.sort((a, b) => b.id.localeCompare(a.id));
    }
    return sortedData;
  }, [routesDataInitial, sortedCriteria]);

  return (
    <SectionDataContext.Provider
      value={{
        sortedRouteData,
        sortedCriteria,
        setSortedCriteria,
      }}
    >
      {children}
    </SectionDataContext.Provider>
  );
}

export function useSectionData() {
  const ctx = useContext(SectionDataContext);
  if (!ctx) {
    throw new Error(
      "useSectionData debe usarse dentro de <SectionDataProvider>."
    );
  }
  return ctx;
}

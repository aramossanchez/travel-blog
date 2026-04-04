"use client";

import { RouteForHomeType, SortedCriteriaType } from "@/utils/types";
import { createContext, useContext, useMemo, useState } from "react";

type SectionDataCtx = {
  sortedRouteData: RouteForHomeType[];
  sortedCriteria: SortedCriteriaType | string;
  setSortedCriteria: React.Dispatch<
    React.SetStateAction<SortedCriteriaType | string>
  >;
};

const ProvinceDataContext = createContext<SectionDataCtx | null>(null);

export function ProvinceDataProvider({
  routesDataInitial,
  children,
}: {
  routesDataInitial: RouteForHomeType[];
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
    <ProvinceDataContext.Provider
      value={{
        sortedRouteData,
        sortedCriteria,
        setSortedCriteria,
      }}
    >
      {children}
    </ProvinceDataContext.Provider>
  );
}

export function useProvinceData() {
  const ctx = useContext(ProvinceDataContext);
  if (!ctx) {
    throw new Error(
      "useProvinceData debe usarse dentro de <ProvinceDataProvider>.",
    );
  }
  return ctx;
}

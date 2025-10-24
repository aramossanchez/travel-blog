"use client";

import { RouteDataType } from "@/utils/types";
import React, { createContext, useContext, useState } from "react";

type FinalJson = RouteDataType;
type FinalJsonCtx = {
  finalJson: FinalJson;
  setFinalJson: React.Dispatch<React.SetStateAction<FinalJson>>;
};

const FinalJsonContext = createContext<FinalJsonCtx | null>(null);

export function FinalJsonProvider({ children }: { children: React.ReactNode }) {
  const [finalJson, setFinalJson] = useState<FinalJson>(() => ({
    id: Math.random().toString(36).slice(2, 9),
  }));

  return (
    <FinalJsonContext.Provider value={{ finalJson, setFinalJson }}>
      {children}
    </FinalJsonContext.Provider>
  );
}

export function useFinalJson() {
  const ctx = useContext(FinalJsonContext);
  if (!ctx) {
    throw new Error("useFinalJson debe usarse dentro de <FinalJsonProvider>.");
  }
  return ctx;
}

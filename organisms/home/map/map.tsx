import HrAtom from "@/atoms/hr";
import SpainMapMolecule from "@/molecules/spainMap/spainMap";
import { Locale } from "@/utils/types";
import React from "react";

interface MapOrganismProps {
  locale: Locale;
}

export default function MapOrganism({ locale }: MapOrganismProps) {
  return (
    <article className="organism space-y-8">
      <h1>Dónde he estado</h1>
      <HrAtom />
      <div className="w-full flex items-center justify-center">
        <div className="w-full h-full border-4 border-primaryColor rounded-xl overflow-hidden">
          <SpainMapMolecule locale={locale} />
        </div>
      </div>
    </article>
  );
}

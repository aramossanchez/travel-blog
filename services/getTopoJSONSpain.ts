import { feature } from "topojson-client";

export const getTopoJSONSpain = async () => {
  try {
    return fetch(
      "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json",
    )
      .then((r) => r.json())
      .then((world) => {
        // FILTRAR SOLO ESPAÑA
        const spainFeature = feature(
          world,
          world.objects.countries,
        ).features.find((f) => f.properties.name === "Spain");

        // GEOJSON ESPECÍFICO PARA PROVINCIAS DE ESPAÑA
        return fetch(
          "https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/spain-provinces.geojson",
        ).then((r) => r.json());
      })
      .then((data) => {
        return data.features;
      });
  } catch (error) {
    console.error("Error fetching TopoJSON de España:", error);
    return [];
  }
};

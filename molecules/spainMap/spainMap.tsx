"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { getTopoJSONSpain } from "@/services/getTopoJSONSpain";
import "./style.css";
import LoaderAtom from "@/atoms/loader/loader";
import { Locale } from "@/utils/types";
import { getAllProvincesFromRoutes } from "@/services/getAllProvincesFormRoutes";
import { getSimplifiedProvinceName } from "@/services/getSimplifiedProvinceName";
import TooltipAtom from "@/atoms/tooltip/tooltip";
import { getRoutesByProvince } from "@/services/getRoutesByProvinces";

interface SpainMapMoleculeProps {
  locale: Locale;
}

export default function SpainMapMolecule({ locale }: SpainMapMoleculeProps) {
  const svgRef = useRef();
  const [tooltipCoordinates, setTooltipCoordinates] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [provinces, setProvinces] = useState([]);
  const [hoveredProvince, setHoveredProvince] = useState<{
    cod_prov: string;
    name: string;
    cod_ccaa: string;
    cartodb_id: number;
    created_at: string;
    updated_at: string;
  } | null>(null);
  const [visitedProvinces, setVisitedProvinces] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const provincesFromRoutes = await getAllProvincesFromRoutes(locale);
      setVisitedProvinces(provincesFromRoutes);
      const data = await getTopoJSONSpain();
      setProvinces(data);
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (!provinces.length) return;

    const width = 800;
    const height = 400;

    const svg = d3
      .select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`);

    // CENTRAR EL MAPA
    const projection = d3
      .geoMercator()
      .center([-3, 40])
      .scale(2000)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // LIMPIA EL SVG ANTES DE DIBUJAR
    svg.selectAll("*").remove();

    // DIBUJAR PROVINCIAS
    svg
      .selectAll("path")
      .data(provinces)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", (d) => {
        const provinceId = d.properties.cod_prov;
        const simplifiedName = getSimplifiedProvinceName(provinceId);
        const isVisited = visitedProvinces.includes(simplifiedName);
        return isVisited ? "province-visited" : "province";
      })
      .on("mouseenter", async function (event, province) {
        console.log(province.properties);
        setTooltipCoordinates({ x: event.layerX, y: event.layerY });
        setHoveredProvince(province.properties);
        const routes = await getRoutesByProvince(
          getSimplifiedProvinceName(province.properties.cod_prov),
          locale,
        );
        console.log(routes);
      })
      .on("mouseleave", function () {
        setTooltipCoordinates(null);
      });
    // .on("click", (event, d) => {
    //   console.log("Provincia:", d.properties.name);
    // });
  }, [provinces]);

  return (
    <div className="bg-foreground w-full h-full relative">
      {loading ? (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-8">
          <h2 className="text-primaryColor">Cargando mapa...</h2>
          <LoaderAtom size={200} color="var(--primaryColor)" />
        </div>
      ) : (
        <svg ref={svgRef} style={{ width: "100%", height: "100%" }} />
      )}
      {tooltipCoordinates && hoveredProvince && (
        <TooltipAtom x={tooltipCoordinates.x} y={tooltipCoordinates.y}>
          <div className="flex flex-col gap-y-2">
            <span className="font-bold">{hoveredProvince.name}</span>
            {visitedProvinces.includes(
              getSimplifiedProvinceName(hoveredProvince.cod_prov),
            ) ? (
              <span>Ver rutas</span>
            ) : (
              <span>Aun no hay rutas en esta provincia</span>
            )}
          </div>
        </TooltipAtom>
      )}
    </div>
  );
}

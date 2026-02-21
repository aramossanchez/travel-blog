"use client";

import React from "react";
import {
  SPAIN_MAP_VIEWBOX,
  SPAIN_PROVINCES,
  type SpainProvince,
} from "./spainProvinces";

function hasRoute(
  province: SpainProvince,
  provincesWithRoutes: string[],
): boolean {
  return province.normalizedNames.some((norm) =>
    provincesWithRoutes.includes(norm),
  );
}

export default function MapOrganism({
  provincesWithRoutes = [],
}: {
  provincesWithRoutes?: string[];
}) {
  const handleProvinceClick = (provinceName: string) => {
    if (typeof window !== "undefined") {
      alert(provinceName);
    }
  };

  return (
    <article className="organism">
      <div className="w-full flex items-center justify-center">
        <div className="w-full h-[60vh] min-h-[320px] border-4 border-primaryColor rounded-xl overflow-hidden bg-muted/30">
          <svg
            viewBox={SPAIN_MAP_VIEWBOX}
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            {SPAIN_PROVINCES.map((province) => {
              const hasRouteData = hasRoute(province, provincesWithRoutes);
              return (
                <g key={province.name}>
                  {province.paths.map((pathData, idx) => (
                    <path
                      key={`${province.name}-${idx}`}
                      d={pathData}
                      fill={
                        hasRouteData ? "var(--primaryColor)" : "currentColor"
                      }
                      fillOpacity={hasRouteData ? 0.6 : 0.15}
                      stroke="currentColor"
                      strokeWidth={0.5}
                      strokeOpacity={0.4}
                      className="cursor-pointer transition-all duration-200 hover:opacity-80"
                      onClick={() => handleProvinceClick(province.name)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && handleProvinceClick(province.name)
                      }
                      tabIndex={0}
                      role="button"
                      aria-label={province.name}
                    />
                  ))}
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </article>
  );
}

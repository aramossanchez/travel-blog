/**
 * Convierte GeoJSON de provincias de España a paths SVG.
 * Fuente: https://github.com/codeforamerica/click_that_hood (CC BY 4.0)
 * Ejecutar: node scripts/geo-to-svg.mjs
 */

const GEO_URL =
  "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/spain-provinces.geojson";

const BOUNDS = {
  minLon: -9.5,
  maxLon: 4.9,
  minLat: 35.9,
  maxLat: 43.9,
};

const HEIGHT = 400;
const WIDTH = 600;
const SIMPLIFY = 2; // Tomar cada Nth punto (2 = mitad de puntos)

function toSvgCoord(lon, lat) {
  const x = ((lon - BOUNDS.minLon) / (BOUNDS.maxLon - BOUNDS.minLon)) * WIDTH;
  const y =
    (1 - (lat - BOUNDS.minLat) / (BOUNDS.maxLat - BOUNDS.minLat)) * HEIGHT;
  return [x, y];
}

function ringToPath(ring, simplify = 1) {
  const simplified = ring.filter((_, i) => i % simplify === 0);
  if (simplified.length < 2) return "";
  const [first, ...rest] = simplified;
  const [fx, fy] = toSvgCoord(first[0], first[1]);
  let path = `M ${fx.toFixed(2)} ${fy.toFixed(2)}`;
  for (const coord of rest) {
    const [x, y] = toSvgCoord(coord[0], coord[1]);
    path += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  path += " Z";
  return path;
}

function normalizeProvinceName(name) {
  if (!name) return "";
  return name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function getAllNormalizedNames(name) {
  if (!name) return ["unknown"];
  const parts = name
    .split("/")
    .map((p) => p.trim())
    .filter(Boolean);
  const normalized = parts.map(normalizeProvinceName);
  return [...new Set(normalized)];
}

async function main() {
  const res = await fetch(GEO_URL);
  const geojson = await res.json();
  const provinces = [];

  for (const feature of geojson.features) {
    const name = feature.properties?.name || "Unknown";
    const geometry = feature.geometry;

    if (geometry.type !== "MultiPolygon") continue;

    const paths = [];
    for (const polygon of geometry.coordinates) {
      for (let i = 0; i < polygon.length; i++) {
        const ring = polygon[i];
        const path = ringToPath(ring, SIMPLIFY);
        if (path) paths.push(path);
      }
    }

    if (paths.length > 0) {
      provinces.push({
        name,
        normalizedNames: getAllNormalizedNames(name),
        paths,
      });
    }
  }

  const output = `/**
 * Datos de provincias de España para el mapa SVG.
 * Generado por scripts/geo-to-svg.mjs
 * Fuente: codeforamerica/click_that_hood (CC BY 4.0)
 */

export const SPAIN_MAP_VIEWBOX = "0 0 ${WIDTH} ${HEIGHT}";

export interface SpainProvince {
  name: string;
  normalizedNames: string[];
  paths: string[];
}

export const SPAIN_PROVINCES: SpainProvince[] = ${JSON.stringify(
    provinces,
    null,
    2,
  )};
`;

  const fs = await import("fs");
  const path = await import("path");
  const outPath = path.join(
    process.cwd(),
    "organisms",
    "home",
    "map",
    "spainProvinces.ts",
  );
  fs.writeFileSync(outPath, output, "utf-8");
  console.log(`Generated ${outPath} with ${provinces.length} provinces`);
}

main().catch(console.error);

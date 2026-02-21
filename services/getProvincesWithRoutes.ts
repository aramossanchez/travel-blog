import { readdir } from "fs/promises";
import path from "path";

/**
 * Extrae los nombres de provincias desde los archivos JSON en data/{locale}.
 * Formato esperado del nombre: YYYYMMDD-{provincia}-{locale}.json
 * Ejemplo: 20250930-cuenca-es.json -> "cuenca"
 */
export async function getProvincesWithRoutes(
  locale: string
): Promise<string[]> {
  const dirPath = path.join(process.cwd(), "data", locale);
  try {
    const files = await readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));
    const provinces = new Set<string>();

    for (const file of jsonFiles) {
      const match = file.match(/^\d{8}-([a-záéíóúñ\s\-]+)-[a-z]{2}\.json$/i);
      if (match) {
        const province = match[1]
          .toLowerCase()
          .replace(/-/g, " ")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .trim()
          .replace(/\s+/g, " ");
        provinces.add(province);
      }
    }

    return Array.from(provinces);
  } catch {
    return [];
  }
}

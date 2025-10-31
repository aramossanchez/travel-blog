import { Locale, RouteDataType, SectionKey } from "@/utils/types";
import { readdir, readFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ section: SectionKey; locale: Locale }> }
): Promise<Response> {
  const { section, locale } = await params;
  console.log("llego a buscar secciones dentro de todas las rutas", section);
  const dirPath = path.join(process.cwd(), "data", locale);
  try {
    const files = await readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    const data = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const content = await readFile(filePath, "utf8");
        return {
          file,
          content: JSON.parse(content),
        };
      })
    );
    const sortedData = data.sort((a, b) => b.file.localeCompare(a.file));

    // SE FILTRAN LOS RESULTADOS PARA OBTENER SOLO EL CONTENT
    const filteredData = sortedData.map((item) => {
      return item.content;
    });

    // EL RESULTADO ES UN ARRAY CON ARRAYS DENTRO. SE DEBE APLANAR
    const flattenedData = filteredData.flat();

    // SE OBTIENE LA SECCION ROUTE Y LA SECCIÓN SOLICITADA DE CADA RUTA
    const finalData = flattenedData.map((route: RouteDataType) => {
      return {
        id: route.id,
        route: route.route,
        [section]: route[section],
      };
    });

    return Response.json(finalData, { status: 200 });
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === "ENOENT") {
      return Response.json({ error: "Folder not found" }, { status: 404 });
    }
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

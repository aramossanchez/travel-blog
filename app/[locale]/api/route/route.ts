import { Locale, RouteDataType } from "@/utils/types";
import { readdir, readFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; locale: Locale }> },
): Promise<Response> {
  const { locale } = await params;
  const dirPath = path.join(process.cwd(), "data/route", locale);
  try {
    // ESTA FUNCIÓN HAY QUE COMPONETIZARLA, SE USA EN VARIOS SITIOS. VA A PODER RECIBIR EL PARÁMETRO POR EL QUE ORDENAR EL LISTADO
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
      }),
    );
    const sortedData = data.sort((a, b) => b.file.localeCompare(a.file));
    const dataForHome = sortedData
      .map((route: { file: string; content: RouteDataType[] }) => {
        const routeInfo = route.content[0]?.route?.content;
        if (!routeInfo) {
          return null;
        }
        const id = route.content[0].id;
        const title = routeInfo.find(
          (route) => route.type === "primaryTitle",
        )?.text;
        const image = routeInfo.find(
          (route) => route.type === "image-presentation",
        )?.src;
        const text = routeInfo.find(
          (route) => route.type === "introduction",
        )?.text;
        const date = routeInfo.find(
          (route) => route.type === "published",
        )?.date;
        if (!id || !title || !image || !text || !date) {
          return null;
        }
        return {
          id: id,
          primaryTitle: title,
          imagePresentation: image,
          introduction: text,
          published: date,
        };
      })
      .filter(Boolean);

    return Response.json(dataForHome, { status: 200 });
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === "ENOENT") {
      return Response.json({ error: "Folder not found" }, { status: 404 });
    }
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

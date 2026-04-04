import { Locale, RouteDataType } from "@/utils/types";
import { readdir, readFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ province: string; locale: Locale }> },
): Promise<Response> {
  const { province, locale } = await params;
  const dirPath = path.join(process.cwd(), "data/route", locale);
  console.log(dirPath);
  try {
    const files = await readdir(dirPath);
    const jsonFiles = files.filter((file) => file.endsWith(".json"));
    const jsonFilesFromProvince = jsonFiles.filter((file) =>
      file.includes(`-${province}-`),
    );

    const data = await Promise.all(
      jsonFilesFromProvince.map(async (file) => {
        const filePath = path.join(dirPath, file);
        const raw: string = await readFile(filePath, "utf8");
        return JSON.parse(raw);
      }),
    );

    const sortedData = data.sort((a, b) => b.file.localeCompare(a.file));

    // SE APLANA EL ARRAY
    const flattenedSortedData = sortedData.flat();

    const dataForProvinces = flattenedSortedData
      .map((route: RouteDataType) => {
        const id = route.id;
        const routeInfo = route?.route?.content;
        if (!routeInfo) {
          return null;
        }
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

    return Response.json(dataForProvinces, { status: 200 });
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === "ENOENT") {
      return Response.json({ error: "Folder not found" }, { status: 404 });
    }
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

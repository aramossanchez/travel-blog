import { Locale } from "@/utils/types";
import { readdir, readFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; locale: Locale }> }
): Promise<Response> {
  const { locale } = await params;
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

    return Response.json(sortedData, { status: 200 });
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === "ENOENT") {
      return Response.json({ error: "Folder not found" }, { status: 404 });
    }
    console.error(err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

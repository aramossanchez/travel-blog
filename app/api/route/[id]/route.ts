import { readFile } from "fs/promises";
import { NextRequest } from "next/server";
import path from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const filePath = path.join(process.cwd(), "data", `${id}.json`);

  try {
    const raw = await readFile(filePath, "utf8");
    const json = JSON.parse(raw);
    return Response.json(json, { status: 200 });
  } catch (err) {
    const error = err as NodeJS.ErrnoException;
    if (error.code === "ENOENT") {
      return Response.json({ error: "Not found" }, { status: 404 });
    }
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

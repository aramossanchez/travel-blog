"use client";

import Button from "@/atoms/button/button";
import PlusIcon from "@/atoms/icons/plus";
import JsonPrettifyMolecule from "@/molecules/newBlog/jsonPrettify/jsonPrettify";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function NewBlogEditorOrganism() {
  const t = useTranslations("NewBlog");
  const [jsonPrettify, setJsonPrettify] = useState<string[]>([]);

  return (
    <article className="organism space-y-16 relative">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <h2 className="text-2xl font-bold">{t("description")}</h2>
      <section className="w-full h-fit py-4 px-2 rounded-md">
        <div className="w-full flex flex-rows items-center justify-start gap-4">
          <Button
            onClick={() => setJsonPrettify([...jsonPrettify, "route"])}
            state={jsonPrettify.includes("route") ? "disabled" : "default"}
          >
            <Button.Icon>
              <PlusIcon size={20} />
            </Button.Icon>
            <Button.Text>Sección Ruta</Button.Text>
          </Button>
          <Button
            onClick={() => setJsonPrettify([...jsonPrettify, "travel"])}
            state={jsonPrettify.includes("travel") ? "disabled" : "default"}
          >
            <Button.Icon>
              <PlusIcon size={20} />
            </Button.Icon>
            <Button.Text>Sección Viaje de ida</Button.Text>
          </Button>
        </div>
      </section>
      <JsonPrettifyMolecule jsonPrettify={jsonPrettify} />
    </article>
  );
}

import Button from "@/atoms/button/button";
import CopyIcon from "@/atoms/icons/copy";
import EyeIcon from "@/atoms/icons/eye";
import EyeSlashIcon from "@/atoms/icons/eyeSlash";
import React, { useEffect, useState } from "react";
import CreateRouteSectionMolecule from "../createRouteSection/createRouteSection";
import { useFinalJson } from "../../../organisms/newBlog/finalJsonProvider/finalJsonProvider";
import CreateSectionMolecule from "../createSection/createSection";
import { SectionKey } from "@/utils/types";

export default function JsonFormMolecule({
  sectionsInFinalJson,
}: {
  sectionsInFinalJson: SectionKey[];
}) {
  const { finalJson, setFinalJson } = useFinalJson();
  const [showJson, setShowJson] = useState<boolean>(false);

  useEffect(() => {
    if (
      sectionsInFinalJson.includes("route") &&
      !Object.keys(finalJson).find((key) => key === "route")
    ) {
      setFinalJson((prev) => ({
        ...prev,
        route: {
          content: [
            {
              type: "primaryTitle",
              text: "",
            },
            {
              type: "published",
              date: "",
              authors: [],
            },
            {
              type: "image-presentation",
              src: "",
              alt: "",
            },
          ],
        },
      }));
    }
    if (
      sectionsInFinalJson.includes("travel") &&
      !Object.keys(finalJson).find((key) => key === "travel")
    ) {
      setFinalJson((prev) => ({
        ...prev,
        travel: {
          content: [
            {
              type: "title",
              text: "",
            },
          ],
        },
      }));
    }
    if (
      sectionsInFinalJson.includes("freetour") &&
      !Object.keys(finalJson).find((key) => key === "freetour")
    ) {
      setFinalJson((prev) => ({
        ...prev,
        freetour: {
          content: [
            {
              type: "title",
              text: "",
            },
          ],
        },
      }));
    }
  }, [sectionsInFinalJson]);

  return (
    <section className="bg-white w-full border border-foreground rounded-md p-4 space-y-4">
      <div className="flex items-center gap-x-4">
        <h2 className="text-lg font-semibold">Previsualización JSON</h2>
        <Button onClick={() => setShowJson(!showJson)}>
          <Button.Icon>
            {showJson ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
          </Button.Icon>
          <Button.Text>{showJson ? "Ocultar" : "Mostrar"}</Button.Text>
        </Button>
        <Button onClick={() => alert("JSON copiado al portapapeles")}>
          <Button.Icon>
            <CopyIcon size={20} />
          </Button.Icon>
          <Button.Text>Copiar JSON en portapapeles</Button.Text>
        </Button>
      </div>
      {showJson && (
        <pre className="whitespace-pre-wrap text-sm font-mono p-3">
          {JSON.stringify(finalJson, null, 2)}
        </pre>
      )}
      {sectionsInFinalJson.map((section: SectionKey, index: number) => {
        switch (section) {
          case "route":
            return (
              <CreateRouteSectionMolecule
                key={section + "-" + index}
                section={section}
                index={index}
              />
            );
          default:
            return (
              <CreateSectionMolecule
                key={section + "-" + index}
                section={section}
                index={index}
              />
            );
        }
      })}
    </section>
  );
}

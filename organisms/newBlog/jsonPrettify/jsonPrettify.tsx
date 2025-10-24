import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import CopyIcon from "@/atoms/icons/copy";
import EyeIcon from "@/atoms/icons/eye";
import EyeSlashIcon from "@/atoms/icons/eyeSlash";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import React, { useEffect, useState } from "react";
import CreateRouteSectionMolecule from "../../../molecules/newBlog/createRouteSection/createRouteSection";
import { useFinalJson } from "../finalJsonProvider/finalJsonProvider";

export default function JsonPrettifyOrganism({
  jsonPrettify,
}: {
  jsonPrettify: string[];
}) {
  const { finalJson, setFinalJson } = useFinalJson();
  const [showJson, setShowJson] = useState<boolean>(false);

  useEffect(() => {
    if (
      jsonPrettify.includes("route") &&
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
    if (jsonPrettify.includes("travel")) {
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
  }, [jsonPrettify]);

  // useEffect(() => {
  //   console.log(finalJson);
  // }, [finalJson]);

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
      {showJson && <div>{JSON.stringify(finalJson, null, 2)}</div>}
      {jsonPrettify.map((section: string, index: number) => {
        switch (section) {
          case "route":
            return (
              <CreateRouteSectionMolecule
                key={section + "-" + index}
                section={section}
                index={index}
              />
            );
          case "travel":
            return (
              <div
                className="flex flex-col gap-y-4"
                key={section + "-" + index}
              >
                <HrAtom />
                <div className="flex items-center justify-between">
                  <p className="text-xl">Sección {section}</p>
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <TrashIcon size={20} />
                    </Button.Icon>
                    <Button.Text>Quitar sección</Button.Text>
                  </Button>
                </div>
                <HrAtom />
                <div className="flex flex-col gap-4 flex-wrap">
                  <InputAtom
                    id="travel-title"
                    label="Título de la sección Viaje de ida"
                    placeholder="De Valencia a Cuenca"
                  />
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <PlusIcon size={20} />
                    </Button.Icon>
                    <Button.Text>Añadir párrafo</Button.Text>
                  </Button>
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <PlusIcon size={20} />
                    </Button.Icon>
                    <Button.Text>Añadir vídeo</Button.Text>
                  </Button>
                </div>
                <div></div>
              </div>
            );
          default:
            break;
        }
      })}
    </section>
  );
}

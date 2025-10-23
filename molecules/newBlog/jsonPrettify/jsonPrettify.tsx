import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import EyeIcon from "@/atoms/icons/eye";
import EyeSlashIcon from "@/atoms/icons/eyeSlash";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import React, { useEffect, useState } from "react";

export default function JsonPrettifyMolecule({
  jsonPrettify,
}: {
  jsonPrettify: string[];
}) {
  const [finalJson, setFinalJson] = useState({});
  const [showJson, setShowJson] = useState<boolean>(false);

  useEffect(() => {
    console.log(jsonPrettify);
    if (jsonPrettify.includes("route")) {
      setFinalJson({ route: {} });
    }
  }, [jsonPrettify]);

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
      </div>
      {showJson && <div>{JSON.stringify(finalJson, null, 2)}</div>}
      {jsonPrettify.map((section: string, index: number) => {
        switch (section) {
          case "route":
            return (
              <div
                className="flex flex-col gap-y-4"
                key={section + "-" + index}
              >
                <HrAtom />
                <div className="flex items-center gap-x-4">
                  <p className="text-xl">Sección {section}</p>
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <TrashIcon size={20} />
                    </Button.Icon>
                    <Button.Text>Quitar sección</Button.Text>
                  </Button>
                </div>
                <HrAtom />
                <div className="flex items-center gap-4 flex-wrap">
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <PlusIcon size={20} />
                    </Button.Icon>
                    <Button.Text>Añadir primaryTitle (título)</Button.Text>
                  </Button>
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <PlusIcon size={20} />
                    </Button.Icon>
                    <Button.Text>
                      Añadir published (fecha de publicación, formato 30 de
                      Septiembre de 2025)
                    </Button.Text>
                  </Button>
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <PlusIcon size={20} />
                    </Button.Icon>
                    <Button.Text>
                      Añadir image-presentation (imagen de presentación)
                    </Button.Text>
                  </Button>
                  <Button onClick={() => console.log("Agregar algo")}>
                    <Button.Icon>
                      <PlusIcon size={20} />
                    </Button.Icon>
                    <Button.Text>
                      Añadir introduction (texto de introducción)
                    </Button.Text>
                  </Button>
                </div>
                <div></div>
                <HrAtom />
              </div>
            );
          default:
            break;
        }
      })}
    </section>
  );
}

import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import ChevronRightIcon from "@/atoms/icons/chevronRight";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { useState } from "react";

interface CreateRouteSectionProps {
  section: string;
  index: number;
}

export default function CreateRouteSectionMolecule({
  section,
  index,
}: CreateRouteSectionProps) {
  const {
    finalJson,
    addRouteRepeatedSection,
    getRouteFieldToChange,
    setRouteField,
  } = useFinalJson();

  // MOSTRAR U OCULTAR LA SECCIÓN
  const [showContent, setShowContent] = useState<boolean>(true);

  // ESTILOS DEPENDIENTES DE VARIABLES
  const styleBlockRouteSection = showContent ? "max-h-fit" : "max-h-0";
  const styleButtonShowRouteSection = showContent ? "rotate-270" : "rotate-90";

  return (
    <div className="flex flex-col gap-y-4" key={section + "-" + index}>
      <HrAtom />
      {/* TITULO DE LA SECCIÓN */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <p className="text-xl">Sección {section}</p>
          <Button onClick={() => console.log("Agregar algo")}>
            <Button.Icon>
              <TrashIcon size={20} />
            </Button.Icon>
            <Button.Text>Quitar sección</Button.Text>
          </Button>
        </div>
        <Button onClick={() => setShowContent(!showContent)} state="empty">
          <Button.Icon>
            <ChevronRightIcon
              className={`${styleButtonShowRouteSection} transition-transform duration-300`}
              size={20}
            />
          </Button.Icon>
        </Button>
      </div>
      <HrAtom />
      {/* CONTENIDO DE LA SECCIÓN */}
      <div
        className={`flex flex-col gap-4 flex-wrap ${styleBlockRouteSection} overflow-hidden`}
      >
        <InputAtom
          id="route-title"
          label="Título principal"
          placeholder="Cuenca bonita"
          value={getRouteFieldToChange("route", "primaryTitle", "text")}
          onChange={(e) => setRouteField("route", "primaryTitle", "text", e)}
        />
        <InputAtom
          id="route-date"
          label="Fecha en que se ha publicado"
          placeholder="30 de Septiembre de 2025"
          value={getRouteFieldToChange("route", "published", "date")}
          onChange={(e) => setRouteField("route", "published", "date", e)}
        />
        <InputAtom
          id="route-authors"
          label="Autores"
          placeholder="Armando,Mario,Manolo,Carmen"
          value={getRouteFieldToChange("route", "published", "authors")}
          onChange={(e) =>
            setRouteField("route", "published", "authors", e, true)
          }
        />
        <InputAtom
          id="route-src-image"
          label="Imagen de presentación"
          placeholder="/cuenca.avif"
          value={getRouteFieldToChange("route", "image-presentation", "src")}
          onChange={(e) =>
            setRouteField("route", "image-presentation", "src", e)
          }
        />
        <InputAtom
          id="route-alt-image"
          label="Texto alternativo de la imagen"
          placeholder="Foto de Cuenca con casas colgantes"
          value={getRouteFieldToChange("route", "image-presentation", "alt")}
          onChange={(e) =>
            setRouteField("route", "image-presentation", "alt", e)
          }
        />
        {finalJson.route?.content &&
          finalJson.route.content.map(
            (content: { type: string; id?: string }, index: number) => {
              if (content.type === "introduction") {
                return (
                  <div
                    key={`introduction-${index}`}
                    className="flex items-start gap-x-2"
                  >
                    <Button
                      onClick={() => console.log("Eliminar introduction")}
                      state="empty"
                    >
                      <Button.Icon>
                        <TrashIcon size={16} />
                      </Button.Icon>
                    </Button>
                    <InputAtom
                      id="travel-introduction"
                      label={`Texto de introducción`}
                      placeholder="Introduce el texto de introducción"
                      value={getRouteFieldToChange(
                        "route",
                        "introduction",
                        "text",
                        content.id
                      )}
                      onChange={(e) =>
                        setRouteField(
                          "route",
                          "introduction",
                          "text",
                          e,
                          false,
                          content.id
                        )
                      }
                    />
                  </div>
                );
              } else {
                return null;
              }
            }
          )}
        <Button
          onClick={() => addRouteRepeatedSection("route", "introduction")}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir introduction (texto de introducción)</Button.Text>
        </Button>
      </div>
    </div>
  );
}

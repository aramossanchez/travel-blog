import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import ChevronRightIcon from "@/atoms/icons/chevronRight";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { ContentBlock, RouteDataType } from "@/utils/types";
import { useState } from "react";

interface CreateRouteSectionProps {
  section: string;
  index: number;
}

export default function CreateRouteSectionMolecule({
  section,
  index,
}: CreateRouteSectionProps) {
  const { finalJson, setFinalJson } = useFinalJson();

  // MOSTRAR U OCULTAR LA SECCIÓN
  const [showContent, setShowContent] = useState<boolean>(true);

  // AÑADE UNA SECCIÓN DE INTRODUCTION
  const addRouteIntroductionSection = () => {
    setFinalJson((prev) =>
      prev.route
        ? {
            ...prev,
            route: {
              content: [
                ...prev.route.content,
                {
                  type: "introduction",
                  text: "",
                },
              ],
            },
          }
        : prev
    );
  };

  // OBTIENE EL VALOR QUE MOSTRARÁ EL INPUT, DESDE finalJson
  const getRouteFieldToChange = (
    fieldToChange: string,
    fieldKeyToChange: string
  ) => {
    const sectionSelected = finalJson.route?.content.find(
      (section) => section.type === fieldToChange
    );
    if (!sectionSelected) return "";

    if (
      sectionSelected.type === "primaryTitle" &&
      fieldKeyToChange === "text"
    ) {
      return sectionSelected[fieldKeyToChange];
    }
    if (sectionSelected.type === "published") {
      if (fieldKeyToChange === "date") return sectionSelected[fieldKeyToChange];
      if (fieldKeyToChange === "authors")
        return sectionSelected[fieldKeyToChange].join(", ");
    }
    if (sectionSelected.type === "image-presentation") {
      if (fieldKeyToChange === "src") return sectionSelected[fieldKeyToChange];
      if (fieldKeyToChange === "alt") return sectionSelected[fieldKeyToChange];
    }
    if (
      sectionSelected.type === "introduction" &&
      fieldKeyToChange === "text"
    ) {
      return sectionSelected[fieldKeyToChange];
    }
    return "";
  };

  // EDITA EL VALOR DEL CAMPO EN finalJson DESDE EL INPUT
  const setRouteField = (
    fieldToChange: string,
    fieldKeyToChange: string,
    inputValue: string,
    array?: boolean
  ) => {
    setFinalJson((prev: RouteDataType): RouteDataType => {
      if (!prev.route) return prev;

      const updatedContent: ContentBlock[] = prev.route.content.map(
        (block): ContentBlock =>
          block.type === fieldToChange
            ? array
              ? {
                  ...block,
                  [fieldKeyToChange]: inputValue
                    .split(",")
                    .map((string) => string.trim().replace(/^"|"$/g, "")),
                }
              : { ...block, [fieldKeyToChange]: inputValue }
            : block
      );

      return {
        ...prev,
        route: { content: updatedContent },
      };
    });
  };

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
          id="travel-title"
          label="Título principal"
          placeholder="Cuenca bonita"
          value={getRouteFieldToChange("primaryTitle", "text")}
          onChange={(e) => setRouteField("primaryTitle", "text", e)}
        />
        <InputAtom
          id="travel-date"
          label="Fecha en que se ha publicado"
          placeholder="30 de Septiembre de 2025"
          value={getRouteFieldToChange("published", "date")}
          onChange={(e) => setRouteField("published", "date", e)}
        />
        <InputAtom
          id="travel-authors"
          label="Autores"
          placeholder="Armando,Mario,Manolo,Carmen"
          value={getRouteFieldToChange("published", "authors")}
          onChange={(e) => setRouteField("published", "authors", e, true)}
        />
        <InputAtom
          id="travel-src-image"
          label="Imagen de presentación"
          placeholder="/cuenca.avif"
          value={getRouteFieldToChange("image-presentation", "src")}
          onChange={(e) => setRouteField("image-presentation", "src", e)}
        />
        <InputAtom
          id="travel-alt-image"
          label="Texto alternativo de la imagen"
          placeholder="Foto de Cuenca con casas colgantes"
          value={getRouteFieldToChange("image-presentation", "alt")}
          onChange={(e) => setRouteField("image-presentation", "alt", e)}
        />
        {finalJson.route?.content &&
          finalJson.route.content.map(
            (content: { type: string }, index: number) => {
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
                    />
                  </div>
                );
              } else {
                return null;
              }
            }
          )}
        <Button onClick={() => addRouteIntroductionSection()}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir introduction (texto de introducción)</Button.Text>
        </Button>
      </div>
    </div>
  );
}

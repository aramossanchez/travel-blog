import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import ChevronRightIcon from "@/atoms/icons/chevronRight";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { useState } from "react";
import ParagraphContentFormMolecule from "../contentForms/paragraphContentForm";

interface CreateTravelSectionProps {
  section: string;
  index: number;
}

export default function CreateTravelSectionMolecule({
  section,
  index,
}: CreateTravelSectionProps) {
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
          id="travel-title"
          label="Título principal"
          placeholder="De Valencia a Cuenca"
          value={getRouteFieldToChange("travel", "title", "text")}
          onChange={(e) => setRouteField("travel", "title", "text", e)}
        />
        {finalJson.travel?.content &&
          finalJson.travel.content.map(
            (content: { type: string; id?: string }, index: number) => {
              if (content.type === "paragraph") {
                return (
                  <ParagraphContentFormMolecule
                    key={`${section}-paragraph-${index}`}
                    index={index}
                    id={content.id as string}
                    section="travel"
                  />
                );
              } else if (content.type === "video") {
                return (
                  <div key={`video-${index}`} className="flex flex-col gap-y-4">
                    <div className="flex items-start gap-x-2">
                      <Button
                        onClick={() => console.log("Eliminar video")}
                        state="empty"
                      >
                        <Button.Icon>
                          <TrashIcon size={16} />
                        </Button.Icon>
                      </Button>
                      <InputAtom
                        id="travel-video-src"
                        label={`Url EMBED del vídeo de Youtube`}
                        placeholder="https://www.youtube.com/embed/aVK7onxwhgY?si=fMfDJzPfho76D7Rg"
                        value={getRouteFieldToChange(
                          "travel",
                          "video",
                          "src",
                          content.id
                        )}
                        onChange={(e) =>
                          setRouteField(
                            "travel",
                            "video",
                            "src",
                            e,
                            false,
                            content.id
                          )
                        }
                      />
                    </div>
                    <div
                      key={`video-${index}`}
                      className="flex items-start gap-x-2"
                    >
                      <Button
                        onClick={() => console.log("Eliminar video")}
                        state="empty"
                      >
                        <Button.Icon>
                          <TrashIcon size={16} />
                        </Button.Icon>
                      </Button>
                      <InputAtom
                        id="travel-video-alt"
                        label={`Texto alternativo del vídeo`}
                        placeholder="viaje-ida-Cuenca"
                        value={getRouteFieldToChange(
                          "travel",
                          "video",
                          "alt",
                          content.id
                        )}
                        onChange={(e) =>
                          setRouteField(
                            "travel",
                            "video",
                            "alt",
                            e,
                            false,
                            content.id
                          )
                        }
                      />
                    </div>
                    <div
                      key={`video-${index}`}
                      className="flex items-start gap-x-2"
                    >
                      <Button
                        onClick={() => console.log("Eliminar video")}
                        state="empty"
                      >
                        <Button.Icon>
                          <TrashIcon size={16} />
                        </Button.Icon>
                      </Button>
                      <InputAtom
                        id="travel-video"
                        label={`Label del vídeo`}
                        placeholder="Viaje de ida a Cuenca"
                        value={getRouteFieldToChange(
                          "travel",
                          "video",
                          "label",
                          content.id
                        )}
                        onChange={(e) =>
                          setRouteField(
                            "travel",
                            "video",
                            "label",
                            e,
                            false,
                            content.id
                          )
                        }
                      />
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            }
          )}
        <Button onClick={() => addRouteRepeatedSection("travel", "paragraph")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir paragraph (texto de explicación)</Button.Text>
        </Button>
        <Button onClick={() => addRouteRepeatedSection("travel", "video")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir video (video de youtube)</Button.Text>
        </Button>
      </div>
    </div>
  );
}

import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import ChevronRightIcon from "@/atoms/icons/chevronRight";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { useState } from "react";
import ParagraphContentFormMolecule from "../contentForms/paragraphContentForm";

interface CreateFreetourSectionProps {
  section: string;
  index: number;
}

export default function CreateFreetourSectionMolecule({
  section,
  index,
}: CreateFreetourSectionProps) {
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
          id="freetour-title"
          label="Título principal"
          placeholder="De Valencia a Cuenca"
          value={getRouteFieldToChange("freetour", "title", "text")}
          onChange={(e) => setRouteField("freetour", "title", "text", e)}
        />
        {finalJson.freetour?.content &&
          finalJson.freetour.content.map(
            (content: { type: string; id?: string }, index: number) => {
              return (
                <>
                  {content.type === "paragraph" && (
                    <ParagraphContentFormMolecule
                      key={`${section}-paragraph-${index}`}
                      index={index}
                      id={content.id as string}
                      section="freetour"
                    />
                  )}
                  {content.type === "image" && (
                    <div
                      key={`image-${index}`}
                      className="flex flex-col gap-y-4"
                    >
                      <div className="flex items-start gap-x-2">
                        <Button
                          onClick={() => console.log("Eliminar imagen")}
                          state="empty"
                        >
                          <Button.Icon>
                            <TrashIcon size={16} />
                          </Button.Icon>
                        </Button>
                        <InputAtom
                          id="freetour-image-src"
                          label={`Url de la imagen`}
                          placeholder="/cuenca.png"
                          value={getRouteFieldToChange(
                            "freetour",
                            "image",
                            "src",
                            content.id
                          )}
                          onChange={(e) =>
                            setRouteField(
                              "freetour",
                              "image",
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
                          id="freetour-image-alt"
                          label={`Texto alternativo de la imagen`}
                          placeholder="imagen-freetour-Cuenca"
                          value={getRouteFieldToChange(
                            "freetour",
                            "image",
                            "alt",
                            content.id
                          )}
                          onChange={(e) =>
                            setRouteField(
                              "freetour",
                              "image",
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
                          id="freetour-label-image"
                          label={`Label de la imagen`}
                          placeholder="Freetour en Cuenca"
                          value={getRouteFieldToChange(
                            "freetour",
                            "image",
                            "label",
                            content.id
                          )}
                          onChange={(e) =>
                            setRouteField(
                              "freetour",
                              "image",
                              "label",
                              e,
                              false,
                              content.id
                            )
                          }
                        />
                      </div>
                    </div>
                  )}
                  {content.type === "video" && (
                    <div
                      key={`video-${index}`}
                      className="flex flex-col gap-y-4"
                    >
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
                          id="freetour-video-src"
                          label={`Url EMBED del vídeo de Youtube`}
                          placeholder="https://www.youtube.com/embed/aVK7onxwhgY?si=fMfDJzPfho76D7Rg"
                          value={getRouteFieldToChange(
                            "freetour",
                            "video",
                            "src",
                            content.id
                          )}
                          onChange={(e) =>
                            setRouteField(
                              "freetour",
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
                          id="freetour-video-alt"
                          label={`Texto alternativo del vídeo`}
                          placeholder="viaje-ida-Cuenca"
                          value={getRouteFieldToChange(
                            "freetour",
                            "video",
                            "alt",
                            content.id
                          )}
                          onChange={(e) =>
                            setRouteField(
                              "freetour",
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
                          id="freetour-video"
                          label={`Label del vídeo`}
                          placeholder="Viaje de ida a Cuenca"
                          value={getRouteFieldToChange(
                            "freetour",
                            "video",
                            "label",
                            content.id
                          )}
                          onChange={(e) =>
                            setRouteField(
                              "freetour",
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
                  )}
                </>
              );
            }
          )}
        <Button
          onClick={() => addRouteRepeatedSection("freetour", "paragraph")}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir paragraph (texto de explicación)</Button.Text>
        </Button>
        <Button onClick={() => addRouteRepeatedSection("freetour", "video")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir video (video de youtube)</Button.Text>
        </Button>
        <Button onClick={() => addRouteRepeatedSection("freetour", "image")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir imagen (imagen en solitario)</Button.Text>
        </Button>
        <Button
          onClick={() => addRouteRepeatedSection("freetour", "carrousel")}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir imágenes (carrusel de imágenes)</Button.Text>
        </Button>
      </div>
    </div>
  );
}

import Button from "@/atoms/button/button";
import HrAtom from "@/atoms/hr";
import ChevronRightIcon from "@/atoms/icons/chevronRight";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { useState } from "react";
import ParagraphContentFormMolecule from "../contentForms/paragraphContentForm";
import ImageContentFormMolecule from "../contentForms/imageContentForm";
import VideoContentFormMolecule from "../contentForms/videoContentForm";
import CarrouselContentFormMolecule from "../contentForms/carrouselContentForm";
import PlusIcon from "@/atoms/icons/plus";
import { SectionKey } from "@/utils/types";

interface CreateSectionMoleculeProps {
  section: SectionKey;
  index: number;
}

export default function CreateSectionMolecule({
  section,
  index,
}: CreateSectionMoleculeProps) {
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
    <div className="flex flex-col gap-y-4">
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
          id={`${section}-title-${index}`}
          label="Título principal"
          placeholder="De Valencia a Cuenca"
          value={getRouteFieldToChange(section, "title", "text")}
          onChange={(e) => setRouteField(section, "title", "text", e)}
        />
        {finalJson[section]?.content &&
          finalJson[section].content.map(
            (content: { type: string; id?: string }, index: number) => {
              return (
                <>
                  {content.type === "paragraph" && (
                    <ParagraphContentFormMolecule
                      key={`${section}-paragraph-${index}`}
                      index={index}
                      id={content.id as string}
                      section={section}
                    />
                  )}
                  {content.type === "image" && (
                    <ImageContentFormMolecule
                      key={`${section}-image-${index}`}
                      index={index}
                      id={content.id as string}
                      section={section}
                    />
                  )}
                  {content.type === "carrousel" && (
                    <CarrouselContentFormMolecule
                      key={`${section}-carrousel-${index}`}
                      index={index}
                      id={content.id as string}
                      section={section}
                    />
                  )}
                  {content.type === "video" && (
                    <VideoContentFormMolecule
                      key={`${section}-video-${index}`}
                      index={index}
                      id={content.id as string}
                      section={section}
                    />
                  )}
                </>
              );
            }
          )}
        {/* FALTAN LINK, SUBTITLE Y SEPARATOR */}
        <Button onClick={() => addRouteRepeatedSection(section, "paragraph")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir paragraph (texto de explicación)</Button.Text>
        </Button>
        <Button onClick={() => addRouteRepeatedSection(section, "image")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir imagen (imagen en solitario)</Button.Text>
        </Button>
        <Button onClick={() => addRouteRepeatedSection(section, "carrousel")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir carrusel (carrusel de imágenes)</Button.Text>
        </Button>
        <Button onClick={() => addRouteRepeatedSection(section, "video")}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir video (video de youtube)</Button.Text>
        </Button>
      </div>
    </div>
  );
}

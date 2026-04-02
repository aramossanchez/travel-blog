import Button from "@/atoms/button/button";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { CarrouselType, SectionKey } from "@/utils/types";

interface CarrouselVideosContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function CarrouselVideosContentFormMolecule({
  index,
  id,
  section,
}: CarrouselVideosContentFormMoleculeProps) {
  const {
    getRouteFieldToChange,
    setRouteField,
    finalJson,
    addVideoInCarrousel,
  } = useFinalJson();

  const selectedCarrousel = finalJson?.[section]?.content?.find(
    (item) => item.type === "carrousel-videos" && item.id === id,
  ) as CarrouselType;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Button onClick={() => console.log("Eliminar video")} state="empty">
          <Button.Icon>
            <TrashIcon size={16} />
          </Button.Icon>
        </Button>
        <p>Carrusel de videos</p>
        <Button onClick={() => addVideoInCarrousel({ section, id })}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir video al carrusel</Button.Text>
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        {selectedCarrousel &&
          selectedCarrousel?.carrousel !== undefined &&
          selectedCarrousel?.carrousel.length > 0 &&
          selectedCarrousel.carrousel.map((video, index_carrousel) => {
            return (
              <div
                key={`${index}-${id}-carrousel-video-${index_carrousel}`}
                className="flex flex-col gap-y-4 pl-6"
              >
                <div className="flex items-center gap-x-2">
                  <Button
                    onClick={() => console.log("Eliminar video")}
                    state="empty"
                  >
                    <Button.Icon>
                      <TrashIcon size={16} />
                    </Button.Icon>
                  </Button>
                  <p>Video del carrusel # {index_carrousel + 1}</p>
                </div>
                <div className="flex flex-col gap-y-4 pl-6">
                  <InputAtom
                    id={`${section}-carrousel-videos-${video.id}-${index_carrousel}`}
                    label={`Url del video`}
                    placeholder="https://www.youtube.com/embed/aVK7onxwhgY?si=fMfDJzPfho76D7Rg"
                    value={getRouteFieldToChange(
                      section,
                      "carrousel",
                      "src",
                      id,
                      video.id,
                    )}
                    onChange={(e) =>
                      setRouteField(
                        section,
                        "carrousel",
                        "src",
                        e,
                        false,
                        id,
                        video.id,
                      )
                    }
                  />
                  <InputAtom
                    id={`${section}-carrousel-videos-${video.id}-${index_carrousel}`}
                    label={`Alt del video`}
                    placeholder="plato-1-cuenca"
                    value={getRouteFieldToChange(
                      section,
                      "carrousel",
                      "alt",
                      id,
                      video.id,
                    )}
                    onChange={(e) =>
                      setRouteField(
                        section,
                        "carrousel",
                        "alt",
                        e,
                        false,
                        id,
                        video.id,
                      )
                    }
                  />
                  <InputAtom
                    id={`${section}-carrousel-videos-${video.id}-${index_carrousel}`}
                    label={`Label del video`}
                    placeholder="1º video del menú del 1º día en Cuenca"
                    value={getRouteFieldToChange(
                      section,
                      "carrousel",
                      "label",
                      id,
                      video.id,
                    )}
                    onChange={(e) =>
                      setRouteField(
                        section,
                        "carrousel",
                        "label",
                        e,
                        false,
                        id,
                        video.id,
                      )
                    }
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

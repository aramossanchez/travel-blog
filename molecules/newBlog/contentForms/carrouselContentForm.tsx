import Button from "@/atoms/button/button";
import PlusIcon from "@/atoms/icons/plus";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { CarrouselType, SectionKey } from "@/utils/types";
import { Fragment } from "react";

interface CarrouselContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function CarrouselContentFormMolecule({
  index,
  id,
  section,
}: CarrouselContentFormMoleculeProps) {
  const {
    getRouteFieldToChange,
    setRouteField,
    finalJson,
    addImageInCarrousel,
  } = useFinalJson();

  const selectedCarrousel = finalJson?.[section]?.content?.find(
    (item) => item.type === "carrousel" && item.id === id
  ) as CarrouselType;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Button onClick={() => console.log("Eliminar video")} state="empty">
          <Button.Icon>
            <TrashIcon size={16} />
          </Button.Icon>
        </Button>
        <p>Carrusel de imágenes</p>
        <Button onClick={() => addImageInCarrousel({ section, id })}>
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Añadir imagen al carrusel</Button.Text>
        </Button>
      </div>
      <div className="flex flex-col gap-y-4">
        {selectedCarrousel &&
          selectedCarrousel?.carrousel !== undefined &&
          selectedCarrousel?.carrousel.length > 0 &&
          selectedCarrousel.carrousel.map((image, index_carrousel) => {
            return (
              <Fragment
                key={`${index}-${id}-carrousel-image-${index_carrousel}`}
              >
                <InputAtom
                  id={`${section}-carrousel-${image.id}-${index_carrousel}`}
                  label={`Url de la imagen`}
                  placeholder="/cuenca.png"
                  value={getRouteFieldToChange(
                    section,
                    "carrousel",
                    "src",
                    id,
                    image.id
                  )}
                  onChange={(e) =>
                    setRouteField(
                      section,
                      "carrousel",
                      "src",
                      e,
                      false,
                      id,
                      image.id
                    )
                  }
                />
                <InputAtom
                  id={`${section}-carrousel-${image.id}-${index_carrousel}`}
                  label={`Alt de la imagen`}
                  placeholder="plato-1-cuenca"
                  value={getRouteFieldToChange(
                    section,
                    "carrousel",
                    "alt",
                    id,
                    image.id
                  )}
                  onChange={(e) =>
                    setRouteField(
                      section,
                      "carrousel",
                      "alt",
                      e,
                      false,
                      id,
                      image.id
                    )
                  }
                />
                <InputAtom
                  id={`${section}-carrousel-${image.id}-${index_carrousel}`}
                  label={`Label de la imagen`}
                  placeholder="1º plato del menú del 1º día en Cuenca"
                  value={getRouteFieldToChange(
                    section,
                    "carrousel",
                    "label",
                    id,
                    image.id
                  )}
                  onChange={(e) =>
                    setRouteField(
                      section,
                      "carrousel",
                      "label",
                      e,
                      false,
                      id,
                      image.id
                    )
                  }
                />
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

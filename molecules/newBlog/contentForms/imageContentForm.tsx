import Button from "@/atoms/button/button";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { SectionKey } from "@/utils/types";

interface ImageContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function ImageContentFormMolecule({
  index,
  id,
  section,
}: ImageContentFormMoleculeProps) {
  const { getRouteFieldToChange, setRouteField } = useFinalJson();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Button onClick={() => console.log("Eliminar imagen")} state="empty">
          <Button.Icon>
            <TrashIcon size={16} />
          </Button.Icon>
        </Button>
        <p>Imagen</p>
      </div>
      <div className="flex flex-col gap-y-4 pl-6">
        <InputAtom
          id={`${section}-image-src-${id}-${index}`}
          label={`Url de la imagen`}
          placeholder="/cuenca.png"
          value={getRouteFieldToChange(section, "image", "src", id)}
          onChange={(e) => setRouteField(section, "image", "src", e, false, id)}
        />
        <InputAtom
          id={`${section}-image-alt-${id}-${index}`}
          label={`Texto alternativo de la imagen`}
          placeholder={`imagen-${section}-Cuenca`}
          value={getRouteFieldToChange(section, "image", "alt", id)}
          onChange={(e) => setRouteField(section, "image", "alt", e, false, id)}
        />
        <InputAtom
          id={`${section}-image-label-${id}-${index}`}
          label={`Label de la imagen`}
          placeholder={`${section} en Cuenca`}
          value={getRouteFieldToChange(section, "image", "label", id)}
          onChange={(e) =>
            setRouteField(section, "image", "label", e, false, id)
          }
        />
      </div>
    </div>
  );
}

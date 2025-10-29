import Button from "@/atoms/button/button";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { SectionKey } from "@/utils/types";

interface VideoContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function VideoContentFormMolecule({
  index,
  id,
  section,
}: VideoContentFormMoleculeProps) {
  const { getRouteFieldToChange, setRouteField } = useFinalJson();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Button onClick={() => console.log("Eliminar video")} state="empty">
          <Button.Icon>
            <TrashIcon size={16} />
          </Button.Icon>
        </Button>
        <p>Vídeo</p>
      </div>
      <div className="flex flex-col gap-y-4 pl-6">
        <InputAtom
          id={`${section}-video-src-${id}-${index}`}
          label={`Url EMBED del vídeo de Youtube`}
          placeholder="https://www.youtube.com/embed/aVK7onxwhgY?si=fMfDJzPfho76D7Rg"
          value={getRouteFieldToChange(section, "video", "src", id)}
          onChange={(e) => setRouteField(section, "video", "src", e, false, id)}
        />
        <InputAtom
          id={`${section}-video-alt-${id}-${index}`}
          label={`Texto alternativo del vídeo`}
          placeholder="viaje-ida-Cuenca"
          value={getRouteFieldToChange(section, "video", "alt", id)}
          onChange={(e) => setRouteField(section, "video", "alt", e, false, id)}
        />
        <InputAtom
          id={`${section}-video-label-${id}-${index}`}
          label={`Label del vídeo`}
          placeholder="Viaje de ida a Cuenca"
          value={getRouteFieldToChange(section, "video", "label", id)}
          onChange={(e) =>
            setRouteField(section, "video", "label", e, false, id)
          }
        />
      </div>
    </div>
  );
}

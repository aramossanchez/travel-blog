import Button from "@/atoms/button/button";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { SectionKey } from "@/utils/types";

interface SubtitleContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function SubtitleContentFormMolecule({
  index,
  id,
  section,
}: SubtitleContentFormMoleculeProps) {
  const { getRouteFieldToChange, setRouteField } = useFinalJson();

  return (
    <div className="flex items-start gap-x-2">
      <Button onClick={() => console.log("Eliminar subtitle")} state="empty">
        <Button.Icon>
          <TrashIcon size={16} />
        </Button.Icon>
      </Button>
      <InputAtom
        id={`${section}-subtitle-${index}`}
        label={`Subtítulo (texto más grande)`}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        value={getRouteFieldToChange(section, "subtitle", "text", id)}
        onChange={(e) =>
          setRouteField(section, "subtitle", "text", e, false, id)
        }
      />
    </div>
  );
}

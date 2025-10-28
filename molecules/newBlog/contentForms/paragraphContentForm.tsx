import Button from "@/atoms/button/button";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { SectionKey } from "@/utils/types";

interface ParagraphContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function ParagraphContentFormMolecule({
  index,
  id,
  section,
}: ParagraphContentFormMoleculeProps) {
  const { getRouteFieldToChange, setRouteField } = useFinalJson();
  
  return (
    <div className="flex items-start gap-x-2">
      <Button onClick={() => console.log("Eliminar paragraph")} state="empty">
        <Button.Icon>
          <TrashIcon size={16} />
        </Button.Icon>
      </Button>
      <InputAtom
        id={`${section}-paragraph-${index}`}
        label={`Párrafo de texto`}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        value={getRouteFieldToChange(section, "paragraph", "text", id)}
        onChange={(e) =>
          setRouteField(section, "paragraph", "text", e, false, id)
        }
      />
    </div>
  );
}

import Button from "@/atoms/button/button";
import TrashIcon from "@/atoms/icons/trash";
import InputAtom from "@/atoms/input/input";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import { SectionKey } from "@/utils/types";

interface LinkContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function LinkContentFormMolecule({
  index,
  id,
  section,
}: LinkContentFormMoleculeProps) {
  const { getRouteFieldToChange, setRouteField } = useFinalJson();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-x-2">
        <Button onClick={() => console.log("Eliminar link")} state="empty">
          <Button.Icon>
            <TrashIcon size={16} />
          </Button.Icon>
        </Button>
        <p>Link</p>
      </div>
      <div className="flex flex-col gap-y-4 pl-6">
        <InputAtom
          id={`${section}-link-${index}`}
          label={`Url del Link`}
          placeholder="https://example.com"
          value={getRouteFieldToChange(section, "link", "src", id)}
          onChange={(e) => setRouteField(section, "link", "src", e, false, id)}
        />
        <InputAtom
          id={`${section}-link-${index}`}
          label={`Texto del Link`}
          placeholder="Visita la web del restaurante"
          value={getRouteFieldToChange(section, "link", "text", id)}
          onChange={(e) => setRouteField(section, "link", "text", e, false, id)}
        />
      </div>
    </div>
  );
}

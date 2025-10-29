import Button from "@/atoms/button/button";
import TrashIcon from "@/atoms/icons/trash";
import { SectionKey } from "@/utils/types";

interface SeparatorContentFormMoleculeProps {
  index: number;
  id: string;
  section: SectionKey;
}

export default function SeparatorContentFormMolecule({
  index,
  id,
  section,
}: SeparatorContentFormMoleculeProps) {
  return (
    <div className="flex items-center gap-x-2">
      <Button onClick={() => console.log("Eliminar separador")} state="empty">
        <Button.Icon>
          <TrashIcon size={16} />
        </Button.Icon>
      </Button>
      <p>Separador</p>
    </div>
  );
}

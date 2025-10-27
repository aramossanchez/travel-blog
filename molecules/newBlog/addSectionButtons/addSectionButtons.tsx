import Button from "@/atoms/button/button";
import PlusIcon from "@/atoms/icons/plus";

interface AddSectionButtonsMoleculeProps {
  sectionsInFinalJson: string[];
  setSectionsInFinalJson: (sections: string[]) => void;
}

export default function AddSectionButtonsMolecule({
  sectionsInFinalJson,
  setSectionsInFinalJson,
}: AddSectionButtonsMoleculeProps) {
  return (
    <section className="w-full h-fit py-4 px-2 rounded-md">
      <div className="w-full flex flex-rows items-center justify-start gap-4 flex-wrap">
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "route"])
          }
          state={sectionsInFinalJson.includes("route") ? "disabled" : "default"}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Ruta</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "travel"])
          }
          state={
            sectionsInFinalJson.includes("travel") ? "disabled" : "default"
          }
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Viaje de ida</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "freetour"])
          }
          state={
            sectionsInFinalJson.includes("freetour") ? "disabled" : "default"
          }
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Free tour</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "hiking"])
          }
          state={
            sectionsInFinalJson.includes("hiking") ? "disabled" : "default"
          }
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Senderismo</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "climb"])
          }
          state={sectionsInFinalJson.includes("climb") ? "disabled" : "default"}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Escalada</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "roller"])
          }
          state={
            sectionsInFinalJson.includes("roller") ? "disabled" : "default"
          }
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Ruta en patines</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "sleep"])
          }
          state={sectionsInFinalJson.includes("sleep") ? "disabled" : "default"}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Alojamiento</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "eat"])
          }
          state={sectionsInFinalJson.includes("eat") ? "disabled" : "default"}
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Comida</Button.Text>
        </Button>
        <Button
          onClick={() =>
            setSectionsInFinalJson([...sectionsInFinalJson, "return"])
          }
          state={
            sectionsInFinalJson.includes("return") ? "disabled" : "default"
          }
        >
          <Button.Icon>
            <PlusIcon size={20} />
          </Button.Icon>
          <Button.Text>Sección Viaje de vuelta</Button.Text>
        </Button>
      </div>
    </section>
  );
}

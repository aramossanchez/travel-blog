import Button from "@/atoms/button/button";
import CopyIcon from "@/atoms/icons/copy";
import EyeIcon from "@/atoms/icons/eye";
import EyeSlashIcon from "@/atoms/icons/eyeSlash";
import SaveIcon from "@/atoms/icons/save";
import ScreenIcon from "@/atoms/icons/screen";
import { useFinalJson } from "@/organisms/newBlog/finalJsonProvider/finalJsonProvider";
import React, { useState } from "react";

export default function ActionsJsonFormMolecule() {
  const { finalJson } = useFinalJson();
  const [showJson, setShowJson] = useState<boolean>(false);

  const copyJsonToClipboard = () => {
    if (finalJson) {
      const jsonToCopy = JSON.stringify(finalJson, null, 2);
      navigator.clipboard.writeText(jsonToCopy);
      alert("JSON copiado al portapapeles");
    } else {
      alert("No hay JSON para copiar");
    }
  };
  return (
    <div className="w-full h-fit space-y-4">
      <h2 className="text-lg font-semibold">Editor de nueva ruta</h2>
      <div className="flex items-center gap-x-4 flex-wrap">
        <Button onClick={() => {}}>
          <Button.Icon>
            <SaveIcon size={20} />
          </Button.Icon>
          <Button.Text>Guardar JSON</Button.Text>
        </Button>
        <Button onClick={() => {}}>
          <Button.Icon>
            <ScreenIcon size={20} />
          </Button.Icon>
          <Button.Text>Previsualizar JSON</Button.Text>
        </Button>
        <Button onClick={copyJsonToClipboard}>
          <Button.Icon>
            <CopyIcon size={20} />
          </Button.Icon>
          <Button.Text>Copiar JSON en portapapeles</Button.Text>
        </Button>
        <Button onClick={() => setShowJson(!showJson)}>
          <Button.Icon>
            {showJson ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
          </Button.Icon>
          <Button.Text>
            {showJson ? "Ocultar raw del JSON" : "Mostrar raw del JSON"}
          </Button.Text>
        </Button>
      </div>
      {showJson && (
        <pre className="whitespace-pre-wrap text-sm font-mono p-3">
          {JSON.stringify(finalJson, null, 2)}
        </pre>
      )}
    </div>
  );
}

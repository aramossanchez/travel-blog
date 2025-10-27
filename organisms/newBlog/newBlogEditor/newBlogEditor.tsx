"use client";

import JsonFormMolecule from "@/molecules/newBlog/jsonForm/jsonForm";
import { useState } from "react";
import { FinalJsonProvider } from "../finalJsonProvider/finalJsonProvider";
import AddSectionButtonsMolecule from "@/molecules/newBlog/addSectionButtons/addSectionButtons";

export default function NewBlogEditorOrganism() {
  const [sectionsInFinalJson, setSectionsInFinalJson] = useState<string[]>([]);

  return (
    <article className="organism space-y-16 relative">
      <AddSectionButtonsMolecule
        sectionsInFinalJson={sectionsInFinalJson}
        setSectionsInFinalJson={setSectionsInFinalJson}
      />
      <FinalJsonProvider>
        <JsonFormMolecule sectionsInFinalJson={sectionsInFinalJson} />
      </FinalJsonProvider>
    </article>
  );
}

"use client";

import JsonFormMolecule from "@/molecules/newBlog/jsonForm/jsonForm";
import { useState } from "react";
import { FinalJsonProvider } from "../finalJsonProvider/finalJsonProvider";
import { SectionKey } from "@/utils/types";
import ActionsJsonFormMolecule from "@/molecules/newBlog/actionsJsonForm/actionsJsonForm";
import AddSectionButtonsMolecule from "@/molecules/newBlog/addSectionButtons/addSectionButtons";

export default function NewBlogEditorOrganism() {
  const [sectionsInFinalJson, setSectionsInFinalJson] = useState<SectionKey[]>(
    []
  );

  return (
    <article className="organism space-y-16 relative">
      <FinalJsonProvider>
        <section className="bg-white w-full border border-foreground rounded-md px-4 py-8 space-y-4">
          <div className="flex flex-col gap-y-8">
            <ActionsJsonFormMolecule />
            <AddSectionButtonsMolecule
              sectionsInFinalJson={sectionsInFinalJson}
              setSectionsInFinalJson={setSectionsInFinalJson}
            />
            <JsonFormMolecule sectionsInFinalJson={sectionsInFinalJson} />
          </div>
        </section>
      </FinalJsonProvider>
    </article>
  );
}

import { useEffect } from "react";
import CreateRouteSectionMolecule from "../createRouteSection/createRouteSection";
import { useFinalJson } from "../../../organisms/newBlog/finalJsonProvider/finalJsonProvider";
import CreateSectionMolecule from "../createSection/createSection";
import { SectionKey } from "@/utils/types";

export default function JsonFormMolecule({
  sectionsInFinalJson,
}: {
  sectionsInFinalJson: SectionKey[];
}) {
  const { finalJson, setFinalJson } = useFinalJson();

  useEffect(() => {
    sectionsInFinalJson.map((section) => {
      if (section === "route") {
        if (!Object.keys(finalJson).find((key) => key === "route")) {
          setFinalJson((prev) => ({
            ...prev,
            route: {
              content: [
                {
                  type: "primaryTitle",
                  text: "",
                },
                {
                  type: "published",
                  date: "",
                  authors: [],
                },
                {
                  type: "image-presentation",
                  src: "",
                  alt: "",
                },
              ],
            },
          }));
        }
      } else {
        if (!Object.keys(finalJson).find((key) => key === section)) {
          setFinalJson((prev) => ({
            ...prev,
            [section]: {
              content: [
                {
                  type: "title",
                  text: "",
                },
              ],
            },
          }));
        }
      }
    });
  }, [sectionsInFinalJson]);

  return (
    <section className="bg-white w-full space-y-4">
      {sectionsInFinalJson.map((section: SectionKey, index: number) => {
        switch (section) {
          case "route":
            return (
              <CreateRouteSectionMolecule
                key={section + "-" + index}
                section={section}
                index={index}
              />
            );
          default:
            return (
              <CreateSectionMolecule
                key={section + "-" + index}
                section={section}
                index={index}
              />
            );
        }
      })}
    </section>
  );
}

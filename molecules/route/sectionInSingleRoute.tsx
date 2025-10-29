import routeJsonToHtml from "@/services/routeJsonToHtml";
import { ContentBlock, SectionKey } from "@/utils/types";

interface SectionInSingleRouteMoleculeProps {
  content: ContentBlock[];
  sectionType: SectionKey;
}

export default function SectionInSingleRouteMolecule({
  content,
  sectionType,
}: SectionInSingleRouteMoleculeProps) {
  return (
    <section id={sectionType} className="w-full space-y-4">
      {content.map((data, index: number) => {
        return routeJsonToHtml({ data, sectionType, index });
      })}
    </section>
  );
}

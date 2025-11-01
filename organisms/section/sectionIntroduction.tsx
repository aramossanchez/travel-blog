import iconSelector from "@/services/iconSelector";
import { SectionKey } from "@/utils/types";
import { useTranslations } from "next-intl";

interface SectionIntroductionMoleculeProps {
  section: SectionKey;
}

export default function SectionIntroductionMolecule({
  section,
}: SectionIntroductionMoleculeProps) {
  const t_route = useTranslations("Route");
  const t_explanation = useTranslations("Explanation");
  return (
    <article className="organism space-y-8">
      <h1 className="flex items-center gap-x-6">
        {iconSelector({ string: section, size: 70 })}
        {t_route(section)}
      </h1>
      <h2>
        Aquí puedes ver todas las rutas que incluyen la sección{" "}
        {t_route(section)}, y acceder directamente a su contenido.
      </h2>
      <h3>
        En la sección <strong>{t_route(section)}</strong>{" "}
        {t_explanation(section)}
      </h3>
    </article>
  );
}

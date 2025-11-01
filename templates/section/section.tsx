// import RouteTextOrganism from "@/organisms/route/routeText";
import SectionLayoutOrganism from "@/organisms/section/sectionLayout";
import { getRoutesBySection } from "@/services/getRoutesBySection";
import { Locale, SectionKey } from "@/utils/types";
import { SectionDataProvider } from "./sectionProvider";
import SectionSortedCriteriaSelectorOrganism from "@/organisms/section/sectionSortedCriteriaSelector";
import SectionIntroductionMolecule from "@/organisms/section/sectionIntroduction";

export default async function SectionTemplate({
  locale,
  section,
}: {
  locale: Locale;
  section: SectionKey;
}) {
  // USAR LOCALE PARA TRAER LISTADO DE SECCIONES
  const routesData = await getRoutesBySection(locale, section);

  return (
    <main className="template">
      <SectionDataProvider routesDataInitial={routesData}>
        <SectionSortedCriteriaSelectorOrganism />
        <SectionIntroductionMolecule section={section} />
        <SectionLayoutOrganism section={section} />
      </SectionDataProvider>
    </main>
  );
}

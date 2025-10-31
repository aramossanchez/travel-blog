// import RouteTextOrganism from "@/organisms/route/routeText";
import SectionsLayoutOrganism from "@/organisms/sections/sectionsLayout";
import { getRoutesBySection } from "@/services/getRoutesBySection";
import { Locale, SectionKey } from "@/utils/types";

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
      {/* AÑADIR INTRODUCCIÓN */}
      {/* AÑADIR UN SELECTOR PARA ORDENAR LAS CARDS */}
      <SectionsLayoutOrganism section={section} routesData={routesData} />
    </main>
  );
}

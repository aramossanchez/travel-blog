import HrAtom from "@/atoms/hr";
import CardIconTitleImageDateTextMolecule from "@/molecules/cards/cardIconTitleImageDateText";
import { getLastRoutes } from "@/services/getLastRoutes";
import { Locale, RouteForHomeType } from "@/utils/types";

export default async function LastRoutesOrganism({
  locale,
}: {
  locale: Locale;
}) {
  const lastRoutes: RouteForHomeType[] = await getLastRoutes(locale);

  return (
    <article className="organism space-y-8">
      <h1>Últimas Rutas</h1>
      <HrAtom />
      <main className="grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-16">
        {lastRoutes && lastRoutes.length > 0 ? (
          lastRoutes.map((route: RouteForHomeType) => {
            // DATOS PARA MOSTRAR RESUMEN DE CADA RUTA
            return (
              <CardIconTitleImageDateTextMolecule
                key={route.id}
                id={route.id}
                title={route.primaryTitle}
                image={route.imagePresentation}
                text={route.introduction}
                date={route.published}
              />
            );
          })
        ) : (
          <p>No hay rutas disponibles.</p>
        )}
      </main>
    </article>
  );
}

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
      <h2>Últimas Rutas</h2>
      <HrAtom />
      <main className="grid grid-cols-3 gap-8">
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

import HrAtom from "@/atoms/hr";
import CardIconTitleImageDateTextMolecule from "@/molecules/cards/cardIconTitleImageDateText";
import { getLastRoutes } from "@/services/getLastRoutes";
import { Locale, RouteDataType } from "@/utils/types";

export default async function LastRoutesOrganism({
  locale,
}: {
  locale: Locale;
}) {
  const lastRoutes = await getLastRoutes(locale);

  return (
    <article className="organism space-y-8">
      <h2>Últimas Rutas</h2>
      <HrAtom />
      <main className="grid grid-cols-3 gap-8">
        {lastRoutes && lastRoutes.length > 0 ? (
          lastRoutes.map((route: { id: string; content: RouteDataType[] }) => {
            // DATOS PARA MOSTRAR RESUMEN DE CADA RUTA
            const routeInfo = route.content[0].route?.content || [];
            const id = route.content[0].id;
            console.log(id);
            const title = routeInfo.find(
              (item) => item.type === "primaryTitle"
            )?.text;
            const image = routeInfo.find(
              (item) => item.type === "image-presentation"
            )?.src;
            const text = routeInfo.find(
              (item) => item.type === "introduction"
            )?.text;
            const date = routeInfo.find(
              (item) => item.type === "published"
            )?.date;
            return (
              <CardIconTitleImageDateTextMolecule
                key={id}
                id={id}
                title={title}
                image={image}
                text={text}
                date={date}
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

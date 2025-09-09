import routeJsonToHtml from "@/services/routeJsonToHtml";
import { RouteDataType } from "@/utils/types";

interface RouteTextOrganismProps {
  data: RouteDataType;
}

export default function RouteTextOrganism({ data }: RouteTextOrganismProps) {
  console.log(data);
  return (
    <article className="organism space-y-16">
      {data.route && (
        <header className="w-full">
          {data.route.content.map((data) => {
            return routeJsonToHtml({ data });
          })}
        </header>
      )}
      {data.travel && (
        <section className="w-full">
          {data.travel.content.map((data) => {
            return routeJsonToHtml({ data });
          })}
        </section>
      )}
      {/* {data.sleep && (
        <section className="w-full">
          <h2>{data.sleep.title}</h2>
          <p>{data.sleep.paragraph}</p>
        </section>
      )}
      {data.eat && (
        <section className="w-full">
          <h2>{data.eat.title}</h2>
          <p>{data.eat.paragraph}</p>
        </section>
      )}
      {data.climb && (
        <section className="w-full">
          <h2>{data.climb.title}</h2>
          <p>{data.climb.paragraph}</p>
        </section>
      )}
      {data.hiking && (
        <section className="w-full">
          <h2>{data.hiking.title}</h2>
          <p>{data.hiking.paragraph}</p>
        </section>
      )}
      {data.roller && (
        <section className="w-full">
          <h2>{data.roller.title}</h2>
          <p>{data.roller.paragraph}</p>
        </section>
      )}
      {data.freetour && (
        <section className="w-full">
          <h2>{data.freetour.title}</h2>
          <p>{data.freetour.paragraph}</p>
        </section>
      )}
      {data.return && (
        <section className="w-full">
          <h2>{data.return.title}</h2>
          <p>{data.return.paragraph}</p>
        </section>
      )} */}
    </article>
  );
}

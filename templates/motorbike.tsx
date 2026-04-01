import RouteTextOrganism from "@/organisms/route/routeText";
import { getMotorbikeById } from "@/services/getMotorbikeById";
import { Locale } from "@/utils/types";

export default async function MotorbikeTemplate({
  id,
  locale,
}: {
  id: string;
  locale: Locale;
}) {
  const motorbikeData = await getMotorbikeById(id, locale);
  return (
    <main className="template">
      {motorbikeData ? <RouteTextOrganism data={motorbikeData[0]} /> : <></>}
    </main>
  );
}

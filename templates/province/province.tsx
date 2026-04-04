import { Locale, SpainProvince } from "@/utils/types";
import { ProvinceDataProvider } from "./provinceProvider";
import ProvincesIntroductionOrganism from "@/organisms/province/provincesIntroduction";
import { getRoutesByProvince } from "@/services/getRoutesByProvince";
import ProvinceSortedCriteriaSelectorOrganism from "@/organisms/province/sortedCriteriaSelector";
import ProvincesLayoutOrganism from "@/organisms/province/provincesLayout";

export default async function ProvinceTemplate({
  locale,
  province,
}: {
  locale: Locale;
  province: SpainProvince;
}) {
  // USAR LOCALE PARA TRAER LISTADO DE SECCIONES
  const routesData = await getRoutesByProvince(province, locale);

  return (
    <main className="template">
      <ProvinceDataProvider routesDataInitial={routesData}>
        <ProvinceSortedCriteriaSelectorOrganism />
        <ProvincesIntroductionOrganism province={province} />
        <ProvincesLayoutOrganism province={province} />
      </ProvinceDataProvider>
    </main>
  );
}

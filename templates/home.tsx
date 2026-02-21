import { getProvincesWithRoutes } from "@/services/getProvincesWithRoutes";
import LastRoutesOrganism from "@/organisms/home/lastRoutes/lastRoutes";
import MapOrganism from "@/organisms/home/map/map";
import PresentationOrganism from "@/organisms/home/presentation/presentation";
import SectionsOrganism from "@/organisms/home/sections/sections";
import TitleOrganism from "@/organisms/home/title/title";
import { Locale } from "@/utils/types";

export default async function HomeTemplate({ locale }: { locale: Locale }) {
  const provincesWithRoutes = await getProvincesWithRoutes(locale);
  return (
    <main className="template">
      <TitleOrganism />
      <MapOrganism provincesWithRoutes={provincesWithRoutes} />
      <PresentationOrganism />
      <LastRoutesOrganism locale={locale} />
      <SectionsOrganism />
    </main>
  );
}

import LastRoutesOrganism from "@/organisms/home/lastRoutes/lastRoutes";
import MapOrganism from "@/organisms/home/map/map";
import PresentationOrganism from "@/organisms/home/presentation/presentation";
import SectionsOrganism from "@/organisms/home/sections/sections";
import { Locale } from "@/utils/types";

export default function HomeTemplate({ locale }: { locale: Locale }) {
  return (
    <main className="template">
      <MapOrganism />
      <PresentationOrganism />
      <LastRoutesOrganism locale={locale} />
      <SectionsOrganism />
    </main>
  );
}

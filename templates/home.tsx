import LastRoutesOrganism from "@/organisms/home/lastRoutes/lastRoutes";
import MapOrganism from "@/organisms/home/map/map";
import MotorbikeOrganism from "@/organisms/home/motorbike/motorbike";
import SectionsOrganism from "@/organisms/home/sections/sections";
import TitleOrganism from "@/organisms/home/title/title";
import { Locale } from "@/utils/types";

export default function HomeTemplate({ locale }: { locale: Locale }) {
  return (
    <main className="template">
      <TitleOrganism />
      <LastRoutesOrganism locale={locale} />
      <MapOrganism locale={locale} />
      <SectionsOrganism />
      <MotorbikeOrganism />
    </main>
  );
}

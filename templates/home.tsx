import LastRoutesOrganism from "@/organisms/home/lastRoutes/lastRoutes";
import MapOrganism from "@/organisms/home/map/map";
import MotorbikeOrganism from "@/organisms/home/motorbike/motorbike";
import PresentationOrganism from "@/organisms/home/presentation/presentation";
import SectionsOrganism from "@/organisms/home/sections/sections";
import TitleOrganism from "@/organisms/home/title/title";
import { Locale } from "@/utils/types";

export default function HomeTemplate({ locale }: { locale: Locale }) {
  return (
    <main className="template">
      <TitleOrganism />
      {/* <PresentationOrganism /> */}
      <MapOrganism locale={locale} />
      <LastRoutesOrganism locale={locale} />
      <MotorbikeOrganism />
      <SectionsOrganism />
    </main>
  );
}

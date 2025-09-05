import LastRoutesOrganism from "@/organisms/home/lastRoutes/lastRoutes";
import MapOrganism from "@/organisms/home/map/map";
import PresentationOrganism from "@/organisms/home/presentation/presentation";
import SectionsOrganism from "@/organisms/home/sections/sections";

export default function HomeTemplate() {
  return (
    <main className="template">
      <MapOrganism />
      <PresentationOrganism />
      <LastRoutesOrganism />
      <SectionsOrganism />
    </main>
  );
}

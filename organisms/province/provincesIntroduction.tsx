import LocationIcon from "@/atoms/icons/location";
import { SpainProvince } from "@/utils/types";

interface ProvincesIntroductionOrganismProps {
  province: SpainProvince;
}

export default function ProvincesIntroductionOrganism({
  province,
}: ProvincesIntroductionOrganismProps) {
  const capitalizedProvince =
    province.charAt(0).toUpperCase() + province.slice(1);
  return (
    <article className="organism space-y-8">
      <h1 className="flex items-center gap-x-6">
        <LocationIcon size={70} color="var(--primaryColor)" />
        {capitalizedProvince}
      </h1>
      <h2>
        Aquí puedes ver todas las rutas que he hecho por la provincia de{" "}
        {capitalizedProvince}.
      </h2>
    </article>
  );
}

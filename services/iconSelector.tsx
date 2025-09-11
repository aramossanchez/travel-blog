import BedIcon from "@/atoms/icons/bed";
import LookForCityIcon from "@/atoms/icons/lookForCity";
import MotorcycleIcon from "@/atoms/icons/motorcycle";
import { SectionKey } from "@/utils/types";

interface IconSelectorProps {
  section: SectionKey;
}

export default function iconSelector({ section }: IconSelectorProps) {
  const color = "var(--primaryColor)";
  switch (section) {
    case "travel":
      return <MotorcycleIcon color={color} />;
    case "freetour":
      return <LookForCityIcon color={color} />;
    case "sleep":
      return <BedIcon color={color} />;
    default:
      return null;
  }
}

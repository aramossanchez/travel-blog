import BedIcon from "@/atoms/icons/bed";
import ClimberIcon from "@/atoms/icons/climber";
import FoodIcon from "@/atoms/icons/food";
import HikingIcon from "@/atoms/icons/hiking";
import HomeIcon from "@/atoms/icons/home";
import LookForCityIcon from "@/atoms/icons/lookForCity";
import MotorcycleIcon from "@/atoms/icons/motorcycle";
import RollerIcon from "@/atoms/icons/roller";
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
    case "hiking":
      return <HikingIcon color={color} />;
    case "climb":
      return <ClimberIcon color={color} />;
    case "roller":
      return <RollerIcon color={color} />;
    case "eat":
      return <FoodIcon color={color} />;
    case "return":
      return <HomeIcon color={color} />;
    default:
      return null;
  }
}

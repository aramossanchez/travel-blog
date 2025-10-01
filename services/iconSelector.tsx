import BedIcon from "@/atoms/icons/bed";
import ClimberIcon from "@/atoms/icons/climber";
import FoodIcon from "@/atoms/icons/food";
import HikingIcon from "@/atoms/icons/hiking";
import HomeIcon from "@/atoms/icons/home";
import LocationIcon from "@/atoms/icons/location";
import LookForCityIcon from "@/atoms/icons/lookForCity";
import MotorcycleIcon from "@/atoms/icons/motorcycle";
import RollerIcon from "@/atoms/icons/roller";
import { SectionKey } from "@/utils/types";

interface IconSelectorProps {
  section: string;
  size?: number;
}

export default function iconSelector({
  section,
  size = 30,
}: IconSelectorProps) {
  const color = "var(--primaryColor)";
  switch (section) {
    case "route":
      return <LocationIcon size={size} color={color} />;
    case "travel":
      return <MotorcycleIcon size={size} color={color} />;
    case "freetour":
      return <LookForCityIcon size={size} color={color} />;
    case "sleep":
      return <BedIcon size={size} color={color} />;
    case "hiking":
      return <HikingIcon size={size} color={color} />;
    case "climb":
      return <ClimberIcon size={size} color={color} />;
    case "roller":
      return <RollerIcon size={size} color={color} />;
    case "eat":
      return <FoodIcon size={size} color={color} />;
    case "return":
      return <HomeIcon size={size} color={color} />;
    default:
      return null;
  }
}

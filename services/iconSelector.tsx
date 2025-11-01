import ArrowSortUpIcon from "@/atoms/icons/arrowNumbersUp";
import BedIcon from "@/atoms/icons/bed";
import ClimberIcon from "@/atoms/icons/climber";
import FoodIcon from "@/atoms/icons/food";
import HikingIcon from "@/atoms/icons/hiking";
import HomeIcon from "@/atoms/icons/home";
import LocationIcon from "@/atoms/icons/location";
import LookForCityIcon from "@/atoms/icons/lookForCity";
import MotorcycleIcon from "@/atoms/icons/motorcycle";
import RollerIcon from "@/atoms/icons/roller";
import ArrowSortDownIcon from "@/atoms/icons/arrowSortDown";

interface IconSelectorProps {
  string: string;
  size?: number;
  color?: string;
}

export default function iconSelector({
  string,
  size = 30,
  color = "var(--primaryColor)",
}: IconSelectorProps) {
  switch (string) {
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
    case "dateDesc":
      return <ArrowSortDownIcon size={size} color={color} />;
    case "dateAsc":
      return <ArrowSortUpIcon size={size} color={color} />;
    default:
      return null;
  }
}

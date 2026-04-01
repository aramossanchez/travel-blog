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
import NotebookIcon from "@/atoms/icons/notebook";
import VideoCameraIcon from "@/atoms/icons/videoCamera";
import PhotoCameraIcon from "@/atoms/icons/photoCamera";

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
    case "motorbike":
      return <MotorcycleIcon size={size} color={color} />;
    case "experience":
      return <NotebookIcon size={size} color={color} />;
    case "videos":
      return <VideoCameraIcon size={size} color={color} />;
    case "images":
      return <PhotoCameraIcon size={size} color={color} />;
    default:
      return null;
  }
}

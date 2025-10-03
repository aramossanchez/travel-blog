import SpanFlagIcon from "@/atoms/icons/spainFlag";
import UnitedKingdomFlagIcon from "@/atoms/icons/unitedKingdomFlag";
import ValenciaFlagIcon from "@/atoms/icons/valenciaFlag";

export default function HeaderOrganism() {
  return (
    <div className="layout_component">
      <div className="w-full flex justify-between items-center">
        <span>HEADER</span>
        <div className="flex items-center gap-x-4">
          <button className="p-1 bg-background rounded-full cursor-pointer">
            <SpanFlagIcon size={30} />
          </button>
          <ValenciaFlagIcon size={30} />
          <UnitedKingdomFlagIcon size={30} />
        </div>
      </div>
    </div>
  );
}

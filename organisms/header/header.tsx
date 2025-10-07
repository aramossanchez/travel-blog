import LocaleSelectorMolecule from "@/molecules/header/localeSelector";

export default function HeaderOrganism() {
  return (
    <div className="layout_component">
      <div className="w-full flex justify-between items-center">
        <span>HEADER</span>
        <LocaleSelectorMolecule />
      </div>
    </div>
  );
}

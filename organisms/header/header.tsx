import LocaleSelectorMolecule from "@/molecules/header/localeSelector";
import Link from "next/link";

export default function HeaderOrganism() {
  return (
    <div className="layout_component">
      <div className="w-full flex justify-between items-center">
        <Link href="/">
          <span>HEADER</span>
        </Link>
        <LocaleSelectorMolecule />
      </div>
    </div>
  );
}

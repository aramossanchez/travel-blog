import ChevronRightIcon from "@/atoms/icons/chevronRight";
import iconSelector from "@/services/iconSelector";
import Link from "next/link";
import React from "react";

interface DropdownMoleculeProps {
  text: string;
  dropdownKeys: string[];
  icons?: boolean;
}

export default function DropdownMolecule({
  text,
  dropdownKeys,
  icons = false,
}: DropdownMoleculeProps) {
  return (
    <section className="sticky top-0 w-full flex justify-end">
      <div className="flex flex-col items-end gap-y-2 w-fit relative">
        <div className="bg-foreground text-background px-4 py-2 rounded-md flex flex-row items-center gap-x-10 cursor-pointer">
          <span>{text}</span>
          <ChevronRightIcon
            size={20}
            color="var(--background)"
            className="rotate-90"
          />
        </div>
        <div className="absolute flex flex-col w-full rounded-md overflow-hidden top-[120%]">
          {dropdownKeys.map((key: string) => {
            return (
              <>
                <Link
                  href={`#${key}`}
                  key={`footer-${key}`}
                  className="bg-foreground text-background hover:bg-foregroundSecondary px-4 py-2 flex items-center gap-x-4"
                >
                  {icons && iconSelector({ section: key, size: 20 })}
                  <span className="capitalize">{key}</span>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import ChevronRightIcon from "@/atoms/icons/chevronRight";
import iconSelector from "@/services/iconSelector";
import Link from "next/link";
import React, { useState } from "react";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const iconButtonStyle = isOpen ? "rotate-270" : "rotate-90";
  const dropdownStyle = isOpen
    ? "top-[120%] opacity-100 pointer-events-auto max-h-96"
    : "top-[80%] opacity-0 pointer-events-none max-h-0";

  return (
    <section className="sticky top-0 w-full flex justify-end z-50">
      <div className="flex flex-col items-end gap-y-2 w-fit relative">
        <button
          className="text-background px-4 py-2 rounded-md flex flex-row items-center gap-x-10 cursor-pointer bg-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{text}</span>
          <ChevronRightIcon
            size={20}
            color="var(--background)"
            className={`${iconButtonStyle} transition-transform duration-300`}
          />
        </button>
        <div
          className={`${dropdownStyle} absolute flex flex-col w-full rounded-md overflow-hidden duration-300 transition-all`}
        >
          {dropdownKeys.map((key: string) => {
            return (
              <>
                <Link
                  href={`#${key}`}
                  key={`footer-${key}`}
                  className="bg-foreground text-background hover:bg-foregroundSecondary px-4 flex items-center gap-x-4 py-2"
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

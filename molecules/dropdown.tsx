"use client";

import ChevronRightIcon from "@/atoms/icons/chevronRight";
import { useClickOutside } from "@/hooks/useClickOutside";
import iconSelector from "@/services/iconSelector";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Fragment, useRef, useState } from "react";

interface DropdownMoleculeProps {
  text: string;
  dropdownKeys: string[];
  icons?: boolean;
  gapInButton?: string;
  useTranslationsKey?: string;
  onClick?: (value: string) => void;
  selectedValue?: string;
}

export default function DropdownMolecule({
  text,
  dropdownKeys,
  icons = false,
  gapInButton = "20",
  useTranslationsKey = "Route",
  // SI EXISTE onClick TIENE QUE EXISTIR selectedValue. ESTO DETERMINA EL CAMBIO DE FUNCIONAMIENTO DEL DROPDOWN, QUE PASA A CONTROLAR UN STATE (SOLO PUEDE ELEGIRSE UNA OPCIÓN)
  onClick,
  selectedValue,
}: DropdownMoleculeProps) {
  const t = useTranslations(useTranslationsKey);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const iconButtonStyle = isOpen ? "rotate-270" : "rotate-90";
  const dropdownStyle = isOpen
    ? "top-[120%] opacity-100 pointer-events-auto max-h-96"
    : "top-[80%] opacity-0 pointer-events-none max-h-0";
  const buttonSelectedStyle = (key: string) => {
    if (selectedValue === key) {
      return "bg-foregroundSecondary pointer-events-none";
    }
    return "bg-foreground";
  };

  return (
    <section className="sticky top-0 w-full flex justify-end z-50">
      <div
        className="flex flex-col items-end gap-y-2 w-fit relative"
        ref={dropdownRef}
      >
        <button
          className="text-background px-4 py-2 rounded-md flex flex-row items-center cursor-pointer bg-foreground"
          style={{ gap: `${gapInButton}px` }}
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
              <Fragment key={`footer-${key}`}>
                {/* BOTONES PARA SELECCIONAR UNA U OTRA OPCIÓN */}
                {onClick ? (
                  <button
                    onClick={() => {
                      onClick(key);
                      setIsOpen(false);
                    }}
                    className={`${buttonSelectedStyle(
                      key
                    )} text-background hover:bg-foregroundSecondary px-4 flex items-center gap-x-4 py-2 w-full text-left cursor-pointer`}
                  >
                    {icons && iconSelector({ string: key, size: 20 })}
                    <p className="whitespace-nowrap">{t(key)}</p>
                  </button>
                ) : (
                  // BOTONES QUE SIRVEN PARA SER LINK
                  <Link
                    href={`#${key}`}
                    className="bg-foreground text-background hover:bg-foregroundSecondary px-4 flex items-center gap-x-4 py-2"
                  >
                    {icons && iconSelector({ string: key, size: 20 })}
                    <p className="whitespace-nowrap">{t(key)}</p>
                  </Link>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

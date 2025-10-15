"use client";

import SpanFlagIcon from "@/atoms/icons/spainFlag";
import UnitedKingdomFlagIcon from "@/atoms/icons/unitedKingdomFlag";
import ValenciaFlagIcon from "@/atoms/icons/valenciaFlag";
import LoaderAtom from "@/atoms/loader/loader";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LocaleSelectorMolecule() {
  const locale = useLocale();
  const pathName = usePathname();
  const router = useRouter();

  const [localeMenuOpen, setLocaleMenuOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const locales = [
    { icon: <SpanFlagIcon size={30} />, locale: "es" },
    { icon: <ValenciaFlagIcon size={30} />, locale: "va" },
    { icon: <UnitedKingdomFlagIcon size={30} />, locale: "en" },
  ];

  const selectNewLocale = (newLocale: string) => {
    setLoading(true);
    setLocaleMenuOpen(!localeMenuOpen);
    const newPathname = pathName.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  const styleMenu = localeMenuOpen
    ? "max-w-96 right-[100%]"
    : "opacity-0 overflow-hidden pointer-events-none";

  const styleButton = localeMenuOpen ? "rounded-l-none" : "";

  return (
    <div className="flex items-center relative">
      <div
        className={`bg-background flex items-center gap-x-2 rounded-l-full px-2 max-w-0 absolute right-0 ${styleMenu} transition-all duration-200`}
      >
        {locales
          .filter((localeItem) => localeItem.locale !== locale)
          .map((localeItem) => (
            <button
              key={localeItem.locale}
              className="p-1 bg-background rounded-full cursor-pointer hover:bg-foreground/50 transition-all duration-300"
              onClick={() => {
                selectNewLocale(localeItem.locale);
              }}
            >
              {localeItem.icon}
            </button>
          ))}
      </div>
      <button
        className={`${styleButton} py-1 bg-background cursor-pointer px-2 rounded-full z-10 transition-all duration-200`}
        onClick={() => setLocaleMenuOpen(!localeMenuOpen)}
      >
        {loading ? (
          <LoaderAtom size={30} />
        ) : (
          locales.filter((localeItem) => localeItem.locale === locale)[0].icon
        )}
      </button>
    </div>
  );
}

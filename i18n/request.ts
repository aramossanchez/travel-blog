import { Locale } from "@/utils/types";
import { getRequestConfig } from "next-intl/server";

const defaultLocale = "es" as const;

export default getRequestConfig(async ({ locale }) => {
  const validLocale = (locale ?? defaultLocale) as Locale;
  return {
    locale: validLocale,
    messages: (await import(`../messages/${validLocale}.json`)).default,
  };
});

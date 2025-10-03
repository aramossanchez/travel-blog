import { getRequestConfig } from "next-intl/server";

const defaultLocale = "es" as const;

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale ?? defaultLocale;
  const messages = (await import(`../messages/${validLocale}.json`)).default;

  return {
    locale: validLocale,
    messages,
  };
});

import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en", "va"],
  defaultLocale: "es",
  localePrefix: "always",
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};

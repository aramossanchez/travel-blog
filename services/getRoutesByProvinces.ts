import { Locale } from "@/utils/types";

export const getRoutesByProvince = async (province: string, locale: Locale) => {
  const response = await fetch(
    `http://localhost:3000/${locale}/api/route/provinces/${province}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch routes for the province");
  }
  return response.json();
};

import { Locale } from "@/utils/types";

export const getRouteById = async (id: string, locale: Locale) => {
  const response = await fetch(
    `http://localhost:3000/${locale}/api/route/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch route data");
  }
  return response.json();
};

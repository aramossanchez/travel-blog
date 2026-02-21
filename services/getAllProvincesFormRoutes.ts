import { Locale } from "@/utils/types";

export const getAllProvincesFromRoutes = async (locale: Locale) => {
  const response = await fetch(
    `http://localhost:3000/${locale}/api/route/provinces`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch all provinces from routes");
  }
  return response.json();
};

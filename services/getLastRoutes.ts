import { Locale } from "@/utils/types";

export const getLastRoutes = async (locale: Locale) => {
  const response = await fetch(`http://localhost:3000/${locale}/api/route/`);
  if (!response.ok) {
    throw new Error("Failed to fetch last routes data");
  }
  return response.json();
};

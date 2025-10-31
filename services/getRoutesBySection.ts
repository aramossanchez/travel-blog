import { Locale, RouteByGetSectionType, SectionKey } from "@/utils/types";

export const getRoutesBySection = async (
  locale: Locale,
  section: SectionKey
): Promise<RouteByGetSectionType[]> => {
  const response = await fetch(
    `http://localhost:3000/${locale}/api/route/section/${section}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch last routes data");
  }
  return response.json();
};

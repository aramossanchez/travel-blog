import { Locale } from "@/utils/types";

export const getMotorbikeById = async (id: string, locale: Locale) => {
  const response = await fetch(
    `http://localhost:3000/${locale}/api/motorbike/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch motorbike data");
  }
  return response.json();
};

import { SPAIN_PROVINCES_AND_IDS } from "@/utils/constants";

export const getSimplifiedProvinceName = (provinceId: string): string => {
  const provinceFromConstant = SPAIN_PROVINCES_AND_IDS.find(
    (province) => province.id === provinceId,
  )?.name;
  const simplifiedName = provinceFromConstant
    ?.toLowerCase()
    ?.normalize("NFD")
    ?.replace(/[\u0300-\u036f]/g, "")
    ?.replace(/ /g, "");
  return simplifiedName || "";
};

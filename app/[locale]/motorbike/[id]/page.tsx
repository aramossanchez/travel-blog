import MotorbikeTemplate from "@/templates/motorbike";
import { Locale } from "@/utils/types";

export default async function Motorbike({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;
  const localizedId = id + "-" + locale;

  return <MotorbikeTemplate id={localizedId} locale={locale} />;
}

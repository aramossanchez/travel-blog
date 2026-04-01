import MotorbikeTemplate from "@/templates/motorbike";
import { Locale } from "@/utils/types";

export default async function Motorbike({
  params,
}: {
  params: Promise<{ id: string; locale: Locale }>;
}) {
  const { id, locale } = await params;
  console.log("ID Y LOCALE", id, locale);
  const localizedId = id + "-" + locale;
  console.log("localizedId", localizedId);

  return <MotorbikeTemplate id={localizedId} locale={locale} />;
}

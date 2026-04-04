import ProvinceTemplate from "@/templates/province/province";
import { Locale, SpainProvince } from "@/utils/types";

export default async function Route({
  params,
}: {
  params: Promise<{ province: SpainProvince; locale: Locale }>;
}) {
  const { province, locale } = await params;

  return <ProvinceTemplate locale={locale} province={province} />;
}

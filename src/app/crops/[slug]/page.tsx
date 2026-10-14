import { notFound } from "next/navigation";
import { CROP_GUIDES, getCropGuide } from "@/data/cropGuides";
import CropGuideDetail from "@/components/CropGuideDetail";

export function generateStaticParams() {
  return CROP_GUIDES.map((c) => ({ slug: c.slug }));
}

export default async function CropGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getCropGuide(slug);
  if (!guide) notFound();

  return <CropGuideDetail guide={guide} />;
}

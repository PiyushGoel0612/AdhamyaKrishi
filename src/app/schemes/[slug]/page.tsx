import { notFound } from "next/navigation";
import { SCHEMES, getScheme } from "@/data/schemes";
import SchemeDetail from "@/components/SchemeDetail";

export function generateStaticParams() {
  return SCHEMES.map((s) => ({ slug: s.slug }));
}

export default async function SchemePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scheme = getScheme(slug);
  if (!scheme) notFound();

  return <SchemeDetail scheme={scheme} />;
}

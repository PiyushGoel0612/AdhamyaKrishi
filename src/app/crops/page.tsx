"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CROP_GUIDES } from "@/data/cropGuides";
import { Container, Notice, PageHeader } from "@/components/ui";
import CropMark from "@/components/CropMark";

export default function CropsPage() {
  const { t, L } = useLang();

  return (
    <>
      <PageHeader title={t("cropsTitle")} intro={t("cropsIntro")} />

      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CROP_GUIDES.map((c) => (
            <Link
              key={c.slug}
              href={`/crops/${c.slug}`}
              className="flex flex-col rounded-[--radius-card] border border-line bg-surface p-5 transition-colors hover:border-leaf-200 hover:bg-leaf-50/40"
            >
              <CropMark slug={c.slug} />
              <h2 className="mt-3 text-[1.3rem] font-bold leading-snug text-ink">
                {L(c.name)}
              </h2>
              {c.botanical && (
                <p className="mt-0.5 text-[0.88rem] italic text-ink-faint">
                  {c.botanical}
                </p>
              )}
              <p className="mt-2.5 flex-1 leading-relaxed text-ink-soft">
                {L(c.gist)}
              </p>
              <span className="mt-4 font-semibold text-leaf-700">
                {t("readMore")} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Notice>{t("sourceNotice")}</Notice>
        </div>
      </Container>
    </>
  );
}

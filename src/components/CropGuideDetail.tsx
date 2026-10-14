"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { otherCropGuides } from "@/data/cropGuides";
import { Notice } from "@/components/ui";
import Blocks from "@/components/Blocks";
import CropMark from "@/components/CropMark";
import type { CropGuide } from "@/lib/types";

export default function CropGuideDetail({ guide }: { guide: CropGuide }) {
  const { t, L } = useLang();
  const others = otherCropGuides(guide.slug);

  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-9">
          <Link
            href="/crops"
            className="text-[0.95rem] font-semibold text-leaf-700 underline underline-offset-2"
          >
            ← {t("backToCrops")}
          </Link>

          <div className="mt-5 flex items-start gap-4">
            <CropMark slug={guide.slug} size={52} />
            <div className="min-w-0">
              <h1 className="text-[2rem] font-bold leading-tight text-ink sm:text-[2.4rem]">
                {L(guide.name)}
              </h1>
              {guide.botanical && (
                <p className="mt-1 text-[0.95rem] italic text-ink-faint">
                  {guide.botanical}
                </p>
              )}
            </div>
          </div>

          <p className="mt-4 text-[1.1rem] leading-relaxed text-ink-soft">
            {L(guide.gist)}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-9">
        <Notice>{t("sourceNotice")}</Notice>

        {/* A twelve-section page needs a way in. */}
        <nav className="mt-7 rounded-[--radius-card] border border-line bg-surface-sunk p-5">
          <h2 className="text-[0.85rem] font-bold uppercase tracking-wide text-ink-faint">
            {t("onThisPage")}
          </h2>
          <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {guide.sections.map((s, i) => (
              <li key={s.id} className="flex gap-2">
                <span className="text-ink-faint tabular">{i + 1}.</span>
                <a
                  href={`#${s.id}`}
                  className="text-leaf-700 underline underline-offset-2 hover:text-leaf-800"
                >
                  {L(s.title)}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {guide.sections.map((s, i) => (
          <section key={s.id} id={s.id} className="mt-10 scroll-mt-24">
            <h2 className="mb-4 text-[1.45rem] font-bold leading-snug text-ink">
              <span className="text-ink-faint tabular">{i + 1}. </span>
              {L(s.title)}
            </h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}

        <section className="mt-12 border-t border-line pt-7">
          <h2 className="text-[1.15rem] font-bold text-ink">{t("otherCrops")}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/crops/${o.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3.5 py-2 font-semibold text-ink transition-colors hover:border-leaf-200 hover:bg-leaf-50"
                >
                  <CropMark slug={o.slug} size={20} />
                  {L(o.name)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

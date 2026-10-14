"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { SCHEMES } from "@/data/schemes";
import { Container, PageHeader } from "@/components/ui";

export default function SchemesPage() {
  const { t, L } = useLang();

  return (
    <>
      <PageHeader title={t("schemesTitle")} intro={t("schemesIntro")} />

      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          {SCHEMES.map((s) => (
            <Link
              key={s.slug}
              href={`/schemes/${s.slug}`}
              className="flex flex-col rounded-[--radius-card] border border-line bg-surface p-5 transition-colors hover:border-leaf-200 hover:bg-leaf-50/40"
            >
              <h2 className="text-[1.25rem] font-bold leading-snug text-ink">
                {L(s.name)}
              </h2>
              <p className="mt-2.5 flex-1 leading-relaxed text-ink-soft">
                {L(s.gist)}
              </p>
              <span className="mt-4 font-semibold text-leaf-700">
                {t("readMore")} →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

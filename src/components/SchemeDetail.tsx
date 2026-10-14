"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import Blocks from "@/components/Blocks";
import type { Scheme } from "@/lib/types";

export default function SchemeDetail({ scheme }: { scheme: Scheme }) {
  const { t, L } = useLang();

  return (
    <>
      <div className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-9">
          <Link
            href="/schemes"
            className="text-[0.95rem] font-semibold text-leaf-700 underline underline-offset-2"
          >
            ← {t("backToSchemes")}
          </Link>
          <h1 className="mt-4 text-[2rem] font-bold leading-tight text-ink sm:text-[2.3rem]">
            {L(scheme.name)}
          </h1>
          <p className="mt-3 text-[1.1rem] leading-relaxed text-ink-soft">
            {L(scheme.gist)}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-9">
        {scheme.sections.map((s) => (
          <section key={s.id} className="mt-2 mb-8">
            <h2 className="mb-4 text-[1.4rem] font-bold text-ink">
              {L(s.title)}
            </h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}
      </div>
    </>
  );
}

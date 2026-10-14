"use client";

import { useLang } from "@/lib/i18n";

export default function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="mt-16 border-t border-line bg-surface-sunk">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="max-w-2xl text-[0.95rem] leading-relaxed text-ink-soft">
          {t("footerNote")}
        </p>
        <p className="mt-6 text-sm text-ink-faint">
          {t("brand")} · {t("tagline")}
        </p>
      </div>
    </footer>
  );
}

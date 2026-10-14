"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LANGS, useLang } from "@/lib/i18n";
import { CROP_GUIDES } from "@/data/cropGuides";
import CropMark from "@/components/CropMark";
import type { Lang } from "@/lib/types";

const NAV = [
  { href: "/", key: "navHome" },
  { href: "/crops", key: "navCrops" },
  { href: "/schemes", key: "navSchemes" },
  { href: "/seasons", key: "navSeasons" },
  { href: "/contacts", key: "navContacts" },
] as const;

export default function SiteHeader() {
  const { t, L, lang, setLang } = useLang();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-leaf-700 focus:px-4 focus:py-2 focus:text-white"
      >
        {t("skipToContent")}
      </a>

      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4">
        <Link href="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-2.5">
          <WheatMark />
          <span className="truncate text-[1.15rem] font-bold leading-none text-leaf-700 sm:text-[1.3rem]">
            {t("brand")}
          </span>
        </Link>

        <nav className="ml-auto hidden lg:block" aria-label={t("menu")}>
          <ul className="flex items-center gap-1">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-2 text-[0.98rem] font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-leaf-50 text-leaf-700"
                      : "text-ink-soft hover:bg-surface-sunk hover:text-ink"
                  }`}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2 lg:ml-2">
          <LanguageToggle lang={lang} setLang={setLang} label={t("langLabel")} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-line-strong lg:hidden"
          >
            <span className="sr-only">{open ? t("close") : t("menu")}</span>
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label={t("menu")}
          className="border-t border-line bg-surface lg:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 text-lg font-medium ${
                    isActive(item.href)
                      ? "bg-leaf-50 text-leaf-700"
                      : "text-ink hover:bg-surface-sunk"
                  }`}
                >
                  {t(item.key)}
                </Link>

                {/* The six crop guides sit one tap away on a phone, rather
                    than two. On desktop the hub page does this job. */}
                {item.href === "/crops" && (
                  <ul className="mb-1 ml-3 border-l-2 border-line pl-3">
                    {CROP_GUIDES.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/crops/${c.slug}`}
                          onClick={() => setOpen(false)}
                          aria-current={
                            pathname === `/crops/${c.slug}` ? "page" : undefined
                          }
                          className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[1.05rem] ${
                            pathname === `/crops/${c.slug}`
                              ? "bg-leaf-50 font-semibold text-leaf-700"
                              : "text-ink-soft hover:bg-surface-sunk"
                          }`}
                        >
                          <CropMark slug={c.slug} size={20} />
                          {L(c.name)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function LanguageToggle({
  lang,
  setLang,
  label,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex overflow-hidden rounded-lg border border-line-strong"
    >
      {LANGS.map(({ code, full, short }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-h-[44px] px-2.5 text-sm font-semibold transition-colors sm:px-3 ${
            lang === code
              ? "bg-leaf-700 text-white"
              : "bg-surface text-ink-soft hover:bg-surface-sunk"
          }`}
        >
          <span className="sm:hidden">{short}</span>
          <span className="hidden sm:inline">{full}</span>
          <span className="sr-only"> {full}</span>
        </button>
      ))}
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function WheatMark() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M16 29V13"
        stroke="var(--color-leaf-700)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <path
            d={`M16 ${20 - i * 5}c-4.2 0-6.4-2-6.4-2s2.2-2.6 6.4-2.6`}
            fill="var(--color-leaf-500)"
          />
          <path
            d={`M16 ${20 - i * 5}c4.2 0 6.4-2 6.4-2s-2.2-2.6-6.4-2.6`}
            fill="var(--color-leaf-600)"
          />
        </g>
      ))}
      <circle cx="16" cy="6" r="2.6" fill="var(--color-harvest-500)" />
    </svg>
  );
}

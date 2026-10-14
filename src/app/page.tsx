"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { CROP_GUIDES } from "@/data/cropGuides";
import { SCHEMES } from "@/data/schemes";
import CropMark from "@/components/CropMark";
import { Container, Notice } from "@/components/ui";

const TILES = [
  { href: "/crops", titleKey: "cardCropsTitle", bodyKey: "cardCropsBody", icon: "sprout" },
  { href: "/schemes", titleKey: "cardSchemesTitle", bodyKey: "cardSchemesBody", icon: "doc" },
  { href: "/seasons", titleKey: "cardSeasonsTitle", bodyKey: "cardSeasonsBody", icon: "calendar" },
  { href: "/contacts", titleKey: "cardContactsTitle", bodyKey: "cardContactsBody", icon: "phone" },
] as const;

export default function HomePage() {
  const { t, L } = useLang();

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-leaf-50 to-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h1 className="max-w-3xl text-[2.2rem] font-bold leading-[1.2] text-ink sm:text-[3rem]">
            {t("heroTitle")}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-ink-soft">
            {t("heroBody")}
          </p>
        </div>
      </section>

      <Container>
        <div className="grid gap-4 sm:grid-cols-2">
          {TILES.map((tile) => (
            <Link
              key={tile.href}
              href={tile.href}
              className="rounded-[--radius-card] border border-line bg-surface p-6 transition-colors hover:border-leaf-200 hover:bg-leaf-50"
            >
              <TileIcon name={tile.icon} />
              <h2 className="mt-3 text-[1.35rem] font-bold leading-snug text-ink">
                {t(tile.titleKey)}
              </h2>
              <p className="mt-1.5 leading-relaxed text-ink-soft">
                {t(tile.bodyKey)}
              </p>
              <span className="mt-3 inline-block font-semibold text-leaf-700">
                {t("seeAll")} →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Notice>{t("sourceNotice")}</Notice>
        </div>
      </Container>

      <section className="border-t border-line bg-surface">
        <Container>
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-[1.7rem] font-bold text-ink">
              {t("cardCropsTitle")}
            </h2>
            <Link
              href="/crops"
              className="font-semibold text-leaf-700 underline underline-offset-2"
            >
              {t("seeAll")} →
            </Link>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CROP_GUIDES.map((c) => (
              <Link
                key={c.slug}
                href={`/crops/${c.slug}`}
                className="flex items-center gap-3 rounded-[--radius-card] border border-line bg-paper p-4 transition-colors hover:border-leaf-200"
              >
                <CropMark slug={c.slug} size={30} />
                <span className="text-[1.15rem] font-bold leading-snug text-ink">
                  {L(c.name)}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Container>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[1.7rem] font-bold text-ink">
            {t("cardSchemesTitle")}
          </h2>
          <Link
            href="/schemes"
            className="font-semibold text-leaf-700 underline underline-offset-2"
          >
            {t("seeAll")} →
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {SCHEMES.map((s) => (
            <Link
              key={s.slug}
              href={`/schemes/${s.slug}`}
              className="rounded-[--radius-card] border border-line bg-surface p-5 transition-colors hover:border-leaf-200"
            >
              <h3 className="text-[1.15rem] font-bold leading-snug text-ink">
                {L(s.name)}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{L(s.gist)}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

function TileIcon({ name }: { name: "sprout" | "doc" | "calendar" | "phone" }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
    stroke: "var(--color-leaf-600)",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "sprout")
    return (
      <svg {...common}>
        <path d="M12 21v-8" />
        <path d="M12 13c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z" />
        <path d="M12 13c0-3.9 3.1-7 7-7 0 3.9-3.1 7-7 7Z" />
      </svg>
    );
  if (name === "doc")
    return (
      <svg {...common}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
        <path d="M14 3v5h5M9 13h6M9 17h4" />
      </svg>
    );
  if (name === "calendar")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="16" rx="2.5" />
        <path d="M3 10h18M8 3v4M16 3v4M8 14h3M8 17.5h7" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1z" />
    </svg>
  );
}

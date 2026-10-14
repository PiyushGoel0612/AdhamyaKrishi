"use client";

import { useLang } from "@/lib/i18n";
import { SEASON_HEAD, SEASON_ROWS } from "@/data/seasons";
import { Container, PageHeader } from "@/components/ui";

export default function SeasonsPage() {
  const { t, L } = useLang();

  return (
    <>
      <PageHeader title={t("seasonsTitle")} intro={t("seasonsIntro")} />

      <Container>
        {/* Table on desktop, cards on a phone. */}
        <div className="hidden overflow-x-auto rounded-[--radius-card] border border-line md:block">
          <table className="w-full border-collapse bg-surface text-left">
            <thead>
              <tr className="border-b border-line bg-surface-sunk">
                {[SEASON_HEAD.season, SEASON_HEAD.sowing, SEASON_HEAD.crops].map(
                  (h, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 text-[0.85rem] font-semibold uppercase tracking-wide text-ink-faint"
                    >
                      {L(h)}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {SEASON_ROWS.map((r, i) => (
                <tr key={i} className="border-b border-line last:border-0">
                  <td className="px-4 py-4 align-top font-bold text-ink">
                    {L(r.season)}
                  </td>
                  <td className="px-4 py-4 align-top text-ink">{L(r.sowing)}</td>
                  <td className="px-4 py-4 align-top leading-relaxed text-ink-soft">
                    {L(r.crops)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-4 md:hidden">
          {SEASON_ROWS.map((r, i) => (
            <div
              key={i}
              className="rounded-[--radius-card] border border-line bg-surface p-5"
            >
              <h2 className="text-[1.25rem] font-bold text-ink">{L(r.season)}</h2>
              <div className="mt-3 rounded-lg bg-surface-sunk px-3 py-2.5">
                <div className="text-[0.8rem] font-semibold uppercase tracking-wide text-ink-faint">
                  {L(SEASON_HEAD.sowing)}
                </div>
                <div className="mt-0.5 text-[1.05rem] font-semibold text-ink">
                  {L(r.sowing)}
                </div>
              </div>
              <div className="mt-3">
                <div className="text-[0.8rem] font-semibold uppercase tracking-wide text-ink-faint">
                  {L(SEASON_HEAD.crops)}
                </div>
                <p className="mt-0.5 leading-relaxed text-ink">{L(r.crops)}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

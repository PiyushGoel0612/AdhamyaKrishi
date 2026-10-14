import type { Block, CropGuide, Localized } from "@/lib/types";

/* ------------------------------------------------------------------
   Transcribed from website.docx — the package of practices for the five
   crops that document covers.

   The Kannada is the source text. The English is a translation of it.
   Nothing has been added: where the source says a detail is unclear or
   should be confirmed against the original handbook, that is carried
   through rather than filled in.
   ------------------------------------------------------------------ */

const L = (kn: string, en: string): Localized => ({ kn, en });

const para = (kn: string, en: string): Block => ({ kind: "para", text: L(kn, en) });
const sub = (kn: string, en: string): Block => ({ kind: "subhead", text: L(kn, en) });
const note = (kn: string, en: string): Block => ({ kind: "note", text: L(kn, en) });

type Row = [string, string];
const list = (...items: Row[]): Block => ({
  kind: "list",
  items: items.map(([kn, en]) => L(kn, en)),
});
const table = (head: Row[], rows: Row[][]): Block => ({
  kind: "table",
  head: head.map(([kn, en]) => L(kn, en)),
  rows: rows.map((r) => r.map(([kn, en]) => L(kn, en))),
});

export const CROP_GUIDES: CropGuide[] = [
  /* ================================================================
     ರಾಗಿ — RAGI (FINGER MILLET)
     ================================================================ */
  {
    slug: "ragi",
    name: L("ರಾಗಿ", "Ragi (finger millet)"),
    gist: L(
      "ಕರ್ನಾಟಕದ ದಕ್ಷಿಣ ಜಿಲ್ಲೆಗಳ ಪ್ರಮುಖ ಖುಷ್ಕಿ ಬೆಳೆ. ಕಡಿಮೆ ತೇವಾಂಶದಲ್ಲಿಯೂ ಬೆಳೆಯುವ ಸಾಮರ್ಥ್ಯ.",
      "The main dryland crop of Karnataka's southern districts, able to grow even on low moisture.",
    ),
    sections: [
      {
        id: "intro",
        title: L("ಪರಿಚಯ, ಪ್ರಾಮುಖ್ಯತೆ ಮತ್ತು ಉಪಯೋಗಗಳು", "Introduction, importance and uses"),
        blocks: [
          para(
            "ರಾಗಿ ಕರ್ನಾಟಕದ ದಕ್ಷಿಣ ಜಿಲ್ಲೆಗಳ ಪ್ರಮುಖ ಖುಷ್ಕಿ ಬೆಳೆಯಾಗಿದೆ. ಇದು ಕಡಿಮೆ ತೇವಾಂಶದಲ್ಲಿಯೂ ಹಾಗೂ ಅನಾವೃಷ್ಟಿಯ ನಂತರವೂ ಬೆಳೆಯುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿದೆ. ಕಡಿಮೆ ರೋಗ-ರುಜಿನಗಳ ಬಾಧೆ ಮತ್ತು ಕಡಿಮೆ ಖರ್ಚಿನ ಬೇಸಾಯ ಇದರ ಪ್ರಮುಖ ಗುಣಗಳಾಗಿವೆ. ಬರ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿಯೂ ರಾಗಿ ಕನಿಷ್ಠ ಹುಲ್ಲಿನ ಇಳುವರಿಯನ್ನು ನೀಡುತ್ತದೆ.",
            "Ragi is the main dryland crop of Karnataka's southern districts. It can grow on low moisture and even after a failed rain. Low incidence of pests and diseases, and low-cost cultivation, are its main qualities. Even in drought conditions ragi gives at least a fodder yield.",
          ),
          sub("ಪ್ರಾಮುಖ್ಯತೆ ಮತ್ತು ಉಪಯೋಗಗಳು", "Importance and uses"),
          list(
            ["ಧಾನ್ಯ ಉತ್ಪಾದನೆಗಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ.", "Grown for grain production."],
            ["ರಾಗಿ ಹುಲ್ಲು ಜಾನುವಾರುಗಳಿಗೆ ಉತ್ತಮ ಮೇವಾಗಿದೆ.", "Ragi straw is good fodder for cattle."],
            [
              "ರಾಗಿ ಮತ್ತು ಅಲಸಂದೆಯನ್ನು ಸರದಿ ಬೆಳೆಯಾಗಿ ಬೆಳೆಯುವುದರಿಂದ ಆದಾಯ ಹೆಚ್ಚಿಸಬಹುದು ಹಾಗೂ ಮಣ್ಣಿನ ಫಲವತ್ತತೆಯನ್ನು ಸುಧಾರಿಸಬಹುದು.",
              "Growing ragi and cowpea in rotation can raise income and improve soil fertility.",
            ],
            [
              "ಬಿಳಿ ರಾಗಿ ತಳಿಯ ಕಾಳುಗಳನ್ನು ಬೇಕರಿ ಮತ್ತು ಇತರ ಆಹಾರ ಉತ್ಪನ್ನಗಳ ತಯಾರಿಕೆಯಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.",
              "Grain of the white ragi varieties is used in bakery and other food products.",
            ],
          ),
        ],
      },
      {
        id: "soil-climate",
        title: L("ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನ", "Soil and climate"),
        blocks: [
          sub("ಮಣ್ಣು", "Soil"),
          list(
            [
              "ರಾಗಿ ಬೆಳೆಗೆ ಕೆಂಪು ಮಣ್ಣು, ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು ಮತ್ತು ಉತ್ತಮ ನೀರು ಬಸಿದು ಹೋಗುವ ಮಣ್ಣು ಸೂಕ್ತವಾಗಿದೆ.",
              "Red soil, sandy loam and well-drained soils suit ragi.",
            ],
            ["ಮಧ್ಯಮ ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿಯೂ ಬೆಳೆಯಬಹುದು.", "It can also be grown on medium black soil."],
            ["ಮಣ್ಣಿನ pH: 5.5–7.5 ಸೂಕ್ತವಾಗಿದೆ.", "Soil pH of 5.5–7.5 is suitable."],
            ["ನೀರು ನಿಲ್ಲುವ ಮಣ್ಣು ರಾಗಿ ಬೆಳೆಗೆ ಸೂಕ್ತವಲ್ಲ.", "Waterlogged soil is not suitable for ragi."],
          ),
          sub("ಹವಾಮಾನ", "Climate"),
          list(
            [
              "ರಾಗಿ ಬೆಳೆಗೆ ಉಷ್ಣವಲಯದ ಬೆಚ್ಚಗಿನ ಹವಾಮಾನ ಸೂಕ್ತವಾಗಿದೆ.",
              "A warm tropical climate suits ragi.",
            ],
            ["ಸೂಕ್ತ ತಾಪಮಾನ: 20–30°C.", "Suitable temperature: 20–30°C."],
            [
              "ಮೊಳಕೆಯೊಡೆಯಲು ಮತ್ತು ಬೆಳವಣಿಗೆಗೆ ಬೆಚ್ಚಗಿನ ವಾತಾವರಣ ಅಗತ್ಯ.",
              "A warm environment is needed for germination and growth.",
            ],
            [
              "ಅತಿಯಾದ ಮಳೆ ಮತ್ತು ನೀರು ನಿಲ್ಲುವ ಪರಿಸ್ಥಿತಿ ಬೆಳೆಗೆ ಹಾನಿ ಉಂಟುಮಾಡಬಹುದು.",
              "Excess rain and waterlogging can damage the crop.",
            ],
          ),
          sub("ಮಳೆಯ ಪ್ರಮಾಣ", "Rainfall"),
          list(
            [
              "ರಾಗಿ ಬೆಳೆಗೆ ವಾರ್ಷಿಕವಾಗಿ ಸುಮಾರು 500–1000 ಮಿ.ಮೀ. ಮಳೆ ಅನುಕೂಲಕರವಾಗಿದೆ.",
              "About 500–1,000 mm of rainfall a year suits ragi.",
            ],
            [
              "ಕಡಿಮೆ ಮಳೆಯ ಪರಿಸ್ಥಿತಿಯಲ್ಲಿಯೂ ಬೆಳೆಯಬಲ್ಲ ಬೆಳೆಯಾಗಿದೆ.",
              "It is a crop that can be grown even under low rainfall.",
            ],
            [
              "ಬೆಳವಣಿಗೆ ಮತ್ತು ಕಾಳು ತುಂಬುವ ಹಂತದಲ್ಲಿ ಸಾಕಷ್ಟು ತೇವಾಂಶ ಅಗತ್ಯ.",
              "Enough moisture is needed at the growth and grain-filling stages.",
            ],
            [
              "ನೀರಾವರಿ ಸೌಲಭ್ಯವಿದ್ದರೆ ಮಳೆಯ ಕೊರತೆಯ ಸಮಯದಲ್ಲಿಯೂ ಬೆಳೆಯಬಹುದು.",
              "With irrigation it can be grown even when rainfall is short.",
            ],
          ),
          sub("ಸೂಕ್ತ ಬಿತ್ತನೆ ಋತು", "Suitable sowing season"),
          table(
            [
              ["ಋತು", "Season"],
              ["ಬಿತ್ತನೆ ಸಮಯ", "Sowing time"],
              ["ವಿಶೇಷತೆ", "Note"],
            ],
            [
              [
                ["ಮುಂಗಾರು (Kharif)", "Kharif"],
                ["ಜೂನ್–ಜುಲೈ", "June–July"],
                ["ಮಳೆಯಾಶ್ರಿತ ಬೇಸಾಯಕ್ಕೆ ಸೂಕ್ತ", "Suited to rainfed cultivation"],
              ],
              [
                ["ಹಿಂಗಾರು (Rabi)", "Rabi"],
                ["ಸೆಪ್ಟೆಂಬರ್–ಅಕ್ಟೋಬರ್", "September–October"],
                ["ಸ್ಥಳೀಯ ಹವಾಮಾನ ಮತ್ತು ತೇವಾಂಶಕ್ಕೆ", "According to local climate and moisture"],
              ],
              [
                ["ಬೇಸಿಗೆ (Summer)", "Summer"],
                ["ಜನವರಿ–ಫೆಬ್ರವರಿ", "January–February"],
                ["ನೀರಾವರಿ ಸೌಲಭ್ಯವಿದ್ದಾಗ", "When irrigation is available"],
              ],
            ],
          ),
        ],
      },
      {
        id: "varieties",
        title: L("ರಾಗಿ ತಳಿಗಳು", "Ragi varieties"),
        blocks: [
          sub("ದೀರ್ಘಾವಧಿ ತಳಿಗಳು", "Long-duration varieties"),
          table(
            [
              ["ತಳಿ", "Variety"],
              ["ಬಿತ್ತನೆ ಕಾಲ", "Sowing time"],
              ["ಅವಧಿ (ದಿನಗಳು)", "Duration (days)"],
              ["ಇಳುವರಿ — ನೀರಾವರಿ", "Yield — irrigated"],
              ["ಇಳುವರಿ — ಖುಷ್ಕಿ", "Yield — rainfed"],
              ["ವಿಶೇಷ ಗುಣಗಳು", "Special qualities"],
            ],
            [
              [
                ["MR 1", "MR 1"],
                ["ಜೂನ್–ಜುಲೈ", "June–July"],
                ["120–123", "120–123"],
                ["ಧಾನ್ಯ: 16–18 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 3.5–4 ಟ/ಎ", "Grain: 16–18 q/acre; straw: 3.5–4 t/acre"],
                ["ಧಾನ್ಯ: 9–12 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 2–3 ಟ/ಎ", "Grain: 9–12 q/acre; straw: 2–3 t/acre"],
                [
                  "ಅಧಿಕ ಧಾನ್ಯ ಮತ್ತು ಮೇವನ್ನು ಒದಗಿಸುತ್ತದೆ. ಉದ್ದವಾದ ಇರಕುಗಳನ್ನು ಹೊಂದಿದ್ದು, ಇರಕುಗಳ ತುದಿ ಒಳಭಾಗಕ್ಕೆ ಬಾಗಿರುತ್ತದೆ. ಇದು ಹೆಚ್ಚು ಎತ್ತರ ಬೆಳೆಯುವುದರಿಂದ ಸಾರಜನಕ ಗೊಬ್ಬರವನ್ನು ಅತಿಯಾಗಿ ಕೊಡಬಾರದು.",
                  "Gives high grain and fodder. Has long fingers with tips curved inward. Because it grows tall, nitrogen fertiliser should not be given in excess.",
                ],
              ],
              [
                ["MR 6", "MR 6"],
                ["—", "—"],
                ["—", "—"],
                ["—", "—"],
                ["—", "—"],
                ["—", "—"],
              ],
            ],
          ),
          sub("ಮಧ್ಯಮಾವಧಿ ತಳಿಗಳು", "Medium-duration varieties"),
          table(
            [
              ["ತಳಿ", "Variety"],
              ["ಬಿತ್ತನೆ ಕಾಲ", "Sowing time"],
              ["ಅವಧಿ (ದಿನಗಳು)", "Duration (days)"],
              ["ಇಳುವರಿ — ನೀರಾವರಿ", "Yield — irrigated"],
              ["ಇಳುವರಿ — ಖುಷ್ಕಿ", "Yield — rainfed"],
              ["ವಿಶೇಷ ಗುಣಗಳು", "Special qualities"],
            ],
            [
              [
                ["KMR 301", "KMR 301"],
                ["ಜೂನ್–ಜುಲೈ; ಅಕ್ಟೋಬರ್–ನವೆಂಬರ್", "June–July; October–November"],
                ["115–118", "115–118"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 3–3.5 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 3–3.5 t/acre"],
                ["ಧಾನ್ಯ: 8–10 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 1.5–2.5 ಟ/ಎ", "Grain: 8–10 q/acre; straw: 1.5–2.5 t/acre"],
                [
                  "ಅಗಲ ಹಾಗೂ ದಪ್ಪವಾದ ತಳಿ. ಉದ್ದವಾದ ಇಲುಕುಗಳು ಹೊಂದಿರುತ್ತದೆ.",
                  "A broad, thick variety. Has long fingers.",
                ],
              ],
              [
                ["ML 322", "ML 322"],
                ["ಆಗಸ್ಟ್–ಸೆಪ್ಟೆಂಬರ್", "August–September"],
                ["105–110", "105–110"],
                ["ಧಾನ್ಯ: 18–20 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 5–6 ಟ/ಎ", "Grain: 18–20 q/acre; straw: 5–6 t/acre"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 4–5 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 4–5 t/acre"],
                [
                  "ಗಟ್ಟಿಮುಟ್ಟಾದ ಕಾಂಡ. ತೆನೆ ನೆಲಕ್ಕೆ ಬೀಳುವುದಿಲ್ಲ. ಬೆಂಕಿ ರೋಗ ಮತ್ತು ಇಲುಕು ರೋಗ ನಿರೋಧಕ.",
                  "Sturdy stem. The earhead does not lodge. Resistant to blast and to finger blast.",
                ],
              ],
            ],
          ),
          sub("ಅಲ್ಪಾವಧಿ ತಳಿಗಳು", "Short-duration varieties"),
          table(
            [
              ["ತಳಿ", "Variety"],
              ["ಬಿತ್ತನೆ ಕಾಲ", "Sowing time"],
              ["ಅವಧಿ (ದಿನಗಳು)", "Duration (days)"],
              ["ಇಳುವರಿ — ನೀರಾವರಿ", "Yield — irrigated"],
              ["ಇಳುವರಿ — ಖುಷ್ಕಿ", "Yield — rainfed"],
              ["ವಿಶೇಷ ಗುಣಗಳು", "Special qualities"],
            ],
            [
              [
                ["KMR 316", "KMR 316"],
                ["ಜೂನ್–ಜುಲೈ; ಆಗಸ್ಟ್–ಸೆಪ್ಟೆಂಬರ್", "June–July; August–September"],
                ["100–105", "100–105"],
                ["ಧಾನ್ಯ: 18–20 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 5–6 ಟ/ಎ", "Grain: 18–20 q/acre; straw: 5–6 t/acre"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 4–5 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 4–5 t/acre"],
                [
                  "ಇಲುಕುಗಳು ಉದ್ದವಾಗಿದ್ದು ತುದಿ ಒಳಮೈಗೆ ಬಾಗಿರುತ್ತದೆ ಹಾಗೂ ತೆನೆಗಳು ಹಸಿರಾಗಿರುತ್ತದೆ. ಬೆಂಕಿರೋಗ ಮತ್ತು ಬುಡಕೊಳೆ ರೋಗಕ್ಕೆ ನಿರೋಧತೆ.",
                  "Fingers are long with tips curved inward, and the earheads are green. Resistant to blast and to collar rot.",
                ],
              ],
              [
                ["KMR 630", "KMR 630"],
                ["ಜೂನ್–ಜುಲೈ", "June–July"],
                ["95–100", "95–100"],
                ["ಧಾನ್ಯ: 18–20 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 2–2.5 ಟ/ಎ", "Grain: 18–20 q/acre; straw: 2–2.5 t/acre"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 1.6–2 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 1.6–2 t/acre"],
                [
                  "ಅಲ್ಪಾವಧಿ ತಳಿಯಾಗಿದ್ದು, ತೆನೆ ಹಸಿರು ಬಣ್ಣದಿಂದ ಕೂಡಿರುತ್ತದೆ. ಬೆಂಕಿರೋಗ ನಿರೋಧಕ ಹಾಗೂ ಯಾಂತ್ರೀಕೃತ ಕಟಾವಿಗೆ ಸೂಕ್ತವಾದ ತಳಿ.",
                  "A short-duration variety with green earheads. Blast resistant and suited to mechanised harvesting.",
                ],
              ],
              [
                ["GPU 66", "GPU 66"],
                ["—", "—"],
                ["110–115", "110–115"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 3–3.5 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 3–3.5 t/acre"],
                ["ಧಾನ್ಯ: 8–10 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 1.5–2.5 ಟ/ಎ", "Grain: 8–10 q/acre; straw: 1.5–2.5 t/acre"],
                [
                  "ಬೆಂಕಿ ರೋಗ ನಿರೋಧಕ ಶಕ್ತಿ ಹೊಂದಿದೆ. ಇಲುಕುಗಳ ತುದಿ ಒಳಭಾಗಕ್ಕೆ ಬಾಗಿರುತ್ತದೆ. ಧಾನ್ಯದ ಇಳುವರಿಯ ಜೊತೆಗೆ ಹೆಚ್ಚು ಮೇವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
                  "Has blast resistance. Finger tips curve inward. Gives plenty of fodder along with the grain yield.",
                ],
              ],
              [
                ["KMR 340", "KMR 340"],
                ["—", "—"],
                ["95–100", "95–100"],
                ["ಧಾನ್ಯ: 18–20 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 2–2.5 ಟ/ಎ", "Grain: 18–20 q/acre; straw: 2–2.5 t/acre"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 1.6–2 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 1.6–2 t/acre"],
                [
                  "ಬಿಳಿ ರಾಗಿ ತಳಿಯಾಗಿದ್ದು ಬೇಗನೆ ಕಟಾವಿಗೆ ಬರುವುದು. ಕಾಳುಗಳನ್ನು ಬೇಕರಿ ಮತ್ತು ಇತರೆ ಆಹಾರ ಉತ್ಪನ್ನಗಳ ತಯಾರಿಕೆಯಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ. ಬೆಂಕಿ ರೋಗ ಹಾಗೂ ಕಾಂಡ ಕೊರೆಯುವ ಹುಳುವಿಗೆ ನಿರೋಧಕ ಶಕ್ತಿ ಹೊಂದಿದೆ.",
                  "A white ragi variety that comes to harvest early. The grain is used in bakery and other food products. Has resistance to blast and to stem borer.",
                ],
              ],
            ],
          ),
          sub("ಹಿಂಗಾರು ತಳಿಗಳು", "Rabi varieties"),
          table(
            [
              ["ತಳಿ", "Variety"],
              ["ಅವಧಿ (ದಿನಗಳು)", "Duration (days)"],
              ["ಇಳುವರಿ — ನೀರಾವರಿ", "Yield — irrigated"],
              ["ಇಳುವರಿ — ಖುಷ್ಕಿ", "Yield — rainfed"],
              ["ವಿಶೇಷ ಗುಣಗಳು", "Special qualities"],
            ],
            [
              [
                ["INDAF 7", "INDAF 7"],
                ["115–120", "115–120"],
                ["ಧಾನ್ಯ: 12–14 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 3–3.5 ಟ/ಎ", "Grain: 12–14 q/acre; straw: 3–3.5 t/acre"],
                ["ಧಾನ್ಯ: 8–10 ಕ್ವಿ/ಎ; ಹುಲ್ಲು: 1.5–2 ಟ/ಎ", "Grain: 8–10 q/acre; straw: 1.5–2 t/acre"],
                [
                  "ತೆನೆ ಉದ್ದವಾಗಿರುವುದಲ್ಲದೆ ಇಲುಕುಗಳಲ್ಲಿ ಕವಲುಗಳನ್ನು ಕಾಣಬಹುದು.",
                  "The earhead is long, and branching can be seen in the fingers.",
                ],
              ],
              [
                ["INDAF 9", "INDAF 9"],
                ["95–105", "95–105"],
                ["—", "—"],
                ["—", "—"],
                [
                  "ನೇರಳೆ ಬಣ್ಣದ ತೆನೆ ಹೊಂದಿದ್ದು ಗಂಟುಗಳು ನೇರಳೆ ಬಣ್ಣದಿಂದ ಕೂಡಿರುತ್ತದೆ.",
                  "Has a purple earhead, and the nodes are purple as well.",
                ],
              ],
            ],
          ),
        ],
      },
      {
        id: "sowing",
        title: L("ಬಿತ್ತನೆ ಮತ್ತು ಬೀಜೋಪಚಾರ", "Sowing and seed treatment"),
        blocks: [
          sub("ನೀರಾವರಿ ರಾಗಿ", "Irrigated ragi"),
          list(
            [
              "ಬಿತ್ತನೆಗೆ 3–4 ವಾರಗಳ ಮೊದಲು ಎಕರೆಗೆ 4 ಟನ್ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಬೇಕು.",
              "Three to four weeks before sowing, mix 4 tonnes of farmyard manure per acre into the soil.",
            ],
            [
              "ಎಕರೆಗೆ ಬೇಕಾಗುವ 2 ಕೆ.ಜಿ. ಬೀಜಕ್ಕೆ 150 ಗ್ರಾಂ ಅಜೋಸ್ಪಿರಿಲಂ ಜೈವಿಕ ಗೊಬ್ಬರವನ್ನು ಲೇಪನ ಮಾಡಿ ಬಿತ್ತಬೇಕು.",
              "Coat the 2 kg of seed needed per acre with 150 g of Azospirillum biofertiliser before sowing.",
            ],
            [
              "ಸುಮಾರು 1.5 ಗುಂಟೆ ಪ್ರದೇಶದಲ್ಲಿ ನರ್ಸರಿ ಸಸಿಮಡಿಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಬೇಕು.",
              "Prepare nursery beds over an area of about 1.5 guntas.",
            ],
            [
              "25 ಅಡಿ ಉದ್ದ, 4 ಅಡಿ ಅಗಲ ಮತ್ತು 4 ಅಂಗುಲ ಎತ್ತರದ 15 ಸಸಿಮಡಿಗಳನ್ನು ತಯಾರಿಸಿ, 3 ಅಂಗುಲ ಸಾಲಿನ ಅಂತರದಲ್ಲಿ ಬೀಜ ಬಿತ್ತಬೇಕು.",
              "Make 15 beds, each 25 feet long, 4 feet wide and 4 inches high, and sow the seed in rows 3 inches apart.",
            ],
            [
              "ಬಿತ್ತಿದ ಬೀಜಗಳನ್ನು ಪುಡಿ ಮಣ್ಣು ಅಥವಾ ಚೆನ್ನಾಗಿ ಕೊಳೆತ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರದಿಂದ ಮುಚ್ಚಬೇಕು.",
              "Cover the sown seed with fine soil or well-rotted farmyard manure.",
            ],
            ["ಪ್ರತಿದಿನ ಸಂಜೆ ನೀರು ಒದಗಿಸಬೇಕು.", "Water every evening."],
            [
              "ಅಲ್ಪಾವಧಿ ತಳಿಗಳ ಸಸಿಗಳನ್ನು 18–20 ದಿನಗಳಲ್ಲಿ ಹಾಗೂ ಮಧ್ಯಮಾವಧಿ ಮತ್ತು ದೀರ್ಘಾವಧಿ ತಳಿಗಳ ಸಸಿಗಳನ್ನು 20–22 ದಿನಗಳಲ್ಲಿ ನಾಟಿ ಮಾಡಬೇಕು.",
              "Transplant seedlings of short-duration varieties at 18–20 days, and of medium and long-duration varieties at 20–22 days.",
            ],
          ),
          sub("ಮಳೆಯಾಶ್ರಿತ ರಾಗಿ", "Rainfed ragi"),
          list(
            [
              "ಎಕರೆಗೆ ಶಿಫಾರಸು ಮಾಡಿದ 5 ಕೆ.ಜಿ. ಬೀಜಕ್ಕೆ 13 ಗ್ರಾಂ ಸತುವಿನ ಸಲ್ಫೇಟ್‌ನಿಂದ ಉಪಚರಿಸಬೇಕು.",
              "Treat the recommended 5 kg of seed per acre with 13 g of zinc sulphate.",
            ],
            [
              "ಪ್ರತಿ ಕೆ.ಜಿ. ಬೀಜಕ್ಕೆ 2 ಗ್ರಾಂ ಕಾರ್ಬೆಂಡಜಿಮ್‌ನಿಂದ ಬೀಜೋಪಚಾರ ಮಾಡಿ ಬಿತ್ತಬೇಕು.",
              "Treat each kg of seed with 2 g of carbendazim before sowing.",
            ],
          ),
          sub("ಅಂತರ", "Spacing"),
          table(
            [
              ["ಪದ್ಧತಿ", "Method"],
              ["ಸಾಲಿನಿಂದ ಸಾಲಿಗೆ", "Row to row"],
              ["ಸಸಿಯಿಂದ ಸಸಿಗೆ", "Plant to plant"],
            ],
            [
              [
                ["ನೀರಾವರಿ ನಾಟಿ", "Irrigated transplanting"],
                ["9 ಅಂಗುಲ", "9 inches"],
                [
                  "ಫಲವತ್ತಾದ ಜಮೀನಿನಲ್ಲಿ 6 ಅಂಗುಲ; ಕಡಿಮೆ ಫಲವತ್ತತೆಯ ಜಮೀನಿನಲ್ಲಿ 4 ಅಂಗುಲ",
                  "6 inches on fertile land; 4 inches on less fertile land",
                ],
              ],
              [
                ["ಮಳೆಯಾಶ್ರಿತ ಬಿತ್ತನೆ", "Rainfed sowing"],
                ["1 ಅಡಿ", "1 foot"],
                ["4 ಅಂಗುಲ", "4 inches"],
              ],
            ],
          ),
        ],
      },
      {
        id: "nutrients",
        title: L("ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ", "Nutrient management"),
        blocks: [
          sub("ಗೊಬ್ಬರಗಳ ಪ್ರಮಾಣದ ಪಟ್ಟಿ", "Fertiliser quantities"),
          table(
            [
              ["ಕ್ರ.ಸಂ.", "No."],
              ["ಗೊಬ್ಬರದ ಹೆಸರು", "Fertiliser"],
              ["ಚೀಲಗಳ ಸಂಖ್ಯೆ", "Number of bags"],
            ],
            [
              [["1", "1"], ["10:26:26", "10:26:26"], ["3 ಚೀಲಗಳು", "3 bags"]],
              [["2", "2"], ["ಯೂರಿಯಾ", "Urea"], ["4 ಚೀಲಗಳು", "4 bags"]],
              [
                ["3", "3"],
                ["MOP (ಮ್ಯೂರಿಯೇಟ್ ಆಫ್ ಪೊಟ್ಯಾಷ್)", "MOP (muriate of potash)"],
                ["1 ಚೀಲ", "1 bag"],
              ],
            ],
          ),
        ],
      },
      {
        id: "water",
        title: L("ನೀರಿನ ನಿರ್ವಹಣೆ", "Water management"),
        blocks: [
          para(
            "ನೀರು ಒದಗಿಸಬೇಕಾದ ಪ್ರಮುಖ ಹಂತಗಳು:",
            "The critical stages at which water must be provided:",
          ),
          list(
            ["ಮೊಳಕೆ ಮತ್ತು ಸಸಿ ಸ್ಥಾಪನೆ (0–15 ದಿನಗಳು)", "Germination and seedling establishment (0–15 days)"],
            ["ಕವಲೊಡೆಯುವ ಹಂತ (20–40 ದಿನಗಳು)", "Tillering stage (20–40 days)"],
            [
              "ತೆನೆ ಹೊರಬರುವ ಪೂರ್ವ ಹಂತ ಮತ್ತು ತೆನೆ ಹೊರಬರುವ ಹಂತ (40–60 ದಿನಗಳು)",
              "Pre-earhead-emergence and earhead-emergence stages (40–60 days)",
            ],
          ),
        ],
      },
      {
        id: "intercultural",
        title: L("ಅಂತರ ಬೇಸಾಯ ಕ್ರಮಗಳು", "Intercultural operations"),
        blocks: [
          sub("ತೆಳುವು ಮಾಡುವುದು ಮತ್ತು ನಾಟಿ", "Thinning and transplanting"),
          list(
            [
              "ಮಳೆಯಾಶ್ರಿತ ಬೆಳೆಯಲ್ಲಿ ಬಿತ್ತನೆಯ 15 ದಿನಗಳ ನಂತರ ಪೈರಿನಿಂದ ಪೈರಿಗೆ 4 ಅಂಗುಲ ಅಂತರ ಕಾಪಾಡಿಕೊಂಡು ತೆಳುವು ಮಾಡಬೇಕು.",
              "In a rainfed crop, thin 15 days after sowing, keeping 4 inches between plants.",
            ],
            [
              "ನೀರಾವರಿ ಬೆಳೆಯಲ್ಲಿ ಸಸಿಗಳನ್ನು 18–22 ದಿನಗಳ ವಯಸ್ಸಿನಲ್ಲಿ ನಾಟಿ ಮಾಡಬೇಕು.",
              "In an irrigated crop, transplant seedlings at 18–22 days old.",
            ],
          ),
          sub("ಕಳೆ ನಿಯಂತ್ರಣ", "Weed control"),
          list([
            "ನಾಟಿ ಮಾಡಿದ 15 ದಿನಗಳ ನಂತರ ಅಂತರ ಬೇಸಾಯ ಪ್ರಾರಂಭಿಸಿ, 10 ದಿನಗಳ ಅಂತರದಲ್ಲಿ 2–3 ಬಾರಿ ಮಾಡಬೇಕು.",
            "Begin intercultivation 15 days after transplanting and repeat 2–3 times at 10-day intervals.",
          ]),
        ],
      },
      {
        id: "cropping-systems",
        title: L("ಬೆಳೆ ಪದ್ಧತಿಗಳು", "Cropping systems"),
        blocks: [
          table(
            [
              ["ಮಿಶ್ರ ಬೆಳೆ", "Mixed crop"],
              ["ಅನುಪಾತ", "Ratio"],
              ["ಬೀಜದ ಪ್ರಮಾಣ (ಕೆ.ಜಿ./ಎಕರೆ)", "Seed rate (kg/acre)"],
            ],
            [
              [["ರಾಗಿ + ತೊಗರಿ", "Ragi + pigeon pea"], ["8:2", "8:2"], ["5 + 2", "5 + 2"]],
              [["ರಾಗಿ + ಸೋಯಾ ಅವರೆ", "Ragi + soybean"], ["4:2", "4:2"], ["5 + 6", "5 + 6"]],
              [["ರಾಗಿ + ಅವರೆ", "Ragi + field bean"], ["8:1", "8:1"], ["5 + 2", "5 + 2"]],
            ],
          ),
        ],
      },
      {
        id: "pests",
        title: L("ಕೀಟ ನಿರ್ವಹಣೆ", "Pest management"),
        blocks: [
          table(
            [
              ["ಕೀಟ", "Pest"],
              ["ಬಾಧೆಯ ಲಕ್ಷಣಗಳು", "Symptoms"],
              ["ನಿರ್ವಹಣೆ", "Management"],
            ],
            [
              [
                ["ಕಾಂಡ ಕೊರಕ", "Stem borer"],
                [
                  "ಸುಳಿ ಒಣಗುತ್ತದೆ; ತೆನೆ ಬಾಗುತ್ತದೆ. ಬಾಗಿದ ಸುಳಿಯನ್ನು ಕೈಯಿಂದ ಎಳೆದಾಗ ಸುಲಭವಾಗಿ ಬರುತ್ತದೆ.",
                  "The central shoot dries and the earhead bends. The bent shoot comes away easily when pulled by hand.",
                ],
                [
                  "ಕ್ಲೋರ್‌ಪೈರಿಫಾಸ್ 20 EC, ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ 2 ಮಿ.ಲೀ. ಎಂದು ಪಠ್ಯದಲ್ಲಿ ಸೂಚಿಸಲಾಗಿದೆ. ಸಸಿ ನಾಟಿ ಮಾಡಿದ 25–30 ದಿನಗಳ ನಂತರ ಸಿಂಪರಣೆ ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
                  "The text specifies chlorpyriphos 20 EC at 2 ml per litre of water, sprayed 25–30 days after transplanting.",
                ],
              ],
              [
                ["ಸಸ್ಯ ಹೇನು", "Aphid"],
                [
                  "ರಸ ಹೀರುವುದರಿಂದ ಎಲೆಗಳು ಹಳದಿಯಾಗುತ್ತವೆ; ಎಲೆಗಳ ಮೇಲೆ ಕಪ್ಪು ಬೂಷ್ಟು ಬೆಳೆಯುತ್ತದೆ ಮತ್ತು ಬೆಳವಣಿಗೆ ಕುಗ್ಗುತ್ತದೆ. ತೆನೆಯಿಂದ ರಸ ಹೀರಿದಾಗ ಕಾಳುಗಳು ಚೀಕಲಾಗುತ್ತವೆ.",
                  "Sap sucking turns the leaves yellow; black sooty mould grows on the leaves and growth is stunted. When sap is sucked from the earhead the grain shrivels.",
                ],
                [
                  "ಡೈಮಿಥೋಯೇಟ್ 30 EC, ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ 1.7 ಮಿ.ಲೀ. ಕೀಟಗಳು ಕಂಡುಬಂದಾಗ ಸಿಂಪಡಣೆ ಮಾಡಬೇಕು.",
                  "Dimethoate 30 EC at 1.7 ml per litre of water, sprayed when the pest appears.",
                ],
              ],
              [
                ["ತೆನೆ ಗೂಡು ಹುಳು", "Earhead caterpillar"],
                [
                  "ತೆನೆಯೊಳಗೆ ಸೇರಿ ಕಾಳುಗಳನ್ನು ತಿನ್ನುತ್ತದೆ; ತಿಂದ ಕಾಳಿನ ನುಚ್ಚು ಕೆಳಗೆ ಬೀಳುತ್ತದೆ.",
                  "It enters the earhead and eats the grain; the broken grain falls below.",
                ],
                [
                  "ಹೆಚ್ಚಿನ ಹುಳುಗಳು ಕಂಡುಬಂದಾಗ ಬೆಳಗಿನ ಹೊತ್ತಿನಲ್ಲಿ ತೆನೆಗಳ ಮೇಲೆ ಧೂಳೀಕರಣ ಮಾಡುವ ಸೂಚನೆ ಇದೆ. ನಿರ್ದಿಷ್ಟ ಔಷಧದ ವಿವರಗಳು ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ಅಸ್ಪಷ್ಟವಾಗಿವೆ.",
                  "The text advises dusting the earheads in the morning when numbers are high. The specific chemical details are unclear in the source text.",
                ],
              ],
              [
                ["ಗೊಣ್ಣೆ ಹುಳು", "White grub"],
                [
                  "ಮರಿ ಹುಳುಗಳು ಬೇರುಗಳನ್ನು ತಿನ್ನುತ್ತವೆ. ತೆಂಡೆಗಳು ಒಣಗುತ್ತವೆ ಮತ್ತು ಗಿಡವನ್ನು ಎಳೆದಾಗ ಸುಲಭವಾಗಿ ಬುಡಸಹಿತ ಹೊರಬರುತ್ತದೆ.",
                  "The grubs eat the roots. Tillers dry and the plant comes out easily, roots and all, when pulled.",
                ],
                [
                  "ನೀಡಿರುವ ಪಠ್ಯದಲ್ಲಿ ಇದರ ನಿರ್ದಿಷ್ಟ ಔಷಧ ಮತ್ತು ಪ್ರಮಾಣ ಸ್ಪಷ್ಟವಾಗಿ ಹೊಂದಿಕೆಯಾಗಿಲ್ಲ.",
                  "The specific chemical and dose for this are not clearly given in the source text.",
                ],
              ],
            ],
          ),
        ],
      },
      {
        id: "diseases",
        title: L("ರೋಗ ನಿರ್ವಹಣೆ", "Disease management"),
        blocks: [
          table(
            [
              ["ರೋಗ", "Disease"],
              ["ಮುಖ್ಯ ಲಕ್ಷಣಗಳು", "Main symptoms"],
              ["ನಿರ್ವಹಣೆ", "Management"],
            ],
            [
              [
                ["ಎಲೆ ಬೆಂಕಿ ರೋಗ", "Leaf blast"],
                [
                  "ಎಲೆಗಳ ಮೇಲೆ ಕಂದುಬಣ್ಣದ ವಜ್ರಾಕಾರದ ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಂಡು, ಅವು ಒಂದಕ್ಕೊಂದು ಸೇರಿ ಎಲೆಗಳು ಒಣಗುತ್ತವೆ.",
                  "Brown diamond-shaped spots appear on the leaves, merge together, and the leaves dry.",
                ],
                [
                  "ಮ್ಯಾಂಕೋಜೆಬ್ 75 WP ಅಥವಾ ಕಾರ್ಬೆಂಡಜಿಮ್ 50 WP ಮುಂತಾದ ಶಿಲೀಂಧ್ರನಾಶಕಗಳ ಹೆಸರುಗಳನ್ನು ನೀಡಲಾಗಿದೆ. ನಿಖರ ರೋಗ-ಔಷಧ ಹೊಂದಾಣಿಕೆಯನ್ನು ಮೂಲ ಪಟ್ಟಿಯಿಂದ ದೃಢಪಡಿಸಬೇಕು.",
                  "Fungicide names such as mancozeb 75 WP or carbendazim 50 WP are given. The exact disease-to-chemical match should be confirmed against the original list.",
                ],
              ],
              [
                ["ಕುತ್ತಿಗೆ ಮತ್ತು ಇಲುಕು ಬೆಂಕಿ ರೋಗ", "Neck and finger blast"],
                [
                  "ಇಲುಕುಗಳ ಮೇಲೆ ಕಂದು ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಂಡು ಇಲುಕು ಒಣಗುತ್ತದೆ.",
                  "Brown spots appear on the fingers and the finger dries.",
                ],
                [
                  "ಹೂಬಿಡುವ ಹಂತದಲ್ಲಿ ಸಿಂಪರಣೆ; ರೋಗದ ತೀವ್ರತೆಗೆ ಅನುಗುಣವಾಗಿ 10–15 ದಿನಗಳ ನಂತರ ಎರಡನೇ ಸಿಂಪರಣೆ ಮಾಡುವುದನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ. ಟ್ರೈಸೈಕ್ಲಾಜೋಲ್ + ಮ್ಯಾಂಕೋಜೆಬ್ ಸಂಯುಕ್ತದ ಹೆಸರೂ ಇದೆ.",
                  "Spray at flowering; a second spray 10–15 days later is mentioned, depending on severity. A tricyclazole + mancozeb combination is also named.",
                ],
              ],
              [
                ["ಕಂದು ಚುಕ್ಕೆ ರೋಗ", "Brown spot"],
                [
                  "ಎಲೆಗಳ ಮೇಲೆ ಸಣ್ಣ ಮೊಟ್ಟೆಯಾಕಾರದ ಚುಕ್ಕೆಗಳು ಕಾಣಿಸುತ್ತವೆ.",
                  "Small oval spots appear on the leaves.",
                ],
                [
                  "ಕಾರ್ಬೆಂಡಜಿಮ್ + ಮ್ಯಾಂಕೋಜೆಬ್ ಮಿಶ್ರಣವನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
                  "A carbendazim + mancozeb mixture is mentioned.",
                ],
              ],
              [
                ["ನಂಜು ರೋಗ", "Viral disease"],
                [
                  "ಎಲೆಗಳ ಮೇಲೆ ಹಸಿರು ಮತ್ತು ಹಳದಿ ಪಟ್ಟಿಗಳು ಕಾಣಿಸುತ್ತವೆ.",
                  "Green and yellow stripes appear on the leaves.",
                ],
                [
                  "ರೋಗ ಹರಡುವ ಎಲೆ ಜಿಗಿ ಹುಳುವಿನ ನಿಯಂತ್ರಣ ಮತ್ತು ರೋಗಪೀಡಿತ ಗಿಡಗಳನ್ನು ಕಿತ್ತು ನಾಶಪಡಿಸುವ ಕ್ರಮಗಳನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
                  "Control of the leafhopper that spreads it, and uprooting and destroying affected plants, are mentioned.",
                ],
              ],
              [
                ["ಬುಡ ಕೊಳೆ ರೋಗ", "Collar rot"],
                [
                  "ಗಿಡಗಳು ಹಳದಿಯಾಗುತ್ತವೆ; ಬುಡ ಕೊಳೆತು ಸಂಪೂರ್ಣವಾಗಿ ಒಣಗಿ ಸಾಯುತ್ತವೆ.",
                  "Plants turn yellow; the collar rots and the plant dries out completely and dies.",
                ],
                [
                  "ಟ್ರೈಕೋಡರ್ಮ ಮತ್ತು ಸೂಡೋಮೋನಾಸ್ ಮುಂತಾದ ಜೈವಿಕ ಜೀವಾಣುಗಳ ಬಳಕೆಯನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
                  "Use of biological agents such as Trichoderma and Pseudomonas is mentioned.",
                ],
              ],
            ],
          ),
        ],
      },
      {
        id: "harvest",
        title: L("ಕೊಯ್ಲು ಮತ್ತು ಇಳುವರಿ", "Harvest and yield"),
        blocks: [
          list(
            ["ಅಲ್ಪಾವಧಿ ತಳಿಗಳು: 95–105 ದಿನಗಳು.", "Short-duration varieties: 95–105 days."],
            ["ಮಧ್ಯಮಾವಧಿ ತಳಿಗಳು: 106–120 ದಿನಗಳು.", "Medium-duration varieties: 106–120 days."],
            ["ದೀರ್ಘಾವಧಿ ತಳಿಗಳು: 120–130 ದಿನಗಳು.", "Long-duration varieties: 120–130 days."],
          ),
        ],
      },
    ],
  },
  /* ================================================================
     ತೆಂಗು — COCONUT
     ================================================================ */
  {
    slug: "coconut",
    name: L("ತೆಂಗು", "Coconut"),
    gist: L(
      "‘ಕಲ್ಪವೃಕ್ಷ’ ಎಂದು ಕರೆಯಲ್ಪಡುವ, ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಬೆಳೆಗಳಲ್ಲಿ ಒಂದು.",
      "Called the 'kalpavriksha', and one of Karnataka's main commercial crops.",
    ),
    sections: [
      {
        id: "intro",
        title: L("ಪರಿಚಯ – ಪ್ರಾಮುಖ್ಯತೆ ಮತ್ತು ಉಪಯೋಗಗಳು", "Introduction — importance and uses"),
        blocks: [
          para(
            "ತೆಂಗನ್ನು ‘ಕಲ್ಪವೃಕ್ಷ’ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ. ಇದು ಕರ್ನಾಟಕದ ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಬೆಳೆಗಳಲ್ಲಿ ಒಂದಾಗಿದೆ. ತೆಂಗಿನಿಂದ ಆಹಾರ, ಎಣ್ಣೆ, ಒಣಕೊಬ್ಬರಿ, ಪಾನೀಯ ಹಾಗೂ ಉರುವಲು ವಸ್ತುಗಳು ದೊರೆಯುತ್ತವೆ. ಹಲವಾರು ಕೈಗಾರಿಕೆಗಳಿಗೆ ಇದು ಕಚ್ಚಾ ಪದಾರ್ಥವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
            "The coconut is called the 'kalpavriksha'. It is one of Karnataka's main commercial crops. It yields food, oil, copra, a drink and fuel material, and it supplies raw material to several industries.",
          ),
        ],
      },
      {
        id: "soil-climate",
        title: L("ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣ", "Soil and climate"),
        blocks: [
          sub("ಮಣ್ಣು", "Soil"),
          list(
            ["ವಿವಿಧ ಮಣ್ಣುಗಳಲ್ಲಿ ತೆಂಗನ್ನು ಬೆಳೆಯಬಹುದು.", "Coconut can be grown on a range of soils."],
            [
              "ನೀರು ಬಸಿದು ಹೋಗುವ ಆಳವಾದ ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು, ಜಂಬಿಟ್ಟಿಗೆ ಮತ್ತು ಕೆಂಪು ಗೋಡು ಮಣ್ಣುಗಳು ಸೂಕ್ತ.",
              "Deep, well-drained sandy loam, laterite and red loam soils are suitable.",
            ],
            [
              "ಜೇಡಿ ಮಣ್ಣು ಹಾಗೂ ನೀರು ನಿಲ್ಲುವ ಪ್ರದೇಶಗಳು ಸೂಕ್ತವಲ್ಲ.",
              "Clay soils and waterlogged areas are not suitable.",
            ],
            [
              "ರಸಸಾರ 5.2 ರಿಂದ 8.0 ಇರುವ ಮಣ್ಣಿನಲ್ಲಿಯೂ ಬೆಳೆಯಬಹುದು.",
              "It can be grown on soils with a pH from 5.2 to 8.0.",
            ],
          ),
          sub("ಹವಾಗುಣ", "Climate"),
          list(
            [
              "ತೆಂಗು ಉಷ್ಣವಲಯದ ಬೆಳೆಯಾಗಿದ್ದು ಹೆಚ್ಚು ಪ್ರಕಾಶಮಾನವಾದ ಬೆಳಕನ್ನು ಬಯಸುತ್ತದೆ.",
              "Coconut is a tropical crop and needs plenty of bright light.",
            ],
            [
              "ಸಮುದ್ರ ಮಟ್ಟದಿಂದ 1000 ಮೀ. ಎತ್ತರದವರೆಗೆ ಬೆಳೆಯಬಹುದು.",
              "It can be grown up to 1,000 m above sea level.",
            ],
            [
              "ವರ್ಷವಿಡೀ ಸಮಾನ ಹಂಚಿಕೆಯಲ್ಲಿ ಸುಮಾರು 700 ಮಿ.ಮೀ. ಮಳೆ ಬೀಳುವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೆಳೆಯಬಹುದು.",
              "It can be grown where about 700 mm of rain falls, evenly distributed through the year.",
            ],
            ["ಉಷ್ಣಾಂಶ 15° ರಿಂದ 35°C ಇರಬೇಕು.", "The temperature should be between 15° and 35°C."],
          ),
        ],
      },
      {
        id: "varieties",
        title: L("ತಳಿಗಳು", "Varieties"),
        blocks: [
          table(
            [
              ["ತಳಿ", "Variety"],
              ["ಫಲ ಬಿಡುವಿಕೆ", "Starts bearing"],
              ["ಇಳುವರಿ", "Yield"],
              ["ವಿಶೇಷ ಲಕ್ಷಣ", "Special feature"],
            ],
            [
              [
                ["ಅರಸೀಕೆರೆ ಟಾಲ್", "Arsikere Tall"],
                ["7–8 ವರ್ಷ", "7–8 years"],
                ["80–100 ಕಾಯಿಗಳು/ಮರ/ವರ್ಷ", "80–100 nuts per palm per year"],
                [
                  "ವಿವಿಧ ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ; ಉತ್ತಮ ಕೊಬ್ಬರಿ ಮತ್ತು ಎಣ್ಣೆ",
                  "Adapts to a range of soils and climates; good copra and oil",
                ],
              ],
              [
                ["ಕಲ್ಪತರು (ತಿಪಟೂರ್ ಟಾಲ್)", "Kalpatharu (Tiptur Tall)"],
                ["7–8 ವರ್ಷ", "7–8 years"],
                ["ಸುಮಾರು 80–100 ಕಾಯಿಗಳು", "About 80–100 nuts"],
                [
                  "ಉತ್ತಮ ಕೊಬ್ಬರಿ ಮತ್ತು ಎಣ್ಣೆ; ಪ್ರತಿ ಹೆಕ್ಟೇರಿಗೆ 2779 ಕಿ.ಗ್ರಾಂ ಕೊಬ್ಬರಿ ಇಳುವರಿ",
                  "Good copra and oil; copra yield of 2,779 kg per hectare",
                ],
              ],
            ],
          ),
        ],
      },
      {
        id: "sowing",
        title: L("ಸಸಿ ಉತ್ಪಾದನೆ ಮತ್ತು ನಾಟಿ", "Seedling production and planting"),
        blocks: [
          sub("ಬೀಜಕಾಯಿಗಳ ಆಯ್ಕೆ", "Selecting seed nuts"),
          list(
            [
              "ಮಳೆಯಾಶ್ರಯದಲ್ಲಿ ಪ್ರತಿ ವರ್ಷ 80–100 ಕಾಯಿಗಳನ್ನು ಬಿಡುವ, 20–40 ವರ್ಷ ವಯಸ್ಸಿನ ಆರೋಗ್ಯಕರ ಮರಗಳಿಂದ ಮಧ್ಯಮ ಗಾತ್ರದ ಗೋಲಾಕಾರದ ಕಾಯಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು.",
              "Select medium-sized, round nuts from healthy rainfed palms aged 20–40 years that bear 80–100 nuts a year.",
            ],
            [
              "ಕಡಿಮೆ ನೀರಿರುವ, ಸಂಪೂರ್ಣ ಬಲಿತ, ಮಧ್ಯಮ ಗಾತ್ರದ ಕಾಯಿಗಳನ್ನು ಆರಿಸಬೇಕು.",
              "Choose fully mature, medium-sized nuts with little water in them.",
            ],
            [
              "ತಾಯಿ ಮರದಲ್ಲಿ 12 ಗೊಂಚಲು ಮತ್ತು 30–40 ಗರಿಗಳು ಇರಬೇಕು.",
              "The mother palm should carry 12 bunches and 30–40 fronds.",
            ],
            [
              "ಅಕ್ಟೋಬರ್–ಮಾರ್ಚ್ ಅವಧಿಯಲ್ಲಿ ಬರುವ ಕಾಯಿಗಳನ್ನು ಬಿತ್ತನೆಗೆ ಬಳಸಬೇಕು.",
              "Use nuts produced between October and March for seed.",
            ],
            [
              "ಆಯ್ದ ಕಾಯಿಗಳನ್ನು 2 ತಿಂಗಳು ತೊಟ್ಟು ಮೇಲ್ಮುಖವಾಗಿ ಶೇಖರಿಸಬೇಕು.",
              "Store the selected nuts for two months with the stalk end facing up.",
            ],
          ),
          sub("ಸಸಿಮಡಿ", "Nursery"),
          list(
            ["ಸಸಿಮಡಿ: 7.5 ಮೀ. × 1.5 ಮೀ.", "Nursery bed: 7.5 m × 1.5 m."],
            [
              "40 ಸೆಂ.ಮೀ. ಅಂತರದಲ್ಲಿ ಸಾಲುಗಳನ್ನು ಮಾಡಿ 45 ಸೆಂ.ಮೀ. ಆಳದ ಕಾಲುವೆ ಮಾಡಿ ಮರಳಿನಿಂದ ತುಂಬಬೇಕು.",
              "Make rows 40 cm apart, dig a trench 45 cm deep, and fill it with sand.",
            ],
            [
              "ಎರಡು ತಿಂಗಳು ಶೇಖರಿಸಿದ ಬೀಜಕಾಯಿಗಳನ್ನು 30 ಸೆಂ.ಮೀ. ಅಂತರದಲ್ಲಿ ನೇರವಾಗಿ ನಾಟಿ ಮಾಡಬೇಕು.",
              "Plant the two-month-stored seed nuts upright at 30 cm spacing.",
            ],
            [
              "ಕಾಯಿಯ ಮೇಲೆ 5 ಸೆಂ.ಮೀ.ಗಿಂತ ಹೆಚ್ಚು ಮರಳು ಇರಬಾರದು.",
              "There should be no more than 5 cm of sand over the nut.",
            ],
            ["3–4 ತಿಂಗಳಲ್ಲಿ ಮೊಳಕೆಯೊಡೆಯುತ್ತದೆ.", "It germinates in 3–4 months."],
            ["ಸುಮಾರು 12–18 ತಿಂಗಳಲ್ಲಿ ನಾಟಿಗೆ ಸಿದ್ಧವಾಗುತ್ತದೆ.", "It is ready for planting in about 12–18 months."],
            [
              "5 ತಿಂಗಳ ನಂತರ ಮೊಳಕೆಯೊಡೆಯುವ ಸಸಿಗಳನ್ನು ನಾಟಿಗೆ ಬಳಸಬಾರದು.",
              "Seedlings that germinate after 5 months should not be used for planting.",
            ],
            [
              "5–6 ಗರಿಗಳು, ದಪ್ಪಕಾಂಡ, ದೃಢತೆ, ತ್ವರಿತ ಬೆಳವಣಿಗೆ ಹಾಗೂ ಹೆಚ್ಚು ಬೇರುಗಳನ್ನು ಹೊಂದಿರುವ ಸಸಿಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು.",
              "Select seedlings with 5–6 leaves, a thick collar, sturdiness, quick growth and plenty of roots.",
            ],
          ),
          sub("ನಾಟಿ ಅಂತರ ಮತ್ತು ಸಸಿಗಳ ಸಂಖ್ಯೆ", "Planting distance and number of seedlings"),
          table(
            [
              ["ಪ್ರದೇಶ/ತಳಿ", "Area / variety"],
              ["ಅಂತರ", "Spacing"],
              ["ಸಸಿಗಳ ಸಂಖ್ಯೆ/ಹೆಕ್ಟೇರ್", "Seedlings per hectare"],
            ],
            [
              [
                [
                  "ಎತ್ತರ ತಳಿಗಳು – ದಕ್ಷಿಣ ಒಣ ಹಾಗೂ ಗುಡ್ಡಗಾಡು ಪ್ರದೇಶ",
                  "Tall varieties — southern dry and hilly areas",
                ],
                ["9 × 9 ಮೀ.", "9 × 9 m"],
                ["123", "123"],
              ],
              [
                ["ಕರಾವಳಿ ಪ್ರದೇಶ", "Coastal area"],
                ["7.5 × 7.5 ಮೀ.", "7.5 × 7.5 m"],
                ["178", "178"],
              ],
              [
                ["ಗಿಡ್ಡ ಮತ್ತು ಸಂಕರಣ ತಳಿಗಳು", "Dwarf and hybrid varieties"],
                ["7.5 × 7.5 ಮೀ.", "7.5 × 7.5 m"],
                ["178", "178"],
              ],
              [
                ["ತೋಟದ ಅಂಚಿನಲ್ಲಿ", "Along the orchard boundary"],
                ["7 × 7 ಮೀ.", "7 × 7 m"],
                ["204", "204"],
              ],
            ],
          ),
          sub("ಗುಣಿ ಮತ್ತು ಸಸಿ ನಾಟಿ", "Pits and planting"),
          list(
            [
              "ತಳಿಗೆ ಅನುಗುಣವಾದ ಅಂತರದಲ್ಲಿ 1 ಘನ ಮೀಟರ್ ಗುಣಿಗಳನ್ನು ತೆಗೆಯಬೇಕು.",
              "Dig pits of 1 cubic metre at the spacing appropriate to the variety.",
            ],
            [
              "ಹಸಿರೆಲೆ, ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ಮತ್ತು ಮೇಲ್ಮಣ್ಣಿನಿಂದ 0.60 ಘನ ಮೀಟರ್ ವರೆಗೆ ತುಂಬಬೇಕು.",
              "Fill to 0.60 cubic metres with green leaf, farmyard manure and topsoil.",
            ],
            [
              "ಮಣ್ಣಿನ ಗುಣಧರ್ಮಕ್ಕೆ ಅನುಗುಣವಾಗಿ 45 ಸೆಂ.ಮೀ. ಆಳದಲ್ಲಿ ಸಸಿ ನಾಟಿ ಮಾಡಬೇಕು.",
              "Plant the seedling at 45 cm depth, according to the nature of the soil.",
            ],
            ["ಕೋಲಿನಿಂದ ಆಧಾರ ನೀಡಬೇಕು.", "Support it with a stake."],
            ["ಬೇಸಿಗೆಯಲ್ಲಿ ಸ್ವಲ್ಪ ನೆರಳು ಒದಗಿಸಬೇಕು.", "Provide some shade in summer."],
            [
              "ಗೆದ್ದಲು ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ನಾಟಿ ಸಮಯದಲ್ಲಿ ಪ್ರತಿ ಗುಣಿಗೆ 10 ಗ್ರಾಂ ಫೋರೇಟ್ ಹರಳುಗಳನ್ನು ಹಾಕಬೇಕು.",
              "For termite control, put 10 g of phorate granules into each pit at planting.",
            ],
          ),
        ],
      },
      {
        id: "nutrients",
        title: L("ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ", "Nutrient management"),
        blocks: [
          sub("ಗೊಬ್ಬರಗಳ ಪ್ರಮಾಣ (ಪ್ರತಿ ಗಿಡಕ್ಕೆ)", "Fertiliser quantity (per palm)"),
          table(
            [
              ["ಕ್ರ.ಸಂ.", "No."],
              ["ಗೊಬ್ಬರದ ಹೆಸರು", "Fertiliser"],
              ["ಪ್ರತಿ ಗಿಡಕ್ಕೆ ಪ್ರಮಾಣ", "Quantity per palm"],
            ],
            [
              [["1", "1"], ["NPK 10:26:26", "NPK 10:26:26"], ["615 ಗ್ರಾಂ", "615 g"]],
              [["2", "2"], ["ಯೂರಿಯಾ", "Urea"], ["410 ಗ್ರಾಂ", "410 g"]],
              [
                ["3", "3"],
                ["MOP (ಮ್ಯೂರಿಯೇಟ್ ಆಫ್ ಪೊಟ್ಯಾಷ್)", "MOP (muriate of potash)"],
                ["735 ಗ್ರಾಂ", "735 g"],
              ],
            ],
          ),
        ],
      },
      {
        id: "water",
        title: L("ನೀರಿನ ನಿರ್ವಹಣೆ", "Water management"),
        blocks: [
          sub("ಮೊದಲ ನಾಲ್ಕು ವರ್ಷದ ಗಿಡಗಳು", "Palms in their first four years"),
          list(
            [
              "ಪ್ರಾರಂಭಿಕ ಹಂತದಲ್ಲಿ ಸುತ್ತು ಪಾತಿ ವಿಧಾನದಲ್ಲಿ ಪ್ರತಿ 2–3 ದಿನಕ್ಕೊಮ್ಮೆ 25–30 ಲೀ.",
              "In the early stage, 25–30 litres every 2–3 days by the ring-basin method.",
            ],
            [
              "ಗಿಡ ಬೆಳೆದಂತೆ ಪ್ರತಿ 4 ದಿನಕ್ಕೊಮ್ಮೆ 75–80 ಲೀ.",
              "As the palm grows, 75–80 litres every 4 days.",
            ],
          ),
          sub("ನಾಲ್ಕು ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಗಿಡಗಳು", "Palms over four years old"),
          list(
            ["1.8–2 ಮೀ. ವೃತ್ತಾಕಾರದಲ್ಲಿ ಪಾತಿ ಮಾಡಬೇಕು.", "Form a circular basin of 1.8–2 m."],
            [
              "ಪ್ರತಿ 4 ದಿನಕ್ಕೊಮ್ಮೆ 200–250 ಲೀ. ನೀರು ಕೊಡಬೇಕು.",
              "Give 200–250 litres of water every 4 days.",
            ],
          ),
          sub("ಹನಿ ನೀರಾವರಿ", "Drip irrigation"),
          list(
            [
              "ಗಿಡದ ಬುಡದಿಂದ 1 ಮೀ. ಅಂತರದಲ್ಲಿ ನಾಲ್ಕು ಸಮಾನಾಂತರ ಸ್ಥಳಗಳಲ್ಲಿ ಗುಂಡಿ ಮಾಡಿ PVC ಪೈಪ್ ಇಡಬೇಕು.",
              "Dig holes at four equally spaced points 1 m from the base of the palm and place PVC pipe in them.",
            ],
            [
              "ಪ್ರತಿ ಹನಿ ಸಾಧನದಿಂದ 2 ಲೀ. ನೀರನ್ನು 4 ಗಂಟೆಗಳ ಕಾಲ ಹಾಯಿಸಬೇಕು.",
              "Run 2 litres of water from each dripper for 4 hours.",
            ],
            [
              "ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಪ್ರತಿ ಗಿಡಕ್ಕೆ ದಿನಕ್ಕೆ 35–40 ಲೀ. ನೀರು ಕೊಡಬೇಕಾಗುತ್ತದೆ.",
              "Depending on soil and climate, 35–40 litres of water a day is needed per palm.",
            ],
          ),
          sub("ರಸನೀರಾವರಿ", "Fertigation"),
          list(
            [
              "ಹನಿ ನೀರಾವರಿಯ ಮೂಲಕ ನೀರಿನಲ್ಲಿ ಕರಗುವ ರಸಗೊಬ್ಬರಗಳನ್ನು ನೀಡುವ ವಿಧಾನವನ್ನು ರಸನೀರಾವರಿ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ.",
              "Supplying water-soluble fertilisers through drip irrigation is called fertigation.",
            ],
            [
              "ಶಿಫಾರಸ್ಸಿನ 50% ರಸಗೊಬ್ಬರವನ್ನು ಪ್ರತಿ ತಿಂಗಳು ನೀಡುವುದರಿಂದ ಪೋಷಕಾಂಶಗಳ ಪೋಲಾಗುವಿಕೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
              "Giving 50% of the recommended fertiliser each month reduces nutrient loss.",
            ],
            [
              "ವರ್ಷದಲ್ಲಿ ಎರಡು ಬಾರಿ ಗಿಡಗಳ ಸಾಲುಗಳ ನಡುವೆ ಉಳುಮೆ ಮಾಡಬೇಕು.",
              "Plough between the rows of palms twice a year.",
            ],
            ["ಅಂತರ ಬೆಳೆಗಳಿಗೆ ಸಿಂಚನ ನೀರಾವರಿ ಸೂಕ್ತ.", "Sprinkler irrigation suits the intercrops."],
          ),
        ],
      },
      {
        id: "intercultural",
        title: L("ಅಂತರ ಬೇಸಾಯ", "Intercultural operations"),
        blocks: [
          sub("ಕಳೆ ನಿಯಂತ್ರಣ", "Weed management"),
          list(
            [
              "ತೆಂಗಿನ ಗಿಡಗಳ ಸುತ್ತಲಿನ ಕಳೆಗಳನ್ನು ಕಾಲಕಾಲಕ್ಕೆ ತೆಗೆಯಬೇಕು.",
              "Remove weeds around the palms from time to time.",
            ],
            [
              "ಕಳೆಗಳನ್ನು ತೆಗೆದುಹಾಕುವುದರಿಂದ ನೀರು ಮತ್ತು ಪೋಷಕಾಂಶಗಳಿಗಾಗಿ ಉಂಟಾಗುವ ಸ್ಪರ್ಧೆ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
              "Removing weeds reduces competition for water and nutrients.",
            ],
            [
              "ತೆಂಗಿನ ಗಿಡದ ಬುಡದ ಸುತ್ತಲಿನ ಪ್ರದೇಶವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಬೇಕು.",
              "Keep the area around the base of the palm clean.",
            ],
          ),
          sub("ಉಳುಮೆ", "Tillage"),
          list(
            [
              "ವರ್ಷದಲ್ಲಿ ಎರಡು ಬಾರಿ ತೆಂಗಿನ ಸಾಲುಗಳ ನಡುವೆ ಉಳುಮೆ ಮಾಡಬೇಕು.",
              "Plough between the rows of palms twice a year.",
            ],
            [
              "ಇದರಿಂದ ಮಣ್ಣು ಸಡಿಲವಾಗಿ, ನೀರು ಮಣ್ಣಿನೊಳಗೆ ಇಂಗಲು ಸಹಾಯವಾಗುತ್ತದೆ.",
              "This loosens the soil and helps water soak in.",
            ],
            [
              "ಉಳುಮೆ ಮಾಡುವಾಗ ತೆಂಗಿನ ಮರಗಳ ಬೇರುಗಳಿಗೆ ಹಾನಿಯಾಗದಂತೆ ಎಚ್ಚರಿಕೆ ವಹಿಸಬೇಕು.",
              "Take care not to damage the roots of the palms while ploughing.",
            ],
          ),
          sub("ಪಾತಿ ಮಾಡುವುದು", "Basin formation"),
          list(
            ["ತೆಂಗಿನ ಮರದ ಸುತ್ತಲೂ ವೃತ್ತಾಕಾರದ ಪಾತಿ ಮಾಡಬೇಕು.", "Form a circular basin around the palm."],
            [
              "ಪಾತಿಯಲ್ಲಿ ನೀರು ಸಂಗ್ರಹವಾಗುವಂತೆ ಹಾಗೂ ಮಣ್ಣಿನಲ್ಲಿ ತೇವಾಂಶ ಉಳಿಯುವಂತೆ ನೋಡಿಕೊಳ್ಳಬೇಕು.",
              "See that water collects in the basin and moisture is retained in the soil.",
            ],
            [
              "ನಾಲ್ಕು ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಮರಗಳಿಗೆ ಸುಮಾರು 1.8–2 ಮೀಟರ್ ವೃತ್ತಾಕಾರದ ಪಾತಿ ಮಾಡಬೇಕು.",
              "For palms over four years old, make a circular basin of about 1.8–2 m.",
            ],
          ),
          sub("ಗೊಬ್ಬರ ಹಾಕುವುದು", "Manuring"),
          list(
            [
              "ನಾಟಿ ಮಾಡುವಾಗ ಪ್ರತಿ ಗುಣಿಗೆ 20 ಕಿ.ಗ್ರಾಂ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ಅಥವಾ ಕಾಂಪೋಸ್ಟ್ ಹಾಕಬೇಕು.",
              "At planting, put 20 kg of farmyard manure or compost into each pit.",
            ],
            [
              "ನಾಲ್ಕು ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಪ್ರತಿ ಮರಕ್ಕೆ ವರ್ಷಕ್ಕೆ 50 ಕಿ.ಗ್ರಾಂ ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ನೀಡಬೇಕು.",
              "Give 50 kg of farmyard manure a year to each palm over four years old.",
            ],
            [
              "ಶಿಫಾರಸ್ಸಿನ ರಾಸಾಯನಿಕ ಗೊಬ್ಬರಗಳನ್ನು ಮರದ ವಯಸ್ಸಿಗೆ ಅನುಗುಣವಾಗಿ ನೀಡಬೇಕು.",
              "Give the recommended chemical fertilisers according to the age of the palm.",
            ],
          ),
          sub("ಮಲ್ಚಿಂಗ್", "Mulching"),
          list(
            [
              "ತೆಂಗಿನ ಬುಡದ ಸುತ್ತಲಿನ ಮಣ್ಣನ್ನು ಅಗತ್ಯಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಸರಿಪಡಿಸಬೇಕು.",
              "Work the soil around the base of the palm as needed.",
            ],
            [
              "ಒಣ ತೆಂಗಿನ ಗರಿಗಳು, ಸಿಪ್ಪೆ ಮತ್ತು ಇತರ ಸಾವಯವ ಪದಾರ್ಥಗಳನ್ನು ಮಣ್ಣಿನ ತೇವಾಂಶ ಸಂರಕ್ಷಣೆಗೆ ಬಳಸಬಹುದು.",
              "Dry fronds, husk and other organic matter can be used to conserve soil moisture.",
            ],
            [
              "ಮಲ್ಚಿಂಗ್ ಮಾಡುವಾಗ ಮರದ ಕಾಂಡಕ್ಕೆ ನೇರವಾಗಿ ಪದಾರ್ಥಗಳನ್ನು ಒತ್ತಿ ಹಾಕಬಾರದು.",
              "When mulching, do not press the material directly against the trunk.",
            ],
          ),
        ],
      },
      {
        id: "intercrops",
        title: L("ಅಂತರ ಬೆಳೆಗಳು", "Intercrops"),
        blocks: [
          sub("8 ವರ್ಷ ವಯಸ್ಸಿನವರೆಗೆ", "Up to 8 years old"),
          para("ಪ್ರದೇಶಕ್ಕೆ ಅನುಗುಣವಾಗಿ:", "According to the area:"),
          list(
            ["ದ್ವಿದಳ ಧಾನ್ಯಗಳು", "Pulses"],
            ["ತರಕಾರಿ ಬೆಳೆಗಳು", "Vegetable crops"],
            ["ಪಪ್ಪಾಯ", "Papaya"],
            ["ಪೈನಾಪಲ್", "Pineapple"],
            ["ಅರಿಶಿನ", "Turmeric"],
            ["ಶುಂಠಿ", "Ginger"],
          ),
          sub("8–25 ವರ್ಷ", "8–25 years"),
          list(
            ["ಕೋಕೋ", "Cocoa"],
            ["ಕರಿಮೆಣಸು", "Black pepper"],
            ["ಅರಿಶಿನ", "Turmeric"],
            ["ಶುಂಠಿ", "Ginger"],
            ["ಅನಾನಸ್", "Pineapple"],
          ),
          sub("25 ವರ್ಷಗಳ ನಂತರ", "After 25 years"),
          list(
            ["ಕೋಕೋ", "Cocoa"],
            ["ಕರಿಮೆಣಸು", "Black pepper"],
            ["ನುಗ್ಗೆ", "Drumstick"],
            ["ಕರಿಬೇವು", "Curry leaf"],
            ["ಪಚೋಲಿ", "Patchouli"],
          ),
        ],
      },
      {
        id: "pests",
        title: L("ಕೀಟ ನಿರ್ವಹಣೆ", "Pest management"),
        blocks: [
          table(
            [
              ["ಕೀಟ", "Pest"],
              ["ಹಾನಿಯ ಲಕ್ಷಣಗಳು", "Symptoms of damage"],
              ["ನಿರ್ವಹಣಾ ಕ್ರಮ", "Management"],
            ],
            [
              [
                ["ಸುಳಿಕೊರೆಯುವ ಕಪ್ಪು ಮೂತಿಯ ದುಂಬಿ", "Rhinoceros beetle"],
                [
                  "ಸುಳಿ ಮತ್ತು ಹೂ ಗೊಂಚಲಿನ ಕವಚ ಕೊರೆಯುವುದು; ಗರಿಗಳ ಮೇಲೆ X ಆಕೃತಿಯ ಗುರುತು; ಗೊಂಚಲು ಒಣಗುವುದು",
                  "It bores the crown and the spathe of the flower bunch; X-shaped cuts appear on the fronds; the bunch dries",
                ],
                [
                  "ಕಬ್ಬಿಣದ ಕೊಕ್ಕೆಯಿಂದ ದುಂಬಿಯನ್ನು ತೆಗೆಯಬೇಕು. ರಂಧ್ರಕ್ಕೆ ಶೇ.2 ಕ್ವಿನಾಲ್‌ಫಾಸ್ ಅಥವಾ ಶೇ.5 ಮೆಲಾಥಿಯಾನ್ ಮತ್ತು ಮರಳಿನ ಮಿಶ್ರಣ ಹಾಕಬೇಕು.",
                  "Remove the beetle with an iron hook. Put a mixture of 2% quinalphos or 5% malathion with sand into the hole.",
                ],
              ],
              [
                ["ಗರಿತಿನ್ನುವ ಕೆಂಪು ಮೂತಿ ಹುಳ", "Leaf-eating caterpillar"],
                [
                  "ಮರಿ ಹುಳುಗಳು ಎಲೆಯ ಕೆಳಭಾಗದಲ್ಲಿ ರೇಷ್ಮೆ ಪಾಡಿನೊಳಗೆ ಕುಳಿತು ಹಸಿರು ಪದಾರ್ಥ ಕೆರೆದು ತಿನ್ನುತ್ತವೆ; ಒಣ ಮಚ್ಚೆಗಳು ಕಾಣುತ್ತವೆ",
                  "The larvae sit in silken galleries on the underside of the leaf and scrape off the green matter; dry patches appear",
                ],
                [
                  "ಬಾಧಿತ ಗರಿಗಳನ್ನು ತೆಗೆದು ಸುಡಬೇಕು. ಕಾರ್ಬಾರಿಲ್ 50 WP 4 ಗ್ರಾಂ/ಲೀ. ನೀರಿಗೆ ಬೆರೆಸಿ ಸಿಂಪಡಿಸಬೇಕು.",
                  "Remove and burn affected fronds. Spray carbaryl 50 WP at 4 g per litre of water.",
                ],
              ],
              [
                ["ಕಾಂಡ ಕೊರೆಯುವ ಕೀಟಗಳು", "Stem borers"],
                [
                  "ಕಾಂಡದಲ್ಲಿ ತೂತು, ಅಂಟು ಪದಾರ್ಥ ಹೊರಬರುವುದು, ನಾರು ಕಾಣುವುದು",
                  "Holes in the trunk, gum oozing out, and fibre visible",
                ],
                [
                  "ಕಾಂಡಕ್ಕೆ ಗಾಯವಾಗದಂತೆ ನೋಡಿಕೊಳ್ಳಬೇಕು. ಗಾಯವಾದಲ್ಲಿ ಕ್ಲೋರೋಪೈರಿಫಾಸ್ ಮತ್ತು ಮಣ್ಣಿನ ಮಿಶ್ರಣದಿಂದ ಮುಚ್ಚಬೇಕು.",
                  "Avoid wounding the trunk. If wounded, cover it with a mixture of chlorpyriphos and soil.",
                ],
              ],
              [
                ["ಬಿಳಿ ನೊಣ", "Whitefly"],
                [
                  "ಎಲೆಗಳ ಕೆಳಭಾಗದಲ್ಲಿ ಗುಂಪಾಗಿ ರಸ ಹೀರುವುದು; ಮೇಲ್ಭಾಗದಲ್ಲಿ ಹಳದಿ ಮಚ್ಚೆಗಳು",
                  "They suck sap in groups on the underside of the leaves; yellow patches appear on the upper side",
                ],
                [
                  "ನೀಡಿರುವ ಕೈಪಿಡಿಯಲ್ಲಿನ ನಿರ್ವಹಣಾ ಕ್ರಮ ಅನುಸರಿಸಬೇಕು.",
                  "Follow the management measure given in the handbook.",
                ],
              ],
              [
                ["ಗೆದ್ದಲು", "Termite"],
                [
                  "ಕಾಂಡದ ಮೇಲೆ ಮಣ್ಣಿನ ಪದರ; ಕಾಂಡ ಕೆರೆದು ತಿನ್ನುವುದು; ಸಸಿಗಳಿಗೆ ಹಾನಿ",
                  "A layer of soil on the trunk; the trunk is scraped and eaten; damage to seedlings",
                ],
                [
                  "ಕ್ಲೋರೋಪೈರಿಫಾಸ್ 20 EC 4 ಮಿ.ಲೀ./ಲೀ. ನೀರಿಗೆ ಬೆರೆಸಿ ಗಿಡದ ಸುತ್ತ ಸುರಿಸಬೇಕು.",
                  "Drench around the palm with chlorpyriphos 20 EC at 4 ml per litre of water.",
                ],
              ],
              [
                ["ನುಸಿ", "Eriophyid mite"],
                [
                  "ಎಳೆಯ ಕಾಯಿಗಳ ತೊಟ್ಟಿನ ಕೆಳಭಾಗದಿಂದ ರಸ ಹೀರುವುದು; ಬಿಳಿ/ಕಂದು ಮಚ್ಚೆಗಳು, ಬಿರುಕು ಮತ್ತು ಅಂಟು ಪದಾರ್ಥ; ಎಳೆ ಕಾಯಿಗಳು ಉದುರುವುದು",
                  "Sap is sucked from under the perianth of young nuts; white or brown patches, cracks and gum appear; young nuts drop",
                ],
                [
                  "ನೀರಿನಲ್ಲಿ ಕರಗುವ ಗಂಧಕ 5 ಗ್ರಾಂ/ಲೀ. ಅಥವಾ ನಿಮಾಝಲ್ 7.5 ಮಿ.ಲೀ. ಅಥವಾ ಇಕೊನೀಮ್‌ಪ್ಲಸ್ 10 ಮಿ.ಲೀ. ಬಳಸುವ ಕ್ರಮ ನೀಡಲಾಗಿದೆ.",
                  "The measure given is water-soluble sulphur at 5 g/litre, or Nimazal at 7.5 ml, or Econeem Plus at 10 ml.",
                ],
              ],
            ],
          ),
          sub("ಸಮಗ್ರ ಕೀಟ ನಿರ್ವಹಣೆ (IPM) – ಪ್ರಮುಖ ಅಂಶಗಳು", "Integrated pest management (IPM) — key points"),
          list(
            [
              "ಸಾಂಸ್ಕೃತಿಕ ನಿರ್ವಹಣೆ: ಬೇಸಿಗೆ ಆಳ ಉಳುಮೆ, ಬೆಳೆ ಪರಿವರ್ತನೆ ಮತ್ತು ನಿರೋಧಕ ತಳಿಗಳ ಬಳಕೆ.",
              "Cultural management: deep summer ploughing, crop rotation and use of resistant varieties.",
            ],
            [
              "ಬೆಳಕಿನ ಬಲೆ: ಎಕರೆಗೆ 1 ಬಲೆ; ವಯಸ್ಕ ಪತಂಗಗಳ ಚಟುವಟಿಕೆ ಗಮನಿಸಲು.",
              "Light trap: 1 per acre, to monitor adult moth activity.",
            ],
            [
              "ಹಳದಿ ಅಂಟು ಬಲೆ: ಎಕರೆಗೆ 8–10 ಬಲೆಗಳು; ಬಿಳಿನೊಣ ಮತ್ತು ಹೇನುಗಳ ನಿರ್ವಹಣೆಗೆ.",
              "Yellow sticky traps: 8–10 per acre, for whitefly and aphid management.",
            ],
            [
              "ನೀಲಿ ಅಂಟು ಬಲೆ: ಎಕರೆಗೆ 8–10 ಬಲೆಗಳು; ಥ್ರಿಪ್ಸ್ ನಿರ್ವಹಣೆಗೆ.",
              "Blue sticky traps: 8–10 per acre, for thrips management.",
            ],
            [
              "ಫೆರೋಮೋನ್ ಬಲೆ: ಎಕರೆಗೆ 4–5 ಬಲೆಗಳು; ನಿರ್ದಿಷ್ಟ ಕೀಟಗಳ ಮೇಲ್ವಿಚಾರಣೆಗೆ. ಸಂಖ್ಯೆ ಕೀಟದ ಪ್ರಕಾರ ಬದಲಾಗುತ್ತದೆ.",
              "Pheromone traps: 4–5 per acre, to monitor specific pests. The number varies with the pest.",
            ],
            [
              "ಯಾಂತ್ರಿಕ ನಿರ್ವಹಣೆ: ಕೀಟಬಾಧಿತ ಭಾಗಗಳು ಮತ್ತು ಮೊಟ್ಟೆಯ ಗುಂಪುಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ನಾಶಪಡಿಸುವುದು.",
              "Mechanical management: collecting and destroying infested parts and egg masses.",
            ],
            [
              "ಜೈವಿಕ ನಿರ್ವಹಣೆ: ಸೂಕ್ತ ಕೀಟಗಳಿಗೆ Trichogramma ಪರಾವಲಂಬಿ ಕಣಜಗಳ ಬಳಕೆ.",
              "Biological management: use of Trichogramma parasitic wasps for suitable pests.",
            ],
            [
              "ಸಸ್ಯಜನ್ಯ ನಿರ್ವಹಣೆ: ಶಿಫಾರಸಿನಂತೆ 5% ಬೇವಿನ ಬೀಜದ ಕಾಳಿನ ಸಾರ (NSKE) ಬಳಕೆ.",
              "Botanical management: use of 5% neem seed kernel extract (NSKE) as recommended.",
            ],
            [
              "ರಾಸಾಯನಿಕ ನಿರ್ವಹಣೆ: ಆರ್ಥಿಕ ಹಾನಿ ಮಟ್ಟ (ETL) ತಲುಪಿದಾಗ ಮಾತ್ರ ಶಿಫಾರಸಿನ ಕೀಟನಾಶಕ ಬಳಕೆ.",
              "Chemical management: use the recommended pesticide only when the economic threshold level (ETL) is reached.",
            ],
            [
              "ನಿರಂತರ ಪರಿಶೀಲನೆ: ವಾರಕ್ಕೆ ಕನಿಷ್ಠ ಎರಡು ಬಾರಿ ಬೆಳೆಯನ್ನು ಪರಿಶೀಲಿಸುವುದು.",
              "Continuous scouting: inspect the crop at least twice a week.",
            ],
          ),
          note(
            "ಬಲೆಗಳ ಸಂಖ್ಯೆ ಮತ್ತು ಜೈವಿಕ ನಿಯಂತ್ರಕಗಳ ಪ್ರಮಾಣವನ್ನು ಬೆಳೆ, ಗುರಿ ಕೀಟ ಹಾಗೂ ಸ್ಥಳೀಯ ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಶಿಫಾರಸಿನಂತೆ ದೃಢಪಡಿಸಿಕೊಳ್ಳಿ.",
            "Confirm the number of traps and the quantity of biological agents against the crop, the target pest and your local agricultural university's recommendation.",
          ),
          table(
            [
              ["ಕ್ರ.ಸಂ.", "No."],
              ["ಕೀಟದ ಹೆಸರು", "Pest"],
              ["ಫೆರೋಮೋನ್ ಬಲೆಯ ಹೆಸರು", "Pheromone lure"],
              ["ಒಂದು ಹೆಕ್ಟೇರ್‌ಗೆ", "Per hectare"],
              ["ಒಂದು ಎಕರೆಗೆ (ಸುಮಾರು)", "Per acre (approx.)"],
            ],
            [
              [
                ["1", "1"],
                ["ಕೆಂಪು ಮೂತಿ ಜೀರುಂಡೆ", "Red palm weevil"],
                ["ಫೆರೋಲ್ಯೂರ್ ಪ್ಲಸ್", "Ferrolure+"],
                ["1 ಬಲೆ", "1 trap"],
                ["1 ಬಲೆ", "1 trap"],
              ],
              [
                ["2", "2"],
                ["ಖಡ್ಗಮೃಗ ಜೀರುಂಡೆ", "Rhinoceros beetle"],
                ["ರೈನೋಲ್ಯೂರ್", "Rhinolure"],
                ["5 ಬಲೆಗಳು", "5 traps"],
                ["2 ಬಲೆಗಳು", "2 traps"],
              ],
            ],
          ),
        ],
      },
      {
        id: "diseases",
        title: L("ರೋಗ ನಿರ್ವಹಣೆ", "Disease management"),
        blocks: [
          table(
            [
              ["ರೋಗ", "Disease"],
              ["ಲಕ್ಷಣಗಳು", "Symptoms"],
              ["ನಿರ್ವಹಣೆ", "Management"],
            ],
            [
              [
                ["ಕಾಂಡ ಸೋರುವ ರೋಗ", "Stem bleeding"],
                [
                  "ಕಾಂಡದ ಮೇಲೆ ಕಂದು ತೇಪೆ, ಬಿರುಕು ಮತ್ತು ಅಂಟು ದ್ರವ ಹೊರಸೂಸುವುದು; ಕಾಂಡ ಬಲಹೀನವಾಗಿ ಇಳುವರಿ ಕಡಿಮೆಯಾಗುವುದು",
                  "Brown patches, cracks and oozing gum on the trunk; the trunk weakens and yield falls",
                ],
                [
                  "ಬಾಧಿತ ಭಾಗವನ್ನು ಕೆತ್ತಿ ಸ್ವಚ್ಛಗೊಳಿಸಿ ಶೇ.1 ಬೋರ್ಡೋ ದ್ರಾವಣ ಲೇಪಿಸಬೇಕು. ಪ್ರತಿ ಗಿಡಕ್ಕೆ 5 ಕಿ.ಗ್ರಾಂ ಬೇವಿನ ಹಿಂಡಿ. ಬಸಿಗಾಲುವೆ ವ್ಯವಸ್ಥೆ ಮಾಡಬೇಕು.",
                  "Chisel out and clean the affected part and apply 1% Bordeaux mixture. Give 5 kg of neem cake per palm. Provide drainage.",
                ],
              ],
              [
                ["ಅಣಬೆ ರೋಗ", "Ganoderma (basal stem rot)"],
                [
                  "ನೆಲದ ಹತ್ತಿರದ ಕಾಂಡದಲ್ಲಿ ಅಣಬೆಯಾಕಾರದ ಶಿಲೀಂಧ್ರ ಬೆಳವಣಿಗೆ; ಬೇರುಗಳಿಗೆ ತೀವ್ರ ಹಾನಿ; ಬೆಳವಣಿಗೆ ಕುಂಠಿತ",
                  "Mushroom-shaped fungal growth on the trunk near the ground; severe root damage; stunted growth",
                ],
                [
                  "ರೋಗಪೀಡಿತ ಗಿಡಗಳನ್ನು ತೆಗೆದು ಸುಡಬೇಕು. ರೋಗಪೀಡಿತ ಪ್ರದೇಶಕ್ಕೆ ಶಿಫಾರಸ್ಸಿನ ಶಿಲೀಂಧ್ರನಾಶಕ ದ್ರಾವಣ ನೀಡಬೇಕು.",
                  "Remove and burn affected palms. Drench the affected area with the recommended fungicide solution.",
                ],
              ],
              [
                ["ಕಣ್ಣುಕೊಳೆ / ಬಡ್ ರಾಟ್", "Bud rot"],
                [
                  "ಸುಳಿಯ ಸುತ್ತಲಿನ ಎಲೆಗಳು ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಜೋತು ಬೀಳುತ್ತವೆ; ಸುಳಿ ಮೃದುವಾಗಿ ಒಣಗಿ ಸಾಯುತ್ತದೆ",
                  "Leaves around the crown turn yellow and droop; the crown softens, dries and dies",
                ],
                [
                  "ಬಾಧಿತ ಸುಳಿ ಭಾಗ ತೆಗೆದು ಸ್ವಚ್ಛಗೊಳಿಸಿ ಮೆಟಲಾಕ್ಸಿಲ್ + ಮ್ಯಾಂಕೋಜೆಬ್ 2 ಗ್ರಾಂ/ಲೀ. ಅಥವಾ ಬೋರ್ಡೋ ಪೇಸ್ಟ್ ಲೇಪಿಸಬೇಕು; ಮಳೆಯ ನೀರು ಬೀಳದಂತೆ ರಕ್ಷಿಸಬೇಕು.",
                  "Remove and clean the affected crown tissue and apply metalaxyl + mancozeb at 2 g/litre or Bordeaux paste; protect it from rain.",
                ],
              ],
              [
                ["ಎಲೆ ಚುಕ್ಕೆ ರೋಗ (ಪೆಸ್ಟಲೋಷಿಯಾ)", "Leaf spot (Pestalotia)"],
                [
                  "ಗರಿಗಳ ಮೇಲೆ ಕಪ್ಪು ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಂಡು ವಿಸ್ತರಿಸುತ್ತವೆ; ಎಲೆಗಳು ಒಣಗುತ್ತವೆ; ಮಳೆಗಾಲದಲ್ಲಿ ತೀವ್ರ",
                  "Black spots appear on the fronds and spread; leaves dry; severe in the rainy season",
                ],
                [
                  "ಮ್ಯಾಂಕೋಜೆಬ್ 75 WP 2 ಗ್ರಾಂ ಅಥವಾ ತಾಮ್ರದ ಆಕ್ಸಿಕ್ಲೋರೈಡ್ 50 WP 3 ಗ್ರಾಂ/ಲೀ. ನೀರಿಗೆ ಬೆರೆಸಿ ಎಲೆಗಳಿಗೆ ಸಿಂಪಡಿಸಬೇಕು.",
                  "Spray the leaves with mancozeb 75 WP at 2 g or copper oxychloride 50 WP at 3 g per litre of water.",
                ],
              ],
            ],
          ),
        ],
      },
      {
        id: "harvest",
        title: L("ಕೊಯ್ಲು ಮತ್ತು ಇಳುವರಿ", "Harvest and yield"),
        blocks: [
          sub("ಕೊಯ್ಲು", "Harvest"),
          list(
            [
              "ತಳಿಗೆ ಅನುಗುಣವಾಗಿ ನಾಟಿ ಮಾಡಿದ 4–7 ವರ್ಷಗಳಲ್ಲಿ ಕಾಯಿ ಬಿಡಲು ಪ್ರಾರಂಭಿಸುತ್ತದೆ.",
              "Depending on the variety, it starts bearing 4–7 years after planting.",
            ],
            ["ಗಿಡ್ಡ ತಳಿಗಳು 3–4 ವರ್ಷದಲ್ಲಿ ಫಲ ನೀಡುತ್ತವೆ.", "Dwarf varieties bear in 3–4 years."],
          ),
          sub("ಸರಾಸರಿ ಇಳುವರಿ", "Average yield"),
          table(
            [
              ["ತಳಿ", "Variety"],
              ["ಇಳುವರಿ", "Yield"],
            ],
            [
              [
                ["ಎತ್ತರ ತಳಿಗಳು", "Tall varieties"],
                ["80–100 ಕಾಯಿಗಳು/ಮರ/ವರ್ಷ", "80–100 nuts per palm per year"],
              ],
              [
                ["ಗಿಡ್ಡ ತಳಿಗಳು", "Dwarf varieties"],
                ["80–95 ಕಾಯಿಗಳು/ಮರ/ವರ್ಷ", "80–95 nuts per palm per year"],
              ],
              [
                ["ಸಂಕರಣ ತಳಿಗಳು", "Hybrid varieties"],
                ["100–150 ಕಾಯಿಗಳು/ಮರ/ವರ್ಷ", "100–150 nuts per palm per year"],
              ],
            ],
          ),
        ],
      },
      {
        id: "post-harvest",
        title: L("ಕೊಯ್ಲಿನ ನಂತರದ ನಿರ್ವಹಣೆ ಮತ್ತು ಸಂಸ್ಕರಣೆ", "Post-harvest management and processing"),
        blocks: [
          sub("ಉಂಡೆ ಕೊಬ್ಬರಿ", "Ball copra"),
          list(
            [
              "ಚೆನ್ನಾಗಿ ಬಲಿತ ಕಾಯಿಗಳನ್ನು ಗಾಳಿಯಾಡುವ ಎತ್ತರದ ಜಾಗದಲ್ಲಿ 8–12 ತಿಂಗಳು ಶೇಖರಿಸಬೇಕು.",
              "Store well-matured nuts in a raised, airy place for 8–12 months.",
            ],
            ["ತೊಟ್ಟು ಮೇಲ್ಮುಖವಾಗಿರುವಂತೆ ಇಡುವುದು ಅಪೇಕ್ಷಣೀಯ.", "It is preferable to keep the stalk end facing up."],
            [
              "ಒಳಗಿನ ನೀರು ಒಣಗಿ, ಕಾಯಿ ಅಲುಗಾಡಿಸಿದಾಗ ಒಳಗಿನಿಂದ ಕಟಕಟ ಶಬ್ದ ಕೇಳಿಸಿದ ನಂತರ ಸಿಪ್ಪೆ ಮತ್ತು ಕವಚ ತೆಗೆದು ಉಂಡೆ ಕೊಬ್ಬರಿ ಪಡೆಯಬಹುದು.",
              "Once the water inside has dried and the nut rattles when shaken, remove the husk and shell to obtain ball copra.",
            ],
          ),
          sub("ಹೋಳು ಕೊಬ್ಬರಿ", "Cup copra"),
          list(
            [
              "ಬಲಿತ ಕಾಯಿಗಳ ಸಿಪ್ಪೆ ತೆಗೆದು ಎರಡು ಹೋಳುಗಳಾಗಿ ಮಾಡಬೇಕು.",
              "Dehusk mature nuts and split them into two halves.",
            ],
            ["ಬಿಸಿಲಿನಲ್ಲಿ ಅಥವಾ ಡ್ರೈಯರ್‌ನಲ್ಲಿ ಒಣಗಿಸಬೇಕು.", "Dry them in the sun or in a drier."],
            ["ಒಣಗಿದ ಕೊಬ್ಬರಿಯಿಂದ ಕವಚ ಬೇರ್ಪಡುತ್ತದೆ.", "The shell separates from the dried copra."],
            ["ಹೆಚ್ಚಾಗಿ ಎಣ್ಣೆ ತೆಗೆಯಲು ಬಳಸಲಾಗುತ್ತದೆ.", "It is used mostly for extracting oil."],
          ),
          sub("ಮೌಲ್ಯವರ್ಧಿತ ಉತ್ಪನ್ನಗಳು", "Value-added products"),
          list(
            ["ಎಳನೀರು ಹಿಮಚೆಂಡು", "Tender coconut water ice ball"],
            ["ತೆಂಗಿನಕಾಯಿ ಚಿಪ್ಸ್", "Coconut chips"],
            ["ಕೊಬ್ಬರಿ ಡ್ರೈಯರ್ ಮೂಲಕ ಕೊಬ್ಬರಿ ಒಣಗಿಸುವುದು", "Drying copra using a copra drier"],
          ),
          sub("ಕೊಬ್ಬರಿ ಡ್ರೈಯರ್", "Copra drier"),
          list(
            [
              "ಸಣ್ಣ ಹಿಡುವಳಿದಾರರ ಕೊಬ್ಬರಿ ಡ್ರೈಯರ್‌ನಲ್ಲಿ ಒಂದು ಬಾರಿಗೆ 400 ಕಾಯಿಗಳ ಚಿಪ್ಪುಗಳನ್ನು ಒಣಗಿಸಬಹುದು.",
              "A smallholder's copra drier can dry the kernels of 400 nuts at a time.",
            ],
            [
              "ಚಿಪ್ಪುಗಳನ್ನು ಉರಿಸುವ ಕೊಬ್ಬರಿ ಡ್ರೈಯರ್‌ನಲ್ಲಿ ಒಂದು ಬಾರಿಗೆ 1000 ಕಾಯಿಗಳನ್ನು 24 ಗಂಟೆಗಳಲ್ಲಿ ಒಣಗಿಸಬಹುದು.",
              "A shell-fired copra drier can dry 1,000 nuts in 24 hours.",
            ],
          ),
        ],
      },
    ],
  },
  /* ================================================================
     ಶುಂಠಿ — GINGER
     ================================================================ */
  {
    slug: "ginger",
    name: L("ಶುಂಠಿ", "Ginger"),
    gist: L(
      "ಗೆಡ್ಡೆಗಳನ್ನು ಸಂಬಾರ ಪದಾರ್ಥವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ; ಭಾರತವು ಪ್ರಪಂಚದ ಪ್ರಮುಖ ಶುಂಠಿ ಉತ್ಪಾದಿಸುವ ದೇಶ.",
      "The rhizomes are used as a spice; India is the world's leading producer of ginger.",
    ),
    sections: [
      {
        id: "intro",
        title: L("ಪರಿಚಯ – ಬೆಳೆಯ ಪ್ರಾಮುಖ್ಯತೆ ಮತ್ತು ಉಪಯೋಗಗಳು", "Introduction — importance and uses"),
        blocks: [
          list(
            ["ಇದರ ಗೆಡ್ಡೆಗಳನ್ನು ಸಂಬಾರ ಪದಾರ್ಥವಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ.", "Its rhizomes are used as a spice."],
            [
              "ಭಾರತವು ಪ್ರಪಂಚದ ಪ್ರಮುಖ ಶುಂಠಿ ಉತ್ಪಾದಿಸುವ ದೇಶವಾಗಿದೆ.",
              "India is the world's leading ginger-producing country.",
            ],
            [
              "ಭಾರತದ ಬಹುತೇಕ ಎಲ್ಲ ರಾಜ್ಯಗಳಲ್ಲಿ ಶುಂಠಿಯನ್ನು ಬೆಳೆಯಲಾಗುತ್ತದೆ.",
              "Ginger is grown in almost every state of India.",
            ],
            [
              "ಕೇರಳ, ಕರ್ನಾಟಕ, ಮೇಘಾಲಯ, ಅರುಣಾಚಲ ಪ್ರದೇಶ, ಮಿಜೋರಾಮ್, ಸಿಕ್ಕಿಂ, ನಾಗಾಲ್ಯಾಂಡ್ ಮತ್ತು ಒಡಿಶಾ ರಾಜ್ಯಗಳು ಸೇರಿ ದೇಶದ ಒಟ್ಟು ಶುಂಠಿ ಉತ್ಪಾದನೆಯ ಶೇಕಡಾ 70ರಷ್ಟು ಉತ್ಪಾದಿಸುತ್ತವೆ.",
              "Kerala, Karnataka, Meghalaya, Arunachal Pradesh, Mizoram, Sikkim, Nagaland and Odisha together produce about 70% of the country's total ginger output.",
            ],
          ),
        ],
      },
      {
        id: "soil-climate",
        title: L("ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣದ ಅವಶ್ಯಕತೆಗಳು", "Soil and climate requirements"),
        blocks: [
          sub("ಮಣ್ಣು", "Soil"),
          list(
            ["ನೀರು ಚೆನ್ನಾಗಿ ಬಸಿದು ಹೋಗುವ ಮಣ್ಣು ಸೂಕ್ತ.", "Well-drained soil is suitable."],
            [
              "ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು, ಜೇಡಿ ಗೋಡು, ಕೆಂಪು ಗೋಡು ಮತ್ತು ಜೆಂಬಿಟ್ಟಿಗೆ ಗೋಡು ಮಣ್ಣುಗಳಲ್ಲಿ ಶುಂಠಿ ಹುಲುಸಾಗಿ ಬೆಳೆಯುತ್ತದೆ.",
              "Ginger grows luxuriantly on sandy loam, clay loam, red loam and lateritic loam soils.",
            ],
            [
              "ಸಾವಯವ ಪದಾರ್ಥ ಅಧಿಕವಾಗಿರುವ, ಹುಡಿಹುಡಿಯಾಗಿರುವ ಗೋಡು ಮಣ್ಣು ಸೂಕ್ತವಾಗಿದೆ.",
              "A friable loam rich in organic matter is suitable.",
            ],
            [
              "ಶುಂಠಿಯು ಹೆಚ್ಚು ಪೋಷಕಾಂಶಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವ ಬೆಳೆಯಾಗಿರುವುದರಿಂದ ಪ್ರತಿ ವರ್ಷವೂ ಸತತವಾಗಿ ಶುಂಠಿಯನ್ನೇ ಬೆಳೆಯುವುದು ಸೂಕ್ತವಲ್ಲ.",
              "Because ginger is a heavy feeder, growing it on the same land year after year is not advisable.",
            ],
          ),
          sub("ಹವಾಗುಣ", "Climate"),
          list(
            [
              "ಶುಂಠಿಯು ಬೆಚ್ಚಗಿನ ಮತ್ತು ಆರ್ದ್ರ ಹವಾಗುಣದಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ.",
              "Ginger grows in a warm, humid climate.",
            ],
            [
              "ಸಮುದ್ರ ಮಟ್ಟದಿಂದ 1,500 ಮೀಟರ್ ಎತ್ತರದವರೆಗಿನ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬೆಳೆಯಬಹುದು.",
              "It can be grown up to 1,500 m above sea level.",
            ],
            [
              "ನೀರಾವರಿ ಮತ್ತು ಮಳೆಯಾಶ್ರಿತ ಪ್ರದೇಶಗಳೆರಡರಲ್ಲಿಯೂ ಬೆಳೆಯಬಹುದು.",
              "It can be grown both under irrigation and under rainfed conditions.",
            ],
          ),
          sub("ಮಳೆ", "Rainfall"),
          list(
            [
              "ಬಿತ್ತನೆಯಿಂದ ಗಡ್ಡೆಗಳು ಮೊಳಕೆಯೊಡೆಯುವವರೆಗೆ ಸಾಧಾರಣ ಮಳೆ ಅಗತ್ಯ.",
              "Moderate rain is needed from planting until the rhizomes sprout.",
            ],
            [
              "ಬೆಳವಣಿಗೆಯ ಅವಧಿಯಲ್ಲಿ ಚೆನ್ನಾಗಿ ಹಂಚಿಕೆಯಾಗಿ ಬೀಳುವ ಅಧಿಕ ಮಳೆ ಅಗತ್ಯ.",
              "Heavy, well-distributed rain is needed during the growing period.",
            ],
            [
              "ಕೊಯ್ಲಿಗೆ ಮುಂಚಿನ ಒಂದು ತಿಂಗಳು ಒಣ ಹವೆ ಅವಶ್ಯಕ.",
              "Dry weather is needed for the month before harvest.",
            ],
          ),
        ],
      },
      {
        id: "varieties",
        title: L("ತಳಿಗಳು", "Varieties"),
        blocks: [
          sub("ಸ್ಥಳೀಯ ತಳಿಗಳು", "Local varieties"),
          table(
            [
              ["ಕ್ರ.ಸಂ", "No."],
              ["ತಳಿಯ ಹೆಸರು", "Variety"],
              ["ಹಸಿ ಶುಂಠಿಯ ಸರಾಸರಿ ಇಳುವರಿ (ಟನ್/ಹೆಕ್ಟೇರ್)", "Average fresh yield (t/ha)"],
              ["ಒಣಗಿದ ಶುಂಠಿ (%)", "Dry ginger (%)"],
              ["ಕಚ್ಚಾ ನಾರು (%)", "Crude fibre (%)"],
              ["ಓಲಿಯೊರೆಸಿನ್ (%)", "Oleoresin (%)"],
              ["ಸುಗಂಧ ತೈಲ (%)", "Essential oil (%)"],
              ["ಅವಧಿ (ದಿನಗಳು)", "Duration (days)"],
            ],
            [
              [
                ["1", "1"],
                ["ರಿಯೋ ಡಿ ಜನೈರೊ", "Rio de Janeiro"],
                ["17.65", "17.65"],
                ["20.0", "20.0"],
                ["5.6", "5.6"],
                ["10.5", "10.5"],
                ["2.3", "2.3"],
                ["190", "190"],
              ],
            ],
          ),
        ],
      },
      {
        id: "sowing",
        title: L("ಬಿತ್ತನೆ ಮತ್ತು ನಾಟಿ", "Sowing and planting"),
        blocks: [
          sub("ಬಿತ್ತನೆ ಸಮಯ", "Planting time"),
          list(
            [
              "ಪಶ್ಚಿಮ ಕರಾವಳಿ ಪ್ರದೇಶಗಳಲ್ಲಿ ಮಳೆಗಾಲ ಆರಂಭವಾದಾಗ ಮೇ ತಿಂಗಳ ಮೊದಲ 15 ದಿನಗಳಲ್ಲಿ ನಾಟಿ ಮಾಡುವುದು ಸೂಕ್ತ.",
              "In the west coast areas, planting in the first fortnight of May, as the rains begin, is suitable.",
            ],
            [
              "ನೀರಾವರಿ ಪ್ರದೇಶಗಳಲ್ಲಿ ಫೆಬ್ರವರಿ ಮಧ್ಯದಲ್ಲಿ ಅಥವಾ ಮಾರ್ಚ್ ಆರಂಭದಲ್ಲಿ ನಾಟಿ ಮಾಡಬಹುದು.",
              "In irrigated areas, planting can be done in mid-February or early March.",
            ],
          ),
          sub("ಬಿತ್ತನೆ ಪ್ರಮಾಣ", "Seed rate"),
          list([
            "ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ 1,500–1,800 ಕೆ.ಜಿ. ಬಿತ್ತನೆ ಶುಂಠಿ.",
            "1,500–1,800 kg of seed rhizome per hectare.",
          ]),
          sub("ಜಮೀನು ತಯಾರಿಕೆ", "Land preparation"),
          list(
            [
              "ಬೇಸಿಗೆ ಮಳೆ ಬಂದಾಗ ನಾಲ್ಕರಿಂದ ಐದು ಬಾರಿ ಉಳುಮೆ ಮಾಡಿ ಮಣ್ಣನ್ನು ಪುಡಿ ಪುಡಿಯಾಗಿ ಹದ ಮಾಡಬೇಕು.",
              "When the summer rains come, plough four to five times and work the soil to a fine tilth.",
            ],
            [
              "ಒಂದು ಮೀಟರ್ ಅಗಲ, 15 ಸೆಂ.ಮೀ. ಎತ್ತರ ಮತ್ತು ಅನುಕೂಲಕರ ಉದ್ದವಿರುವ ಸಸಿಮಡಿಗಳನ್ನು ತಯಾರಿಸಬೇಕು.",
              "Prepare beds one metre wide, 15 cm high and of convenient length.",
            ],
            ["ಸಸಿಮಡಿಗಳ ನಡುವೆ 50 ಸೆಂ.ಮೀ. ಅಂತರವಿರಬೇಕು.", "Leave 50 cm between beds."],
            [
              "ನೀರಾವರಿ ಬೆಳೆಯಲ್ಲಿ 40 ಸೆಂ.ಮೀ. ಅಂತರದಲ್ಲಿ ಏರುಗಳನ್ನು ಮಾಡಬೇಕು.",
              "In an irrigated crop, make ridges 40 cm apart.",
            ],
            [
              "ಗಡ್ಡೆ ಕೊಳೆ ರೋಗ ಮತ್ತು ದಂಡಾಣುಗಳ ಬಾಧೆ ಹೆಚ್ಚಿರುವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪಾರದರ್ಶಕ ಪಾಲಿಥೀನ್ ಹಾಳೆಗಳನ್ನು ಸಸಿಮಡಿಗಳ ಮೇಲೆ 40 ದಿನಗಳವರೆಗೆ ಹರಡಿ ಮಣ್ಣಿನ ಸೌರೀಕರಣ ಮಾಡಬೇಕು.",
              "Where rhizome rot and bacterial problems are severe, solarise the soil by spreading transparent polythene sheets over the beds for 40 days.",
            ],
          ),
          sub("ಬಿತ್ತನೆ ಗಡ್ಡೆಗಳ ಆಯ್ಕೆ", "Selecting seed rhizomes"),
          list(
            [
              "ಕನಿಷ್ಠ 15–25 ಗ್ರಾಂ ತೂಕವಿರುವ ಗಡ್ಡೆ ತುಂಡುಗಳನ್ನು ನಾಟಿಗೆ ಬಳಸಬೇಕು.",
              "Use rhizome pieces weighing at least 15–25 g for planting.",
            ],
            [
              "ರೋಗರಹಿತ ಮತ್ತು ಆರೋಗ್ಯಕರ ಗಡ್ಡೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು.",
              "Select disease-free, healthy rhizomes.",
            ],
          ),
          sub("ನಾಟಿ ವಿಧಾನ", "Planting method"),
          list(
            ["ಮರಳುಗೋಡು ಮಣ್ಣಿನಲ್ಲಿ ಸಮತಟ್ಟಾದ ಮಡಿಗಳನ್ನು ತಯಾರಿಸಬೇಕು.", "On sandy loam, prepare flat beds."],
            ["ಜೇಡಿ ಮಣ್ಣಿನಲ್ಲಿ ಎತ್ತರದ ಮಡಿಗಳನ್ನು ತಯಾರಿಸಬೇಕು.", "On clay soil, prepare raised beds."],
            [
              "ಮಡಿಗಳ ಉದ್ದ 3–5 ಮೀಟರ್ ಮತ್ತು ಅಗಲ 90 ಸೆಂ.ಮೀ. ಇರಬೇಕು.",
              "Beds should be 3–5 m long and 90 cm wide.",
            ],
            [
              "ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಗೊಬ್ಬರಗಳನ್ನು ನಾಟಿ ಮಾಡುವಾಗ ಮಣ್ಣಿನಲ್ಲಿ ಸಂಪೂರ್ಣವಾಗಿ ಬೆರೆಸಬೇಕು.",
              "Mix the phosphorus and potash fertilisers thoroughly into the soil at planting.",
            ],
            [
              "ಬಿತ್ತನೆ ಶುಂಠಿಯನ್ನು ಮಡಿಗಳಲ್ಲಿ 30 ಸೆಂ.ಮೀ. ಅಂತರದಲ್ಲಿ ನಾಟಿ ಮಾಡಬೇಕು.",
              "Plant the seed rhizomes in the beds at 30 cm spacing.",
            ],
          ),
          sub("ಬೀಜೋಪಚಾರ", "Seed treatment"),
          para(
            "ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ನಾಟಿಗೆ ಮೊದಲು ಬೀಜದ ಗಡ್ಡೆಗಳನ್ನು ಕೆಳಗಿನ ದ್ರಾವಣದಲ್ಲಿ 30 ನಿಮಿಷ ನೆನೆಸಲು ತಿಳಿಸಲಾಗಿದೆ:",
            "The source text says to soak the seed rhizomes for 30 minutes before planting in the following solution:",
          ),
          list(
            ["ಬ್ಲೀಚಿಂಗ್ ಪೌಡರ್ – 2 ಗ್ರಾಂ/ಲೀಟರ್", "Bleaching powder — 2 g/litre"],
            ["ಮೆಟಲಾಕ್ಸಿಲ್ ಎಂ.ಝಡ್. 72 – 1 ಗ್ರಾಂ/ಲೀಟರ್", "Metalaxyl MZ 72 — 1 g/litre"],
            ["ಸ್ಟ್ರೆಪ್ಟೋಸೈಕ್ಲಿನ್ – 1 ಗ್ರಾಂ/ಲೀಟರ್", "Streptocycline — 1 g/litre"],
            ["ಎಂಡೋಸಲ್ಫಾನ್ – 2 ಮಿ.ಲೀ./ಲೀಟರ್", "Endosulfan — 2 ml/litre"],
          ),
          para(
            "ಸಂಸ್ಕರಿಸಿದ ಗಡ್ಡೆಗಳನ್ನು ನೆರಳಿನಲ್ಲಿ ಹರಡಿ ಒಣಗಿಸಿ ನಾಟಿಗೆ ಬಳಸಬೇಕು.",
            "Spread the treated rhizomes in the shade to dry before planting.",
          ),
        ],
      },
      {
        id: "nutrients",
        title: L("ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ", "Nutrient management"),
        blocks: [
          sub("ಗೊಬ್ಬರಗಳ ಪ್ರಮಾಣದ ಪಟ್ಟಿ", "Fertiliser quantities"),
          table(
            [
              ["ಕ್ರ.ಸಂ.", "No."],
              ["ಗೊಬ್ಬರದ ಹೆಸರು", "Fertiliser"],
              ["ಚೀಲಗಳ ಸಂಖ್ಯೆ", "Number of bags"],
            ],
            [
              [["1", "1"], ["NPK 10:26:26", "NPK 10:26:26"], ["4 ಚೀಲಗಳು", "4 bags"]],
              [["2", "2"], ["ಯೂರಿಯಾ", "Urea"], ["3.5 ಚೀಲಗಳು", "3.5 bags"]],
              [
                ["3", "3"],
                ["MOP (ಮ್ಯೂರಿಯೇಟ್ ಆಫ್ ಪೊಟ್ಯಾಷ್)", "MOP (muriate of potash)"],
                ["1 ಚೀಲ", "1 bag"],
              ],
            ],
          ),
        ],
      },
      {
        id: "water",
        title: L("ನೀರಿನ ನಿರ್ವಹಣೆ", "Water management"),
        blocks: [
          list(
            [
              "ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣವನ್ನು ಆಧರಿಸಿ 6–8 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರು ಹಾಯಿಸಬೇಕು.",
              "Irrigate every 6–8 days, depending on soil and climate.",
            ],
            [
              "ಬಿತ್ತನೆಯಿಂದ ಗಡ್ಡೆಗಳು ಮೊಳಕೆಯೊಡೆಯುವವರೆಗೆ ಸಾಧಾರಣ ಮಳೆ ಅಗತ್ಯ.",
              "Moderate rain is needed from planting until the rhizomes sprout.",
            ],
            [
              "ಬೆಳವಣಿಗೆಯ ಅವಧಿಯಲ್ಲಿ ಚೆನ್ನಾಗಿ ಹಂಚಿಕೆಯಾದ ಅಧಿಕ ಮಳೆ ಅಗತ್ಯ.",
              "Heavy, well-distributed rain is needed during the growing period.",
            ],
            ["ಕೊಯ್ಲಿಗೆ ಮುಂಚಿನ ಒಂದು ತಿಂಗಳು ಒಣ ಹವೆ ಅಗತ್ಯ.", "Dry weather is needed for the month before harvest."],
            [
              "ಜಮೀನಿನಲ್ಲಿ ನೀರು ನಿಲ್ಲದಂತೆ ಬಸಿ ಕಾಲುವೆಗಳನ್ನು ತೆಗೆಯಬೇಕು.",
              "Open drainage channels so that water does not stand in the field.",
            ],
          ),
        ],
      },
      {
        id: "intercultural",
        title: L("ಅಂತರ ಬೇಸಾಯ ಕ್ರಮಗಳು", "Intercultural operations"),
        blocks: [
          sub("ಕಳೆ ನಿಯಂತ್ರಣ", "Weed control"),
          list(
            [
              "ಬೆಳವಣಿಗೆಯನ್ನು ಆಧರಿಸಿ ಎರಡು–ಮೂರು ಬಾರಿ ಕಳೆ ತೆಗೆಯಬೇಕು.",
              "Weed two or three times, depending on growth.",
            ],
            [
              "ರಸಗೊಬ್ಬರ ಮತ್ತು ಹೊದಿಕೆ ಹಾಕುವ ಮೊದಲು ಕಳೆ ತೆಗೆಯಬೇಕು.",
              "Weed before applying fertiliser and mulch.",
            ],
          ),
          sub("ಹೊದಿಕೆ ಹಾಕುವುದು", "Mulching"),
          list(
            [
              "ನಾಟಿ ಮಾಡುವಾಗ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ 10–12 ಟನ್ ಹಸಿರೆಲೆಗಳಿಂದ ಮೊದಲ ಹೊದಿಕೆ ಹಾಕಬೇಕು.",
              "At planting, apply the first mulch of 10–12 tonnes of green leaf per hectare.",
            ],
            [
              "ನಾಟಿ ಮಾಡಿದ 40 ಮತ್ತು 90 ದಿನಗಳ ನಂತರ ಪ್ರತಿ ಹೆಕ್ಟೇರ್‌ಗೆ 7.5 ಟನ್ ಹೊದಿಕೆ ಹಾಕಬೇಕು.",
              "At 40 and 90 days after planting, apply 7.5 tonnes of mulch per hectare.",
            ],
            [
              "ಇದರಿಂದ ಮಣ್ಣಿನ ಸವಕಳಿ ತಡೆಯಬಹುದು, ಸಾವಯವ ಪದಾರ್ಥ ಸೇರಿಸಬಹುದು, ಕಳೆ ನಿಯಂತ್ರಿಸಬಹುದು ಮತ್ತು ತೇವಾಂಶ ಸಂರಕ್ಷಿಸಬಹುದು.",
              "This prevents soil erosion, adds organic matter, controls weeds and conserves moisture.",
            ],
          ),
          sub("ಮಣ್ಣು ಏರು ಹಾಕುವುದು", "Earthing up"),
          list(
            [
              "ನಾಟಿ ಮಾಡಿದ 40 ಮತ್ತು 90 ದಿನಗಳ ನಂತರ ಕಳೆ ತೆಗೆದು, ರಸಗೊಬ್ಬರ ಹಾಕಿದ ಸಮಯದಲ್ಲಿ ಮಣ್ಣು ಏರು ಹಾಕಬೇಕು.",
              "At 40 and 90 days after planting, weed and earth up at the time of fertiliser application.",
            ],
            [
              "ಇದರಿಂದ ಗಡ್ಡೆಗಳು ಮಣ್ಣಿನಿಂದ ಹೊರಗೆ ಕಾಣದಂತೆ ಮುಚ್ಚಲು ಮತ್ತು ಗಡ್ಡೆಗಳ ಬೆಳವಣಿಗೆಗೆ ಅನುಕೂಲವಾಗುತ್ತದೆ.",
              "This keeps the rhizomes covered and helps them develop.",
            ],
          ),
        ],
      },
      {
        id: "cropping-systems",
        title: L("ಬೆಳೆ ಪರಿವರ್ತನೆ ಮತ್ತು ಮಿಶ್ರ ಬೆಳೆ", "Crop rotation and mixed cropping"),
        blocks: [
          sub("ಬೆಳೆ ಪರಿವರ್ತನೆ", "Crop rotation"),
          para(
            "ಶುಂಠಿಯ ನಂತರ ಕೆಳಗಿನ ಬೆಳೆಗಳನ್ನು ಪರ್ಯಾಯ ಬೆಳೆಗಳಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ:",
            "The following are grown as rotation crops after ginger:",
          ),
          list(
            ["ಮರಗೆಣಸು", "Cassava"],
            ["ರಾಗಿ", "Ragi"],
            ["ಭತ್ತ", "Paddy"],
            ["ಎಳ್ಳು", "Sesame"],
            ["ಮುಸುಕಿನ ಜೋಳ", "Maize"],
            ["ತರಕಾರಿ ಬೆಳೆಗಳು", "Vegetable crops"],
          ),
          note(
            "ಟೊಮೆಟೊ, ಆಲೂಗಡ್ಡೆ, ಮೆಣಸಿನಕಾಯಿ, ಬದನೆಕಾಯಿ ಮತ್ತು ಶೇಂಗಾ ಬೆಳೆಗಳನ್ನು ಶುಂಠಿಯ ನಂತರ ಬೆಳೆಯಬಾರದು. ಇವು ರಾಲ್ಸ್ಟೋನಿಯಾ ಸೊಲಾನೇಸಿಯಾರಂ ಎಂಬ ಸೂಕ್ಷ್ಮಾಣುಜೀವಿಗೆ ಆಶ್ರಯ ಸಸ್ಯಗಳಾಗಿವೆ.",
            "Tomato, potato, chilli, brinjal and groundnut should not be grown after ginger. They are host plants for the organism Ralstonia solanacearum.",
          ),
          sub("ಮಿಶ್ರ ಬೆಳೆ", "Mixed cropping"),
          list(
            [
              "ಕರ್ನಾಟಕದಲ್ಲಿ ರಾಗಿ, ತೊಗರಿ ಮತ್ತು ಹರಳು ಬೆಳೆಗಳೊಂದಿಗೆ ಶುಂಠಿಯನ್ನು ಮಿಶ್ರ ಬೆಳೆಯಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ.",
              "In Karnataka, ginger is grown as a mixed crop with ragi, pigeon pea and castor.",
            ],
            [
              "ಕೇರಳ ಮತ್ತು ಕರ್ನಾಟಕದಲ್ಲಿ ತೆಂಗು, ಅಡಿಕೆ, ಕಾಫಿ ಮತ್ತು ಕಿತ್ತಳೆ ತೋಟಗಳಲ್ಲಿ ಅಂತರ ಬೆಳೆಯಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ.",
              "In Kerala and Karnataka it is grown as an intercrop in coconut, areca nut, coffee and orange orchards.",
            ],
            [
              "ಔಡಲ ಅಥವಾ ತೊಗರಿಯಂತಹ ಎತ್ತರದ ಬೆಳೆಗಳನ್ನು ನೆರಳು ಒದಗಿಸಲು ಮಿಶ್ರ ಬೆಳೆಯಾಗಿ ತೆಗೆದುಕೊಳ್ಳಬಹುದು.",
              "Tall crops such as castor or pigeon pea can be taken as a mixed crop to provide shade.",
            ],
          ),
        ],
      },
      {
        id: "pests",
        title: L("ಕೀಟ ನಿರ್ವಹಣೆ", "Pest management"),
        blocks: [
          sub("ಕಾಂಡ ಕೊರೆಯುವ ಹುಳು", "Shoot borer"),
          para("ಹಾನಿಯ ಲಕ್ಷಣಗಳು", "Symptoms of damage"),
          list(
            [
              "ಮರಿಹುಳು ಹಸಿ ಕಾಂಡವನ್ನು ಸೇರಿ ಸುರಂಗ ಕೊರೆದು ತಿನ್ನುತ್ತದೆ.",
              "The larva enters the green shoot and tunnels through it.",
            ],
            [
              "ಮಧ್ಯದ ಎಲೆಗಳ ಮೇಲೆ ಅಡ್ಡ ಸಾಲಿನಲ್ಲಿ ರಂಧ್ರಗಳು ಕಾಣಿಸುತ್ತವೆ.",
              "Holes appear in a transverse row on the central leaves.",
            ],
            ["ನಂತರ ಸುಳಿ ಒಣಗಿ ಸಾಯುತ್ತದೆ.", "The shoot then dries and dies."],
          ),
          para("ನಿರ್ವಹಣೆ", "Management"),
          list([
            "ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ಡೈಮಿಥೋಯೇಟ್ 30 ಇ.ಸಿ. ಅಥವಾ ಮೊನೋಕ್ರೋಟೋಫಾಸ್ 36 ಎಸ್.ಎಲ್. ಬಳಸಿ ಸಿಂಪಡಿಸುವುದನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
            "The source text mentions spraying with dimethoate 30 EC or monocrotophos 36 SL.",
          ]),
          sub("ಎಲೆ ತಿನ್ನುವ ಹುಳು", "Leaf-eating caterpillar"),
          para("ಹಾನಿಯ ಲಕ್ಷಣಗಳು", "Symptoms of damage"),
          list([
            "ಮರಿಹುಳುಗಳು ಎಲೆಗಳನ್ನು ತಿಂದು ಹಾಳು ಮಾಡುತ್ತವೆ.",
            "The larvae eat and damage the leaves.",
          ]),
          para("ನಿರ್ವಹಣೆ", "Management"),
          list([
            "ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ಎಲೆ ತಿನ್ನುವ ಹುಳು ಮತ್ತು ಕಾಂಡ ಕೊರೆಯುವ ಹುಳುವಿನ ಹತೋಟಿಗಾಗಿ ಕೀಟನಾಶಕಗಳ ಬಳಕೆಯನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
            "The source text mentions the use of insecticides to control both the leaf-eating caterpillar and the shoot borer.",
          ]),
        ],
      },
      {
        id: "diseases",
        title: L("ರೋಗ ನಿರ್ವಹಣೆ", "Disease management"),
        blocks: [
          sub("ಎಲೆ ಚುಕ್ಕೆ ರೋಗ", "Leaf spot"),
          para("ರೋಗದ ಲಕ್ಷಣಗಳು", "Symptoms"),
          list(
            [
              "ಎಲೆಗಳ ಮೇಲೆ ವೃತ್ತಾಕಾರದ ಅಥವಾ ಗೋಲಾಕಾರದ ತಿಳಿ ಹಳದಿ ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುತ್ತವೆ.",
              "Circular or oval pale yellow spots appear on the leaves.",
            ],
            [
              "ಚುಕ್ಕೆಗಳು ವೃದ್ಧಿಯಾಗಿ ಎಲೆಗಳು ಒಣಗಲು ಪ್ರಾರಂಭವಾಗುತ್ತವೆ.",
              "The spots enlarge and the leaves begin to dry.",
            ],
          ),
          para("ನಿರ್ವಹಣೆ", "Management"),
          list(
            [
              "ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ 3 ಗ್ರಾಂ ತಾಮ್ರದ ಆಕ್ಸಿಕ್ಲೋರೈಡ್ 50 ಡಬ್ಲ್ಯೂ.ಪಿ. ಬೆರೆಸಿ ಸಿಂಪಡಿಸಬೇಕು.",
              "Spray copper oxychloride 50 WP at 3 g per litre of water.",
            ],
            [
              "ಶೇಕಡಾ 1ರ ಬೋರ್ಡೋ ದ್ರಾವಣವನ್ನೂ ಸಿಂಪಡಿಸಬಹುದು.",
              "A 1% Bordeaux mixture can also be sprayed.",
            ],
          ),
          sub("ಗಡ್ಡೆ ಕೊಳೆ ರೋಗ", "Rhizome rot"),
          para("ರೋಗದ ಲಕ್ಷಣಗಳು", "Symptoms"),
          list(
            ["ಗಿಡಗಳ ಎಲೆಗಳ ತುದಿ ಹಳದಿಯಾಗುತ್ತದೆ.", "The leaf tips turn yellow."],
            [
              "ಕ್ರಮೇಣ ಎಲೆಗಳು ಹಳದಿಯಾಗಿ ಗಿಡಗಳು ಬಾಡಿ ಒಣಗುತ್ತವೆ.",
              "Gradually the leaves yellow, and the plants wilt and dry.",
            ],
            ["ಗಿಡದ ಬುಡವು ತೇವಾಂಶಯುಕ್ತ ಕಂದು ಬಣ್ಣಕ್ಕೆ ತಿರುಗುತ್ತದೆ.", "The collar turns a moist brown."],
            ["ನಂತರ ಬುಡದ ಭಾಗ ಮೃದುವಾಗಿ ಕೊಳೆಯುತ್ತದೆ.", "The collar region then softens and rots."],
          ),
          para("ನಿರ್ವಹಣೆ", "Management"),
          list(
            [
              "ನಾಟಿಗಾಗಿ ರೋಗರಹಿತ ಮತ್ತು ಆರೋಗ್ಯಕರ ಗಡ್ಡೆಗಳನ್ನು ಬಳಸಬೇಕು.",
              "Use disease-free, healthy rhizomes for planting.",
            ],
            [
              "ಬೀಜದ ಗಡ್ಡೆಗಳನ್ನು ಶೇಖರಿಸುವ ಮೊದಲು ಮ್ಯಾಂಕೋಜೆಬ್ ದ್ರಾವಣದಲ್ಲಿ 30 ನಿಮಿಷ ನೆನೆಸಬೇಕು.",
              "Soak seed rhizomes in a mancozeb solution for 30 minutes before storing them.",
            ],
            [
              "ರೋಗದ ತೀವ್ರತೆ ಹೆಚ್ಚಿರುವ ಪ್ರದೇಶಗಳಲ್ಲಿ ಮಾರ್ಚ್ ತಿಂಗಳಲ್ಲಿ ನಾಟಿ ಮಾಡುವುದು ಸೂಕ್ತ.",
              "Where the disease is severe, planting in March is advisable.",
            ],
            [
              "ನಾಟಿ ಮಾಡುವ ಮೊದಲು ಬೀಜದ ಗಡ್ಡೆಗಳನ್ನು ಮೆಟಲಾಕ್ಸಿಲ್ ಎಂ.ಝಡ್. 72 ಡಬ್ಲ್ಯೂ.ಪಿ. ದ್ರಾವಣದಲ್ಲಿ 30 ನಿಮಿಷ ನೆನೆಸಬೇಕು.",
              "Before planting, soak the seed rhizomes in a metalaxyl MZ 72 WP solution for 30 minutes.",
            ],
            [
              "ಪ್ರತಿ ಎಕರೆಗೆ ಬೇವಿನ ಹಿಂಡಿಯೊಂದಿಗೆ 1 ಕೆ.ಜಿ. ಟ್ರೈಕೋಡರ್ಮಾವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಬೇಕು.",
              "Mix 1 kg of Trichoderma with neem cake into the soil per acre.",
            ],
            ["ರೋಗಗ್ರಸ್ತ ಗಡ್ಡೆಗಳನ್ನು ತೆಗೆದು ನಾಶಪಡಿಸಬೇಕು.", "Remove and destroy diseased rhizomes."],
            [
              "ಟ್ರೈಕೋಡರ್ಮಾ ಅಥವಾ ಸೂಡೋಮೊನಾಸ್‌ನಂತಹ ಜೈವಿಕ ನಿಯಂತ್ರಕಗಳನ್ನು ಬಳಸಬಹುದು.",
              "Biological agents such as Trichoderma or Pseudomonas can be used.",
            ],
          ),
        ],
      },
      {
        id: "harvest",
        title: L("ಕೊಯ್ಲು ಮತ್ತು ಇಳುವರಿ", "Harvest and yield"),
        blocks: [
          sub("ಕೊಯ್ಲಿನ ಸಮಯ", "Time of harvest"),
          list(
            [
              "ನಾಟಿ ಮಾಡಿದ ಸುಮಾರು ಎಂಟು ತಿಂಗಳ ನಂತರ ಶುಂಠಿ ಕೊಯ್ಲಿಗೆ ಸಿದ್ಧವಾಗುತ್ತದೆ.",
              "Ginger is ready for harvest about eight months after planting.",
            ],
            [
              "ಎಲೆಗಳು ಹಳದಿಯಾಗಿ ಕ್ರಮೇಣ ಒಣಗಲು ಪ್ರಾರಂಭಿಸಿದಾಗ ಕೊಯ್ಲು ಮಾಡಬೇಕು.",
              "Harvest when the leaves turn yellow and gradually begin to dry.",
            ],
            [
              "ಹಸಿ ಶುಂಠಿಯನ್ನು ತರಕಾರಿಯಾಗಿ ಬಳಸಲು ಆರು ತಿಂಗಳ ನಂತರ ಕೊಯ್ಲು ಮಾಡಬಹುದು.",
              "For use as a fresh vegetable, it can be harvested after six months.",
            ],
            [
              "ಉಪ್ಪು ಶುಂಠಿ ತಯಾರಿಸಲು 170–180 ದಿನಗಳಲ್ಲಿ ಕೊಯ್ಲು ಮಾಡಿದ ಹಸಿ ಶುಂಠಿಯನ್ನು ಬಳಸಬಹುದು.",
              "For salted ginger, fresh ginger harvested at 170–180 days can be used.",
            ],
          ),
          sub("ಕೊಯ್ಲು ವಿಧಾನ", "Method of harvest"),
          list(
            [
              "ಸಲಿಕೆ ಅಥವಾ ಸೂಕ್ತ ಉಪಕರಣದಿಂದ ಗಿಡಗಳನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಅಗೆದು ಹೊರತೆಗೆಯಬೇಕು.",
              "Dig the plants out carefully with a spade or a suitable implement.",
            ],
            [
              "ಗಡ್ಡೆಗಳಿಂದ ಒಣ ಎಲೆಗಳು, ಬೇರುಗಳು ಮತ್ತು ಅಂಟಿಕೊಂಡಿರುವ ಮಣ್ಣನ್ನು ಬೇರ್ಪಡಿಸಬೇಕು.",
              "Separate dry leaves, roots and adhering soil from the rhizomes.",
            ],
            ["ಗಡ್ಡೆಗಳನ್ನು ನೀರಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ತೊಳೆಯಬೇಕು.", "Wash the rhizomes well in water."],
          ),
          sub("ಕೊಯ್ಲಿನ ನಂತರದ ಸಂಸ್ಕರಣೆ — ಹಸಿ ಶುಂಠಿ", "Post-harvest processing — fresh ginger"),
          list([
            "ಗಡ್ಡೆಗಳನ್ನು ನೀರಿನಲ್ಲಿ ಚೆನ್ನಾಗಿ ತೊಳೆದು ಒಂದು ದಿನ ಸೂರ್ಯನ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಬೇಕು.",
            "Wash the rhizomes well and dry them in the sun for a day.",
          ]),
          sub("ಒಣ ಶುಂಠಿ", "Dry ginger"),
          list(
            ["ಗಡ್ಡೆಗಳನ್ನು 6–7 ಗಂಟೆಗಳ ಕಾಲ ನೀರಿನಲ್ಲಿ ನೆನೆಸಿಡಬೇಕು.", "Soak the rhizomes in water for 6–7 hours."],
            [
              "ನಂತರ ಗಡ್ಡೆಗಳಿಗೆ ಅಂಟಿಕೊಂಡಿರುವ ಮಣ್ಣು ಮತ್ತು ಇತರ ವಸ್ತುಗಳನ್ನು ತೆಗೆದು ಸ್ವಚ್ಛಗೊಳಿಸಬೇಕು.",
              "Then clean off the soil and other material sticking to them.",
            ],
            [
              "ಬಿದಿರಿನ ಕಡ್ಡಿಗಳ ಸಹಾಯದಿಂದ ಹೊರ ಸಿಪ್ಪೆಯನ್ನು ತೆಗೆಯಬೇಕು.",
              "Remove the outer skin with the help of bamboo splinters.",
            ],
            [
              "ಒಳಗಿನ ತೈಲದ ಜೀವಕೋಶಗಳಿಗೆ ಹಾನಿಯಾಗದಂತೆ ಎಚ್ಚರಿಕೆ ವಹಿಸಬೇಕು.",
              "Take care not to damage the oil cells beneath.",
            ],
            [
              "ಸಿಪ್ಪೆ ತೆಗೆದ ಗಡ್ಡೆಗಳನ್ನು ತೊಳೆದು ಒಂದು ವಾರ ಸೂರ್ಯನ ಬಿಸಿಲಿನಲ್ಲಿ ಒಣಗಿಸಬೇಕು.",
              "Wash the peeled rhizomes and dry them in the sun for a week.",
            ],
            [
              "ಒಣಗಿದ ಗಡ್ಡೆಗಳನ್ನು ಪರಸ್ಪರ ಉಜ್ಜಿ ಉಳಿದಿರುವ ಸಿಪ್ಪೆ ಮತ್ತು ಕೊಳೆಯನ್ನು ತೆಗೆಯಬೇಕು.",
              "Rub the dried rhizomes against each other to remove the remaining skin and dirt.",
            ],
          ),
          sub("ಉಪ್ಪು ಶುಂಠಿ", "Salted ginger"),
          list(
            ["ಎಳೆಯ ಗಡ್ಡೆಗಳನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ತೊಳೆಯಬೇಕು.", "Wash the tender rhizomes thoroughly."],
            [
              "ಶೇಕಡಾ 1ರ ಸಿಟ್ರಿಕ್ ಆಮ್ಲವಿರುವ ಶೇಕಡಾ 30ರ ಉಪ್ಪಿನ ದ್ರಾವಣದಲ್ಲಿ ನೆನೆಸಬೇಕು.",
              "Soak them in a 30% salt solution containing 1% citric acid.",
            ],
            ["14 ದಿನಗಳ ನಂತರ ಬಳಸಲು ಸಿದ್ಧವಾಗುತ್ತದೆ.", "It is ready for use after 14 days."],
            [
              "ಶೀತಲೀಕರಣ ಯಂತ್ರ ಅಥವಾ ಶೀತಲೀಕರಣ ಕೊಠಡಿಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಬಹುದು.",
              "It can be stored in a refrigerator or cold room.",
            ],
          ),
          sub("ಇಳುವರಿ", "Yield"),
          list(
            [
              "ಸುಧಾರಿತ ತಳಿಗಳಲ್ಲಿ ಹಸಿ ಶುಂಠಿಯ ಸರಾಸರಿ ಇಳುವರಿ 11.6–23.2 ಟನ್/ಹೆಕ್ಟೇರ್.",
              "In improved varieties, average fresh ginger yield is 11.6–23.2 t/ha.",
            ],
            [
              "ಸ್ಥಳೀಯ ತಳಿಗಳಲ್ಲಿ ಹಸಿ ಶುಂಠಿಯ ಸರಾಸರಿ ಇಳುವರಿ 7.27–28.55 ಟನ್/ಹೆಕ್ಟೇರ್.",
              "In local varieties, average fresh ginger yield is 7.27–28.55 t/ha.",
            ],
            [
              "ತಳಿ ಮತ್ತು ಬೆಳೆಯುವ ಸ್ಥಳವನ್ನು ಅವಲಂಬಿಸಿ, ಹಸಿ ಶುಂಠಿಯ ತೂಕದ ಶೇಕಡಾ 19–25ರಷ್ಟು ಒಣ ಶುಂಠಿಯ ಇಳುವರಿ ದೊರೆಯುತ್ತದೆ.",
              "Depending on the variety and the location, dry ginger recovery is 19–25% of the fresh weight.",
            ],
          ),
        ],
      },
      {
        id: "storage",
        title: L("ಬಿತ್ತನೆ ಗಡ್ಡೆಗಳ ಸಂಗ್ರಹಣೆ", "Storage of seed rhizomes"),
        blocks: [
          list(
            [
              "ರೋಗರಹಿತ ಗಿಡಗಳಿಂದ ದಪ್ಪವಾದ, ಆರೋಗ್ಯಕರ ಗಡ್ಡೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು.",
              "Select plump, healthy rhizomes from disease-free plants.",
            ],
            [
              "ಬೆಳೆ 6–8 ತಿಂಗಳ ವಯಸ್ಸಿನಲ್ಲಿರುವಾಗ ಆರೋಗ್ಯಕರ ಗಿಡಗಳನ್ನು ಗುರುತಿಸಬೇಕು.",
              "Mark the healthy plants when the crop is 6–8 months old.",
            ],
            [
              "ಬಿತ್ತನೆ ಗಡ್ಡೆಗಳನ್ನು ಸಂಸ್ಕರಿಸಿ ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಬೇಕು.",
              "Treat the seed rhizomes and dry them in the shade.",
            ],
            [
              "ಗಡ್ಡೆಗಳನ್ನು ಶೆಡ್‌ಗಳಲ್ಲಿ ಅನುಕೂಲಕರ ಗಾತ್ರದ ಗುಣಿಗಳಲ್ಲಿ ಸಂಗ್ರಹಿಸಬೇಕು.",
              "Store the rhizomes in pits of convenient size inside sheds.",
            ],
            [
              "ಗುಣಿಗಳ ಒಳಗೋಡೆಗಳಿಗೆ ಸಗಣಿಯ ರಾಡಿಯನ್ನು ಬಳಿಯಬೇಕು.",
              "Plaster the inner walls of the pits with cow dung slurry.",
            ],
            [
              "ಗಡ್ಡೆಗಳನ್ನು ಪದರ ಪದರವಾಗಿ ಹಾಕಿ, ಅವುಗಳ ನಡುವೆ ಚೆನ್ನಾಗಿ ಒಣಗಿದ ಮರಳು ಅಥವಾ ಮರದ ಪುಡಿಯನ್ನು ಹಾಕಬೇಕು.",
              "Place the rhizomes in layers with well-dried sand or sawdust between them.",
            ],
          ),
        ],
      },
    ],
  },
  /* ================================================================
     ಮುಸುಕಿನಜೋಳ — MAIZE
     ================================================================ */
  {
    slug: "maize",
    name: L("ಮುಸುಕಿನಜೋಳ", "Maize"),
    botanical: "Zea mays L.",
    gist: L(
      "ಆಹಾರ, ಪಶು ಆಹಾರ ಮತ್ತು ಕೈಗಾರಿಕಾ ಕಚ್ಚಾ ವಸ್ತುವಾಗಿ ಬಳಕೆಯಾಗುವ ಪ್ರಮುಖ ಧಾನ್ಯ ಬೆಳೆ.",
      "A major cereal used as food, animal feed and industrial raw material.",
    ),
    sections: [
      {
        id: "intro",
        title: L("ಪರಿಚಯ – ಬೆಳೆಯ ಪ್ರಾಮುಖ್ಯತೆ ಮತ್ತು ಉಪಯೋಗಗಳು", "Introduction — importance and uses"),
        blocks: [
          para(
            "ಮೆಕ್ಕೆಜೋಳ (Zea mays L.) ಪೊಯೇಸೀ ಕುಟುಂಬಕ್ಕೆ ಸೇರಿದ ಪ್ರಮುಖ ಧಾನ್ಯ ಬೆಳೆ. ಇದು ಆಹಾರ, ಪಶು ಆಹಾರ ಮತ್ತು ಕೈಗಾರಿಕಾ ಕಚ್ಚಾ ವಸ್ತುವಾಗಿ ಉಪಯೋಗಿಸಲ್ಪಡುತ್ತದೆ. ಕರ್ನಾಟಕದಲ್ಲಿ ಮೆಕ್ಕೆಜೋಳವನ್ನು ಮುಂಗಾರು, ಹಿಂಗಾರು ಮತ್ತು ಬೇಸಿಗೆ ಹಂಗಾಮುಗಳಲ್ಲಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ. ಅಧಿಕ ಇಳುವರಿ ಪಡೆಯಲು ಸೂಕ್ತ ತಳಿ ಆಯ್ಕೆ, ಶಿಫಾರಸು ಮಾಡಿದ ಬೇಸಾಯ ಕ್ರಮಗಳು, ಸಮತೋಲಿತ ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ ಹಾಗೂ ಕೀಟ ಮತ್ತು ರೋಗಗಳ ಸಮಗ್ರ ನಿರ್ವಹಣೆ ಅಗತ್ಯ.",
            "Maize (Zea mays L.) is a major cereal of the family Poaceae. It is used as food, as animal feed and as industrial raw material. In Karnataka maize is grown in the kharif, rabi and summer seasons. To get a high yield, suitable variety selection, the recommended practices, balanced nutrient management and integrated pest and disease management are needed.",
          ),
        ],
      },
      {
        id: "soil-climate",
        title: L("ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣದ ಅವಶ್ಯಕತೆಗಳು", "Soil and climate requirements"),
        blocks: [
          sub("ಮಣ್ಣು", "Soil"),
          para(
            "ಮೆಕ್ಕೆಜೋಳದ ಬೆಳೆಗೆ ಉತ್ತಮ ನೀರು ಬಸಿದು ಹೋಗುವ, ಫಲವತ್ತಾದ ಗೋಡು ಮತ್ತು ಮರಳು ಮಿಶ್ರಿತ ಗೋಡು ಮಣ್ಣು ಸೂಕ್ತವಾಗಿದೆ. ಮಣ್ಣಿನ pH 5.5–7.5 ಇರಬೇಕು.",
            "Well-drained, fertile loam and sandy loam soils suit maize. Soil pH should be 5.5–7.5.",
          ),
          sub("ಹವಾಗುಣ", "Climate"),
          para(
            "ಮೆಕ್ಕೆಜೋಳವು ಬೆಚ್ಚಗಿನ ಹವಾಗುಣದಲ್ಲಿ ಉತ್ತಮವಾಗಿ ಬೆಳೆಯುತ್ತದೆ. 21–30°C ತಾಪಮಾನವು ಬೆಳವಣಿಗೆಗೆ ಸೂಕ್ತವಾಗಿದೆ. ಹೂಬಿಡುವ ಮತ್ತು ಕಾಳು ಕಟ್ಟುವ ಹಂತಗಳಲ್ಲಿ ತೀವ್ರ ಉಷ್ಣತೆ ಹಾಗೂ ನೀರಿನ ಕೊರತೆ ಇಳುವರಿಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ.",
            "Maize grows well in a warm climate. A temperature of 21–30°C suits its growth. Extreme heat and water shortage at flowering and grain-filling reduce the yield.",
          ),
          sub("ಮಳೆ", "Rainfall"),
          para(
            "ಮೆಕ್ಕೆಜೋಳದ ಉತ್ತಮ ಬೆಳವಣಿಗೆಗೆ ಸುಮಾರು 500–800 ಮಿ.ಮೀ. ಮಳೆ ಅಗತ್ಯ. ಬೆಳವಣಿಗೆಯ ವಿವಿಧ ಹಂತಗಳಲ್ಲಿ ಸಮರ್ಪಕ ತೇವಾಂಶ ಇರಬೇಕು. ನೀರು ನಿಲ್ಲುವ ಪರಿಸ್ಥಿತಿಯನ್ನು ತಪ್ಪಿಸಬೇಕು.",
            "About 500–800 mm of rainfall is needed for good growth. Adequate moisture must be present at the various growth stages. Waterlogging must be avoided.",
          ),
        ],
      },
      {
        id: "varieties",
        title: L("ತಳಿಗಳು ಮತ್ತು ವಿಶೇಷ ಗುಣಗಳು", "Varieties and their qualities"),
        blocks: [
          table(
            [
              ["ತಳಿಗಳು", "Variety"],
              ["ಕಾಲಾವಧಿ (ದಿನಗಳು)", "Duration (days)"],
              ["ಇಳುವರಿ", "Yield"],
              ["ವಿಶೇಷ ಗುಣಗಳು", "Special qualities"],
            ],
            [
              [
                ["ಎಂ.ಎ.ಹೆಚ್. 14-138", "MAH 14-138"],
                ["—", "—"],
                [
                  "ನೀರಾವರಿ: ಧಾನ್ಯ 34–38 ಕ್ವಿ., ಮೇವು 9–10 ಟನ್. ಖುಷ್ಕಿ: ಧಾನ್ಯ 26–28 ಕ್ವಿ., ಮೇವು 6–7 ಟನ್",
                  "Irrigated: grain 34–38 q, fodder 9–10 t. Rainfed: grain 26–28 q, fodder 6–7 t",
                ],
                [
                  "ಎಲೆ ಅಂಗಮಾರಿ ರೋಗಕ್ಕೆ ನಿರೋಧಕತೆ ಮತ್ತು ಕೇದಿಗೆ ರೋಗಕ್ಕೆ ಸಾಧಾರಣ ನಿರೋಧಕತೆ ಹೊಂದಿದೆ. ಕಟಾವಿನ ಹಂತದಲ್ಲಿಯೂ ಹಸಿರಾಗಿದ್ದು, ಮೇವಾಗಿ ಕೂಡ ಉಪಯೋಗಿಸಬಹುದಾಗಿದೆ. ತೆನೆಗಳು ನೀಳವಾಗಿದ್ದು, ಕಾಳುಗಳು ತೆಳು ಕಿತ್ತಳೆ ಹಳದಿ ಬಣ್ಣದಿಂದ ಕೂಡಿದ್ದು ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ ಉತ್ತಮ ಬೆಲೆ ಸಿಗುತ್ತದೆ.",
                  "Resistant to leaf blight and moderately resistant to downy mildew. It stays green even at harvest and can also be used as fodder. The cobs are long and the grain is pale orange-yellow, which fetches a good market price.",
                ],
              ],
            ],
          ),
        ],
      },
      {
        id: "sowing",
        title: L("ಬಿತ್ತನೆ", "Sowing"),
        blocks: [
          list(
            [
              "ಬಿತ್ತನೆ ಕಾಲ: ಮೇ–ಜೂನ್, ಸೆಪ್ಟೆಂಬರ್–ಅಕ್ಟೋಬರ್, ಜನವರಿ–ಫೆಬ್ರವರಿ.",
              "Sowing time: May–June, September–October, January–February.",
            ],
            ["ಬಿತ್ತನೆ ಬೀಜ (ಕಿ.ಗ್ರಾಂ/ಎಕರೆ): 6", "Seed rate (kg/acre): 6"],
            [
              "ಬಿತ್ತನೆ: ಬೀಜವನ್ನು 2 ಅಡಿ ಅಂತರದ ಬೋದು ಮಾಡಿದ ಸಾಲುಗಳಲ್ಲಿ ಬೀಜದಿಂದ ಬೀಜಕ್ಕೆ 1 ಅಡಿ ಅಂತರದಲ್ಲಿ 2 ಅಂಗುಲಕ್ಕಿಂತ ಹೆಚ್ಚು ಆಳವಿಲ್ಲದಂತೆ ಬಿತ್ತನೆ ಮಾಡುವುದು.",
              "Sowing: sow on ridged rows 2 feet apart, with 1 foot between seeds, at a depth of no more than 2 inches.",
            ],
          ),
          sub("ಬೀಜೋಪಚಾರ", "Seed treatment"),
          para(
            "ಅಕ್ಷೆರಿಲಂ ಮತ್ತು ರಂಜಕ ಕರಗಿಸುವ ಜೀವಾಣು ಗೊಬ್ಬರವನ್ನು ಎಕರೆಗೆ 200 ಗ್ರಾಂನಂತೆ ಬೀಜೋಪಚಾರ ಮಾಡುವುದರಿಂದ ಶಿಫಾರಸ್ಸು ಮಾಡಿದ ಸಾರಜನಕ ಮತ್ತು ರಂಜಕದ ಪ್ರಮಾಣದಲ್ಲಿ ಶೇ. 50ರಷ್ಟು ಕಡಿಮೆ ಮಾಡಬಹುದು.",
            "Treating the seed with Azospirillum and a phosphorus-solubilising biofertiliser at 200 g per acre allows the recommended nitrogen and phosphorus doses to be reduced by 50%.",
          ),
        ],
      },
      {
        id: "nutrients",
        title: L("ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ", "Nutrient management"),
        blocks: [
          sub("ಗೊಬ್ಬರಗಳ ಪ್ರಮಾಣದ ಪಟ್ಟಿ", "Fertiliser quantities"),
          table(
            [
              ["ಕ್ರ.ಸಂ.", "No."],
              ["ಗೊಬ್ಬರದ ಹೆಸರು", "Fertiliser"],
              ["ಪ್ರಮಾಣ", "Quantity"],
            ],
            [
              [
                ["1", "1"],
                ["10:26:26 (ಎನ್‌ಪಿಕೆ ಸಂಯುಕ್ತ ಗೊಬ್ಬರ)", "10:26:26 (NPK complex)"],
                ["2 ಚೀಲ", "2 bags"],
              ],
              [
                ["2", "2"],
                ["ಎಂ.ಒ.ಪಿ. (ಪೊಟ್ಯಾಷ್ ಗೊಬ್ಬರ)", "MOP (potash)"],
                ["1 ಚೀಲ", "1 bag"],
              ],
              [["3", "3"], ["ಯೂರಿಯಾ (ಮೇಲುಗೊಬ್ಬರ)", "Urea (top dressing)"], ["2 ಚೀಲ", "2 bags"]],
            ],
          ),
        ],
      },
      {
        id: "water",
        title: L("ನೀರಿನ ನಿರ್ವಹಣೆ", "Water management"),
        blocks: [
          list(
            [
              "ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣವನ್ನು ಅನುಸರಿಸಿ ಮರಳು ಮಿಶ್ರಿತ ಮಣ್ಣಾದಲ್ಲಿ 8 ದಿವಸಗಳಿಗೊಮ್ಮೆ, ಕಪ್ಪು ಭೂಮಿಯಾದಲ್ಲಿ 15 ದಿವಸಗಳಿಗೊಮ್ಮೆ ನೀರು ಹಾಯಿಸುವುದು.",
              "Depending on soil and climate, irrigate every 8 days on sandy soils and every 15 days on black soils.",
            ],
            [
              "ಬೀಜ ಮೊಳೆಯುವ, ಹೂಬಿಡುವ ಮತ್ತು ಕಾಳು ಕಟ್ಟುವ ಸಮಯಗಳಲ್ಲಿ ತಪ್ಪದೆ ನೀರು ಕೊಡುವುದು ಬಹಳ ಅವಶ್ಯಕ.",
              "Watering without fail at germination, flowering and grain filling is essential.",
            ],
            [
              "ಪಾತಳಿ ನೀರಾವರಿ ಪದ್ಧತಿಯಲ್ಲಿ ಸಾಲು–ಬೋದು ವಿನ್ಯಾಸದಲ್ಲಿ ನೀರು ಉಣಿಸುವುದು ಸೂಕ್ತ.",
              "In surface irrigation, watering in the furrow-and-ridge layout is suitable.",
            ],
          ),
        ],
      },
      {
        id: "intercultural",
        title: L("ಅಂತರ ಬೇಸಾಯದ ಕ್ರಮಗಳು", "Intercultural operations"),
        blocks: [
          sub("ಕಳೆ ನಿರ್ವಹಣೆ", "Weed management"),
          list(
            [
              "ಮರಳು ಭೂಮಿಯಲ್ಲಿ ಎಕರೆಗೆ 1 ಕಿ.ಗ್ರಾಂ ಶೇ. 50 ಆಟ್ರಾಜಿನ್ ಅಥವಾ 1.0 ಲೀ. ಶೇ. 30 ಇ.ಸಿ. ಪೆಂಡಿಮೆಥಾಲಿನ್ ಅಥವಾ 170 ಮಿ.ಲೀ. ಶೇ. 23.5 ಇ.ಸಿ. ಆಕ್ಸಿಕ್ಲೋರೋಫೇನ್‌ನ್ನು 300 ಲೀ. ನೀರಿನಲ್ಲಿ ಬೆರೆಸಿ ಬಿತ್ತಿದ 3 ದಿವಸಗಳೊಳಗಾಗಿ ಸಿಂಪರಣೆ ಮಾಡುವುದು.",
              "On sandy land, spray within 3 days of sowing: 1 kg of 50% atrazine, or 1.0 litre of 30% EC pendimethalin, or 170 ml of 23.5% EC oxyfluorfen per acre, mixed in 300 litres of water.",
            ],
            [
              "ಸಿಂಪರಣೆ ನಂತರ ಭೂಮಿಯನ್ನು ತುಳಿಯಬಾರದು ಮತ್ತು ಸಿಂಪರಣೆ ಸಮಯದಲ್ಲಿ ಸಾಕಷ್ಟು ತೇವಾಂಶವಿರಬೇಕು.",
              "Do not walk on the land after spraying, and there must be enough moisture at the time of spraying.",
            ],
          ),
          sub("ಮಣ್ಣು ಏರುಹಾಕುವುದು", "Earthing up"),
          list(
            [
              "ಮೇಲುಗೊಬ್ಬರ ಕೊಟ್ಟ ನಂತರ ಮಣ್ಣು ಏರುಹಾಕುವುದು ಮತ್ತು ಮೊದಲ ಕಂತಿನ ಮೇಲುಗೊಬ್ಬರ ಕೊಡುವುದಕ್ಕೆ ಮುನ್ನ ಕುಂಟೆ ಹಾಯಿಸಬೇಕು.",
              "Earth up after top dressing, and run a harrow before the first top dressing.",
            ],
            [
              "ಹಾಲು ತುಂಬುವ/ಕಾಳು ಕಟ್ಟುವ ಸಮಯದಲ್ಲಿ ಗಿಡದ ತುದಿಯನ್ನು ಮುರಿಯಬಾರದು. ಹೀಗೆ ಮಾಡಿದಲ್ಲಿ ಇಳುವರಿ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
              "Do not break the top of the plant at the milk or grain-filling stage. Doing so reduces the yield.",
            ],
          ),
        ],
      },
      {
        id: "cropping-systems",
        title: L("ಬೆಳೆ ಪದ್ಧತಿಗಳು", "Cropping systems"),
        blocks: [
          sub("ಮುಸುಕಿನ ಜೋಳದಲ್ಲಿ ಅಂತರ ಬೆಳೆಗಳು", "Intercrops in maize"),
          list(
            [
              "ದ್ವಿದಳ ಧಾನ್ಯ ಬೆಳೆಗಳಾದ ಅಲಸಂದೆ, ಸೋಯಾ ಅವರೆ ಹಾಗೂ ಅವರೆ (ಹೆಚ್‌ಎ–3 ಮತ್ತು ಹೆಚ್‌ಎ–4) ಗಳನ್ನು 2:2ರ ಅನುಪಾತದಲ್ಲಿ ಬಿತ್ತುವುದರಿಂದ ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಹೆಚ್ಚುವುದು ಹಾಗೂ ಅಧಿಕ ಲಾಭವನ್ನು ಸಹ ಪಡೆಯಬಹುದು.",
              "Sowing pulses such as cowpea, soybean and field bean (HA-3 and HA-4) in a 2:2 ratio increases soil fertility and can also give higher profit.",
            ],
            [
              "18/30 ಅಂಗುಲ ಅಂತರದ ಮುಸುಕಿನ ಜೋಳದ ಜೋಡಿ ಸಾಲುಗಳ ನಡುವೆ 2 ಸಾಲು ಉದ್ದು ಅಥವಾ ಹೆಸರನ್ನು ಬಿತ್ತುವುದರಿಂದ ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಹೆಚ್ಚಾಗುವುದಲ್ಲದೆ ಹೆಚ್ಚಿನ ಮುಸುಕಿನ ಜೋಳದ ಸಮಾನಾಂತರ ಇಳುವರಿ (ಶೇ. 18) ಹಾಗೂ ಅಧಿಕ ಲಾಭವನ್ನು ಸಹ ಪಡೆಯಬಹುದು.",
              "Sowing 2 rows of black gram or green gram between paired maize rows spaced 18/30 inches apart increases soil fertility and also gives a higher maize-equivalent yield (18%) and higher profit.",
            ],
          ),
          sub("ಬೆಳೆ ಪರಿವರ್ತನೆ", "Crop rotation"),
          list([
            "ಹಿಂದಿನ ವರ್ಷ ಬಿಳಿ ಸುಳಿ ರೋಗ ತಗುಲಿದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಕನಿಷ್ಠ ಪಕ್ಷ ಎರಡು ವರ್ಷ ಮುಸುಕಿನ ಜೋಳ ಬೆಳೆಯಬಾರದು.",
            "Where downy mildew occurred the previous year, maize should not be grown for at least two years.",
          ]),
        ],
      },
      {
        id: "pests",
        title: L("ಕೀಟಗಳ ನಿರ್ವಹಣೆ", "Pest management"),
        blocks: [
          sub("ಸುಳಿ ಸೈನಿಕ ಹುಳು (ಫಾಲ್ ಆರ್ಮಿವರ್ಮ್)", "Fall armyworm"),
          para("ಬಾಧೆಯ ಲಕ್ಷಣಗಳು", "Symptoms of damage"),
          list(
            [
              "ಪ್ರಾರಂಭಿಕ ಹಂತದಲ್ಲಿ ಎಲೆಯ ಮೇಲೆ ಬಿಳಿ ಮಚ್ಚೆಗಳು ಕಂಡುಬರುತ್ತವೆ.",
              "In the early stage, white patches appear on the leaf.",
            ],
            [
              "ತದನಂತರ ಉದ್ದವಾದ ರಂಧ್ರಗಳು, ಹಿಕೆಯಿಂದ ಕೂಡಿದ ಹರಿದ ಎಲೆಗಳು ಕಾಣುತ್ತವೆ.",
              "Later, elongated holes and ragged leaves with frass are seen.",
            ],
            ["ಸುಳಿ ಭಾಗದಲ್ಲಿ ಹುಳುಗಳ ಬಾಧೆ ಕಂಡುಬರುತ್ತದೆ.", "The larvae are found in the whorl."],
          ),
          para("ನಿರ್ವಹಣೆ", "Management"),
          list(
            [
              "ಮೊಟ್ಟೆಯ ಗುಂಪುಗಳು ಮತ್ತು ಮರಿಹುಳುಗಳು ಗಿಡದ ಮೇಲೆ ಕಂಡಾಗ ಸಂಗ್ರಹಿಸಿ ನಾಶಪಡಿಸುವುದು.",
              "Collect and destroy egg masses and larvae when seen on the plant.",
            ],
            [
              "ಸುಳಿ ಸೈನಿಕ ಹುಳುವಿನ ಹಾನಿ ಕಂಡಾಗ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಸ್ಪಿನೆಟೋರಮ್ 11.7 ಎಸ್.ಸಿ. 0.5 ಮಿ.ಲೀ. ಅಥವಾ ಎಮಾಮೆಕ್ಟಿನ್ ಬೆಂಜೋಯೇಟ್ 5 ಎಸ್.ಸಿ. 0.4 ಗ್ರಾಂ ಅಥವಾ ಕ್ಲೋರಾಂಟ್ರಾನಿಲಿಪ್ರೋಲ್ 18.5 ಎಸ್.ಸಿ. 0.4 ಮಿ.ಲೀ. ಬೆರೆಸಿ ಸುಳಿಯ ಭಾಗದಲ್ಲಿ ಸಿಂಪರಿಸುವುದು.",
              "When damage appears, spray into the whorl with spinetoram 11.7 SC at 0.5 ml, or emamectin benzoate 5 SG at 0.4 g, or chlorantraniliprole 18.5 SC at 0.4 ml per litre of water.",
            ],
          ),
        ],
      },
      {
        id: "diseases",
        title: L("ರೋಗಗಳ ನಿರ್ವಹಣೆ", "Disease management"),
        blocks: [
          sub("ಬಿಳಿ ಸುಳಿ ರೋಗ", "Downy mildew"),
          para("ರೋಗ ಲಕ್ಷಣಗಳು", "Symptoms"),
          list(
            [
              "ಎಲೆಗಳ ತಳಭಾಗದಲ್ಲಿ ಬಿಳಿಯ ಶಿಲೀಂಧ್ರ ಬೆಳವಣಿಗೆ ಕಂಡುಬರುತ್ತದೆ.",
              "White fungal growth appears on the underside of the leaves.",
            ],
            [
              "ಸಸಿಗಳು ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಗಿಡದ ಬೆಳವಣಿಗೆ ಕುಂಠಿತವಾಗುತ್ತದೆ.",
              "The plants turn yellow and growth is stunted.",
            ],
          ),
          para("ನಿರ್ವಹಣೆ", "Management"),
          list([
            "ಬಿತ್ತನೆಗೆ ಮುಂಚೆ ಮೆಟಲಾಕ್ಸಿಲ್ + ಮ್ಯಾಂಕೋಜೆಬ್‌ನಿಂದ ಬೀಜೋಪಚಾರ ಮಾಡಿ ಬಿತ್ತನೆ ಮಾಡುವುದು ಮತ್ತು ಬಿತ್ತನೆ ಮಾಡಿದ 30 ದಿನಗಳ ನಂತರ ಅಜೋಕ್ಸಿಸ್ಟ್ರೋಬಿನ್ + ಡೈಫೆನೊಕೊನಜೋಲ್ ಮಿಶ್ರಣ ಸಿಂಪರಿಸುವುದು.",
            "Treat the seed with metalaxyl + mancozeb before sowing, and spray an azoxystrobin + difenoconazole mixture 30 days after sowing.",
          ]),
          note(
            "ಬಿಳಿಸುಳಿ ರೋಗವು ಬೀಜಗಳ ಮೂಲಕ ಹರಡುವುದಿಲ್ಲ. ಇದು ಮಣ್ಣು ಮತ್ತು ಗಾಳಿಯ ಮೂಲಕ ಹರಡುತ್ತದೆ.",
            "Downy mildew does not spread through the seed. It spreads through soil and air.",
          ),
          sub("ಎಲೆ ಅಂಗಮಾರಿ ರೋಗ", "Leaf blight"),
          para(
            "ರೋಗ ಲಕ್ಷಣಗಳು: ಕಂದು ಬಣ್ಣದ ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಂಡು, ನಂತರ ಎಲೆ ಒಣಗುತ್ತದೆ.",
            "Symptoms: brown spots appear, and the leaf then dries.",
          ),
          para("ಸಮಗ್ರ ನಿರ್ವಹಣೆ", "Integrated management"),
          list([
            "ಮುಸುಕಿನ ಜೋಳದ ಬೆಳೆಯಲ್ಲಿ ಎಲೆ ಅಂಗಮಾರಿ ರೋಗದ ಸಮಗ್ರ ನಿರ್ವಹಣೆಗಾಗಿ ಪ್ರತಿ ಕಿ.ಗ್ರಾಂ ಬೀಜಕ್ಕೆ 10 ಗ್ರಾಂ ಜೈವಿಕ ಜೀವಾಣು ಟ್ರೈಕೋಡರ್ಮಾ ಹಾರ್ಜಿಯಾನಮ್‌ನಿಂದ ಬೀಜೋಪಚಾರ + 5 ಮಿ.ಲೀ. ನಿಂಬಿಸಿಡಿನ್ ಪ್ರತಿ ಲೀಟರ್ ನೀರಿನಲ್ಲಿ ಬೆರೆಸಿ ಬಿತ್ತನೆ ಮಾಡಿದ 35 ದಿನಗಳ ನಂತರ ಸಿಂಪರಣೆ + ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ 1.0 ಮಿ.ಲೀ. ಸಂಯುಕ್ತ ಶಿಲೀಂಧ್ರನಾಶಕವಾದ ಅಜೋಕ್ಸಿಸ್ಟ್ರೋಬಿನ್ 18.2% + ಡೈಫೆನೊಕೊನಜೋಲ್ ಶೇ. 11.4 ಡಬ್ಲ್ಯೂ/ಡಬ್ಲ್ಯೂ ಎಸ್.ಸಿ. ಬೆರೆಸಿ ಬಿತ್ತನೆಯಾದ 45 ದಿನಗಳ ನಂತರ ಸಿಂಪರಣೆ ಮಾಡುವುದರಿಂದ ಶೇ. 65ರಷ್ಟು ರೋಗದ ತೀವ್ರತೆಯು ಕಡಿಮೆಯಾಗಿದ್ದು, ಶೇ. 75ರಷ್ಟು ಇಳುವರಿಯು ಅಧಿಕವಾಗಿರುತ್ತದೆ ಮತ್ತು 3.8:1 ಲಾಭ:ವೆಚ್ಚದ ಅನುಪಾತವನ್ನು ಪಡೆಯಬಹುದಾಗಿದೆ.",
            "For integrated management of leaf blight in maize: seed treatment with 10 g of the biological agent Trichoderma harzianum per kg of seed, plus a spray of 5 ml of Nimbecidine per litre of water 35 days after sowing, plus a spray of the combination fungicide azoxystrobin 18.2% + difenoconazole 11.4% w/w SC at 1.0 ml per litre of water 45 days after sowing. This reduces disease severity by 65%, raises yield by 75%, and can give a benefit-to-cost ratio of 3.8:1.",
          ]),
        ],
      },
      {
        id: "harvest",
        title: L("ಕಟಾವು ಮತ್ತು ಇಳುವರಿ", "Harvest and yield"),
        blocks: [
          sub("ಕಟಾವಿನ ಸಮಯದ ಲಕ್ಷಣಗಳು", "Signs that it is time to harvest"),
          list(
            [
              "ವಿಶೇಷವಾಗಿ ಕಟಾವಿನ ಹಂತದಲ್ಲಿ ಗಿಡಗಳು ಹಸಿರಾಗಿ ತೆನೆಯು ಪೂರ್ಣ ಪ್ರಮಾಣದಲ್ಲಿ ಒಣಗಿರುತ್ತದೆ.",
              "At harvest the plants are still green while the cob has dried fully.",
            ],
            ["ತೆನೆಗಳು ಒಣಗಿದಾಗ ಕಟಾವು ಮಾಡುವುದು.", "Harvest when the cobs have dried."],
            [
              "ಕಾಳುಗಳು ತೆಳು ಕಿತ್ತಳೆ ಹಳದಿ ಬಣ್ಣದಿಂದ ಕೂಡಿರುತ್ತವೆ.",
              "The grain is pale orange-yellow.",
            ],
          ),
          sub("ನಿರೀಕ್ಷಿತ ಇಳುವರಿ", "Expected yield"),
          list(
            [
              "ತಳಿಗಳು ಮತ್ತು ಬೇಸಾಯದ ಪರಿಸ್ಥಿತಿಗೆ ಅನುಗುಣವಾಗಿ ಇಳುವರಿ ಬದಲಾಗುತ್ತದೆ.",
              "Yield varies with the variety and the growing conditions.",
            ],
            [
              "ನೀರಾವರಿ ಪ್ರದೇಶ: ಧಾನ್ಯ 30–38 ಕ್ವಿಂಟಾಲ್; ಮೇವು 9–12 ಟನ್.",
              "Irrigated: grain 30–38 quintals; fodder 9–12 tonnes.",
            ],
            [
              "ಖುಷ್ಕಿ ಪ್ರದೇಶ: ಧಾನ್ಯ 20–28 ಕ್ವಿಂಟಾಲ್; ಮೇವು 6–8 ಟನ್.",
              "Rainfed: grain 20–28 quintals; fodder 6–8 tonnes.",
            ],
          ),
          sub("ಕಟಾವಿನ ನಂತರದ ನಿರ್ವಹಣೆ", "Post-harvest management"),
          list([
            "ಕಟಾವು ಮಾಡಿದ ಬೀಜವನ್ನು ಬಿತ್ತನೆಗೆ ಉಪಯೋಗಿಸುವುದಾದಲ್ಲಿ ಪ್ರತಿ ಕಿ.ಗ್ರಾಂ ಬೀಜವನ್ನು ಅರ್ಧ ಲೀಟರ್ ನೀರಿಗೆ 0.04 ಮಿ.ಲೀ. ಸೈನೋಪಾಡ್–45 ಎಸ್.ಸಿ. ಬೆರೆಸಿ ದ್ರಾವಣದಲ್ಲಿ ನೆನೆಸಿ, ನೆರಳಿನಲ್ಲಿ ಒಣಗಿಸಿ ಗೋಣಿ ಚೀಲದಲ್ಲಿ ದಾಸ್ತಾನು ಮಾಡುವುದರಿಂದ 9 ತಿಂಗಳುಗಳ ಕಾಲ ಕೀಟಗಳಿಂದ ರಕ್ಷಿಸಬಹುದು.",
            "If the harvested seed is to be used for sowing, soak each kg of seed in half a litre of water mixed with 0.04 ml of Cynopod-45 SC, dry it in the shade and store it in gunny bags; this protects it from insects for 9 months.",
          ]),
        ],
      },
    ],
  },
  /* ================================================================
     ಕಬ್ಬು — SUGARCANE
     ================================================================ */
  {
    slug: "sugarcane",
    name: L("ಕಬ್ಬು", "Sugarcane"),
    gist: L(
      "ರಾಜ್ಯದ ಪ್ರಮುಖ ಆರ್ಥಿಕ ಬೆಳೆಗಳಲ್ಲಿ ಒಂದು; ಮುಖ್ಯವಾಗಿ ಸಕ್ಕರೆ ಮತ್ತು ಬೆಲ್ಲದ ಉತ್ಪಾದನೆಗಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ.",
      "One of the state's main economic crops, grown mainly for sugar and jaggery.",
    ),
    sections: [
      {
        id: "intro",
        title: L("ಪರಿಚಯ", "Introduction"),
        blocks: [
          para(
            "ಕಬ್ಬು ರಾಜ್ಯದ ಪ್ರಮುಖವಾದ ಆರ್ಥಿಕ ಬೆಳೆಗಳಲ್ಲಿ ಒಂದು. ಈ ಬೆಳೆಯು ಮುಖ್ಯವಾಗಿ ರಾಜ್ಯದ ದಕ್ಷಿಣ ಭಾಗದ ಮಂಡ್ಯ, ಮೈಸೂರು ಮತ್ತು ಚಾಮರಾಜನಗರ ಜಿಲ್ಲೆಗಳಲ್ಲಿ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ. ಕಬ್ಬು ಹೆಚ್ಚು ಫಸಲು ಕೊಡುವ ದೀರ್ಘಾವಧಿ ಬೆಳೆ. ಇದನ್ನು ಮುಖ್ಯವಾಗಿ ಸಕ್ಕರೆ ಮತ್ತು ಬೆಲ್ಲದ ಉತ್ಪಾದನೆಗಾಗಿ ಬೆಳೆಯಲಾಗುತ್ತದೆ.",
            "Sugarcane is one of the state's main economic crops. It is concentrated mainly in the southern districts of Mandya, Mysuru and Chamarajanagar. Sugarcane is a long-duration crop that gives a heavy yield. It is grown mainly for the production of sugar and jaggery.",
          ),
          para(
            "ಕಬ್ಬು ಪ್ರಮುಖ ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ಬೆಳೆಯಾಗಿದೆ. ಕಬ್ಬಿನಿಂದ ಸಕ್ಕರೆ ಮತ್ತು ಬೆಲ್ಲವನ್ನು ತಯಾರಿಸಲಾಗುತ್ತದೆ. ಕಬ್ಬಿನ ತರಗನ್ನು ಗೊಬ್ಬರವಾಗಿ ಬಳಸಬಹುದು. ಕಬ್ಬಿನ ತ್ಯಾಜ್ಯದಿಂದ ಕಾಂಪೋಸ್ಟ್ ತಯಾರಿಸಬಹುದು. ಕಬ್ಬಿನ ಉಪ ಉತ್ಪನ್ನಗಳನ್ನು ವಿವಿಧ ಕೈಗಾರಿಕೆಗಳಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ.",
            "Sugarcane is a major commercial and industrial crop. Sugar and jaggery are made from it. The trash can be used as manure, and compost can be made from cane waste. Its by-products are used in various industries.",
          ),
          para(
            "ಬೆಲ್ಲ ತಯಾರಿಕೆಯಲ್ಲಿ ಸುಧಾರಿತ ಬಹುಕೊಪ್ಪರಿಗೆ ಒಲೆ ಮಾದರಿಯನ್ನು ಬಳಸುವುದರಿಂದ ಬೆಲ್ಲದ ಉತ್ಪಾದನೆ, ಗುಣಮಟ್ಟ ಮತ್ತು ಆರ್ಥಿಕತೆಯನ್ನು ಹೆಚ್ಚಿಸಬಹುದು. ಸಸ್ಯಜನ್ಯ ಸ್ವಚ್ಛಕಾರಕವಾದ ಬೆಂಡಿರಸವನ್ನು ಬಳಸಿ ರಾಸಾಯನಿಕ ಮುಕ್ತ ಬೆಲ್ಲವನ್ನು ತಯಾರಿಸಬಹುದು.",
            "Using the improved multi-pan furnace model in jaggery making can raise output, quality and economics. Chemical-free jaggery can be made using okra mucilage, a plant-based clarifier.",
          ),
        ],
      },
      {
        id: "soil-climate",
        title: L("ಮಣ್ಣು ಮತ್ತು ಹವಾಮಾನದ ಅವಶ್ಯಕತೆಗಳು", "Soil and climate requirements"),
        blocks: [
          list(
            [
              "ಮಣ್ಣು: ನೀರು ಬಸಿದು ಹೋಗುವ, 6.5 ರಿಂದ 7.0 ರಸಸಾರವಿರುವ ಕೆಂಪು ಮತ್ತು ಕಪ್ಪು ಮಣ್ಣು ಕಬ್ಬಿನ ಬೇಸಾಯಕ್ಕೆ ಸೂಕ್ತವಾಗಿದೆ.",
              "Soil: well-drained red and black soils with a pH of 6.5 to 7.0 suit sugarcane.",
            ],
            [
              "ಕಬ್ಬು ದೀರ್ಘಾವಧಿ ಬೆಳೆಯಾಗಿದ್ದು, ಇದರ ಬೇರುಗಳು ಸುಮಾರು 3 ಅಡಿ ಆಳ ಮತ್ತು 3 ಅಡಿ ಅಗಲದವರೆಗೆ ಹರಡುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿವೆ. ಆದ್ದರಿಂದ ಕಬ್ಬಿನ ಬೇಸಾಯದಲ್ಲಿ ಆಳವಾದ ಉಳುಮೆ ಮತ್ತು ಸೂಕ್ತ ಭೂಮಿ ಸಿದ್ಧತೆ ಅತ್ಯಾವಶ್ಯಕ.",
              "Sugarcane is a long-duration crop and its roots can spread to about 3 feet deep and 3 feet wide. Deep ploughing and proper land preparation are therefore essential.",
            ],
            [
              "ಹವಾಮಾನ: ಕಬ್ಬು ವಿವಿಧ ಹವಾಮಾನ ಪರಿಸ್ಥಿತಿಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳುವ ಬೆಳೆಯಾಗಿದೆ. ಕೆಲವು ತಳಿಗಳು ಶುಷ್ಕ ವಾತಾವರಣ ಮತ್ತು ನೀರಿನ ಕೊರತೆಯನ್ನು ತಡೆದುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿವೆ. ನೀರಿನ ಸಮರ್ಪಕ ಬಳಕೆ ಮತ್ತು ಸರಿಯಾದ ನೀರಾವರಿ ನಿರ್ವಹಣೆಯಿಂದ ಉತ್ತಮ ಇಳುವರಿ ಪಡೆಯಬಹುದು.",
              "Climate: sugarcane adapts to a range of climatic conditions. Some varieties can tolerate dry weather and water shortage. Good yields can be obtained through efficient water use and proper irrigation management.",
            ],
          ),
        ],
      },
      {
        id: "sowing",
        title: L("ಬಿತ್ತನೆ", "Planting"),
        blocks: [
          sub("ಬಿತ್ತನೆ ಕಾಲ", "Planting time"),
          list(
            ["ಜೂನ್–ಆಗಸ್ಟ್", "June–August"],
            ["ಅಕ್ಟೋಬರ್–ನವೆಂಬರ್", "October–November"],
            ["ಜನವರಿ–ಫೆಬ್ರವರಿ", "January–February"],
            ["ಕೆಲವು ತಳಿಗಳಿಗೆ ಜುಲೈ–ನವೆಂಬರ್", "July–November for some varieties"],
          ),
          sub("ಬಿತ್ತನೆ ತುಂಡುಗಳ ಆಯ್ಕೆ", "Selecting setts"),
          list(
            [
              "ಶಾಖೋಪಚಾರ ಮಾಡಿ ಬೆಳೆದ 8–10 ತಿಂಗಳ ಮೂಲ ಬಿತ್ತನೆ ಬೀಜದ ಕಬ್ಬಿನ ಬೆಳೆಯಿಂದ ಆರಿಸಿದ ರೋಗರಹಿತ ಕಬ್ಬಿನ ತುಂಡುಗಳನ್ನೇ ಬಿತ್ತನೆಗೆ ಬಳಸಬೇಕು.",
              "Use only disease-free setts selected from an 8–10 month old heat-treated nucleus seed cane crop.",
            ],
            [
              "ಬಿತ್ತನೆಗೆ ಹೆಚ್ಚಿನ ತೇವಾಂಶ ಹಾಗೂ ಆರೋಗ್ಯವಂತ ಮೊಳಕೆಗಳಿರುವ ಕಬ್ಬನ್ನು ಆಯ್ಕೆ ಮಾಡಬೇಕು. ಎರಡು ಅಥವಾ ಮೂರು ಕಣ್ಣುಗಳಿರುವಂತೆ ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನು ಸಿದ್ಧಪಡಿಸಬೇಕು.",
              "Select cane with good moisture and healthy buds. Prepare setts with two or three buds each.",
            ],
          ),
          sub("ಬೀಜೋಪಚಾರ", "Sett treatment"),
          list(
            [
              "ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನು ಪ್ರತಿ ಲೀಟರ್ ನೀರಿಗೆ ಒಂದು ಗ್ರಾಂ ಕಾರ್ಬೆಂಡಜಿಮ್ ಬೆರೆಸಿದ ದ್ರಾವಣದಲ್ಲಿ 15 ನಿಮಿಷ ಅದ್ದಿ ಬಿತ್ತನೆ ಮಾಡಬೇಕು.",
              "Dip the setts for 15 minutes in a solution of 1 g of carbendazim per litre of water before planting.",
            ],
            [
              "ಹನಿ ನೀರಾವರಿ ಪದ್ಧತಿಯಲ್ಲಿ ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನು ಶೇ. 1ರ ಕಾರ್ಬೆಂಡಜಿಮ್ ದ್ರಾವಣದಲ್ಲಿ 10–15 ನಿಮಿಷ ಉಪಚರಿಸಿ ನಾಟಿ ಮಾಡುವುದರಿಂದ ಬಿತ್ತನೆ ಮತ್ತು ಮಣ್ಣಿನ ಮೂಲಕ ಹರಡುವ ರೋಗಗಳನ್ನು ನಿಯಂತ್ರಿಸಬಹುದು.",
              "Under drip irrigation, treating the setts in a 1% carbendazim solution for 10–15 minutes before planting controls sett-borne and soil-borne diseases.",
            ],
          ),
          sub("ಅಂತರ", "Spacing"),
          list(
            [
              "ಸಾಮಾನ್ಯ ಪದ್ಧತಿಯಲ್ಲಿ 3 ಅಡಿ ಅಂತರದಲ್ಲಿ ಸಾಲುಗಳನ್ನು ತೆಗೆಯಬೇಕು.",
              "In the normal method, open rows 3 feet apart.",
            ],
            [
              "ಹೆಚ್ಚು ಅಂತರದ ನಾಟಿ ಪದ್ಧತಿಯಲ್ಲಿ 5 ಅಡಿ ಅಂತರದ ಸಾಲುಗಳನ್ನು ಬಳಸಬಹುದು.",
              "In the wider planting method, rows 5 feet apart can be used.",
            ],
            [
              "ಅಗಲ ಸಾಲಿನ ನಾಟಿ ಪದ್ಧತಿಯಲ್ಲಿ 5.5–6 ಅಡಿ ಅಂತರವನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.",
              "In the wide-row method, a spacing of 5.5–6 feet is used.",
            ],
            [
              "ಜೋಡಿ ಸಾಲಿನ ಪದ್ಧತಿಯಲ್ಲಿ ಎರಡು ಸಾಲುಗಳ ನಡುವೆ 1–2 ಅಡಿ ಅಂತರದಲ್ಲಿ ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನು ಜಿಗ್‌ಜಾಗ್ ರೀತಿಯಲ್ಲಿ ನಾಟಿ ಮಾಡಬೇಕು.",
              "In the paired-row method, plant the setts zigzag with 1–2 feet between the two rows.",
            ],
          ),
          sub("ಭೂಮಿ ಸಿದ್ಧತೆ", "Land preparation"),
          list(
            [
              "ಕಬ್ಬು ಬೆಳೆಯುವ ಮೊದಲು ಚಂಬೆ, ಅಪ್ಪೆಣಬು ಮುಂತಾದ ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೆಳೆಗಳನ್ನು ಬೆಳೆದು, ಶೇ. 5ರಷ್ಟು ಹೂ ಬಿಡುವ ಹಂತದಲ್ಲಿ ಭೂಮಿಗೆ ಸೇರಿಸಬೇಕು.",
              "Before planting cane, grow green manure crops such as sunn hemp and daincha and incorporate them at the 5% flowering stage.",
            ],
            [
              "ಭೂಮಿಯನ್ನು 2–3 ಬಾರಿ ಚೆನ್ನಾಗಿ ಉಳುಮೆ ಮಾಡಿ, ಕೊಟ್ಟಿಗೆ ಗೊಬ್ಬರ ಅಥವಾ ಕಾಂಪೋಸ್ಟ್ ಅನ್ನು ಮಣ್ಣಿಗೆ ಸೇರಿಸಬೇಕು.",
              "Plough the land well 2–3 times and incorporate farmyard manure or compost.",
            ],
            [
              "ರಿಡ್ಜರ್ ಅಥವಾ ಕೂಪರ್‌ನಿಂದ 3 ಅಡಿ ಅಂತರದಲ್ಲಿ ಒಂದು ಅಡಿ ಆಳಕ್ಕೆ ಸಾಲುಗಳನ್ನು ತೆಗೆಯಬೇಕು.",
              "Open furrows one foot deep at 3-foot spacing using a ridger or a cooper.",
            ],
            [
              "ಮೂಲ ಗೊಬ್ಬರವಾಗಿ ಶಿಫಾರಸ್ಸಿನ ಶೇ. 10ರಷ್ಟು ಸಾರಜನಕ ಹಾಗೂ ಪೂರ್ತಿ ರಂಜಕ ಮತ್ತು ಪೊಟ್ಯಾಷ್ ಒದಗಿಸುವ ರಸಗೊಬ್ಬರಗಳನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಬೆರೆಸಬೇಕು.",
              "As basal fertiliser, incorporate 10% of the recommended nitrogen and the full phosphorus and potash.",
            ],
            [
              "ಸಾಲುಗಳಲ್ಲಿ ನೀರು ಹಾಯಿಸಿ, ಬೋದಿನ ಮಧ್ಯಭಾಗದಲ್ಲಿ ಕಬ್ಬಿನ ತುಂಡುಗಳನ್ನು ಕಣ್ಣು ಒಂದು ಪಕ್ಕಕ್ಕೆ ಬರುವಂತೆ ನೆಡಬೇಕು.",
              "Run water in the furrows and plant the setts in the middle of the ridge with the buds facing sideways.",
            ],
          ),
        ],
      },
      {
        id: "nutrients",
        title: L("ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ", "Nutrient management"),
        blocks: [
          sub("ಕಬ್ಬು ಬೆಳೆಗೆ ರಸಗೊಬ್ಬರಗಳ ಪ್ರಮಾಣ", "Fertiliser quantities for sugarcane"),
          table(
            [
              ["ಕ್ರ.ಸಂ.", "No."],
              ["ರಸಗೊಬ್ಬರದ ಹೆಸರು", "Fertiliser"],
              ["ಪ್ರಮಾಣ", "Quantity"],
              ["ಬಳಕೆಯ ವಿಧಾನ", "How to apply"],
            ],
            [
              [
                ["1", "1"],
                ["10:26:26", "10:26:26"],
                ["1 ಚೀಲ", "1 bag"],
                ["ಮೂಲ ಗೊಬ್ಬರವಾಗಿ", "As basal"],
              ],
              [
                ["2", "2"],
                ["MOP (ಮ್ಯೂರಿಯೇಟ್ ಆಫ್ ಪೊಟ್ಯಾಷ್)", "MOP (muriate of potash)"],
                ["½ ಚೀಲ", "½ bag"],
                ["ಮೂಲ ಗೊಬ್ಬರವಾಗಿ", "As basal"],
              ],
              [
                ["3", "3"],
                ["ಯೂರಿಯಾ", "Urea"],
                ["1 ಚೀಲ", "1 bag"],
                ["ಮೇಲುಗೊಬ್ಬರವಾಗಿ", "As top dressing"],
              ],
            ],
          ),
        ],
      },
      {
        id: "water",
        title: L("ನೀರಿನ ನಿರ್ವಹಣೆ", "Water management"),
        blocks: [
          list(
            [
              "ಕಬ್ಬಿನ ಬೆಳೆಗೆ ಹವಾಮಾನ ಮತ್ತು ಮಣ್ಣಿನ ಗುಣಲಕ್ಷಣಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ನೀರು ಹಾಯಿಸಬೇಕು.",
              "Irrigate according to the weather and the characteristics of the soil.",
            ],
            ["ಮರಳು ಮಿಶ್ರಿತ ಮಣ್ಣಿನಲ್ಲಿ 8 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರು ಹಾಯಿಸಬೇಕು.", "On sandy soils, irrigate every 8 days."],
            ["ಕಪ್ಪು ಮಣ್ಣಿನಲ್ಲಿ 15 ದಿನಗಳಿಗೊಮ್ಮೆ ನೀರು ಹಾಯಿಸಬೇಕು.", "On black soils, irrigate every 15 days."],
            [
              "ಬೇಸಿಗೆಯಲ್ಲಿ ನೀರಿನ ಕೊರತೆ ಕಂಡುಬಂದಲ್ಲಿ, ಕೊನೆಯ ಬಾರಿ ಮಣ್ಣು ಏರು ಹಾಕಿದ ನಂತರ ಎಕರೆಗೆ 3 ಟನ್ ಕಬ್ಬಿನ ತರಗನ್ನು ಭೂಮಿಗೆ ಹೊದಿಸಬೇಕು.",
              "If water is short in summer, mulch the land with 3 tonnes of cane trash per acre after the last earthing up.",
            ],
            [
              "ಶೇ. 25ರಷ್ಟು ಹೆಚ್ಚುವರಿ ಪೊಟ್ಯಾಷ್ ನೀಡುವುದರಿಂದ ನೀರಿನ ಅಭಾವದಿಂದಾಗುವ ದುಷ್ಪರಿಣಾಮವನ್ನು ತಡೆಗಟ್ಟಬಹುದು. ಇದರಿಂದ ಕಬ್ಬಿನ ರಸದ ಗುಣಮಟ್ಟವೂ ಉತ್ತಮಗೊಳ್ಳುತ್ತದೆ.",
              "Giving 25% extra potash can offset the ill effects of water shortage, and also improves juice quality.",
            ],
          ),
          sub("ಹನಿ ನೀರಾವರಿ", "Drip irrigation"),
          para(
            "ಕೃಷಿಯಲ್ಲಿ ನೀರನ್ನು ಮಿತವ್ಯಯವಾಗಿ ಬಳಸಲು ಹನಿ ನೀರಾವರಿ ಅತ್ಯುತ್ತಮ ತಂತ್ರಜ್ಞಾನವಾಗಿದೆ. ಹನಿ ನೀರಾವರಿಯಿಂದ:",
            "Drip is the best technology for using water economically in farming. With drip irrigation:",
          ),
          list(
            ["ನೀರಿನ ಪೋಲಾಗುವಿಕೆಯನ್ನು ತಡೆಗಟ್ಟಬಹುದು.", "Water loss can be prevented."],
            ["ನೀರಿನ ಬಳಕೆಯ ದಕ್ಷತೆಯನ್ನು ಹೆಚ್ಚಿಸಬಹುದು.", "Water-use efficiency can be increased."],
            ["ರಸಗೊಬ್ಬರಗಳನ್ನು ನೀರಿನ ಮೂಲಕ ನೀಡಬಹುದು.", "Fertilisers can be given through the water."],
            [
              "ಬೆಳೆಯ ಇಳುವರಿ ಮತ್ತು ಗುಣಮಟ್ಟವನ್ನು ಹೆಚ್ಚಿಸಬಹುದು.",
              "Crop yield and quality can be improved.",
            ],
          ),
          para(
            "ಕಬ್ಬಿನ ಮೊಳಕೆ ಹಂತ, ತೆಂಡೆಯೊಡೆಯುವ ಹಂತ ಮತ್ತು ಶೀಘ್ರ ಬೆಳವಣಿಗೆಯ ಹಂತಗಳಲ್ಲಿ ನೀರಿನ ಅವಶ್ಯಕತೆ ಹೆಚ್ಚಿರುತ್ತದೆ.",
            "Water requirement is highest at the germination, tillering and rapid-growth stages.",
          ),
        ],
      },
      {
        id: "intercultural",
        title: L("ಅಂತರ ಬೇಸಾಯ", "Intercultural operations"),
        blocks: [
          sub("ಮಣ್ಣು ಏರು ಹಾಕುವುದು", "Earthing up"),
          list(
            [
              "ನಾಟಿ ಮಾಡಿದ ಸುಮಾರು ಒಂದೂವರೆ ತಿಂಗಳ ನಂತರ ಕಬ್ಬಿನ ಬುಡಕ್ಕೆ ಮಣ್ಣು ಏರು ಹಾಕಬೇಕು.",
              "Earth up at the base of the cane about one and a half months after planting.",
            ],
            ["ಇದರಿಂದ ಗಿಡಗಳು ಉತ್ತಮವಾಗಿ ಬೆಳೆಯಲು ಸಹಾಯವಾಗುತ್ತದೆ.", "This helps the plants grow well."],
          ),
          sub("ಕಳೆ ನಿರ್ವಹಣೆ", "Weed management"),
          list(
            [
              "ಕಬ್ಬು ಬಿತ್ತನೆಯಾದ 2–3 ದಿನಗಳಲ್ಲಿ ಸೂಕ್ತ ಕಳೆನಾಶಕವನ್ನು ಬಳಸಬಹುದು. ನಾಟಿ ಮಾಡಿದ 25ನೇ ದಿನದಲ್ಲಿ ಉದಯೋತ್ತರ ಕಳೆನಾಶಕವನ್ನು ಬಳಸುವ ಬಗ್ಗೆ ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ವಿವರಿಸಲಾಗಿದೆ.",
              "A suitable herbicide can be used within 2–3 days of planting. The source text describes using a post-emergence herbicide on the 25th day after planting.",
            ],
            [
              "ಕಳೆನಾಶಕಗಳನ್ನು ಬಳಸುವಾಗ ಮಣ್ಣಿನಲ್ಲಿ ಸಾಕಷ್ಟು ತೇವಾಂಶವಿರಬೇಕು ಮತ್ತು ಮಣ್ಣಿನಲ್ಲಿ ಹೆಚ್ಚು ಹೆಂಟೆಗಳಿರದಂತೆ ಎಚ್ಚರ ವಹಿಸಬೇಕು.",
              "When using herbicides there must be enough moisture in the soil, and care should be taken that the soil is not too cloddy.",
            ],
          ),
        ],
      },
      {
        id: "cropping-systems",
        title: L("ಬೆಳೆ ಪದ್ಧತಿಗಳು", "Cropping systems"),
        blocks: [
          sub("ತಿಂಗಳ ಹುರುಳಿ", "French bean"),
          list(
            [
              "ಕಬ್ಬಿನ ಸಾಲುಗಳ ನಡುವೆ ತಿಂಗಳ ಹುರುಳಿಯನ್ನು (ತಳಿ S-9) ಕಬ್ಬು ನಾಟಿ ಮಾಡಿದ ದಿನ ಅಥವಾ ಮರುದಿನ ಬಿತ್ತಬೇಕು.",
              "Sow french bean (variety S-9) between the cane rows on the day of planting the cane or the next day.",
            ],
            ["ಸಾಲಿನಿಂದ ಸಾಲಿಗೆ ಅಂತರ: 1 ಅಡಿ.", "Row to row: 1 foot."],
            ["ಬೀಜದಿಂದ ಬೀಜಕ್ಕೆ ಅಂತರ: 6 ಅಂಗುಲ.", "Seed to seed: 6 inches."],
            ["ಬಿತ್ತನೆ ಬೀಜ: ಎಕರೆಗೆ 12–15 ಕೆ.ಜಿ.", "Seed rate: 12–15 kg per acre."],
            ["ಕಟಾವಿನ ಅವಧಿ: 55–60 ದಿನಗಳು.", "Duration to harvest: 55–60 days."],
            ["ಕಾಯಿಯ ಇಳುವರಿ: ಎಕರೆಗೆ ಸರಾಸರಿ 12 ಕ್ವಿಂಟಾಲ್.", "Pod yield: about 12 quintals per acre."],
            [
              "ಕಾಯಿ ಕಟಾವಿನ ನಂತರ ಗಿಡದ ಉಳಿದ ಭಾಗವನ್ನು ಮಣ್ಣಿನಲ್ಲಿ ಸೇರಿಸಿ ಉಳುಮೆ ಮಾಡಬೇಕು. ಇದರಿಂದ ಹೆಚ್ಚುವರಿ ಆದಾಯದ ಜೊತೆಗೆ ಭೂಮಿಯ ಫಲವತ್ತತೆಯೂ ಉತ್ತಮಗೊಳ್ಳುತ್ತದೆ.",
              "After picking the pods, incorporate the plant residue into the soil. This gives extra income and also improves soil fertility.",
            ],
          ),
          sub("ಸೋಯಾ ಅವರೆ", "Soybean"),
          list(
            [
              "ಕಬ್ಬು ನಾಟಿ ಮಾಡಿದ ದಿನ ಅಥವಾ ಮರುದಿನ ಕಬ್ಬಿನ ಸಾಲುಗಳ ನಡುವೆ ಸೋಯಾ ಅವರೆ ಬಿತ್ತಬಹುದು.",
              "Soybean can be sown between the cane rows on the day of planting or the next day.",
            ],
            [
              "3 ಅಡಿ ಅಂತರದ ಕಬ್ಬಿನ ಸಾಲುಗಳಲ್ಲಿ ಒಂದು ಸಾಲು ಸೋಯಾ ಅವರೆ ಬಿತ್ತಬಹುದು.",
              "With cane rows 3 feet apart, one row of soybean can be sown.",
            ],
            [
              "5 ಅಡಿ ಅಂತರದ ಕಬ್ಬಿನ ಸಾಲುಗಳಲ್ಲಿ ಎರಡು ಸಾಲು ಸೋಯಾ ಅವರೆ ಬಿತ್ತಬಹುದು.",
              "With cane rows 5 feet apart, two rows of soybean can be sown.",
            ],
            ["ಬೀಜದಿಂದ ಬೀಜಕ್ಕೆ ಅಂತರ: 4 ಅಂಗುಲ.", "Seed to seed: 4 inches."],
            ["ಬಿತ್ತನೆ ಬೀಜ: ಎಕರೆಗೆ 10–15 ಕೆ.ಜಿ.", "Seed rate: 10–15 kg per acre."],
            ["ಕಟಾವಿನ ಅವಧಿ: 80–90 ದಿನಗಳು.", "Duration to harvest: 80–90 days."],
            [
              "ಬಿತ್ತನೆಗೆ ಮೊದಲು ಸೋಯಾ ಅವರೆ ಬೀಜಕ್ಕೆ ರೈಜೋಬಿಯಂ ಜೀವಾಣುವಿನಿಂದ ಬೀಜೋಪಚಾರ ಮಾಡಬೇಕು.",
              "Treat the soybean seed with Rhizobium culture before sowing.",
            ],
            [
              "ಕಟಾವಿನ ನಂತರ ಉಳಿದ ಸಸ್ಯಭಾಗವನ್ನು ಭೂಮಿಗೆ ಸೇರಿಸಿ ಉಳುಮೆ ಮಾಡಬೇಕು.",
              "After harvest, incorporate the plant residue into the soil.",
            ],
          ),
          sub("ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೆಳೆಗಳು", "Green manure crops"),
          list(
            [
              "ಚಂಬೆ ಮತ್ತು ಅಪ್ಪೆಣಬು ಮುಂತಾದ ಹಸಿರೆಲೆ ಗೊಬ್ಬರದ ಬೆಳೆಗಳನ್ನು ಅಂತರ ಬೆಳೆಗಳಾಗಿ ಬೆಳೆದು, ಶೇ. 5ರಷ್ಟು ಹೂ ಬಿಡುವ ಹಂತದಲ್ಲಿ ಭೂಮಿಗೆ ಸೇರಿಸಬೇಕು.",
              "Grow green manure crops such as sunn hemp and daincha as intercrops and incorporate them at the 5% flowering stage.",
            ],
            [
              "ಇದರಿಂದ ಕಳೆ ನಿರ್ವಹಣೆ ಹಾಗೂ ಭೂಮಿಯ ಫಲವತ್ತತೆಯನ್ನು ಹೆಚ್ಚಿಸಬಹುದು.",
              "This helps with weed management and increases soil fertility.",
            ],
          ),
        ],
      },
      {
        id: "pests",
        title: L("ಕೀಟಗಳು", "Pests"),
        blocks: [
          table(
            [
              ["ಕೀಟಗಳು", "Pest"],
              ["ಬಾಧೆಯ ಲಕ್ಷಣಗಳು", "Symptoms"],
              ["ನಿರ್ವಹಣಾ ಕ್ರಮಗಳು", "Management"],
            ],
            [
              [
                ["ಮೇಲಿನ ಸುಳಿ ಕೊರೆಯುವ ಹುಳು", "Top shoot borer"],
                [
                  "ಸುಳಿಯ ಗರಿಗಳಲ್ಲಿ ಗುಂಡು ಸೂಜಿಯಾಕಾರದ ರಂಧ್ರಗಳು ಮೂಡುತ್ತವೆ. ಜಲ್ಲೆಯ ಮೇಲಿನ ಕಣ್ಣುಗಳು ಮೊಳೆತು ಕವಲುಗಳು ಬರುತ್ತವೆ. ಇದನ್ನು ಗೊಂಚಲು ತುದಿ ಎಂದು ಕರೆಯುತ್ತಾರೆ.",
                  "Pinhole-shaped holes appear in the whorl leaves. The buds on the cane sprout and produce side shoots, which is called bunchy top.",
                ],
                [
                  "ಗೊಂಚಲು ತುದಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ ನಾಶ ಮಾಡುವುದು. ಟ್ರೈಕೋಗ್ರಾಮ ಪರತಂತ್ರ ಜೀವಿಗಳನ್ನು ಬಳಸುವುದು.",
                  "Collect and destroy the bunchy tops. Use Trichogramma parasitoids.",
                ],
              ],
              [
                ["ಗೆದ್ದಲು", "Termite"],
                [
                  "ಬಿತ್ತನೆ ತುಂಡುಗಳು, ಬೇರು ಮತ್ತು ಕಾಂಡದ ಭಾಗಗಳಿಗೆ ಹಾನಿ ಉಂಟುಮಾಡುತ್ತದೆ. ಗಿಡದ ಬುಡ ಒಣಗಿ, ಗಾಳಿ ಬೀಸಿದಾಗ ಗಿಡಗಳು ಬೀಳುತ್ತವೆ.",
                  "It damages the setts, roots and stem. The base of the plant dries and the plants fall when the wind blows.",
                ],
                [
                  "ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನು ಆರೋಗ್ಯಕರವಾಗಿ ಆಯ್ಕೆ ಮಾಡುವುದು. ಶಿಫಾರಸ್ಸಿನ ನಿರ್ವಹಣಾ ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸುವುದು.",
                  "Select healthy setts. Follow the recommended management measures.",
                ],
              ],
              [
                ["ಬಿಳಿ ಉಣ್ಣೆ ಹೇನು", "Woolly aphid"],
                [
                  "ಗರಿಗಳ ತಳಭಾಗದಲ್ಲಿ ಗುಂಪಾಗಿ ರಸ ಹೀರುತ್ತವೆ. ತಳ ಗರಿಗಳಲ್ಲಿ ಕಪ್ಪು ಬೂಷ್ಟು ಬೆಳೆಯುತ್ತದೆ. ಕಬ್ಬಿನ ಬೆಳವಣಿಗೆ ಕುಂಠಿತವಾಗುತ್ತದೆ.",
                  "They suck sap in colonies on the underside of the leaves. Black sooty mould grows on the lower leaves. Cane growth is stunted.",
                ],
                [
                  "ಬಾಧಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬಿಳಿ ಉಣ್ಣೆ ಹೇನಿನ ನಿರೋಧಕ ತಳಿ ಅಭಿಮನ್ಯುವನ್ನು ಬೆಳೆಯುವುದು. ಇತರೆ ತಳಿಗಳನ್ನು 5 ಅಡಿ ಅಂತರದ ಸಾಲುಗಳಲ್ಲಿ ನಾಟಿ ಮಾಡುವುದು. ಜೈವಿಕ ಹತೋಟಿ ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸುವುದು.",
                  "In affected areas, grow the woolly-aphid-resistant variety Abhimanyu. Plant other varieties in rows 5 feet apart. Follow biological control measures.",
                ],
              ],
            ],
          ),
          sub("ಜೈವಿಕ ನಿಯಂತ್ರಣ", "Biological control"),
          list(
            [
              "ಕಬ್ಬಿನ ಮೇಲಿನ ಸುಳಿ ಕೊರೆಯುವ ಹುಳಿನ ನಿಯಂತ್ರಣಕ್ಕೆ ಟ್ರೈಕೋಗ್ರಾಮ ಪರತಂತ್ರ ಜೀವಿಗಳನ್ನು ಬಳಸಬಹುದು.",
              "Trichogramma parasitoids can be used to control the top shoot borer.",
            ],
            [
              "ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ಕಬ್ಬು ನೆಟ್ಟ 90 ದಿನಗಳ ನಂತರ ಪ್ರತಿ ಎಕರೆಗೆ 6,000 ಟ್ರೈಕೋಗ್ರಾಮ ಪರತಂತ್ರ ಜೀವಿಗಳನ್ನು ಪ್ರತಿ ವಾರಕ್ಕೊಮ್ಮೆ ಐದು ವಾರಗಳವರೆಗೆ ಬಿಡುಗಡೆ ಮಾಡುವುದನ್ನು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.",
              "The source text mentions releasing 6,000 Trichogramma per acre once a week for five weeks, starting 90 days after planting.",
            ],
            [
              "ಪರಿಸರದಲ್ಲಿರುವ ಉಪಕಾರಿ ಜೀವಿಗಳನ್ನು ಸಂರಕ್ಷಿಸುವುದರಿಂದ ಕೀಟಗಳ ನೈಸರ್ಗಿಕ ನಿಯಂತ್ರಣಕ್ಕೆ ಸಹಾಯವಾಗುತ್ತದೆ.",
              "Conserving the beneficial organisms present in the environment helps natural control of pests.",
            ],
          ),
        ],
      },
      {
        id: "diseases",
        title: L("ರೋಗಗಳು", "Diseases"),
        blocks: [
          table(
            [
              ["ರೋಗಗಳು", "Disease"],
              ["ಮುಖ್ಯ ಲಕ್ಷಣಗಳು", "Main symptoms"],
              ["ನಿರ್ವಹಣಾ ಕ್ರಮಗಳು", "Management"],
            ],
            [
              [
                ["ಅನಾನಸ್ ರೋಗ", "Pineapple disease"],
                [
                  "ಬಿತ್ತನೆ ತುಂಡುಗಳು ಕೊಳೆತು ಮಾಗಿದ ಅನಾನಸ್ ಹಣ್ಣಿನ ರೀತಿಯ ವಾಸನೆಯನ್ನು ಸೂಸುತ್ತವೆ. ಮೊಳಕೆಯೊಡೆಯುವ ಪ್ರಮಾಣ ಕಡಿಮೆಯಾಗುತ್ತದೆ.",
                  "The setts rot and give off a smell like ripe pineapple. Germination falls.",
                ],
                [
                  "ರೋಗರಹಿತ ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನು ಬಳಸಬೇಕು. ಬಿತ್ತನೆ ತುಂಡುಗಳಿಗೆ ಶಿಫಾರಸ್ಸಿನ ಬೀಜೋಪಚಾರ ಮಾಡಬೇಕು.",
                  "Use disease-free setts. Give the setts the recommended treatment.",
                ],
              ],
              [
                ["ಎಲೆ ಚುಕ್ಕೆ ರೋಗ", "Leaf spot"],
                [
                  "ರೋಗಪೀಡಿತ ಗಿಡಗಳ ಎಲೆಗಳ ಮೇಲೆ ನೀಳವಾದ ಕಂದು ಅಥವಾ ಕೆಂಪು ಚುಕ್ಕೆಗಳು ಕಾಣಿಸಿಕೊಂಡು ಎಲೆಗಳು ಸಂಪೂರ್ಣ ಒಣಗುತ್ತವೆ.",
                  "Elongated brown or red spots appear on the leaves of affected plants and the leaves dry completely.",
                ],
                [
                  "ರೋಗ ನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬಳಸಬೇಕು. ರೋಗದ ಲಕ್ಷಣಗಳನ್ನು ಗುರುತಿಸಿ ಸೂಕ್ತ ನಿರ್ವಹಣಾ ಕ್ರಮಗಳನ್ನು ಕೈಗೊಳ್ಳಬೇಕು.",
                  "Use resistant varieties. Identify the symptoms and take suitable management measures.",
                ],
              ],
              [
                ["ಹಳದಿ ನಂಜು ರೋಗ", "Yellow leaf disease"],
                [
                  "ಗಿಡದ ಎಲೆಗಳು ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗಿ ಬೆಳವಣಿಗೆ ಕುಂಠಿತವಾಗುತ್ತದೆ.",
                  "The leaves turn yellow and growth is stunted.",
                ],
                [
                  "ರೋಗಪೀಡಿತ ಗಿಡಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಕು. ಆರೋಗ್ಯಕರ ಬಿತ್ತನೆ ಕಬ್ಬನ್ನು ಬಳಸಬೇಕು.",
                  "Remove affected plants. Use healthy seed cane.",
                ],
              ],
            ],
          ),
          sub("ರೋಗ ನಿರ್ವಹಣೆಗೆ ವಿಶೇಷ ಸೂಚನೆಗಳು", "Special notes on disease management"),
          list(
            ["ರೋಗರಹಿತ ಬಿತ್ತನೆ ತುಂಡುಗಳನ್ನೇ ಬಳಸಬೇಕು.", "Use only disease-free setts."],
            [
              "ಬಿತ್ತನೆಗೆ ಬಳಸುವ ಕಬ್ಬನ್ನು ಸೂಕ್ತ ಶಾಖೋಪಚಾರಕ್ಕೆ ಒಳಪಡಿಸಬೇಕು.",
              "Give the seed cane appropriate heat treatment.",
            ],
            ["ರೋಗಪೀಡಿತ ಗಿಡಗಳನ್ನು ಕಿತ್ತು ನಾಶಪಡಿಸಬೇಕು.", "Uproot and destroy affected plants."],
            [
              "ಅಂಗಾಂಶ ಕೃಷಿಯಿಂದ ಬೆಳೆದ ಆರೋಗ್ಯಕರ ಸಸಿಗಳನ್ನು ಬಿತ್ತನೆಗೆ ಬಳಸಬಹುದು.",
              "Healthy tissue-culture plantlets can be used for planting.",
            ],
            [
              "ರೋಗದ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಲ್ಲಿ ಸೂಕ್ತ ಸಸ್ಯ ಸಂರಕ್ಷಣಾ ಕ್ರಮಗಳನ್ನು ಅನುಸರಿಸಬೇಕು.",
              "If symptoms appear, follow suitable plant protection measures.",
            ],
          ),
        ],
      },
      {
        id: "harvest",
        title: L(
          "ಕಟಾವು, ಇಳುವರಿ ಮತ್ತು ಕಟಾವಿನ ನಂತರದ ನಿರ್ವಹಣೆ",
          "Harvest, yield and post-harvest handling",
        ),
        blocks: [
          sub("ಕಟಾವು", "Harvest"),
          list(
            [
              "ತಳಿಗನುಗುಣವಾಗಿ ಕಬ್ಬು ಬಿತ್ತನೆಯಾದ 10–14 ತಿಂಗಳುಗಳಲ್ಲಿ ಕಟಾವಿಗೆ ಸಿದ್ಧವಾಗುತ್ತದೆ.",
              "Depending on the variety, cane is ready for harvest 10–14 months after planting.",
            ],
            [
              "ಕಬ್ಬನ್ನು ಸೂಲಂಗಿ ಬಂದ ಎರಡು ತಿಂಗಳೊಳಗಾಗಿ ಕಟಾವು ಮಾಡಬೇಕು. ತಳಿ ಮತ್ತು ಬಿತ್ತನೆಯ ಕಾಲಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಇಳುವರಿ ಪಡೆಯಬಹುದು.",
              "Harvest within two months of arrowing. Yield depends on the variety and the planting time.",
            ],
          ),
          sub("ಇಳುವರಿ", "Yield"),
          para(
            "ಕಬ್ಬಿನ ಇಳುವರಿ ತಳಿ, ಬಿತ್ತನೆ ಕಾಲ, ನೀರಾವರಿ, ಪೋಷಕಾಂಶಗಳ ನಿರ್ವಹಣೆ ಮತ್ತು ಇತರ ಬೇಸಾಯ ಕ್ರಮಗಳನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ. ಮೂಲ ಪಠ್ಯದಲ್ಲಿ ನೀಡಿರುವಂತೆ:",
            "Cane yield depends on the variety, planting time, irrigation, nutrient management and other practices. As given in the source text:",
          ),
          list(
            [
              "ಮೊದಲ ಕೂಳೆ ಬೆಳೆಯಿಂದ ಎಕರೆಗೆ 35–40 ಟನ್ ಇಳುವರಿ ಪಡೆಯಬಹುದು.",
              "The first ratoon crop can give 35–40 tonnes per acre.",
            ],
            [
              "ಎರಡನೇ ಮತ್ತು ಮೂರನೇ ಕೂಳೆ ಬೆಳೆಯಿಂದ ಎಕರೆಗೆ 30–35 ಟನ್ ಇಳುವರಿ ಪಡೆಯಬಹುದು.",
              "The second and third ratoon crops can give 30–35 tonnes per acre.",
            ],
          ),
          sub("ಕಟಾವಿನ ನಂತರದ ನಿರ್ವಹಣೆ", "Post-harvest management"),
          list(
            [
              "ಕಬ್ಬಿನ ಕಟಾವು ಮುಗಿದ ನಂತರ ತರಗನ್ನು ಜಮೀನಿನಲ್ಲೇ ಪರ್ಯಾಯ ಸಾಲುಗಳಲ್ಲಿ ಹರಡಿ ನೀರು ಹಾಯಿಸಬೇಕು.",
              "After harvest, spread the trash in alternate rows in the field and irrigate.",
            ],
            [
              "ತರಗನ್ನು ಕಾಂಪೋಸ್ಟ್ ಆಗಿ ಪರಿವರ್ತಿಸಲು ಯೂರಿಯಾ ಬೆರೆಸಿದ ಸಗಣಿ ಬಗ್ಗಡ ಮತ್ತು ಸೂಕ್ಷ್ಮಾಣುಜೀವಿಗಳನ್ನು ಬಳಸಬಹುದು.",
              "To convert the trash into compost, cow dung slurry mixed with urea, along with microbial cultures, can be used.",
            ],
            [
              "ತರಗನ್ನು ತ್ವರಿತವಾಗಿ ಕೊಳೆಯಿಸುವುದರಿಂದ ಮಣ್ಣಿಗೆ ಪೋಷಕಾಂಶಗಳು ಲಭ್ಯವಾಗುತ್ತವೆ ಮತ್ತು ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ಹೆಚ್ಚುತ್ತದೆ.",
              "Decomposing the trash quickly makes nutrients available to the soil and increases fertility.",
            ],
          ),
          sub("ಕೂಳೆ ಬೆಳೆ ನಿರ್ವಹಣೆ", "Ratoon crop management"),
          list(
            [
              "ಕಬ್ಬು ಕಟಾವು ಮಾಡಿದ 8–10 ದಿನಗಳೊಳಗಾಗಿ ಕಟಾವನ್ನು ಪೂರ್ಣಗೊಳಿಸಬೇಕು.",
              "Complete the harvest within 8–10 days.",
            ],
            [
              "ಕಟಾವು ಮುಗಿದ ಕೂಡಲೇ ಕೂಳೆಯನ್ನು ಭೂಮಿಯ ಮಟ್ಟಕ್ಕೆ ಸವರಬೇಕು.",
              "As soon as harvest is over, shave the stubble down to ground level.",
            ],
            ["ರೋಗಪೀಡಿತ ಕೂಳೆಗಳನ್ನು ತೆಗೆದುಹಾಕಬೇಕು.", "Remove diseased stubble."],
            [
              "ವಿರಳವಾಗಿ ಸಸಿಗಳು ಇರುವ ಸ್ಥಳಗಳಲ್ಲಿ ಆರೋಗ್ಯಕರ ಸಸಿಗಳಿಂದ ಪಿಗ್ಗುಳಿ ಭರ್ತಿ ಮಾಡಬೇಕು.",
              "Gap-fill thin patches with healthy plants.",
            ],
            [
              "ಶಿಫಾರಸ್ಸಿನ ಪ್ರಮಾಣದಲ್ಲಿ ರಸಗೊಬ್ಬರಗಳನ್ನು ನೀಡಬೇಕು.",
              "Apply fertilisers at the recommended rates.",
            ],
            [
              "ಮೊದಲ ಬೆಳೆಗೆ ಸೂಚಿಸಿದ ಸಸ್ಯ ಸಂರಕ್ಷಣಾ ಕ್ರಮಗಳನ್ನೇ ಕೂಳೆ ಬೆಳೆಯಲ್ಲಿಯೂ ಅನುಸರಿಸಬೇಕು.",
              "Follow the same plant protection measures in the ratoon crop as in the plant crop.",
            ],
          ),
        ],
      },
    ],
  },
];

export function getCropGuide(slug: string) {
  return CROP_GUIDES.find((c) => c.slug === slug);
}

export function otherCropGuides(slug: string) {
  return CROP_GUIDES.filter((c) => c.slug !== slug);
}

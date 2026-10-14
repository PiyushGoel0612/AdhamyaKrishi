import type { SeasonRow } from "@/lib/types";

/* Transcribed from POP-S.docx: cropping season, sowing window, and the
   crops that suit low water in each. */

export const SEASON_ROWS: SeasonRow[] = [
  {
    season: { kn: "ಬೇಸಿಗೆ", en: "Summer" },
    sowing: { kn: "ಜನವರಿ–ಏಪ್ರಿಲ್", en: "January–April" },
    crops: {
      kn: "ಹುರುಳಿ, ಅಲಸಂದೆ; ಮಣ್ಣಿನ ತೇವಾಂಶವಿದ್ದರೆ ಮಾತ್ರ",
      en: "Horse gram, cowpea; only if there is soil moisture",
    },
  },
  {
    season: { kn: "ಮುಂಗಾರು", en: "Kharif (south-west monsoon)" },
    sowing: { kn: "ಜೂನ್–ಜುಲೈ", en: "June–July" },
    crops: {
      kn: "ರಾಗಿ, ತೊಗರಿ, ಅವರೆ, ಅಲಸಂದೆ, ನವಣೆ",
      en: "Ragi, pigeon pea, field bean, cowpea, foxtail millet",
    },
  },
  {
    season: { kn: "ಮುಂಗಾರು ತಡವಾದಾಗ", en: "When the monsoon is late" },
    sowing: { kn: "ಜುಲೈ–ಆಗಸ್ಟ್", en: "July–August" },
    crops: {
      kn: "ಅಲ್ಪಾವಧಿ ರಾಗಿ, ಹುರುಳಿ, ಅಲಸಂದೆ",
      en: "Short-duration ragi, horse gram, cowpea",
    },
  },
  {
    season: { kn: "ಹಿಂಗಾರು", en: "Rabi (post-monsoon)" },
    sowing: { kn: "ಸೆಪ್ಟೆಂಬರ್–ಅಕ್ಟೋಬರ್", en: "September–October" },
    crops: {
      kn: "ಹುರುಳಿ, ಕಡಲೆ, ಅಲಸಂದೆ",
      en: "Horse gram, bengal gram, cowpea",
    },
  },
  {
    season: { kn: "ಬರ ಪರಿಸ್ಥಿತಿ", en: "Drought conditions" },
    sowing: { kn: "ಮಳೆಯ ಆಧಾರದಲ್ಲಿ", en: "Depending on rainfall" },
    crops: {
      kn: "ಹುರುಳಿ, ಸಣ್ಣ ಧಾನ್ಯಗಳು, ಮೇವು ಬೆಳೆಗಳು",
      en: "Horse gram, small millets, fodder crops",
    },
  },
];

export const SEASON_HEAD = {
  season: { kn: "ಕೃಷಿ ಋತುಮಾನ", en: "Cropping season" },
  sowing: { kn: "ಬಿತ್ತನೆ ಕಾಲ", en: "Sowing time" },
  crops: { kn: "ಕಡಿಮೆ ನೀರಿಗೆ ಸೂಕ್ತ ಬೆಳೆಗಳು", en: "Crops suited to low water" },
};

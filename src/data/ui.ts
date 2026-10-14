import type { Localized } from "@/lib/types";

/** All UI chrome. Content strings live with their data in the other
 *  files in this folder, transcribed from the source documents. */
export const UI = {
  brand: { kn: "ಅದಮ್ಯ ಕೃಷಿ", en: "Adhamya Krishi" },
  tagline: {
    kn: "ಬೆಳೆ, ಯೋಜನೆ ಮತ್ತು ಸಂಪರ್ಕ ಮಾಹಿತಿ",
    en: "Crops, schemes and contacts",
  },

  navHome: { kn: "ಮುಖಪುಟ", en: "Home" },
  navCrops: { kn: "ಬೆಳೆಗಳು", en: "Crops" },
  navSchemes: { kn: "ಯೋಜನೆಗಳು", en: "Schemes" },
  navSeasons: { kn: "ಹಂಗಾಮು", en: "Seasons" },
  navContacts: { kn: "ಸಂಪರ್ಕ", en: "Contacts" },
  menu: { kn: "ಮೆನು", en: "Menu" },
  close: { kn: "ಮುಚ್ಚಿ", en: "Close" },
  langLabel: { kn: "ಭಾಷೆ", en: "Language" },
  skipToContent: { kn: "ಮುಖ್ಯ ವಿಷಯಕ್ಕೆ ಹೋಗಿ", en: "Skip to main content" },

  heroTitle: {
    kn: "ರೈತರಿಗೆ ಬೇಕಾದ ಮಾಹಿತಿ, ಒಂದೇ ಕಡೆ",
    en: "What a farmer needs, in one place",
  },
  heroBody: {
    kn: "ಐದು ಬೆಳೆಗಳ ಬೇಸಾಯ ಕ್ರಮಗಳು, ರೈತರಿಗೆ ಸಿಗುವ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಹಂಗಾಮುವಾರು ಬಿತ್ತನೆ ಮಾಹಿತಿ ಮತ್ತು ಕೃಷಿ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳ ಸಂಪರ್ಕ ವಿವರಗಳು.",
    en: "Package of practices for five crops, the government schemes available to farmers, season-wise sowing information, and contact details for agricultural research centres.",
  },

  cardCropsTitle: { kn: "ಬೆಳೆಗಳ ಬೇಸಾಯ ಕ್ರಮಗಳು", en: "Package of practices" },
  cardCropsBody: {
    kn: "ರಾಗಿ, ತೆಂಗು, ಶುಂಠಿ, ಮುಸುಕಿನಜೋಳ ಮತ್ತು ಕಬ್ಬು — ಪರಿಚಯದಿಂದ ಕೊಯ್ಲಿನವರೆಗೆ.",
    en: "Ragi, coconut, ginger, maize and sugarcane — from introduction to harvest.",
  },
  cardSchemesTitle: { kn: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", en: "Government schemes" },
  cardSchemesBody: {
    kn: "ಉದ್ದೇಶ, ಪ್ರಮುಖ ಅಂಶಗಳು ಮತ್ತು ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಸ್ಥಳ.",
    en: "Objective, key points and where to apply.",
  },
  cardSeasonsTitle: { kn: "ಹಂಗಾಮು ಮತ್ತು ಬಿತ್ತನೆ", en: "Season and sowing" },
  cardSeasonsBody: {
    kn: "ಯಾವ ಹಂಗಾಮಿನಲ್ಲಿ ಯಾವಾಗ ಬಿತ್ತಬೇಕು ಮತ್ತು ಕಡಿಮೆ ನೀರಿಗೆ ಸೂಕ್ತ ಬೆಳೆಗಳು.",
    en: "When to sow in each season, and which crops suit low water.",
  },
  cardContactsTitle: { kn: "ಸಂಪರ್ಕ ವಿವರಗಳು", en: "Contact details" },
  cardContactsBody: {
    kn: "ಕೃಷಿ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳ ದೂರವಾಣಿ ಸಂಖ್ಯೆಗಳು.",
    en: "Agricultural research centres and officers, with phone numbers.",
  },

  /* Crops */
  cropsTitle: { kn: "ಬೆಳೆಗಳು", en: "Crops" },
  cropsIntro: {
    kn: "ಪ್ರತಿ ಬೆಳೆಗೂ ಪರಿಚಯ, ಮಣ್ಣು ಮತ್ತು ಹವಾಗುಣ, ತಳಿಗಳು, ಬಿತ್ತನೆ, ಪೋಷಕಾಂಶ, ನೀರು, ಕೀಟ–ರೋಗ ನಿರ್ವಹಣೆ ಮತ್ತು ಕೊಯ್ಲಿನ ಮಾಹಿತಿ.",
    en: "For each crop: introduction, soil and climate, varieties, sowing, nutrients, water, pest and disease management, and harvest.",
  },
  backToCrops: { kn: "ಎಲ್ಲಾ ಬೆಳೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ", en: "Back to all crops" },
  otherCrops: { kn: "ಇತರ ಬೆಳೆಗಳು", en: "Other crops" },
  onThisPage: { kn: "ಈ ಪುಟದಲ್ಲಿ", en: "On this page" },

  /* Schemes */
  schemesTitle: { kn: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು", en: "Government schemes" },
  schemesIntro: {
    kn: "ರೈತರಿಗೆ ಲಭ್ಯವಿರುವ ಯೋಜನೆಗಳ ಉದ್ದೇಶ, ಪ್ರಮುಖ ಅಂಶಗಳು ಮತ್ತು ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ವಿಧಾನ.",
    en: "The objective, key points and application route for the schemes available to farmers.",
  },
  backToSchemes: { kn: "ಎಲ್ಲಾ ಯೋಜನೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ", en: "Back to all schemes" },

  /* Seasons */
  seasonsTitle: { kn: "ಕೃಷಿ ಹಂಗಾಮು ಮತ್ತು ಬಿತ್ತನೆ", en: "Cropping season and sowing" },
  seasonsIntro: {
    kn: "ಕೃಷಿ ಋತುಮಾನ, ಬಿತ್ತನೆ ಕಾಲ ಮತ್ತು ಕಡಿಮೆ ನೀರಿಗೆ ಸೂಕ್ತವಾದ ಬೆಳೆಗಳು.",
    en: "Cropping season, sowing time, and the crops that suit low water.",
  },

  /* Contacts */
  contactsTitle: {
    kn: "ಕೃಷಿ ಸಂಶೋಧನಾ ಕೇಂದ್ರಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳ ಸಂಪರ್ಕ ವಿವರಗಳು",
    en: "Agricultural research centres and officer contacts",
  },
  contactsIntro: {
    kn: "ಬೇಸಾಯ ಕ್ರಮಗಳು, ತಳಿ ಆಯ್ಕೆ ಅಥವಾ ಕೀಟ–ರೋಗ ನಿರ್ವಹಣೆಯ ಬಗ್ಗೆ ನೇರವಾಗಿ ಕೇಳಲು ಈ ಕೇಂದ್ರಗಳನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.",
    en: "Contact these centres directly with questions about practices, variety choice, or pest and disease management.",
  },
  colSerial: { kn: "ಕ್ರ.ಸಂ.", en: "No." },
  colOfficer: { kn: "ಅಧಿಕಾರಿಯ ಹೆಸರು", en: "Officer" },
  colRole: { kn: "ಹುದ್ದೆ", en: "Designation" },
  colPhone: { kn: "ಸಂಪರ್ಕ ಸಂಖ್ಯೆ", en: "Phone" },
  colEmail: { kn: "ಇಮೇಲ್ ವಿಳಾಸ", en: "Email" },
  locationLabel: { kn: "ಸ್ಥಳ", en: "Location" },
  callLabel: { kn: "ಕರೆ ಮಾಡಿ", en: "Call" },

  /* Shared */
  readMore: { kn: "ಇನ್ನಷ್ಟು ಓದಿ", en: "Read more" },
  seeAll: { kn: "ಎಲ್ಲವನ್ನೂ ನೋಡಿ", en: "See all" },
  sourceNotice: {
    kn: "ಈ ಮಾಹಿತಿಯನ್ನು ಬೇಸಾಯ ಕ್ರಮಗಳ ಕೈಪಿಡಿಯಿಂದ (ಸುಧಾರಿತ ಬೇಸಾಯ ಕ್ರಮಗಳು (POP) ಕೃಷಿ ವಿಶ್ವವಿದ್ಯಾಲಯ, ಬೆಂಗಳೂರು ತೋಟಗಾರಿಕೆ ವಿಜ್ಞಾನಗಳ ವಿಶ್ವವಿದ್ಯಾಲಯ, ಬಾಗಲಕೋಟೆ) ನೇರವಾಗಿ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ. ಔಷಧಿಯ ಪ್ರಮಾಣ ಮತ್ತು ತಳಿ ಆಯ್ಕೆಯನ್ನು ಬಳಸುವ ಮೊದಲು ನಿಮ್ಮ ಹತ್ತಿರದ ರೈತ ಸಂಪರ್ಕ ಕೇಂದ್ರ ಅಥವಾ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರದಲ್ಲಿ ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.",
    en: "This information is taken directly from 'The POP of University of Agricultural Sciences Banglore and University of Horticultural Sciences, Bagalkote'. Confirm chemical doses and variety choice at your nearest Raitha Samparka Kendra or Krishi Vigyan Kendra before acting on them.",
  },
  footerNote: {
    kn: "ಅದಮ್ಯ ಕೃಷಿ ಒಂದು ಮಾಹಿತಿ ಸೇವೆ. ಇದು ಸರ್ಕಾರಿ ವೆಬ್‌ಸೈಟ್ ಅಲ್ಲ ಮತ್ತು ಯಾವುದೇ ಅರ್ಜಿಗೆ ಅನುಮೋದನೆ ನೀಡಲು ಸಾಧ್ಯವಿಲ್ಲ.",
    en: "Adhamya Krishi is an information service. It is not a government website and cannot approve any application.",
  },
} satisfies Record<string, Localized>;

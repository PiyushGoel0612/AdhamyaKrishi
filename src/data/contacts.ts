import type { ContactCentre } from "@/lib/types";

/* Transcribed from Schemes.docx — agricultural research centres and the
   officers a farmer can actually ring. */

export const CONTACT_CENTRES: ContactCentre[] = [
  {
    id: "ars-madenur",
    name: {
      kn: "ಕೃಷಿ ಸಂಶೋಧನಾ ಕೇಂದ್ರ, ಮಡೆನೂರು, ಹಾಸನ",
      en: "Agricultural Research Station, Madenur, Hassan",
    },
    people: [
      {
        name: { kn: "ಡಾ. ಯೋಗೇಶ್ ಟಿ. ಸಿ.", en: "Dr. Yogesh T. C." },
        role: { kn: "ಕೃಷಿ ಕ್ಷೇತ್ರ ಅಧೀಕ್ಷಕರು", en: "Agricultural Field Superintendent" },
        phone: "9449864254",
        emails: ["sfsarsmadenur@gmail.com", "yogeshtc@gmail.com"],
      },
    ],
  },
  {
    id: "aicrp-forage-mandya",
    name: {
      kn: "ಮೇವು ಬೆಳೆಗಳ ಅಖಿಲ ಭಾರತ ಸಮನ್ವಿತ ಸಂಶೋಧನಾ ಯೋಜನೆ, ಮಂಡ್ಯ",
      en: "All India Coordinated Research Project on Forage Crops, Mandya",
    },
    location: { kn: "ZARS, ವಿ.ಸಿ. ಫಾರಂ, ಮಂಡ್ಯ", en: "ZARS, V.C. Farm, Mandya" },
    people: [
      {
        name: { kn: "ಡಾ. ಮಹದೇವ್ ಪಿ.", en: "Dr. Mahadev P." },
        role: {
          kn: "ಪ್ರಾಧ್ಯಾಪಕರು ಮತ್ತು ಯೋಜನಾ ಮುಖ್ಯಸ್ಥರು",
          en: "Professor and Project Head",
        },
        phone: "9945332633",
        emails: ["aicrpforagecropsmandya@gmail.com", "pmahadevu69@gmail.com"],
      },
    ],
  },
  {
    id: "aicrp-maize-mandya",
    name: {
      kn: "ಮೆಕ್ಕೆಜೋಳದ ಅಖಿಲ ಭಾರತ ಸಮನ್ವಿತ ಸಂಶೋಧನಾ ಯೋಜನೆ, ಮಂಡ್ಯ",
      en: "All India Coordinated Research Project on Maize, Mandya",
    },
    location: { kn: "ZARS, ವಿ.ಸಿ. ಫಾರಂ, ಮಂಡ್ಯ", en: "ZARS, V.C. Farm, Mandya" },
    people: [
      {
        name: { kn: "ಡಾ. ಮಹದೇವ್ ಪಿ.", en: "Dr. Mahadev P." },
        role: {
          kn: "ಪ್ರಾಧ್ಯಾಪಕರು, ಯೋಜನಾ ಮುಖ್ಯಸ್ಥರು ಮತ್ತು ತಳಿ ಅಭಿವೃದ್ಧಿಕಾರರು",
          en: "Professor, Project Head and Breeder",
        },
        phone: "9945332633",
        emails: ["pmahadevu69@gmail.com"],
      },
    ],
  },
  {
    id: "aicrp-sugarcane-mandya",
    name: {
      kn: "ಕಬ್ಬಿನ ಅಖಿಲ ಭಾರತ ಸಮನ್ವಿತ ಸಂಶೋಧನಾ ಯೋಜನೆ, ಮಂಡ್ಯ",
      en: "All India Coordinated Research Project on Sugarcane, Mandya",
    },
    location: { kn: "ZARS, ವಿ.ಸಿ. ಫಾರಂ, ಮಂಡ್ಯ", en: "ZARS, V.C. Farm, Mandya" },
    people: [
      {
        name: { kn: "ಡಾ. ಶಿವಕುಮಾರ್ ಎನ್.", en: "Dr. Shivakumar N." },
        role: {
          kn: "ಪ್ರಾಧ್ಯಾಪಕರು, ಯೋಜನಾ ಮುಖ್ಯಸ್ಥರು ಮತ್ತು ತಳಿ ಅಭಿವೃದ್ಧಿಕಾರರು",
          en: "Professor, Project Head and Breeder",
        },
        phone: "9448528481",
        emails: ["sugarcaneaicrpmandya@gmail.com", "shivu2356@gmail.com"],
      },
    ],
  },
  {
    id: "kvk-kandali-hassan",
    name: {
      kn: "ಐಸಿಎಆರ್ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ, ಕಂದಲಿ, ಹಾಸನ ಜಿಲ್ಲೆ",
      en: "ICAR Krishi Vigyan Kendra, Kandali, Hassan district",
    },
    people: [
      {
        name: { kn: "ಡಾ. ರಾಜೇಗೌಡ", en: "Dr. Rajegowda" },
        role: { kn: "ಹಿರಿಯ ವಿಜ್ಞಾನಿ ಮತ್ತು ಮುಖ್ಯಸ್ಥರು", en: "Senior Scientist and Head" },
        phone: "9449866932",
        emails: ["rajegowdakrishnegowda@gmail.com"],
      },
    ],
  },
  {
    id: "kvk-vcfarm-mandya",
    name: {
      kn: "ಐಸಿಎಆರ್ ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ, ವಿ.ಸಿ. ಫಾರಂ, ಮಂಡ್ಯ ಜಿಲ್ಲೆ",
      en: "ICAR Krishi Vigyan Kendra, V.C. Farm, Mandya district",
    },
    people: [
      {
        name: { kn: "ಡಾ. ಕಮಲಾಬಾಯಿ ಕೂಡಗಿ", en: "Dr. Kamalabai Kudagi" },
        role: {
          kn: "ಹಿರಿಯ ವಿಜ್ಞಾನಿ ಮತ್ತು ಮುಖ್ಯಸ್ಥರು (ಗೃಹ ವಿಜ್ಞಾನ)",
          en: "Senior Scientist and Head (Home Science)",
        },
        phone: "9449864250 / 8762626880",
        emails: [],
      },
    ],
  },
  {
    id: "uas-hassan",
    name: {
      kn: "ಕೃಷಿ ವಿಜ್ಞಾನಗಳ ಮಹಾವಿದ್ಯಾಲಯ, ಹಾಸನ",
      en: "College of Agricultural Sciences, Hassan",
    },
    people: [
      {
        name: { kn: "ಪರಶಿವಮೂರ್ತಿ", en: "Parashivamurthy" },
        role: {
          kn: "ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ ಮಾಹಿತಿ ಕೇಂದ್ರ (ATIC)",
          en: "Agricultural Technology Information Centre (ATIC)",
        },
        phone: "9880747419",
        emails: [],
      },
      {
        name: { kn: "ಪಲ್ಲವಿ", en: "Pallavi" },
        role: { kn: "ಕೃಷಿ ಅಧಿಕಾರಿ", en: "Agriculture Officer" },
        phone: "8884009730",
        emails: [],
      },
      {
        name: { kn: "ರಕ್ಷಿತಾ", en: "Rakshitha" },
        role: { kn: "ಸಹಾಯಕ ತೋಟಗಾರಿಕೆ ಅಧಿಕಾರಿ", en: "Assistant Horticulture Officer" },
        phone: "9164254352",
        emails: [],
      },
    ],
  },
];

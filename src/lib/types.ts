/** Kannada is the primary language: the source package-of-practices
 *  documents are written in Kannada, and the audience reads Kannada.
 *  English is the secondary language, translated from those documents. */
export type Lang = "kn" | "en";

export type Localized = { kn: string; en: string };

/* ------------------------------------------------------------------
   Content blocks.

   The source documents are numbered sections containing a mix of
   prose, bullet lists, sub-headed groups and tables. Rather than force
   that into a fixed schema and lose or invent structure, each section
   holds an ordered list of blocks that mirrors the document.
   ------------------------------------------------------------------ */

export type Block =
  | { kind: "para"; text: Localized }
  | { kind: "subhead"; text: Localized }
  | { kind: "list"; items: Localized[] }
  | { kind: "table"; head: Localized[]; rows: Localized[][] }
  | { kind: "note"; text: Localized };

export type Section = {
  id: string;
  title: Localized;
  blocks: Block[];
};

export type CropGuide = {
  slug: string;
  name: Localized;
  /** Latin binomial where the source gives one. */
  botanical?: string;
  /** One line drawn from the source introduction, for listing pages. */
  gist: Localized;
  sections: Section[];
};

export type Scheme = {
  slug: string;
  name: Localized;
  /** The scheme's stated objective (ಉದ್ದೇಶ), used as the card summary. */
  gist: Localized;
  sections: Section[];
};

/** Season → sowing window → crops that suit low water, from POP-S. */
export type SeasonRow = {
  season: Localized;
  sowing: Localized;
  crops: Localized;
};

export type ContactPerson = {
  name: Localized;
  role: Localized;
  phone: string;
  emails: string[];
};

export type ContactCentre = {
  id: string;
  name: Localized;
  location?: Localized;
  people: ContactPerson[];
};

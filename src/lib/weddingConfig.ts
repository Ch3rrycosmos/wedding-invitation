// Central place to edit all invitation content.
//
// Names, date/time, and venue come from env vars (see .env.example) so the
// real details never sit in tracked source — only generic copy is hardcoded
// here. Set real values in .env.local (gitignored).
//
// Each var must be referenced as a literal (process.env.NEXT_PUBLIC_FOO) —
// Turbopack/Webpack inlines these at build time and cannot follow dynamic
// bracket access (process.env[name]).

const bride = process.env.NEXT_PUBLIC_BRIDE_NAME ?? "Bride";
const groom = process.env.NEXT_PUBLIC_GROOM_NAME ?? "Groom";

export const weddingConfig = {
  bride,
  groom,
  coupleMonogram: `${bride.charAt(0)} & ${groom.charAt(0)}`,

  // used for countdown — keep in local venue time
  weddingDateISO: process.env.NEXT_PUBLIC_WEDDING_DATE_ISO ?? "2026-01-01T11:00:00",
  weddingDateDisplay: process.env.NEXT_PUBLIC_WEDDING_DATE_DISPLAY ?? "1st January 2026",
  weddingDayDisplay: process.env.NEXT_PUBLIC_WEDDING_DAY_DISPLAY ?? "Sunday",
  weddingTimeDisplay: process.env.NEXT_PUBLIC_WEDDING_TIME_DISPLAY ?? "11:00 AM",

  welcomeQuote: "Two souls, one heart, endless journey.",

  invitationLine: "You are lovingly invited...",

  details: [
    {
      label: process.env.NEXT_PUBLIC_EVENT_LABEL ?? "Ceremony",
      date: process.env.NEXT_PUBLIC_WEDDING_DATE_DISPLAY ?? "1st January 2026",
      time: process.env.NEXT_PUBLIC_WEDDING_TIME_DISPLAY ?? "11:00 AM",
      venue: process.env.NEXT_PUBLIC_VENUE_NAME ?? "Venue Name",
      address: process.env.NEXT_PUBLIC_VENUE_ADDRESS ?? "City, State",
    },
  ],

  venue: {
    name: process.env.NEXT_PUBLIC_VENUE_NAME ?? "Venue Name",
    address: process.env.NEXT_PUBLIC_VENUE_ADDRESS ?? "City, State",
    mapsEmbedSrc: process.env.NEXT_PUBLIC_VENUE_MAPS_EMBED_SRC ?? "",
    mapsDirectionsUrl: process.env.NEXT_PUBLIC_VENUE_MAPS_DIRECTIONS_URL ?? "https://maps.google.com",
  },

  gallery: [
    { caption: `${bride} & ${groom}`, image: "/gallery/couple-01.jpg" },
    { caption: "Together With Their Families", image: "/gallery/invitation-card.png" },
  ],

  blessing: {
    title: "With Love & Gratitude",
    message:
      "Your presence is the greatest gift we could ask for. We can't wait to celebrate this new beginning surrounded by the people who mean the most to us.",
    signature: `${bride} & ${groom}`,
  },
};

export type WeddingConfig = typeof weddingConfig;

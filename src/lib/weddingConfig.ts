export const weddingConfig = {
  // ---- Couple ----
  bride: process.env.NEXT_PUBLIC_BRIDE_NAME ?? "Bride",
  groom: process.env.NEXT_PUBLIC_GROOM_NAME ?? "Groom",
  get coupleMonogram() {
    return (
      process.env.NEXT_PUBLIC_COUPLE_MONOGRAM ||
      `${this.bride.charAt(0)} & ${this.groom.charAt(0)}`
    );
  },

  // ---- Date & Time ----
  weddingDateISO:
    process.env.NEXT_PUBLIC_WEDDING_DATE_ISO ?? "2026-01-01T11:00:00",
  weddingDateDisplay:
    process.env.NEXT_PUBLIC_WEDDING_DATE_DISPLAY ?? "1st January 2026",
  weddingDayDisplay:
    process.env.NEXT_PUBLIC_WEDDING_DAY_DISPLAY ?? "Sunday",
  weddingTimeDisplay:
    process.env.NEXT_PUBLIC_WEDDING_TIME_DISPLAY ?? "11:00 AM",

  // ---- Event ----
  eventLabel: process.env.NEXT_PUBLIC_EVENT_LABEL ?? "Ceremony",

  // ---- Venue ----
  venue: {
    name: process.env.NEXT_PUBLIC_VENUE_NAME ?? "Venue Name",
    address: process.env.NEXT_PUBLIC_VENUE_ADDRESS ?? "City, State",
    mapsEmbedSrc: process.env.NEXT_PUBLIC_VENUE_MAPS_EMBED_SRC ?? "",
    mapsDirectionsUrl:
      process.env.NEXT_PUBLIC_VENUE_MAPS_DIRECTIONS_URL ??
      "https://maps.google.com",
    description:
      process.env.NEXT_PUBLIC_VENUE_DESCRIPTION ??
      "Set among manicured emerald gardens and candlelit pathways, our venue offers an intimate, elegant backdrop for celebrating the beginning of our forever.",
  },

  // ---- Envelope / Card ----
  invitationLine:
    process.env.NEXT_PUBLIC_INVITATION_LINE ?? "You are lovingly invited...",
  cardLabel: process.env.NEXT_PUBLIC_CARD_LABEL ?? "INVITATION",
  tapToOpenText:
    process.env.NEXT_PUBLIC_TAP_TO_OPEN_TEXT ?? "TAP TO OPEN",

  // ---- Welcome ----
  welcomeSectionLabel:
    process.env.NEXT_PUBLIC_WELCOME_SECTION_LABEL ?? "WITH JOYFUL HEARTS",
  welcomeQuote:
    process.env.NEXT_PUBLIC_WELCOME_QUOTE ??
    "Two souls, one heart, endless journey.",
  welcomeParagraph:
    process.env.NEXT_PUBLIC_WELCOME_PARAGRAPH ??
    "Together with our families, we joyfully invite you to witness the beginning of our forever — an evening of love, laughter, and timeless celebration.",

  // ---- Details ----
  detailsSectionLabel:
    process.env.NEXT_PUBLIC_DETAILS_SECTION_LABEL ?? "WEDDING DETAILS",
  detailsSectionTitle:
    process.env.NEXT_PUBLIC_DETAILS_SECTION_TITLE ?? "When & Where",
  detailsDateLabel: process.env.NEXT_PUBLIC_DETAILS_DATE_LABEL ?? "Date",
  detailsVenueLabel: process.env.NEXT_PUBLIC_DETAILS_VENUE_LABEL ?? "Venue",

  // ---- Countdown ----
  countdownSectionLabel:
    process.env.NEXT_PUBLIC_COUNTDOWN_SECTION_LABEL ??
    "COUNTING DOWN TO FOREVER",
  countdownSectionTitle:
    process.env.NEXT_PUBLIC_COUNTDOWN_SECTION_TITLE ??
    'Until We Say "I Do"',
  countdownLabelDays:
    process.env.NEXT_PUBLIC_COUNTDOWN_LABEL_DAYS ?? "Days",
  countdownLabelHours:
    process.env.NEXT_PUBLIC_COUNTDOWN_LABEL_HOURS ?? "Hours",
  countdownLabelMinutes:
    process.env.NEXT_PUBLIC_COUNTDOWN_LABEL_MINUTES ?? "Minutes",
  countdownLabelSeconds:
    process.env.NEXT_PUBLIC_COUNTDOWN_LABEL_SECONDS ?? "Seconds",

  // ---- Gallery ----
  gallerySectionLabel:
    process.env.NEXT_PUBLIC_GALLERY_SECTION_LABEL ?? "MOMENTS",
  gallerySectionTitle:
    process.env.NEXT_PUBLIC_GALLERY_SECTION_TITLE ?? "Our Gallery",
  get gallery() {
    const captions =
      process.env.NEXT_PUBLIC_GALLERY_CAPTIONS?.split(",") ?? [];
    const images =
      process.env.NEXT_PUBLIC_GALLERY_IMAGES?.split(",") ?? [];
    return captions.map((caption, i) => ({
      caption: caption.trim(),
      image: images[i]?.trim() ?? `/gallery/photo-${i + 1}.jpg`,
    }));
  },
  galleryImages: (process.env.NEXT_PUBLIC_GALLERY_IMAGES ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),

  // ---- Venue Section ----
  venueSectionLabel: process.env.NEXT_PUBLIC_VENUE_SECTION_LABEL ?? "FIND US",
  venueSectionTitle:
    process.env.NEXT_PUBLIC_VENUE_SECTION_TITLE ?? "The Venue",
  venueDirectionsText:
    process.env.NEXT_PUBLIC_VENUE_DIRECTIONS_TEXT ?? "GET DIRECTIONS",

  // ---- Blessings ----
  blessing: {
    title:
      process.env.NEXT_PUBLIC_BLESSING_TITLE ?? "With Love & Gratitude",
    message:
      process.env.NEXT_PUBLIC_BLESSING_MESSAGE ??
      "Your presence is the greatest gift we could ask for. We can't wait to celebrate this new beginning surrounded by the people who mean the most to us.",
    get signature() {
      return `${process.env.NEXT_PUBLIC_BRIDE_NAME ?? "Bride"} & ${process.env.NEXT_PUBLIC_GROOM_NAME ?? "Groom"}`;
    },
  },

  // ---- Music ----
  // NEXT_PUBLIC_MUSIC_FILE overrides everything if set.
  // Otherwise NEXT_PUBLIC_SELECTED_SONG (1-10) resolves to /songs/song{n}.mp3.
  get musicFile() {
    if (process.env.NEXT_PUBLIC_MUSIC_FILE) return process.env.NEXT_PUBLIC_MUSIC_FILE;
    const n = process.env.NEXT_PUBLIC_SELECTED_SONG ?? "1";
    return `/songs/song${n}.mp3`;
  },
  musicVolume: Number(process.env.NEXT_PUBLIC_MUSIC_VOLUME || "0.4"),

  // ---- SEO ----
  get siteTitle() {
    return (
      process.env.NEXT_PUBLIC_SITE_TITLE ||
      `${this.bride} & ${this.groom} — With Love, We Invite You`
    );
  },
  get siteDescription() {
    return (
      process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
      `Join us as we begin our forever. An invitation to the wedding of ${this.bride} & ${this.groom}, ${this.weddingDateDisplay}.`
    );
  },
};

export type WeddingConfig = typeof weddingConfig;

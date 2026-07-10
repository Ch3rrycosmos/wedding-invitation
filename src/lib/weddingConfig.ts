// Central place to edit all invitation content.

export const weddingConfig = {
  bride: "Anagha",
  groom: "Anoop",
  coupleMonogram: "A & A",

  weddingDateISO: "2026-08-09T11:00:00", // used for countdown — keep in local venue time
  weddingDateDisplay: "9th August 2026",
  weddingDayDisplay: "Sunday",
  weddingTimeDisplay: "11:00 AM – 12:00 PM (Muhoortham)",

  welcomeQuote: "Two souls, one heart, endless journey.",

  invitationLine: "You are lovingly invited...",

  story: [
    {
      year: "2019",
      title: "Where It Began",
      description:
        "A chance meeting at a mutual friend's gathering turned into hours of conversation neither of us wanted to end.",
    },
    {
      year: "2021",
      title: "Becoming Us",
      description:
        "What started as friendship quietly became something neither of us could deny — and we finally said so.",
    },
    {
      year: "2024",
      title: "The Proposal",
      description:
        "Under a sky full of stars, a question was asked — and answered before it was even finished.",
    },
    {
      year: "2026",
      title: "The Wedding",
      description:
        "Surrounded by everyone we love, we begin the forever we've been dreaming of.",
    },
  ],

  details: [
    {
      label: "Muhoortham",
      date: "9th August 2026",
      time: "11:00 AM – 12:00 PM",
      venue: "Nakshathra Auditorium",
      address: "Kanhangad",
    },
  ],

  venue: {
    name: "Nakshathra Auditorium",
    address: "Kanhangad, Kerala",
    mapsEmbedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.6!2d75.0866!3d12.3221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDE5JzE5LjYiTiA3NcKwMDUnMTEuOCJF!5e0!3m2!1sen!2sin!4v1700000000000",
    mapsDirectionsUrl: "https://maps.google.com/?q=Nakshathra+Auditorium+Kanhangad",
  },

  gallery: [
    { caption: "Anagha & Anoop", image: "/gallery/couple-01.jpg" },
    { caption: "Together With Their Families", image: "/gallery/invitation-card.png" },
  ],

  blessing: {
    title: "With Love & Gratitude",
    message:
      "Your presence is the greatest gift we could ask for. We can't wait to celebrate this new beginning surrounded by the people who mean the most to us.",
    signature: "Anagha & Anoop",
  },
} as const;

export type WeddingConfig = typeof weddingConfig;

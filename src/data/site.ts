export const siteConfig = {
  name: "marcone._.bass",
  shortName: "marcone",
  tagline: "Bass Is The Answer",
  description:
    "Hard groove bass music DJ. Heavy low-end, pounding kicks, and relentless rhythm straight from the underground.",
  url: "https://marconebass.com",
  ogImage: "/images/hero.jpg",
  links: {
    soundcloud: "https://soundcloud.com/marcone-bass",
    spotify: "https://open.spotify.com/artist/marcone-bass",
    instagram: "https://instagram.com/marcone._.bass",
    youtube: "https://youtube.com/@marcone-bass",
    twitter: "https://twitter.com/marcone_bass",
    mixcloud: "https://mixcloud.com/marcone-bass",
    beatport: "https://beatport.com/artist/marcone-bass",
    email: "booking@marconebass.com",
  },
  navLinks: [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Shows", href: "#gigs" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
};

export const soundcloudProfile = "https://soundcloud.com/abdel-marcone";
export const soundcloudEmbedUrl = "https://w.soundcloud.com/player/?visual=true&url=https%3A%2F%2Fapi.soundcloud.com%2Fusers%2F581928129&show_artwork=true";

export const releases = [
  {
    title: "01 DEEP CLOUD",
    type: "Single",
    year: "2025",
    label: "Independent",
    image: "/images/release-1.jpg",
    color: "#ff2d2d",
    tracks: [
      "01 DEEP CLOUD",
    ],
    links: {
      soundcloud: "https://soundcloud.com/abdel-marcone/01-deep-cloud",
      spotify: "",
    },
  },
  {
    title: "Burgos Groove EP01",
    type: "EP",
    year: "2025",
    label: "Independent",
    image: "/images/release-2.jpg",
    color: "#ff6b35",
    tracks: [
      "Burgos Bass",
      "Groove Protocol",
      "Low End Theory",
      "Warehouse Pressure",
    ],
    links: {
      soundcloud: soundcloudProfile,
      spotify: "",
    },
  },
  {
    title: "Burgos Groove EP02",
    type: "EP",
    year: "2025",
    label: "Independent",
    image: "/images/release-3.jpg",
    color: "#8B0000",
    tracks: ["Subterranean", "Heavy Bass", "Groove EP02", "Dark Matter"],
    links: {
      soundcloud: soundcloudProfile,
      spotify: "",
    },
  },
  {
    title: "DIMA KOKAB",
    type: "Single",
    year: "2025",
    label: "Independent",
    image: "/images/release-4.jpg",
    color: "#a1a1aa",
    tracks: ["DIMA KOKAB", "DIMA KOKAB (Extended)"],
    links: {
      soundcloud: soundcloudProfile,
      spotify: "",
    },
  },
];

export const upcomingGigs: Array<{
  date: string;
  venue: string;
  location: string;
  event: string;
  ticketLink: string;
  status: "on-sale" | "sold-out" | "announced";
}> = [
  {
    date: "JUL 18",
    venue: "Lenvers",
    location: "Marrakech, Morocco",
    event: "backtohouse",
    ticketLink: "",
    status: "announced",
  },
];

export const pastPerformances = [
  {
    venue: "Lenvers",
    location: "Marrakech, MA",
    year: "2026",
    highlight: "10 Nov",
  },
];

const imageFiles = [
  { file: "gallery1.jpg", alt: "Live at Warehouse", w: 800, h: 1000 },
  { file: "gallery2.jpg", alt: "Studio Session", w: 1200, h: 800 },
  { file: "Club1.jpg", alt: "Club Night", w: 800, h: 800 },
  { file: "SnapInsta.to_617891496_18439061584105632_3147296758311949331_n.jpg", alt: "Behind the Decks", w: 600, h: 900 },
  { file: "SnapInsta.to_619503057_18439061599105632_2750160581581897460_n.jpg", alt: "Festival Visuals", w: 1000, h: 700 },
  { file: "SnapInsta.to_669777289_18520113658075584_2680142213183692592_n.jpg", alt: "Press Photo", w: 800, h: 1000 },
  { file: "SnapInsta.to_670343668_18520113667075584_1156516268672434874_n.jpg", alt: "Backstage", w: 1200, h: 800 },
  { file: "SnapInsta.to_670986981_18520113646075584_5701646266794171717_n.jpg", alt: "Crowd Shot", w: 800, h: 600 },
  { file: "SnapInsta.to_689264758_18526277827075584_4311026867735405230_n.jpg", alt: "Night Session", w: 900, h: 1200 },
];

const videoFiles = [
  { file: "Burgos Groove --EP01.mp4", alt: "Burgos Groove EP01", w: 1080, h: 1080 },
  { file: "Burgos groove--EP02.mp4", alt: "Burgos Groove EP02", w: 1080, h: 1080 },
  { file: "DIMA KOKAB.mp4", alt: "DIMA KOKAB", w: 1080, h: 1080 },
  { file: "SnapInsta.to_AQM6m7F41qJZtmDHkAVKeybnXR9lIDJ6VpxH1ngrM0r9K4O6QR_uxfcf-n_ZcknOA3_hz3b1pmJmFxzf_PlcNA1i0dQfnWTW9KjBFoo.mp4", alt: "Groove Clip", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQMdm3e24CLYa4ICKt_4uTp1E2HYo1XlxiVCpDz1fwxnbH3mtanyvOMhSMgdyOYmAji_14AT9BUYoi6151yXgWLdu4LtMmK0lhj1t2s.mp4", alt: "Bass Drop", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQMM9_mwDwZwM5NSr_F3WQVX6nltvat2SFa7FweX82YG-3KYQ_vYoY0IGYWlmzHsy_iyxjRgjOaBZXaet0oxxPXgqIeoCJ6VpDFMkeo.mp4", alt: "Warehouse Set", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQNiopFUZuqA_eF9ARnqaA4hvPVmpNpFUofbD6kIW5TABuJ2savU4V1qSQ8eF8xSXhQ6TA1foVZbPkdoARHxbKxPASnNyDFIo5ayOMA.mp4", alt: "Dark Room", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQNK0QHyEsarcWrKyqexdJtV6E6ucELsPsJZ-rNwLKam_NZtEqcGuGLjmH9hPrOsDIqIsC9nzFWLrdxnTOHaEexlatUBtCKnpWdvGDQ.mp4", alt: "Sub Bass", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQOHihhYas0sHujcPaV2BSBlRCMwkUf6g0zbRESuRBsOK_Ajo4GLN96soma-gnixtbx-RFrkLRDTcKD3XqHPi9qh9ZICyyPobCs-PS8.mp4", alt: "Heavy Drop", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQP1r1E6RfgZPDQkOXtQUVaF4aCpqKF8cdtgNMotXgohDrJYrV25k1sxuX1BxduKlDh_KCVIntL3mzjJcLMRA0csMCLiJbdyhlUtWO4.mp4", alt: "Live Mix", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQP9QqJQr97Jdsn63j-lMH2azbYQthOITE2mbhRfTZKdlB2NPv0B6oFdtckymzRoOaKUNi7rCwM9jWGjCZKns2U0TlrzrSdVqihhLTg.mp4", alt: "Night Club", w: 1080, h: 1920 },
  { file: "SnapInsta.to_AQPpCToRuXOjMi-7w0nWOdIgnTyoKH4lRA2ma9mZb15a1Ufd7oFu97IGCswrpWT53nwDDI7rXpoVYJHvxMUM-UvYWEL99JRvNB2Y_ds.mp4", alt: "Bass Visuals", w: 1080, h: 1920 },
];

export const galleryImages = [
  ...imageFiles.map((f) => ({
    src: `/images/${f.file}`,
    alt: f.alt,
    width: f.w,
    height: f.h,
    type: "image" as const,
  })),
  ...videoFiles.map((f) => ({
    src: `/images/${f.file}`,
    alt: f.alt,
    width: f.w,
    height: f.h,
    type: "video" as const,
  })),
];

export const mixes = [
  {
    title: "Burgos Bass Mix",
    description: "Exclusive mix featuring tracks from Burgos Groove EP01 & EP02 plus unreleased material.",
    platform: "soundcloud" as const,
    url: "https://soundcloud.com/marcone-bass/burgos-bass-mix",
    date: "2025",
    duration: "58:22",
  },
  {
    title: "Bass Vol. 1",
    description: "Heavy bass and hard groove — recorded live at Warehouse 42.",
    platform: "mixcloud" as const,
    url: "https://mixcloud.com/marcone-bass/bass-vol-1",
    date: "2025",
    duration: "1:14:35",
  },
  {
    title: "Boiler Room: Madrid",
    description: "High-energy boiler room set from the Madrid showcase.",
    platform: "youtube" as const,
    url: "https://youtube.com/watch?v=example",
    date: "2024",
    duration: "1:02:18",
  },
  {
    title: "Sunset at Sonar",
    description: "Melodic closing set recorded live at Sonar 2024.",
    platform: "soundcloud" as const,
    url: "https://soundcloud.com/marcone-bass/sunset-sonar",
    date: "2024",
    duration: "1:28:45",
  },
];

export const aboutBio = {
  paragraphs: [
    "From Marrakech to Rak UK",
    "UK-based DJ with a passion for blending groovy beats, deep techno grooves, and uplifting house music. From warm-up vibes to peak-time energy, every set is carefully crafted to move the crowd — expect rolling basslines, hypnotic rhythms, and seamless transitions that keep the dancefloor locked in from start to finish.",
  ],
  highlights: [
    { label: "Genre", value: "Hard Groove / Bass Music" },
    { label: "Label", value: "Independent" },
    { label: "Shows", value: "50+ Worldwide" },
    { label: "Streams", value: "5M+" },
  ],
};

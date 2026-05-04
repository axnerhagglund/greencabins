export const client = {
  name: "GreenCabins",
  tagline: "Handpicked forest cabins in Sweden",
  logo: "/assets/logo.svg",
  favicon: "/assets/favicon.ico",

  colors: {
    primary: "#8a5a35",
    secondary: "#9bb168",
    background: "#f7f4ef",
    text: "#332f2a",
  },

  contact: {
    phone: "+46 31 555 01 24",
    email: "hello@greencabins.se",
    address: "Stigbergstorget 4, 414 63 Goteborg, Sweden",
    orgNumber: "",
  },

  hours: [
    { day: "Monday-Friday", time: "09:00-17:00 CET" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" },
  ],

  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  seo: {
    title: "GreenCabins - Handpicked Forest Cabins in Sweden",
    description:
      "Rent independently-owned cabins in the Swedish wilderness. Silence, stars, and running water.",
    keywords: ["cabins", "Sweden", "forest cabins", "nature retreats"] as string[],
  },

  sanity: {
    projectId: "",
    dataset: "production",
  },

  addons: {
    chatbot: {
      enabled: false,
      provider: "tidio" as "tidio" | "intercom" | "claude",
      snippetId: "",
    },
    ecommerce: {
      enabled: false,
      stripePublicKey: "",
    },
  },
} as const;

export type ClientConfig = typeof client;

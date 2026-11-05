export const siteConfig = {
  name: "Lila's Cakes",
  tagline: "Pastelería artesanal",
  description:
    "Pastelería artesanal que hornea repostería fresca cada día.",
  email: "hola@lilas-cakes.com",
} as const;

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lila's Cakes",
  tagline: "Pastelería artesanal",
  description:
    "Pastelería artesanal en Turmero, Estado Aragua. Repostería fresca horneada cada día.",
  email: "hola@lilas-cakes.com",
  // WhatsApp del cliente (formato internacional, sin espacios)
  whatsapp: "+584121485886",
  // Cuenta real de Instagram del cliente
  instagram: "https://www.instagram.com/lilascakes.20",
  // TODO: reemplazar por el dominio real de producción
  url: "https://lilascakes.com",
  location: "Turmero, Estado Aragua, Venezuela",
  address: {
    locality: "Turmero",
    region: "Aragua",
    country: "VE",
  },
  heroImage:
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1920&q=80",
  ogImage:
    "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1200&h=630&q=80",
} as const;

export type SiteConfig = typeof siteConfig;

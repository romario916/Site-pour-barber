
export interface Company {
  name: string;
  tagline: string;
  description: string;

  address: string;
  city: string;

  // Localisation Google Maps
  mapsUrl: string;
  mapsEmbedUrl: string;

  phone: string;
  whatsapp: string;
  email: string;

  openingHours: {
    days: string;
    hours: string;
  }[];

  socialLinks: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export const company: Company = {
  name: "Barber Lux",
  tagline: "L'élégance dans chaque détail",

  description:
    "Un salon de coiffure et barbier dédié aux coupes modernes, aux finitions précises et à une expérience premium.",

  // Adresse du salon
  address: "Paris tb 45 45d",
  city: "Paris",

  // Google Maps
  // Remplace ces valeurs par les liens réels du salon.
  mapsUrl: "https://maps.app.goo.gl/PJm6tsHRYV7Z3gAU8",
  mapsEmbedUrl: "https://maps.app.goo.gl/PJm6tsHRYV7Z3gAU8",

  // Coordonnées
  phone: "0328876180",
  whatsapp: "261384520234",
  email: "romarihenry08@gmail.com",

  // Horaires d'ouverture : exemples à adapter
  openingHours: [
    {
      days: "Lundi - Vendredi",
      hours: "09:00 - 18:00",
    },
    {
      days: "Samedi",
      hours: "09:00 - 17:00",
    },
    {
      days: "Dimanche",
      hours: "Fermé",
    },
  ],

  // Réseaux sociaux
  socialLinks: {
    instagram: "https://www.instagram.com/romario24035?mdxt=MWt6cnoyNzhydjNvNw==",
    facebook: "https://www.facebook.com/mario.santohhr",
    tiktok: "https://www.tiktok.com/@romario24035",
  },
};

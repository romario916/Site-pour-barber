export interface Service {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  category: "Coupes" | "Barbe" | "Formules" | "Soins" | "Prestations spéciales";
  popular?: boolean;
}

export const services: Service[] = [
  // COUPES
  {
    id: 1,
    name: "Coupe classique",
    description: "Une coupe soignée et intemporelle, adaptée à votre style.",
    duration: "30 min",
    price: "20 €",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    category: "Coupes",
  },
  {
    id: 2,
    name: "Dégradé premium",
    description: "Un dégradé précis avec des contours nets et une finition impeccable.",
    duration: "40 min",
    price: "30 €",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85",
    category: "Coupes",
    popular: true,
  },
  {
    id: 3,
    name: "Coupe enfant",
    description: "Une coupe adaptée aux enfants, réalisée avec soin.",
    duration: "25 min",
    price: "15 €",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
    category: "Coupes",
  },

  // BARBE
  {
    id: 4,
    name: "Taille de barbe",
    description: "Une barbe structurée et harmonieuse, adaptée à votre visage.",
    duration: "20 min",
    price: "18 €",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    category: "Barbe",
  },
  {
    id: 5,
    name: "Rasage traditionnel",
    description: "Un rituel de rasage à la serviette chaude pour un moment de détente.",
    duration: "30 min",
    price: "25 €",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85",
    category: "Barbe",
  },
  {
    id: 6,
    name: "Entretien de barbe",
    description: "Nettoyage, mise en forme et finition pour une barbe entretenue.",
    duration: "15 min",
    price: "12 €",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    category: "Barbe",
  },

  // FORMULES COMBINÉES
  {
    id: 7,
    name: "Coupe + barbe",
    description: "L'association idéale pour un look harmonieux et élégant.",
    duration: "50 min",
    price: "38 €",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
    category: "Formules",
    popular: true,
  },
  {
    id: 8,
    name: "Expérience complète",
    description: "Coupe, taille de barbe et finitions pour un résultat soigné.",
    duration: "60 min",
    price: "48 €",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    category: "Formules",
    popular: true,
  },

  // SOINS
  {
    id: 9,
    name: "Soin du visage",
    description: "Un soin rafraîchissant pour une peau propre et revitalisée.",
    duration: "30 min",
    price: "30 €",
    image: "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85",
    category: "Soins",
  },
  {
    id: 10,
    name: "Gommage du visage",
    description: "Un rituel exfoliant pour une peau douce et une sensation de fraîcheur.",
    duration: "20 min",
    price: "22 €",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=900&q=85",
    category: "Soins",
  },
  {
    id: 11,
    name: "Coloration barbe ou cheveux",
    description: "Une coloration personnalisée pour un résultat naturel et soigné.",
    duration: "40 min",
    price: "38 €",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    category: "Soins",
  },

  // PRESTATIONS SPÉCIALES
  {
    id: 12,
    name: "Style mariage",
    description: "Une mise en beauté soignée pour accompagner un jour exceptionnel.",
    duration: "60 min",
    price: "65 €",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    category: "Prestations spéciales",
  },
  {
    id: 13,
    name: "Préparation événement",
    description: "Une coupe et des finitions adaptées à vos occasions importantes.",
    duration: "45 min",
    price: "50 €",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85",
    category: "Prestations spéciales",
  },
];
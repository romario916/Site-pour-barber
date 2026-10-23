
export interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
}

export const gallery: GalleryImage[] = [
  {
    id: 1,
    title: "Coupe dégradée",
    category: "Coupe",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Précision et détail",
    category: "Coiffure",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Style barbe",
    category: "Barbe",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "L'expérience barbier",
    category: "Salon",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 5,
    title: "Style contemporain",
    category: "Coupe",
    image:
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 6,
    title: "Soin et finition",
    category: "Soin",
    image:
      "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=1000&q=85",
  },
];

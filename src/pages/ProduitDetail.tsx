
import { useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Minus,
  Plus,
  ShoppingBag,
  Tag,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "./Boutique";
import { company } from "../data/company";

export default function ProduitDetail() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#0A0A0A] px-5 text-center text-white">
        <ShoppingBag size={42} className="text-[#E5B54B]" />
        <h1 className="mt-5 text-2xl font-bold">
          Produit introuvable
        </h1>
        <p className="mt-3 text-sm text-white/50">
          Ce produit n'existe pas ou n'est plus disponible.
        </p>
        <Link
          to="/boutique"
          className="mt-6 rounded-xl bg-[#E5B54B] px-5 py-3 font-bold text-black"
        >
          Retour à la boutique
        </Link>
      </main>
    );
  }

  const message = [
    "Bonjour Barber Lux ! Je souhaite commander ce produit :",
    `Produit : ${product.name}`,
    `Marque : ${product.brand}`,
    `Quantité : ${quantity}`,
    `Prix unitaire : ${
      product.price === null
        ? "À confirmer"
        : `${product.price.toLocaleString("fr-FR")} €`
    }`,
    "Pouvez-vous me confirmer la disponibilité et le prix final ?",
  ].join("\n");

  const whatsapp = company.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-5 py-12 text-white sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/boutique"
          className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-[#E5B54B]"
        >
          <ArrowLeft size={17} />
          Retour à la boutique
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#151515]">
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full border border-[#E5B54B]/30 bg-black/80 px-4 py-2 text-xs font-semibold text-[#E5B54B]">
              {product.category}
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E5B54B]">
              {product.brand}
            </p>

            <h1 className="mt-4 text-3xl font-black leading-tight sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <Tag size={19} className="text-[#E5B54B]" />
              <span className="text-sm text-white/50">
                {product.category}
              </span>
            </div>

            <p className="mt-7 text-sm leading-7 text-white/60 sm:text-base">
              {product.description}
            </p>

            <div className="mt-8 border-y border-white/10 py-6">
              <p className="text-xs text-white/40">Prix du produit</p>
              <p className="mt-2 text-3xl font-black text-[#E5B54B]">
                {product.price === null
                  ? "Prix à définir"
     : `${product.price.toLocaleString("fr-FR")} €`}
              </p>
              <p className="mt-2 text-xs text-white/40">
                Prix et disponibilité à confirmer auprès du salon.
              </p>
            </div>

            <div className="mt-7">
              <label
                htmlFor="quantity"
                className="text-sm font-semibold"
              >
                Quantité
              </label>

              <div className="mt-3 flex h-12 w-36 items-center justify-between rounded-xl border border-white/15">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Diminuer la quantité"
                  className="flex h-full w-11 items-center justify-center text-white/70 transition hover:text-[#E5B54B] disabled:opacity-30"
                >
                  <Minus size={16} />
                </button>

                <span id="quantity" className="font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  disabled={quantity >= 99}
                  aria-label="Augmenter la quantité"
                  className="flex h-full w-11 items-center justify-center text-white/70 transition hover:text-[#E5B54B] disabled:opacity-30"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#E5B54B] px-6 py-4 font-bold text-black transition hover:bg-white"
            >
              Commander sur WhatsApp
              <ArrowUpRight size={19} />
            </a>

            <p className="mt-4 text-center text-xs leading-5 text-white/40">
              La commande sera envoyée à Barber Lux pour confirmation.
              Aucun paiement n'est effectué sur cette page.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

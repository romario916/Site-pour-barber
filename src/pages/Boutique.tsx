import { useMemo, useState } from "react";
import {
  ArrowDownWideNarrow,
  ArrowUpRight,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export const products = [
  {
    id: "tondeuse-professionnelle",
    name: "Tondeuse professionnelle",
    brand: "Barber Essentials",
    category: "Outils",
    description:
      "Un outil conçu pour réaliser des coupes précises et des finitions soignées.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "huile-barbe",
    name: "Huile à barbe",
    brand: "Grooming Care",
    category: "Barbe",
    description:
      "Une huile de soin pour accompagner l'entretien quotidien de votre barbe.",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "pommade-coiffante",
    name: "Pommade coiffante",
    brand: "Classic Style",
    category: "Coiffure",
    description:
      "Un produit de coiffage pour structurer votre style et travailler vos finitions.",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "cire-cheveux",
    name: "Cire coiffante",
    brand: "Modern Grooming",
    category: "Coiffure",
    description:
      "Pour modeler votre coiffure et ajuster votre style au quotidien.",
    price: 14,
    image:
      "https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "shampoing",
    name: "Shampoing soin",
    brand: "Daily Care",
    category: "Soins",
    description:
      "Un produit de soin pour compléter votre routine capillaire.",
    price: 8,
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "rasoir",
    name: "Rasoir de barbier",
    brand: "Barber Essentials",
    category: "Outils",
    description:
      "Un accessoire de rasage pour compléter votre équipement de barbier.",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "peigne-barbier",
    name: "Peigne professionnel",
    brand: "Classic Tools",
    category: "Accessoires",
    description:
      "Un accessoire pratique pour coiffer et organiser votre chevelure.",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: "brosse-barbe",
    name: "Brosse à barbe",
    brand: "Grooming Care",
    category: "Accessoires",
    description:
      "Un accessoire pour brosser et entretenir votre barbe au quotidien.",
    price: 17,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = [
  "Toutes",
  "Barbe",
  "Coiffure",
  "Soins",
  "Outils",
  "Accessoires",
];

export default function Boutique() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Toutes");
  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "Toutes" ||
        product.category === activeCategory;

      const matchesSearch = [
        product.name,
        product.brand,
        product.category,
        product.description,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });

    if (sort === "ascending") {
      result.sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return a.price - b.price;
      });
    }

    if (sort === "descending") {
      result.sort((a, b) => {
        if (a.price === null) return 1;
        if (b.price === null) return -1;
        return b.price - a.price;
      });
    }

    return result;
  }, [search, activeCategory, sort]);

  return (
    <main className="bl-root min-h-screen overflow-hidden bg-[#070707] text-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap');
        .bl-root { font-family: 'Manrope', system-ui, sans-serif; }
        .bl-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .bl-gold-text {
          background: linear-gradient(120deg, #F8E2A0 0%, #E5B54B 45%, #D9822B 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent; font-style: italic;
        }
        .bl-grain::after {
          content: ""; position: absolute; inset: 0; pointer-events: none; opacity: .06; mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
        }
        .bl-shine::before {
          content: ""; position: absolute; inset: 0; transform: translateX(-120%) skewX(-20deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          transition: transform .9s ease;
        }
        .bl-shine:hover::before { transform: translateX(120%) skewX(-20deg); }
        @keyframes bl-rise { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        .bl-rise { animation: bl-rise 1s cubic-bezier(.2,.7,.2,1) both; }
        .bl-rise-2 { animation-delay: .15s; }
        .bl-rise-3 { animation-delay: .3s; }
        .bl-root a:focus-visible, .bl-root button:focus-visible { outline: 2px solid #E5B54B; outline-offset: 3px; }
        @media (prefers-reduced-motion: reduce) {
          .bl-rise { animation: none; }
          .bl-shine::before { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="bl-grain relative px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E5B54B]/15 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="bl-rise mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_60px_-10px_rgba(229,181,75,0.5)]">
            <ShoppingBag size={29} className="text-[#E5B54B]" />
          </div>

          <p className="bl-rise bl-rise-2 mt-9 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-[#E5B54B]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            La sélection Barber Lux
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
          </p>

          <h1 className="bl-display bl-rise bl-rise-2 mt-7 text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[7rem]">
            L'essentiel du
            <span className="bl-gold-text block">grooming masculin.</span>
          </h1>

          <p className="bl-rise bl-rise-3 mx-auto mt-9 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
            Découvrez notre sélection de produits et d'accessoires pour
            prendre soin de vos cheveux, de votre barbe et de votre style.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E5B54B]/50 to-transparent" />
      </section>

      {/* CATALOGUE */}
      <section className="bg-[#0C0C0B] px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Recherche et tri */}
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 shadow-[0_30px_70px_-35px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-7">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/60 to-transparent" />

            <div className="flex flex-col gap-4 md:flex-row">
              <label className="relative flex-1">
                <span className="sr-only">Rechercher un produit</span>
                <Search
                  size={19}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E5B54B]"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Rechercher un produit, une marque..."
                  className="w-full rounded-full border border-white/10 bg-black/40 py-4 pl-13 pr-11 text-sm text-white outline-none transition duration-300 placeholder:text-white/35 focus:border-[#E5B54B]/70 focus:shadow-[0_0_30px_-8px_rgba(229,181,75,0.5)]"
                  style={{ paddingLeft: "3.25rem" }}
                />
                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="Effacer la recherche"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 transition hover:text-[#E5B54B]"
                  >
                    <X size={17} />
                  </button>
                )}
              </label>

              <label className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-5 transition duration-300 focus-within:border-[#E5B54B]/70">
                <ArrowDownWideNarrow
                  size={18}
                  className="shrink-0 text-[#E5B54B]"
                />
                <span className="sr-only">Trier les produits par prix</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="w-full bg-transparent py-4 text-sm text-white outline-none sm:min-w-52"
                >
                  <option className="bg-[#111111]" value="default">
                    Tri par défaut
                  </option>
                  <option className="bg-[#111111]" value="ascending">
                    Prix croissant
                  </option>
                  <option className="bg-[#111111]" value="descending">
                    Prix décroissant
                  </option>
                </select>
              </label>
            </div>

            {/* Catégories */}
            <div className="mt-6 flex items-center gap-2">
              <SlidersHorizontal
                size={17}
                className="mr-1 shrink-0 text-[#E5B54B]"
              />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    aria-pressed={activeCategory === category}
                    className={`rounded-full border px-4 py-2 text-[11px] font-semibold transition duration-300 sm:px-5 sm:text-xs ${
                      activeCategory === category
                        ? "border-transparent bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] text-black shadow-[0_8px_25px_-8px_rgba(229,181,75,0.7)]"
                        : "border-white/10 bg-white/[0.03] text-white/60 hover:border-[#E5B54B]/50 hover:text-[#F3CF75]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8 mt-14 flex items-end justify-between gap-3">
            <h2 className="bl-display text-3xl font-medium sm:text-5xl">
              Notre <span className="bl-gold-text">sélection</span>
            </h2>
            <p className="text-xs text-white/45 sm:text-sm">
              {filteredProducts.length} produit
              {filteredProducts.length === 1 ? "" : "s"}
            </p>
          </div>

          {/* Cartes produits */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/40 hover:shadow-[0_40px_80px_-30px_rgba(229,181,75,0.25)]"
                >
                  <Link
                    to={`/boutique/${product.id}`}
                    aria-label={`Voir le produit ${product.name}`}
                    className="relative block aspect-square overflow-hidden bg-[#15120C]"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <span className="absolute left-2 top-2 rounded-full border border-[#E5B54B]/40 bg-black/55 px-2.5 py-1 text-[9px] font-semibold text-[#F3CF75] backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      {product.category}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-3.5 sm:p-6">
                    <p className="text-[9px] font-medium tracking-wider text-[#E5B54B]/80 sm:text-[11px] sm:tracking-[0.2em]">
                      {product.brand}
                    </p>

                    <h3 className="bl-display mt-2 text-lg font-semibold leading-tight sm:text-2xl">
                      {product.name}
                    </h3>

                    <p className="mt-3 hidden flex-1 text-xs leading-6 text-white/50 sm:block">
                      {product.description}
                    </p>

                   
<div className="mt-5 flex flex-col gap-3.5 border-t border-white/10 pt-4">
  <div className="flex items-baseline gap-2">
    {product.price === null ? (
      <span className="text-sm font-medium tracking-wide text-white/50">
        Prix à définir
      </span>
    ) : (
      <>
        <span className="bl-display text-3xl font-black tracking-tight text-[#E5B54B] drop-shadow-[0_0_12px_rgba(229,181,75,0.3)] sm:text-4xl">
          {new Intl.NumberFormat("fr-FR", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(product.price)}
        </span>

        <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#F3CF75] sm:text-base">
          €
        </span>
      </>
    )}
  </div>

  <Link
    to={`/boutique/${product.id}`}
    className="bl-shine group/btn relative inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] px-4 py-3 text-xs font-bold text-black shadow-[0_8px_25px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:shadow-[0_14px_35px_-8px_rgba(229,181,75,0.85)] sm:text-sm"
  >
    Voir le produit
    <ArrowUpRight
      size={16}
      className="transition duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
    />
  </Link>
</div>

                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] px-5 py-20 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B54B]/30 bg-[#E5B54B]/10">
                <Search size={26} className="text-[#E5B54B]" />
              </div>
              <h3 className="bl-display mt-6 text-3xl font-semibold">
                Aucun produit trouvé
              </h3>
              <p className="mt-3 text-sm text-white/50">
                Essaie un autre nom ou sélectionne une autre catégorie.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Toutes");
                  setSort("default");
                }}
                className="mt-7 rounded-full border border-[#E5B54B]/40 bg-[#E5B54B]/5 px-7 py-3.5 text-sm font-semibold text-[#F3CF75] transition duration-500 hover:border-transparent hover:bg-gradient-to-br hover:from-[#F3CF75] hover:to-[#C98A2B] hover:text-black"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
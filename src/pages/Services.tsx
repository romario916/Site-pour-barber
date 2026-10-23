import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Crown,
  Scissors,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import { services } from "../data/services";
import { company } from "../data/company";

const categories = [
  "Tous",
  "Coupes",
  "Barbe",
  "Formules",
  "Soins",
  "Prestations spéciales",
] as const;

type Category = (typeof categories)[number];

const categoryIcons = {
  Coupes: Scissors,
  Barbe: Sparkles,
  Formules: Crown,
  Soins: Star,
  "Prestations spéciales": Check,
};

function getWhatsAppLink(serviceName: string) {
  const phone = company.whatsapp.replace(/\D/g, "");
  const message = `Bonjour Barber Lux ! Je souhaite réserver la prestation : ${serviceName}. Pouvez-vous m'indiquer les disponibilités ?`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Classes de style réutilisables (design uniquement)
const btnGold =
  "bl-shine group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)]";
const btnOutline =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#E5B54B]/40 bg-[#E5B54B]/5 font-semibold text-[#F3CF75] transition duration-500 hover:border-transparent hover:bg-gradient-to-br hover:from-[#F3CF75] hover:to-[#C98A2B] hover:text-black hover:shadow-[0_10px_30px_-10px_rgba(229,181,75,0.7)]";
const gold =
  "bl-gold-text";
const eyebrow =
  "flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-[#E5B54B]";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<Category>("Tous");

  const filteredServices =
    activeCategory === "Tous"
      ? services
      : services.filter((service) => service.category === activeCategory);

  const popularServices = services.filter((service) => service.popular);

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
        .bl-rise-4 { animation-delay: .45s; }
        .bl-root a:focus-visible, .bl-root button:focus-visible { outline: 2px solid #E5B54B; outline-offset: 4px; }
        @media (prefers-reduced-motion: reduce) {
          .bl-rise { animation: none; }
          .bl-shine::before { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="bl-grain relative px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E5B54B]/15 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="bl-rise mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_60px_-10px_rgba(229,181,75,0.5)]">
            <Scissors size={30} className="text-[#E5B54B]" />
          </div>

          <p className="bl-rise bl-rise-2 mt-9 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-[#E5B54B]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            L'excellence au masculin
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
          </p>

          <h1 className="bl-display bl-rise bl-rise-2 mt-7 text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[7rem]">
            L'art du style,
            <br />
            <span className={gold}>dans chaque détail.</span>
          </h1>

          <p className="bl-rise bl-rise-3 mx-auto mt-9 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
            Des coupes précises aux soins raffinés, découvrez nos prestations
            pensées pour révéler votre style et sublimer votre personnalité.
          </p>

          <div className="bl-rise bl-rise-4 mt-11 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/60 sm:text-sm">
            {["Finitions soignées", "Service personnalisé", "Expérience premium"].map(
              (item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={15} className="text-[#E5B54B]" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E5B54B]/50 to-transparent" />
      </section>

      {/* FORMULES POPULAIRES */}
      <section className="bg-[#0C0C0B] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className={eyebrow}>
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
                Les favoris
              </p>
              <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
                Nos formules <span className={gold}>populaires</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/50">
              Des prestations soigneusement associées pour une expérience
              complète et un style harmonieux.
            </p>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            {popularServices.map((service) => (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E5B54B]/25 bg-gradient-to-br from-[#1A160D] to-[#0E0C08] shadow-[0_40px_80px_-35px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/60 hover:shadow-[0_50px_100px_-35px_rgba(229,181,75,0.3)]"
              >
                <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative h-60 overflow-hidden sm:h-full sm:min-h-72">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-[#1A160D]/90" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[#E5B54B]/40 bg-black/60 px-3.5 py-2 text-[11px] font-semibold tracking-wider text-[#F3CF75] backdrop-blur-md">
                      <Crown size={13} />
                      Populaire
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-9">
                    <div className="flex items-center gap-2 text-xs text-white/50">
                      <Clock size={14} className="text-[#E5B54B]" />
                      {service.duration}
                    </div>

                    <h3 className="bl-display mt-4 text-3xl font-semibold leading-tight">
                      {service.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/55">
                      {service.description}
                    </p>

                    <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-[#E5B54B]/15 pt-6">
                      <div>
                        <p className="text-xs text-white/40">À partir de</p>
                        <p className="bl-display mt-1 text-3xl font-semibold text-[#E5B54B]">
                          {service.price}
                        </p>
                      </div>

                      <a
                        href={getWhatsAppLink(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Réserver ${service.name} sur WhatsApp`}
                        className={`${btnGold} px-6 py-3.5 text-sm`}
                      >
                        Réserver
                        <ArrowUpRight
                          size={17}
                          className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LISTE DES PRESTATIONS */}
      <section className="relative bg-[#070707] px-5 py-24 sm:px-8 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className={`${eyebrow} justify-center`}>
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
              Notre carte
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
            </p>
            <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
              Services & <span className={gold}>tarifs</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
              Choisissez la prestation qui vous correspond et contactez-nous
              directement pour réserver votre créneau.
            </p>
          </div>

          {/* FILTRES */}
          <div className="mt-12 flex flex-wrap justify-center gap-2.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold transition duration-300 sm:px-6 sm:text-sm ${
                    isActive
                      ? "border-transparent bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] text-black shadow-[0_8px_30px_-8px_rgba(229,181,75,0.7)]"
                      : "border-white/10 bg-white/[0.03] text-white/60 backdrop-blur hover:border-[#E5B54B]/50 hover:text-[#F3CF75]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <p className="mt-6 text-center text-xs text-white/35">
            {filteredServices.length} prestation
            {filteredServices.length > 1 ? "s" : ""} disponible
            {filteredServices.length > 1 ? "s" : ""}
          </p>

          
<div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">

            {filteredServices.map((service) => {
              const CategoryIcon =
                categoryIcons[
                  service.category as keyof typeof categoryIcons
                ];

              return (
                <article
                  key={service.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/40 hover:shadow-[0_40px_80px_-30px_rgba(229,181,75,0.25)]"
                >
                  <div className="relative h-52 overflow-hidden sm:h-60">
                    <img
                      src={service.image}
                      alt={service.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-black/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-xs text-white/80 backdrop-blur-md">
                        <Clock size={13} className="text-[#E5B54B]" />
                        {service.duration}
                      </span>
                      {service.popular && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5B54B]/40 bg-black/60 px-3 py-1.5 text-xs text-[#F3CF75] backdrop-blur-md">
                          <Star size={12} />
                          Favori
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-7">
                    <div className="flex items-center gap-2 text-[11px] font-medium tracking-[0.15em] text-[#E5B54B]/80">
                      <CategoryIcon size={13} />
                      {service.category}
                    </div>

                    <h3 className="bl-display mt-3 text-2xl font-semibold leading-tight transition group-hover:text-[#F3CF75] sm:text-3xl">
                      {service.name}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-white/55">
                      {service.description}
                    </p>

                    <div className="mt-6 flex items-end justify-between gap-3 border-t border-white/10 pt-5">
                      <div>
                        <p className="text-xs text-white/40">Tarif</p>
                        <p className="bl-display mt-1 text-2xl font-semibold text-[#E5B54B]">
                          {service.price}
                        </p>
                      </div>

                      <a
                        href={getWhatsAppLink(service.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Réserver ${service.name} sur WhatsApp`}
                        className={`${btnOutline} px-4 py-3 text-xs sm:px-5 sm:text-sm`}
                      >
                        Réserver
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-12 text-center text-white/60">
              Aucune prestation dans cette catégorie pour le moment.
            </div>
          )}
        </div>
      </section>

      {/* INFORMATIONS TARIFAIRES */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-28">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] border border-[#E5B54B]/25 bg-gradient-to-br from-[#1A160D] to-[#0E0C08] p-7 shadow-[0_40px_90px_-40px_rgba(229,181,75,0.25)] sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />

          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5B54B]/30 bg-[#E5B54B]/10 text-[#E5B54B]">
              <Wallet size={22} />
            </div>
            <div>
              <h2 className="bl-display text-3xl font-semibold">
                Besoin d'un renseignement ?
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/50">
                Les tarifs affichés comme « À définir » doivent être confirmés
                par le salon. Contactez-nous pour connaître le prix exact et
                les disponibilités.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("une demande de renseignements sur les tarifs")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnOutline} shrink-0 px-7 py-4 text-sm`}
          >
            Demander les tarifs
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bl-grain relative overflow-hidden border-t border-[#E5B54B]/20 bg-gradient-to-b from-[#12100B] to-[#070707] px-5 py-24 text-center sm:px-8 sm:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5B54B]/15 blur-[130px]"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_50px_-10px_rgba(229,181,75,0.5)]">
            <Scissors size={24} className="text-[#E5B54B]" />
          </div>

          <h2 className="bl-display mt-8 text-5xl font-medium leading-[1] sm:text-7xl">
            Votre prochain style
            <br />
            <span className={gold}>commence ici.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
            Choisissez votre prestation et contactez Barber Lux pour organiser
            votre prochain rendez-vous.
          </p>

          <a
            href={getWhatsAppLink("une réservation")}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btnGold} mt-10 px-9 py-4`}
          >
            Réserver sur WhatsApp
            <ArrowUpRight
              size={19}
              className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
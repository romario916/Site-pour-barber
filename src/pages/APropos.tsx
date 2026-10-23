import {
  ArrowRight,
  Crown,
  Diamond,
  Heart,
  Landmark,
  Scissors,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Scissors,
    number: "01",
    title: "Précision",
    description:
      "Des gestes maîtrisés, des contours nets et une attention particulière portée à chaque détail.",
  },
  {
    icon: Diamond,
    number: "02",
    title: "Élégance",
    description:
      "Des styles soignés et intemporels pour révéler votre personnalité avec distinction.",
  },
  {
    icon: Heart,
    number: "03",
    title: "Convivialité",
    description:
      "Un accueil chaleureux, une écoute attentive et une atmosphère dans laquelle vous vous sentez bien.",
  },
  {
    icon: Landmark,
    number: "04",
    title: "Tradition",
    description:
      "Le respect des techniques classiques du barbier, associé aux tendances contemporaines.",
  },
];

const gallery = [
  {
    title: "L'espace barbier",
    category: "Notre univers",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "L'art de la coupe",
    category: "Notre savoir-faire",
    image:
      "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Le souci du détail",
    category: "Nos finitions",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Le rituel du soin",
    category: "Notre expérience",
    image:
      "https://images.unsplash.com/photo-1512690459411-b9245aed614b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Le style contemporain",
    category: "Notre inspiration",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
  },
];

// Classes de style réutilisables (design uniquement)
const btnGold =
  "bl-shine group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)]";
const btnGhost =
  "inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] font-medium text-white backdrop-blur transition duration-500 hover:border-[#E5B54B]/70 hover:bg-[#E5B54B]/10 hover:text-[#F3CF75]";
const eyebrow =
  "flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-[#E5B54B]";
const goldText = "bl-gold-text";

export default function APropos() {
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
        .bl-root a:focus-visible { outline: 2px solid #E5B54B; outline-offset: 4px; border-radius: 9999px; }
        @media (prefers-reduced-motion: reduce) {
          .bl-rise { animation: none; }
          .bl-shine::before { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="bl-grain relative isolate flex min-h-[640px] items-center overflow-hidden sm:min-h-[760px]">
        <div
          className="absolute inset-0 -z-20 scale-105 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=90')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-[#070707]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070707] via-transparent to-black/40" />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#E5B54B]/15 blur-[140px]"
        />

        <div className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 sm:py-32 lg:px-12">
          <div className="max-w-3xl">
            <div className={`${eyebrow} bl-rise`}>
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
              Notre identité
            </div>

            <h1 className="bl-display bl-rise bl-rise-2 mt-8 text-6xl font-medium leading-[0.95] tracking-tight sm:text-8xl lg:text-[8.5rem]">
              Plus qu'une coupe,
              <span className={`${goldText} mt-2 block`}>
                une signature.
              </span>
            </h1>

            <p className="bl-rise bl-rise-3 mt-9 max-w-xl text-sm leading-7 text-white/70 sm:text-lg sm:leading-8">
              Barber Lux est un espace dédié à l'art du barbering, à la
              précision et à l'élégance. Chaque détail compte pour vous
              proposer une expérience qui respecte votre style et votre
              personnalité.
            </p>

            <p className="bl-rise bl-rise-3 mt-4 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Nous associons les techniques traditionnelles aux tendances
              modernes pour faire de chaque prestation un véritable moment
              pour vous.
            </p>

            <div className="bl-rise bl-rise-4 mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-[#E5B54B]/20 pt-7">
              {[
                { icon: Scissors, label: "Style" },
                { icon: Crown, label: "Précision" },
                { icon: Sparkles, label: "Élégance" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E5B54B]/30 bg-[#E5B54B]/5">
                      <Icon size={17} className="text-[#E5B54B]" />
                    </span>
                    <span className="text-sm text-white/75">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <Link
              to="/services"
              className={`${btnGold} bl-rise bl-rise-4 mt-10 px-8 py-4 text-sm`}
            >
              Découvrir nos services
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E5B54B]/60 to-transparent" />
      </section>

      {/* HISTOIRE ET PHILOSOPHIE */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="grid gap-7 sm:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-72 sm:min-h-full">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-[2rem] border border-[#E5B54B]/30" />
              <div className="relative h-full min-h-72 overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                <img
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=800&q=85"
                  alt="Ambiance et savoir-faire d'un salon de barbier"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <Scissors size={27} className="text-[#E5B54B]" />
                  <p className="bl-display mt-3 text-xl font-bold tracking-[0.15em]">
                    BARBER <span className="text-[#E5B54B]">LUX</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className={eyebrow}>
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
                Notre histoire
              </p>
              <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-5xl">
                La passion du style, le sens du détail.
              </h2>

              <p className="mt-6 text-sm leading-7 text-white/60">
                Barber Lux repose sur une passion pour l'art de la coupe et
                le désir de proposer un service attentif, dans un cadre
                élégant et accueillant.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                De la coupe classique au dégradé contemporain, chaque
                prestation est pensée pour répondre à vos envies et valoriser
                votre style personnel.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Notre ambition : vous offrir un moment agréable, fondé sur
                l'écoute, le savoir-faire et la qualité des finitions.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-[#E5B54B]/25 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <p className={eyebrow}>
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
              Notre philosophie
            </p>

            <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
              L'art du détail.
              <span className={`${goldText} block`}>
                Le respect de votre style.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-white/60">
              Pour nous, le barbering ne se limite pas à une coupe. C'est
              aussi une relation de confiance, un échange et une attention
              portée à chaque personne.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Nous accordons une place importante à l'écoute de vos
              préférences, au choix du style et aux finitions, en recherchant
              le juste équilibre entre tradition et modernité.
            </p>

            <div className="relative mt-10 flex items-center gap-5 overflow-hidden rounded-3xl border border-[#E5B54B]/25 bg-gradient-to-br from-[#E5B54B]/10 to-transparent p-7">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
              <Sparkles className="shrink-0 text-[#E5B54B]" size={26} />
              <p className="bl-display text-2xl italic leading-snug text-white/90">
                « Votre style est personnel. Notre attention fait la
                différence. »
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="relative border-y border-[#E5B54B]/15 bg-gradient-to-b from-[#0E0C08] to-[#0A0A09] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${eyebrow} justify-center`}>
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
              Nos valeurs
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
            </p>

            <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
              Ce qui nous guide
              <span className={`${goldText} block`}>au quotidien.</span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/55 sm:text-base">
              Quatre principes essentiels au cœur de notre approche du
              barbering et de l'accueil.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/40 hover:shadow-[0_40px_80px_-30px_rgba(229,181,75,0.25)] sm:p-8"
                >
                  <span className="bl-display absolute right-5 top-3 text-5xl font-medium text-[#E5B54B]/15 transition duration-500 group-hover:text-[#E5B54B]/35 sm:text-6xl">
                    {value.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5B54B]/30 bg-gradient-to-br from-[#E5B54B]/20 to-transparent transition duration-500 group-hover:shadow-[0_0_35px_-5px_rgba(229,181,75,0.6)] sm:h-16 sm:w-16">
                    <Icon size={25} className="text-[#E5B54B]" />
                  </div>

                  <h3 className="bl-display mt-6 text-2xl font-semibold sm:text-3xl">
                    {value.title}
                  </h3>

                  <div className="mt-3 h-px w-10 bg-gradient-to-r from-[#E5B54B] to-transparent transition-all duration-500 group-hover:w-20" />

                  <p className="mt-5 text-xs leading-6 text-white/55 sm:text-sm sm:leading-7">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className={eyebrow}>
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
                Notre univers
              </p>
              <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
                L'expérience <span className={goldText}>Barber Lux</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/55">
              Découvrez l'univers du barbering, les détails du métier et
              l'inspiration derrière nos prestations.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-6">
            {gallery.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 transition duration-500 hover:border-[#E5B54B]/50 hover:shadow-[0_30px_70px_-25px_rgba(229,181,75,0.35)] ${
                  index === 0 || index === 4
                    ? "aspect-[4/5] lg:col-span-2"
                    : "aspect-[4/5] lg:col-span-1"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover grayscale-[30%] transition duration-[1200ms] group-hover:scale-110 group-hover:grayscale-0"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="text-[10px] font-medium tracking-[0.15em] text-[#E5B54B] sm:text-xs sm:tracking-[0.2em]">
                    {item.category}
                  </p>
                  <h3 className="bl-display mt-2 text-lg font-semibold leading-tight sm:text-2xl">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-12">
        <div className="bl-grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#E5B54B]/30 bg-gradient-to-br from-[#241D0F] via-[#12100B] to-[#070707] px-7 py-14 shadow-[0_60px_120px_-40px_rgba(229,181,75,0.3)] sm:px-14 sm:py-20">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#E5B54B]/20"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-12 h-56 w-56 rounded-full border border-[#E5B54B]/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-[#E5B54B]/10 blur-[110px]"
          />

          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className={eyebrow}>
                <Scissors size={18} />
                Votre prochain rendez-vous
              </div>

              <h2 className="bl-display mt-6 text-5xl font-medium leading-[1] sm:text-7xl">
                Prêt à révéler
                <span className={`${goldText} block`}>votre style ?</span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">
                Découvrez nos prestations et choisissez le service qui vous
                correspond pour votre prochaine visite chez Barber Lux.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link to="/services" className={`${btnGold} px-8 py-4 text-sm`}>
                Nos services
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>

              <Link to="/reservation" className={`${btnGhost} px-8 py-4 text-sm`}>
                Réserver
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import { useEffect, useState , useRef } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Crown,
  Gem,
  Package,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import { services } from "../data/services";
import { gallery } from "../data/gallery";

const gold = "#E5B54B";

const assurances = [
  { icon: Scissors, title: "Barbiers experts", description: "Précision et attention aux détails." },
  { icon: Gem, title: "Produits premium", description: "Des soins sélectionnés avec attention." },
  { icon: ShieldCheck, title: "Hygiène soignée", description: "Un espace propre et bien entretenu." },
  { icon: Clock, title: "À votre rythme", description: "Réservation simple et accueil attentif." },
];

const pillars = [
  {
    number: "01",
    title: "Le savoir-faire",
    description:
      "Des coupes travaillées, des contours précis et des finitions soignées pour un résultat adapté à votre style.",
  },
  {
    number: "02",
    title: "Votre personnalité",
    description:
      "Chaque prestation tient compte de vos préférences, de votre coiffure et du style que vous souhaitez adopter.",
  },
  {
    number: "03",
    title: "L'expérience",
    description:
      "Une atmosphère élégante, un accueil attentif et un moment consacré à votre bien-être.",
  },
];

// Présentation visuelle à personnaliser avec les vrais membres de l'équipe.
const team = [
  {
    role: "Expertise coupe",
    specialty: "Dégradés et finitions",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=85",
  },
  {
    role: "Expertise barbe",
    specialty: "Contours et entretien",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=85",
  },
  {
    role: "Style & soins",
    specialty: "Conseils personnalisés",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=700&q=85",
  },
];

// Exemples de produits : remplacer par le catalogue réel de la boutique.
const products = [
  {
    name: "Huile à barbe",
    category: "Soin de la barbe",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Soin capillaire",
    category: "Soin des cheveux",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85",
  },
  {
    name: "Routine de coiffage",
    category: "Coiffage",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=700&q=85",
  },
];

// Témoignages de démonstration : remplacer par de vrais avis clients
// avant la publication du site.
const testimonials = [
  {
    quote:
      "Un espace dédié au style, avec une attention particulière aux détails et aux finitions.",
    author: "Exemple de témoignage",
    service: "Coupe de cheveux",
  },
  {
    quote:
      "Une expérience à personnaliser avec les retours authentiques de vos clients.",
    author: "Exemple de témoignage",
    service: "Taille de barbe",
  },
  {
    quote:
      "Ajoutez ici un avis réel pour mettre en valeur votre qualité de service.",
    author: "Exemple de témoignage",
    service: "Expérience Barber Lux",
  },
];

const marqueeItems = ["Coupe", "Barbe", "Rasage", "Soins", "Style", "Précision"];

// Classes de style réutilisables (design uniquement)
const btnGold =
  "bl-shine group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] px-8 py-4 font-semibold text-black shadow-[0_10px_40px_-10px_rgba(229,181,75,0.6)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-8px_rgba(229,181,75,0.75)]";
const btnGhost =
  "inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-8 py-4 font-medium text-white backdrop-blur transition duration-500 hover:border-[#E5B54B]/70 hover:bg-[#E5B54B]/10 hover:text-[#F3CF75]";
const card =
  "group overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/40 hover:shadow-[0_40px_80px_-30px_rgba(229,181,75,0.25)]";
const eyebrow =
  "flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-[#E5B54B]";
const h2 =
  "bl-display mt-5 text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl";
const link =
  "inline-flex items-center gap-2 border-b border-[#E5B54B]/40 pb-1 font-medium text-[#E5B54B] transition hover:border-[#E5B54B] hover:text-white";

function Eyebrow({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <p className={`${eyebrow} ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
      {children}
      {center && <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />}
    </p>
  );
}

export default function Home() {
  const [stats, setStats] = useState({
    services: 0,
    realizations: 0,
    pillars: 0,
    style: 0,
  });

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    let frameId = 0;

    const targets = {
      services: services.length,
      realizations: gallery.length,
      pillars: pillars.length,
      style: 100,
    };

    function animate(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setStats({
        services: Math.round(targets.services * eased),
        realizations: Math.round(targets.realizations * eased),
        pillars: Math.round(targets.pillars * eased),
        style: Math.round(targets.style * eased),
      });

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

useEffect(() => {
  const video = videoRef.current;

  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {
          // La lecture automatique peut être bloquée par le navigateur.
        });
      } else {
        video.pause();
      }
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(video);

  return () => {
    observer.disconnect();
    video.pause();
  };
}, []);

  return (
    <main className="bl-root overflow-hidden bg-[#070707] text-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap');

        .bl-root { font-family: 'Manrope', system-ui, sans-serif; }
        .bl-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .bl-gold-text {
          background: linear-gradient(120deg, #F8E2A0 0%, #E5B54B 45%, #D9822B 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-style: italic;
        }
        .bl-grain::after {
          content: "";
          position: absolute; inset: 0; pointer-events: none; opacity: .06; mix-blend-mode: overlay;
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

        @keyframes barber-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .barber-marquee { animation: barber-marquee 32s linear infinite; }
        .barber-marquee:hover { animation-play-state: paused; }

        .bl-root a:focus-visible { outline: 2px solid #E5B54B; outline-offset: 4px; border-radius: 9999px; }

        @media (prefers-reduced-motion: reduce) {
          .barber-marquee, .bl-rise { animation: none; }
          .bl-shine::before { display: none; }
        }
      `}</style>

      {/* 1. HERO IMMERSIF */}
      <section className="bl-grain relative isolate flex min-h-[92svh] items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=90"
          alt="Ambiance d'un salon de barbier"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#070707] via-[#070707]/90 to-[#070707]/30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#070707] via-transparent to-black/40" />
        <div
          aria-hidden="true"
          className="absolute -left-40 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#E5B54B]/15 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-[#D9822B]/10 blur-[140px]"
        />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-28 sm:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:py-36">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="bl-rise mb-8 inline-flex items-center gap-3 rounded-full border border-[#E5B54B]/30 bg-black/40 px-5 py-2.5 backdrop-blur-md">
              <Scissors size={15} className="text-[#E5B54B]" />
              <span className="text-xs font-medium tracking-[0.22em] text-[#F3CF75]">
                L'art du style masculin
              </span>
            </div>

            <h1 className="bl-display bl-rise bl-rise-2 text-[4.2rem] font-medium leading-[0.92] tracking-tight sm:text-8xl lg:text-[9.5rem]">
              BARBER
              <br />
              <span className="bl-gold-text">Lux.</span>
              <br />
              <span className="mt-4 block text-3xl font-medium leading-tight text-white/90 sm:text-4xl lg:text-5xl">
                Votre style.
                <br className="sm:hidden" /> <em className="text-white/60">Notre signature.</em>
              </span>
            </h1>

            <p className="bl-rise bl-rise-3 mx-auto mt-9 max-w-xl text-base leading-8 text-white/65 sm:text-lg lg:mx-0">
              La précision du geste, l'élégance du détail et une
              expérience pensée autour de votre style.
            </p>

            <div className="bl-rise bl-rise-4 mt-11 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Link to="/reservation" className={btnGold}>
                <CalendarDays size={19} />
                Réserver mon fauteuil
                <ArrowUpRight size={18} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link to="/services" className={btnGhost}>
                Voir nos services
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bl-rise bl-rise-4 mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/60 lg:justify-start">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E5B54B]" />
                Style personnalisé
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#E5B54B]" />
                Finitions soignées
              </span>
            </div>
          </div>

          <div className="bl-rise bl-rise-4 hidden lg:flex lg:justify-end">
            <div className="relative max-w-xs rounded-3xl border border-[#E5B54B]/25 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
              <Crown className="mb-5 text-[#E5B54B]" size={30} />
              <p className="text-xs font-medium tracking-[0.25em] text-[#E5B54B]">
                L'expérience Barber Lux
              </p>
              <p className="bl-display mt-4 text-3xl font-medium leading-tight">
                L'élégance se trouve dans chaque détail.
              </p>
              <Link
                to="/a-propos"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition hover:text-[#E5B54B]"
              >
                Découvrir notre univers
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E5B54B]/60 to-transparent" />
      </section>



     {/* video */}
<section className="relative overflow-hidden bg-[#070707] px-4 py-20 text-white sm:px-8 sm:py-32">
  {/* Halos lumineux décoratifs */}
  <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[#E5B54B]/10 blur-[140px]" />
  <div className="pointer-events-none absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#E5B54B]/5 blur-[120px]" />

  {/* Filets dorés haut et bas */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/50 to-transparent" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/20 to-transparent" />

  <div className="relative mx-auto max-w-6xl">
    {/* En-tête centré */}
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <div className="mb-5 flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]/70 sm:w-14" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#E5B54B] sm:text-xs">
          Découvrez notre univers
        </p>
        <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]/70 sm:w-14" />
      </div>

      <h2 className="bl-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl">
        L'expérience{" "}
        <span className="bg-gradient-to-b from-[#F6D98A] via-[#E5B54B] to-[#B8862B] bg-clip-text text-transparent">
          Barber Lux
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/55 sm:text-base">
        Découvrez notre salon, notre ambiance et notre passion
        pour les coupes précises et les finitions soignées.
      </p>
    </div>

    {/* Cadre vidéo */}
    <div className="group relative">
      {/* Lueur dorée derrière la vidéo */}
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-[#E5B54B]/20 via-[#E5B54B]/5 to-transparent opacity-60 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

      {/* Bordure dégradée */}
      <div className="relative rounded-[1.75rem] bg-gradient-to-b from-[#E5B54B]/60 via-[#E5B54B]/15 to-[#E5B54B]/40 p-px shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <div className="relative overflow-hidden rounded-[1.7rem] bg-black ring-1 ring-inset ring-white/5">
        <video
  ref={videoRef}
  className="aspect-video w-full object-cover"
  muted
  playsInline
  loop
  controls
  preload="metadata"
  poster="/photo.png"
>
  <source src="/video.mp4" type="video/mp4" />
  Votre navigateur ne prend pas en charge la lecture vidéo.
</video>

          {/* Reflet subtil en haut */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/[0.04] to-transparent" />
        </div>
      </div>

      {/* Accents d'angle dorés (desktop) */}
      <span className="pointer-events-none absolute -left-2 -top-2 hidden h-8 w-8 rounded-tl-2xl border-l border-t border-[#E5B54B]/70 sm:block" />
      <span className="pointer-events-none absolute -right-2 -top-2 hidden h-8 w-8 rounded-tr-2xl border-r border-t border-[#E5B54B]/70 sm:block" />
      <span className="pointer-events-none absolute -bottom-2 -left-2 hidden h-8 w-8 rounded-bl-2xl border-b border-l border-[#E5B54B]/70 sm:block" />
      <span className="pointer-events-none absolute -bottom-2 -right-2 hidden h-8 w-8 rounded-br-2xl border-b border-r border-[#E5B54B]/70 sm:block" />
    </div>
  </div>
</section>



      {/* 2. BANDEAU DÉFILANT */}
      <section
        aria-label="Nos spécialités"
        className="overflow-hidden border-b border-white/[0.06] bg-[#0C0B09] py-6"
      >
        <div className="barber-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <div
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 px-5 sm:gap-12 sm:px-8"
                >
                  <span className="bl-display text-3xl font-medium italic text-white/80 sm:text-4xl">
                    {item}
                  </span>
                  <Sparkles size={15} className="text-[#E5B54B]" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 3. BANDEAU DE RÉASSURANCE */}
      <section className="border-b border-white/[0.06] bg-[#0A0A0A] px-5 py-12 sm:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {assurances.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="group flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#E5B54B]/25 bg-gradient-to-br from-[#E5B54B]/15 to-transparent transition duration-500 group-hover:border-[#E5B54B]/60 group-hover:shadow-[0_0_30px_-5px_rgba(229,181,75,0.5)]">
                  <Icon className="text-[#E5B54B]" size={23} />
                </div>

                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-white/50">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. PRÉSENTATION DU SALON */}
      <section className="bg-[#070707] px-5 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#E5B54B]/30 sm:-left-6 sm:-top-6" />
            <div className="absolute -bottom-6 -right-6 -z-10 h-40 w-40 rounded-full bg-[#E5B54B]/20 blur-[70px]" />

            <div className="relative overflow-hidden rounded-[2rem] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9)]">
              <img
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=85"
                alt="Détails et ambiance d'un salon de barbier"
                loading="lazy"
                className="h-[380px] w-full object-cover transition duration-[1200ms] hover:scale-105 sm:h-[540px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9">
                <p className="text-xs font-medium tracking-[0.25em] text-[#E5B54B]">
                  Notre philosophie
                </p>
                <p className="bl-display mt-3 text-3xl font-medium sm:text-4xl">
                  Le style n'est jamais un hasard.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Eyebrow>L'esprit Barber Lux</Eyebrow>

            <h2 className={h2}>
              Plus qu'une coupe,
              <br />
              une <span className="bl-gold-text">expérience.</span>
            </h2>

            <p className="mt-7 max-w-lg leading-8 text-white/60">
              Chez Barber Lux, chaque détail compte. Notre approche
              associe précision, sens du style et attention portée
              à vos préférences pour vous accompagner dans votre
              expression personnelle.
            </p>

            <p className="mt-4 max-w-lg leading-8 text-white/60">
              De la coupe à l'entretien de la barbe, notre ambition
              est de vous proposer un moment agréable et une finition
              qui correspond à vos attentes.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Un style adapté à vos préférences",
                "Des finitions travaillées avec soin",
                "Une expérience centrée sur vos besoins",
              ].map((text) => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle2 size={19} className="shrink-0 text-[#E5B54B]" />
                  <span className="text-sm text-white/80">{text}</span>
                </div>
              ))}
            </div>

            <Link to="/a-propos" className={`${btnGhost} mt-10`}>
              En savoir plus
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. SERVICES PHARES */}
      <section className="relative bg-[#0C0C0B] px-5 py-24 sm:px-10 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Notre savoir-faire</Eyebrow>
              <h2 className={h2}>
                Nos <span className="bl-gold-text">prestations</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/60">
                Découvrez nos services pour prendre soin de votre
                coupe, de votre barbe et de votre style.
              </p>
            </div>

            <Link to="/services" className={link}>
              Tous nos services
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <article key={service.id} className={card}>
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/50 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur-md">
                    <Clock size={12} className="mr-1.5 inline text-[#E5B54B]" />
                    {service.duration}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="bl-display text-2xl font-semibold transition group-hover:text-[#F3CF75]">
                    {service.name}
                  </h3>

                  <p className="mt-3 min-h-16 text-sm leading-6 text-white/55">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                    <span className="bl-display text-2xl font-semibold text-[#E5B54B]">
                      {service.price}
                    </span>

                    <Link
                      to="/reservation"
                      aria-label={`Réserver ${service.name}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-[#E5B54B]"
                    >
                      Réserver
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CHIFFRES CLÉS ANIMÉS */}
      <section className="relative border-y border-[#E5B54B]/15 bg-gradient-to-b from-[#0E0C08] to-[#080705] px-5 py-20 sm:px-10 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <Eyebrow center>Notre univers en quelques chiffres</Eyebrow>
          </div>

          <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-[#E5B54B]/15">
            {[
              { value: stats.services, suffix: "", label: "Prestations présentées" },
              { value: stats.realizations, suffix: "", label: "Inspirations en galerie" },
              { value: stats.pillars, suffix: "", label: "Piliers de notre approche" },
              { value: stats.style, suffix: "%", label: "Le style selon vos envies" },
            ].map((stat) => (
              <div key={stat.label} className="px-4 text-center">
                <p className="bl-display bl-gold-text text-6xl font-medium tabular-nums not-italic sm:text-7xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mx-auto mt-4 max-w-44 text-sm leading-6 text-white/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-white/35">
            Les chiffres reflètent les contenus et messages de présentation
            du site, et non des statistiques de fréquentation.
          </p>
        </div>
      </section>

      {/* 7. GALERIE */}
      <section className="bg-[#070707] px-5 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>L'inspiration en images</Eyebrow>
              <h2 className={h2}>
                La galerie du <span className="bl-gold-text">style</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/60">
                Explorez notre sélection visuelle de coupes, de styles
                et de détails de barbier.
              </p>
            </div>

            <Link to="/galerie" className={link}>
              Toute la galerie
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {gallery.slice(0, 6).map((item, index) => (
              <Link
                to="/galerie"
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 transition duration-500 hover:border-[#E5B54B]/50 hover:shadow-[0_30px_70px_-25px_rgba(229,181,75,0.35)] ${
                  index === 0 || index === 5
                    ? "min-h-64 sm:min-h-96"
                    : "min-h-64 sm:min-h-96"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-[1200ms] group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent transition duration-500 group-hover:from-black/95" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-7">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#E5B54B]">
                    {item.category}
                  </span>
                  <h3 className="bl-display mt-2 text-xl font-semibold sm:text-3xl">
                    {item.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs text-white/65 transition duration-500 group-hover:translate-x-1 group-hover:text-[#E5B54B]">
                    Explorer
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ÉQUIPE */}
      <section className="relative bg-[#0C0C0B] px-5 py-24 sm:px-10 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow center>Le sens du détail</Eyebrow>
            <h2 className={h2}>
              L'esprit de notre <span className="bl-gold-text">équipe</span>
            </h2>
            <p className="mt-6 leading-7 text-white/60">
              Découvrez les différents univers du métier de barbier.
              Personnalisez cette sélection avec les portraits et les noms
              des membres réels de votre équipe.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.role} className={card}>
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={`Illustration de ${member.role}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale-[35%] transition duration-[1200ms] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-6 rounded-full border border-[#E5B54B]/40 bg-black/50 px-3.5 py-1.5 text-xs font-medium text-[#F3CF75] backdrop-blur-md">
                    Expertise 0{index + 1}
                  </span>
                </div>

                <div className="p-7">
                  <h3 className="bl-display text-3xl font-semibold">{member.role}</h3>
                  <p className="mt-2 text-sm text-white/55">{member.specialty}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/equipe" className={btnGhost}>
              Découvrir l'équipe
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FORMULE DU MOMENT */}
      <section className="relative overflow-hidden bg-[#070707] px-5 py-24 sm:px-10 sm:py-28">
        <div
          aria-hidden="true"
          className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#E5B54B]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#E5B54B]/30 bg-gradient-to-br from-[#1A160D] to-[#0E0C08] shadow-[0_60px_120px_-40px_rgba(229,181,75,0.25)] lg:grid-cols-2">
            <div className="relative min-h-72 lg:min-h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=85"
                alt="Illustration d'une prestation de barbier"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#1A160D]" />
              <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-[#E5B54B]/40 bg-black/60 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#F3CF75] backdrop-blur-md">
                <Sparkles size={15} />
                Formule à personnaliser
              </span>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-16">
              <p className="text-xs font-medium tracking-[0.28em] text-[#E5B54B]">
                Le rituel du moment
              </p>

              <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
                Votre moment
                <br />
                <span className="bl-gold-text">Barber Lux.</span>
              </h2>

              <p className="mt-6 leading-7 text-white/60">
                Composez votre formule avec une coupe, un entretien de
                barbe et les soins adaptés à vos envies. Ajoutez ici
                les prestations, la durée et le tarif de votre offre réelle.
              </p>

              <div className="mt-8 space-y-4">
                {["Coupe personnalisée", "Entretien de barbe", "Finitions soignées"].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-[#E5B54B]" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  )
                )}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-[#E5B54B]/30 bg-[#E5B54B]/5 px-5 py-3 text-sm font-semibold text-[#E5B54B]">
                  Tarif à définir
                </span>

                <Link to="/reservation" className={btnGold}>
                  Choisir ma formule
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TÉMOIGNAGES */}
      <section className="relative bg-[#0C0C0B] px-5 py-24 sm:px-10 sm:py-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/30 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow center>Votre expérience compte</Eyebrow>
            <h2 className={h2}>
              Paroles de <span className="bl-gold-text">clients</span>
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/50">
              Les cartes suivantes sont des exemples de mise en page.
              Remplacez-les par de vrais avis avant publication.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {testimonials.map((review) => (
              <article
                key={review.service}
                className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-8 transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/40 sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="bl-display absolute right-8 top-2 text-8xl leading-none text-[#E5B54B]/15"
                >
                  “
                </span>

                <div
                  className="flex gap-1 text-[#E5B54B]"
                  aria-label="Exemple visuel de cinq étoiles"
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={17} fill={gold} strokeWidth={1.5} />
                  ))}
                </div>

                <blockquote className="bl-display mt-7 min-h-32 text-2xl leading-snug text-white/85">
                  “{review.quote}”
                </blockquote>

                <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#F3CF75] to-[#C98A2B] font-bold text-black">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{review.author}</p>
                    <p className="mt-0.5 text-xs text-[#E5B54B]">{review.service}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BOUTIQUE */}
      <section className="bg-[#070707] px-5 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Prolongez votre routine</Eyebrow>
              <h2 className={h2}>
                La boutique <span className="bl-gold-text">Barber Lux</span>
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-white/60">
                Découvrez une sélection de soins capillaires et de produits
                d'entretien à adapter à votre catalogue.
              </p>
            </div>

            <Link to="/boutique" className={link}>
              Visiter la boutique
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className={card}>
                <div className="h-72 overflow-hidden bg-[#151515]">
                  <img
                    src={product.image}
                    alt={`Illustration : ${product.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 p-6">
                  <div>
                    <h3 className="bl-display text-2xl font-semibold">{product.name}</h3>
                    <p className="mt-2 text-sm text-white/50">{product.category}</p>
                    <p className="mt-3 text-sm font-semibold text-[#E5B54B]">
                      Prix à définir
                    </p>
                  </div>

                  <Link
                    to="/boutique"
                    aria-label={`Découvrir ${product.name}`}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5B54B]/30 transition duration-500 hover:bg-[#E5B54B] hover:text-black hover:shadow-[0_0_30px_-5px_rgba(229,181,75,0.7)]"
                  >
                    <ShoppingBag size={19} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/35">
            Les produits et visuels présentés sont des exemples à remplacer
            par les articles réellement disponibles.
          </p>
        </div>
      </section>

      {/* 12. CTA FINAL */}
      <section className="bl-grain relative overflow-hidden border-t border-[#E5B54B]/20 bg-gradient-to-b from-[#12100B] to-[#070707] px-5 py-24 sm:px-10 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5B54B]/15 blur-[140px]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_60px_-10px_rgba(229,181,75,0.5)]">
            <Scissors size={30} className="text-[#E5B54B]" />
          </div>

          <p className="mt-8 text-xs font-medium tracking-[0.28em] text-[#E5B54B]">
            Le prochain rendez-vous vous appartient
          </p>

          <h2 className="bl-display mt-6 text-5xl font-medium leading-[1] sm:text-8xl">
            Réservez votre
            <br />
            <span className="bl-gold-text">fauteuil.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl leading-8 text-white/60">
            Faites le premier pas vers votre prochain style.
            Choisissez votre prestation et préparez votre rendez-vous
            avec Barber Lux.
          </p>

          <div className="mt-11 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/reservation" className={btnGold}>
              <CalendarDays size={20} />
              Réserver maintenant
              <ArrowUpRight size={18} />
            </Link>

            <Link to="/services" className={btnGhost}>
              <Package size={19} />
              Explorer les services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
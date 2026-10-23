import {
  ArrowUpRight,
  Award,
  Clock,
  Crown,
  Scissors,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { company } from "../data/company";

const teamMembers = [
  {
    id: 1,
    firstName: "Prénom à définir",
    name: "Barbier principal",
    role: "Expert en coupe",
    specialty: "Dégradés & coupes modernes",
    experience: "À compléter",
    description:
      "Des coupes précises, des transitions maîtrisées et des finitions adaptées à votre style.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    icon: Scissors,
  },
  {
    id: 2,
    firstName: "Prénom à définir",
    name: "Barbier professionnel",
    role: "Spécialiste barbe",
    specialty: "Taille & rasage traditionnel",
    experience: "À compléter",
    description:
      "Une attention particulière à la forme, aux contours et à l'entretien de votre barbe.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=900&q=85",
    icon: Award,
  },
  {
    id: 3,
    firstName: "Prénom à définir",
    name: "Conseiller style",
    role: "Expert grooming",
    specialty: "Conseil & soins personnalisés",
    experience: "À compléter",
    description:
      "Des conseils personnalisés pour trouver une coupe et un style qui vous correspondent.",
    image:
      "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=85",
    icon: Sparkles,
  },
];

function getWhatsAppLink(firstName: string, role: string) {
  const phone = company.whatsapp.replace(/\D/g, "");

  const message =
    `Bonjour Barber Lux ! Je souhaite réserver un rendez-vous avec ${firstName} (${role}). ` +
    "Pouvez-vous m'indiquer ses disponibilités ?";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Classes de style réutilisables (design uniquement)
const btnGold =
  "bl-shine group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)]";
const eyebrow =
  "flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-[#E5B54B]";
const goldText = "bl-gold-text";

export default function Equipe() {
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
        .bl-root a:focus-visible { outline: 2px solid #E5B54B; outline-offset: 4px; }
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
          className="pointer-events-none absolute -left-32 top-48 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="bl-rise mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_60px_-10px_rgba(229,181,75,0.5)]">
            <Scissors size={30} className="text-[#E5B54B]" />
          </div>

          <p className={`${eyebrow} bl-rise bl-rise-2 mt-9 justify-center`}>
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Les experts Barber Lux
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
          </p>

          <h1 className="bl-display bl-rise bl-rise-2 mt-7 text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[7rem]">
            Des mains expertes,
            <span className={`${goldText} block`}>un style unique.</span>
          </h1>

          <p className="bl-rise bl-rise-3 mx-auto mt-9 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
            Découvrez les professionnels qui mettent leur savoir-faire,
            leur précision et leur passion au service de votre style.
          </p>

          <div className="bl-rise bl-rise-4 mt-11 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-white/60 sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#E5B54B]" />
              Service personnalisé
            </span>
            <span className="flex items-center gap-2">
              <Award size={17} className="text-[#E5B54B]" />
              Savoir-faire
            </span>
            <span className="flex items-center gap-2">
              <Crown size={17} className="text-[#E5B54B]" />
              Expérience premium
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#E5B54B]/50 to-transparent" />
      </section>

      {/* ÉQUIPE */}
      <section className="bg-[#0C0C0B] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className={eyebrow}>
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
                Rencontrez nos experts
              </p>
              <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
                Notre <span className={goldText}>équipe</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50">
              Chaque membre apporte son expertise pour vous proposer une
              prestation attentive et adaptée à vos attentes.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-7 lg:grid-cols-3">
            {teamMembers.map((member) => {
              const Icon = member.icon;

              return (
                <article
                  key={member.id}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/40 hover:shadow-[0_40px_80px_-30px_rgba(229,181,75,0.25)]"
                >
                  {/* PHOTO */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={member.image}
                      alt={`Illustration pour ${member.name}`}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover grayscale-[35%] transition duration-[1200ms] group-hover:scale-105 group-hover:grayscale-0"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent" />

                    <div className="absolute left-2 top-2 flex items-center gap-1.5 rounded-full border border-[#E5B54B]/40 bg-black/55 px-2.5 py-1.5 backdrop-blur-md sm:left-4 sm:top-4 sm:gap-2 sm:px-3.5">
                      <Icon size={13} className="text-[#E5B54B]" />
                      <span className="text-[10px] font-semibold tracking-wider text-[#F3CF75] sm:text-xs">
                        Expert
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-6">
                      <p className="text-[10px] font-medium tracking-[0.12em] text-[#E5B54B] sm:text-xs sm:tracking-[0.2em]">
                        {member.role}
                      </p>

                      <h3 className="bl-display mt-2 text-xl font-semibold leading-tight sm:text-3xl">
                        {member.name}
                      </h3>
                    </div>
                  </div>

                  {/* INFORMATIONS */}
                  <div className="flex flex-1 flex-col p-3.5 sm:p-7">
                    <p className="text-[11px] font-semibold leading-5 text-[#F3CF75] sm:text-sm">
                      {member.specialty}
                    </p>

                    <p className="mt-3 hidden text-sm leading-7 text-white/55 sm:block">
                      {member.description}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/50 sm:mt-6 sm:gap-2 sm:border-t sm:border-white/10 sm:pt-5 sm:text-xs">
                      <Clock size={14} className="shrink-0 text-[#E5B54B]" />
                      <span>
                        Expérience : {member.experience}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(member.firstName, member.role)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Réserver avec ${member.firstName} sur WhatsApp`}
                      className={`${btnGold} mt-5 min-h-11 px-3 py-3 text-[10px] leading-4 sm:px-5 sm:text-sm`}
                    >
                      <span className="text-center">
                        Réserver avec {member.firstName}
                      </span>
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#070707] px-5 pb-24 pt-16 sm:px-8 sm:pb-32">
        <div className="bl-grain relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-[#E5B54B]/30 bg-gradient-to-br from-[#241D0F] via-[#12100B] to-[#070707] px-6 py-14 text-center shadow-[0_60px_120px_-40px_rgba(229,181,75,0.3)] sm:px-10 sm:py-20">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5B54B]/15 blur-[120px]"
          />

          <div className="relative">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_50px_-10px_rgba(229,181,75,0.5)]">
              <UserRound size={28} className="text-[#E5B54B]" />
            </div>

            <h2 className="bl-display mt-8 text-4xl font-medium leading-[1.02] sm:text-6xl">
              Votre style mérite
              <span className={`${goldText} block`}>le meilleur.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
              Choisissez votre barbier et contactez Barber Lux pour organiser
              votre prochain rendez-vous.
            </p>

            <a
              href={`https://wa.me/${company.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent("Bonjour Barber Lux ! Je souhaite obtenir des informations sur les disponibilités de votre équipe.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnGold} mt-10 px-9 py-4 text-sm`}
            >
              Contacter notre équipe
              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
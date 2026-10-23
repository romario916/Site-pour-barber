import { Link } from "react-router-dom";
import {
  Scissors,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { company } from "../data/company";

const liens = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Notre équipe", to: "/equipe" },
  { label: "Galerie", to: "/galerie" },
  { label: "Boutique", to: "/boutique" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bl-footer relative overflow-hidden bg-gradient-to-b from-[#0A0907] via-[#070707] to-[#030303] text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        .bl-footer { font-family: 'Manrope', system-ui, sans-serif; }
        .bl-footer-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .bl-footer a:focus-visible { outline: 2px solid #E5B54B; outline-offset: 3px; border-radius: 9999px; }
      `}</style>

      {/* Filet doré haut + halos */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/70 to-transparent" />
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-[#E5B54B]/40 blur-sm" />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#E5B54B]/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
      />

      {/* Filigrane décoratif */}
      <p
        aria-hidden="true"
        className="bl-footer-display pointer-events-none absolute bottom-16 left-1/2 hidden -translate-x-1/2 select-none text-[16rem] font-bold leading-none tracking-[0.2em] text-white/[0.02] lg:block"
      >
        LUX
      </p>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-10 lg:grid-cols-[1.3fr_1fr_1fr]">
        {/* Marque */}
        <div>
          <Link to="/" className="group inline-flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#F8E2A0] via-[#E5B54B] to-[#C98A2B] text-black shadow-[0_10px_35px_-8px_rgba(229,181,75,0.7)] ring-4 ring-[#E5B54B]/10 transition duration-500 group-hover:rotate-[-12deg] group-hover:ring-[#E5B54B]/25">
              <Scissors size={24} />
            </div>
            <div>
              <p className="bl-footer-display text-3xl font-bold leading-none tracking-[0.12em]">
                BARBER{" "}
                <span className="bg-gradient-to-r from-[#F8E2A0] via-[#E5B54B] to-[#D9822B] bg-clip-text text-transparent">
                  LUX
                </span>
              </p>
              <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.35em] text-white/40">
                L’élégance au masculin
              </p>
            </div>
          </Link>

          <p className="bl-footer-display mt-9 max-w-sm border-l-2 border-[#E5B54B]/50 pl-5 text-2xl font-medium italic leading-snug text-white/85">
            Votre style, notre signature.
          </p>

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
            Découvrez une expérience de coiffure dédiée à votre élégance et à
            votre personnalité.
          </p>

          <Link
            to="/reservation"
            className="group relative mt-9 inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#F8E2A0] via-[#E5B54B] to-[#C98A2B] px-8 py-4 text-sm font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] ring-1 ring-inset ring-white/30 transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)]"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Réserver un rendez-vous</span>
            <ArrowUpRight
              size={17}
              className="relative transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#E5B54B]">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Navigation
          </h2>

          <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-1">
            {liens.map((lien) => (
              <li key={lien.to}>
                <Link
                  to={lien.to}
                  className="group inline-flex items-center gap-2 py-2 text-sm text-white/60 transition duration-300 hover:translate-x-1 hover:text-[#F3CF75]"
                >
                  <span className="h-px w-0 bg-[#E5B54B] transition-all duration-300 group-hover:w-3" />
                  {lien.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Coordonnées */}
        <div>
          <h2 className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#E5B54B]">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Nos coordonnées
          </h2>

          <ul className="mt-9 space-y-5 text-sm text-white/60">
            <li className="group flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5B54B]/25 bg-gradient-to-br from-[#E5B54B]/10 to-transparent transition duration-300 group-hover:border-[#E5B54B]/60 group-hover:shadow-[0_0_25px_-5px_rgba(229,181,75,0.5)]">
                <MapPin size={17} className="text-[#E5B54B]" />
              </span>
              <span className="pt-3 transition group-hover:text-white/80">Paris tb 45 45d</span>
            </li>
            <li className="group flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5B54B]/25 bg-gradient-to-br from-[#E5B54B]/10 to-transparent transition duration-300 group-hover:border-[#E5B54B]/60 group-hover:shadow-[0_0_25px_-5px_rgba(229,181,75,0.5)]">
                <Phone size={17} className="text-[#E5B54B]" />
              </span>
              <span className="pt-3 transition group-hover:text-white/80">0328876180</span>
            </li>
            <li className="group flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#E5B54B]/25 bg-gradient-to-br from-[#E5B54B]/10 to-transparent transition duration-300 group-hover:border-[#E5B54B]/60 group-hover:shadow-[0_0_25px_-5px_rgba(229,181,75,0.5)]">
                <Mail size={17} className="text-[#E5B54B]" />
              </span>
              <span className="pt-3 transition group-hover:text-white/80">romarihenry08@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Réseaux sociaux */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] py-9 sm:flex-row">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-[#E5B54B]">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Suivez-nous
          </p>

          <div className="flex items-center gap-4">
            <a
              href={company.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#E5B54B]/40 ring-4 ring-[#E5B54B]/0 transition duration-300 hover:scale-110 hover:border-[#E5B54B] hover:ring-[#E5B54B]/15 hover:shadow-[0_0_30px_-4px_rgba(229,181,75,0.6)]"
            >
              <img
                src="/facebook.jpeg"
                alt="Facebook"
                className="h-full w-full rounded-full object-cover"
              />
            </a>

            <a
              href={company.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#E5B54B]/40 ring-4 ring-[#E5B54B]/0 transition duration-300 hover:scale-110 hover:border-[#E5B54B] hover:ring-[#E5B54B]/15 hover:shadow-[0_0_30px_-4px_rgba(229,181,75,0.6)]"
            >
              <img
                src="/instagram.jpeg"
                alt="Instagram"
                className="h-full w-full rounded-full object-cover"
              />
            </a>

            <a
              href={company.socialLinks.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#E5B54B]/40 ring-4 ring-[#E5B54B]/0 transition duration-300 hover:scale-110 hover:border-[#E5B54B] hover:ring-[#E5B54B]/15 hover:shadow-[0_0_30px_-4px_rgba(229,181,75,0.6)]"
            >
              <img
                src="/tiktok.jpeg"
                alt="TikTok"
                className="h-full w-full rounded-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="relative bg-black/40">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/30 to-transparent" />
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-7 text-xs text-white/40 sm:px-10 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Barber Lux. Tous droits réservés.</p>
          <p className="bl-footer-display text-base italic text-white/50">
            Conçu avec passion pour votre style.
          </p>
        </div>
      </div>
    </footer>
  );
}
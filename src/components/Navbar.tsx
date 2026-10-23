import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Scissors, CalendarDays } from "lucide-react";


const navigation = [
  { label: "Accueil", to: "/" },
  { label: "Services", to: "/services" },
  { label: "À propos", to: "/a-propos" },
  { label: "Notre équipe", to: "/equipe" },
  {label: "Galerie", to: "/galerie"},
  { label: "Boutique", to: "/boutique" },
  { label: "Contact", to: "/contact" },
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-gradient-to-r after:from-[#E5B54B] after:to-[#D9822B] after:transition-transform after:duration-500 hover:after:scale-x-100 ${
      isActive
        ? "text-[#F3CF75] after:scale-x-100"
        : "text-white/70 after:scale-x-0 hover:text-[#F3CF75]"
    }`;

  return (
    <header className="bl-nav sticky top-0 z-50 border-b border-white/[0.08] bg-[#080808]/80 text-white shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap');
        .bl-nav { font-family: 'Manrope', system-ui, sans-serif; }
        .bl-nav-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .bl-nav a:focus-visible, .bl-nav button:focus-visible { outline: 2px solid #E5B54B; outline-offset: 3px; }
        @keyframes bl-nav-drop { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
        .bl-nav-drop { animation: bl-nav-drop .35s ease both; }
        @media (prefers-reduced-motion: reduce) { .bl-nav-drop { animation: none; } }
      `}</style>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B]/50 to-transparent" />

      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8"
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3.5"
          aria-label="Barber Lux, accueil"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E5B54B]/50 bg-gradient-to-br from-[#E5B54B]/25 to-transparent shadow-[0_0_30px_-8px_rgba(229,181,75,0.6)] transition duration-500 group-hover:rotate-[-12deg] group-hover:shadow-[0_0_40px_-4px_rgba(229,181,75,0.8)]">
            <Scissors size={22} className="text-[#E5B54B]" />
          </span>

          <span>
            <span className="bl-nav-display block text-2xl font-bold leading-none tracking-[0.14em]">
              BARBER{" "}
              <span className="bg-gradient-to-r from-[#F8E2A0] via-[#E5B54B] to-[#D9822B] bg-clip-text text-transparent">
                LUX
              </span>
            </span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.35em] text-white/45">
              Premium grooming
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/reservation"
          className="group hidden items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(229,181,75,0.85)] lg:flex"
        >
          <CalendarDays size={17} className="transition duration-500 group-hover:rotate-12" />
          Réserver
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white transition duration-300 hover:border-[#E5B54B] hover:bg-[#E5B54B]/10 hover:text-[#E5B54B] lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="bl-nav-drop border-t border-white/[0.08] bg-gradient-to-b from-[#0E0C08] to-[#080808] px-5 pb-6 pt-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1.5">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-2xl border px-5 py-3.5 text-sm font-medium transition duration-300 ${
                    isActive
                      ? "border-[#E5B54B]/40 bg-gradient-to-r from-[#E5B54B]/15 to-transparent text-[#F3CF75]"
                      : "border-transparent text-white/70 hover:border-white/10 hover:bg-white/[0.04] hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/reservation"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] px-5 py-3.5 font-semibold text-black shadow-[0_10px_30px_-10px_rgba(229,181,75,0.7)] transition duration-300 hover:-translate-y-0.5"
            >
              <CalendarDays size={18} />
              Réserver un rendez-vous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
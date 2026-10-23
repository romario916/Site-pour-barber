import { ArrowUpRight, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { gallery } from "../data/gallery";

export default function Galerie() {
  return (
    <main className="bl-root relative min-h-screen overflow-hidden bg-[#070707] px-6 pb-24 pt-28 text-white antialiased sm:px-10 sm:pb-32 sm:pt-40">
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
        .bl-root a:focus-visible { outline: 2px solid #E5B54B; outline-offset: 4px; }
        @media (prefers-reduced-motion: reduce) {
          .bl-rise { animation: none; }
          .bl-shine::before { display: none; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E5B54B]/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-72 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
      />

      <section className="relative mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="bl-rise mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_60px_-10px_rgba(229,181,75,0.5)]">
            <Images size={29} className="text-[#E5B54B]" />
          </div>

          <p className="bl-rise bl-rise-2 mt-9 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-[#E5B54B]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Notre univers en images
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
          </p>

          <h1 className="bl-display bl-rise bl-rise-2 mt-7 text-6xl font-medium leading-[0.98] tracking-tight sm:text-8xl lg:text-[8rem]">
            La <span className="bl-gold-text">galerie</span>
          </h1>

          <p className="bl-rise bl-rise-3 mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
            Découvrez l'univers du barbering, les styles et l'ambiance
            qui inspirent l'expérience Barber Lux.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item) => (
            <article
              key={item.id}
              className="group relative isolate h-96 overflow-hidden rounded-3xl border border-white/10 bg-[#171717] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1.5 hover:border-[#E5B54B]/50 hover:shadow-[0_40px_80px_-30px_rgba(229,181,75,0.35)]"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[30%] transition duration-[1200ms] group-hover:scale-110 group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent opacity-90 transition duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-7">
                <div>
                  <p className="text-xs font-medium tracking-[0.22em] text-[#E5B54B]">
                    {item.category}
                  </p>

                  <h2 className="bl-display mt-2 text-3xl font-semibold leading-tight">
                    {item.title}
                  </h2>
                </div>

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30 backdrop-blur-md transition duration-500 group-hover:rotate-12 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-[#F3CF75] group-hover:to-[#C98A2B] group-hover:text-black group-hover:shadow-[0_0_30px_-5px_rgba(229,181,75,0.8)]">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="bl-grain relative mt-24 overflow-hidden rounded-[2rem] border border-[#E5B54B]/30 bg-gradient-to-br from-[#241D0F] via-[#12100B] to-[#070707] px-6 py-16 text-center shadow-[0_60px_120px_-40px_rgba(229,181,75,0.3)] sm:px-12 sm:py-20">
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E5B54B]/15 blur-[120px]"
          />

          <div className="relative">
            <p className="flex items-center justify-center gap-3 text-xs font-medium tracking-[0.28em] text-[#E5B54B]">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
              Prêt pour votre prochain style ?
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
            </p>

            <h2 className="bl-display mt-6 text-4xl font-medium leading-[1.02] sm:text-6xl">
              Votre style mérite
              <span className="bl-gold-text block">le meilleur.</span>
            </h2>

            <Link
              to="/reservation"
              className="bl-shine group relative mt-10 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] px-9 py-4 font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)]"
            >
              Réserver un rendez-vous
              <ArrowUpRight
                size={18}
                className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
import { useState } from "react";
import type { FormEvent } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Navigation,
  ExternalLink,
} from "lucide-react";
import { company } from "../data/company";

interface ContactForm {
  nom: string;
  email: string;
  message: string;
}

const initialForm: ContactForm = {
  nom: "",
  email: "",
  message: "",
};

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3.5 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#E5B54B]/70 focus:bg-black/60 focus:shadow-[0_0_30px_-8px_rgba(229,181,75,0.5)]";

const cardClassName =
  "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.9)] transition duration-500 hover:-translate-y-1 hover:border-[#E5B54B]/40 hover:shadow-[0_40px_80px_-35px_rgba(229,181,75,0.25)]";

const iconClassName =
  "mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#E5B54B]/30 bg-gradient-to-br from-[#E5B54B]/20 to-transparent text-[#E5B54B] transition duration-500 group-hover:shadow-[0_0_35px_-5px_rgba(229,181,75,0.6)]";

const btnGold =
  "bl-shine group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] transition duration-500 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)]";

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const whatsappNumber = company.whatsapp.replace(/\D/g, "");
  const address = [company.address, company.city]
    .filter(
      (value) =>
        value.trim() !== "" &&
        !value.toLowerCase().includes("à compléter")
    )
    .join(", ");

  const hasAddress = address.length > 0;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setSuccess("");

    const nom = form.nom.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!nom || !email || !message) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Veuillez saisir une adresse e-mail valide.");
      return;
    }

    if (message.length < 5) {
      setError("Votre message doit contenir au moins 5 caractères.");
      return;
    }

    if (!whatsappNumber) {
      setError(
        "Configurez le numéro WhatsApp dans src/data/company.ts."
      );
      return;
    }

    const whatsappMessage = [
      `Bonjour ${company.name},`,
      "",
      "Je vous contacte depuis votre site web.",
      "",
      `Nom : ${nom}`,
      `E-mail : ${email}`,
      "",
      "Message :",
      message,
    ].join("\n");

    const url =
      `https://wa.me/${whatsappNumber}` +
      `?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank", "noopener,noreferrer");

    setSuccess(
      "WhatsApp a été ouvert. Vérifiez le message puis confirmez son envoi."
    );
    setForm(initialForm);
  }

  return (
    <main className="bl-root relative min-h-screen overflow-hidden bg-[#070707] px-5 pb-24 pt-28 text-white antialiased sm:px-10 sm:pb-32 sm:pt-40">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Manrope:wght@400;500;600;700&display=swap');
        .bl-root { font-family: 'Manrope', system-ui, sans-serif; }
        .bl-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .bl-gold-text {
          background: linear-gradient(120deg, #F8E2A0 0%, #E5B54B 45%, #D9822B 100%);
          -webkit-background-clip: text; background-clip: text; color: transparent; font-style: italic;
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[#E5B54B]/15 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-80 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
      />

      <section className="relative mx-auto max-w-7xl">
        {/* En-tête */}
        <div className="mb-20 text-center">
          <p className="bl-rise flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-[#E5B54B]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Restons en contact
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
          </p>

          <h1 className="bl-display bl-rise bl-rise-2 mt-7 text-6xl font-medium leading-[0.98] tracking-tight sm:text-8xl lg:text-[8rem]">
            Contactez-<span className="bl-gold-text">nous</span>
          </h1>

          <p className="bl-rise bl-rise-3 mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
            Une question, une demande ou besoin d’informations ?
            L’équipe {company.name} est à votre écoute.
          </p>

          <div className="mx-auto mt-9 h-px w-32 bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
        </div>

        {/* Informations et formulaire */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="space-y-5">
            {/* Adresse */}
            <div className={cardClassName}>
              <div className={iconClassName}>
                <MapPin size={25} />
              </div>

              <h2 className="bl-display text-3xl font-semibold">Notre adresse</h2>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {hasAddress
                  ? address
                  : "L’adresse du salon sera bientôt disponible."}
              </p>

              {company.mapsUrl && (
                <a
                  href={company.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 border-b border-[#E5B54B]/40 pb-1 text-sm font-medium text-[#E5B54B] transition hover:border-[#E5B54B] hover:text-[#F3CF75]"
                >
                  <Navigation size={17} />
                  Voir l’itinéraire
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Téléphone */}
            <div className={cardClassName}>
              <div className={iconClassName}>
                <Phone size={25} />
              </div>

              <h2 className="bl-display text-3xl font-semibold">Téléphone</h2>

              {company.phone ? (
                <a
                  href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                  className="mt-3 inline-block text-sm text-white/60 transition hover:text-[#E5B54B]"
                >
                  {company.phone}
                </a>
              ) : (
                <p className="mt-3 text-sm text-white/50">
                  Numéro à compléter
                </p>
              )}
            </div>

            {/* E-mail */}
            <div className={cardClassName}>
              <div className={iconClassName}>
                <Mail size={25} />
              </div>

              <h2 className="bl-display text-3xl font-semibold">E-mail</h2>

              {company.email ? (
                <a
                  href={`mailto:${company.email}`}
                  className="mt-3 inline-block break-all text-sm text-white/60 transition hover:text-[#E5B54B]"
                >
                  {company.email}
                </a>
              ) : (
                <p className="mt-3 text-sm text-white/50">
                  Adresse e-mail à compléter
                </p>
              )}
            </div>

            {/* Horaires */}
            <div className={cardClassName}>
              <div className={iconClassName}>
                <Clock size={25} />
              </div>

              <h2 className="bl-display text-3xl font-semibold">
                Horaires d’ouverture
              </h2>

              <ul className="mt-5 space-y-3">
                {company.openingHours.map((item) => (
                  <li
                    key={item.days}
                    className="flex flex-wrap justify-between gap-3 border-b border-white/10 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="text-white/60">
                      {item.days}
                    </span>

                    <span className="bl-display text-lg font-semibold text-[#E5B54B]">
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="relative h-fit overflow-hidden rounded-[2rem] border border-[#E5B54B]/25 bg-gradient-to-br from-[#1A160D] to-[#0E0C08] p-7 shadow-[0_50px_100px_-40px_rgba(229,181,75,0.25)] sm:p-11"
          >
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#E5B54B]/10 blur-[100px]"
            />

            <h2 className="bl-display relative text-4xl font-medium leading-tight sm:text-5xl">
              Envoyez-nous un{" "}
              <span className="bl-gold-text">message</span>
            </h2>

            <p className="relative mt-4 text-sm leading-7 text-white/60">
              Remplissez le formulaire pour préparer votre message
              et le transmettre directement via WhatsApp.
            </p>

            <div className="relative mt-9 space-y-6">
              <div>
                <label
                  htmlFor="nom"
                  className="mb-2.5 block text-sm font-medium text-white/80"
                >
                  Votre nom
                </label>

                <input
                  id="nom"
                  name="nom"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  value={form.nom}
                  onChange={(e) =>
                    setForm({ ...form, nom: e.target.value })
                  }
                  placeholder="Entrez votre nom"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2.5 block text-sm font-medium text-white/80"
                >
                  Votre e-mail
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="exemple@email.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2.5 block text-sm font-medium text-white/80"
                >
                  Votre message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={3000}
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Comment pouvons-nous vous aider ?"
                  className={`${inputClassName} resize-y`}
                />

                <p className="mt-2 text-right text-xs text-white/40">
                  {form.message.length}/3000 caractères
                </p>
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
                >
                  {error}
                </div>
              )}

              {success && (
                <div
                  role="status"
                  className="flex gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
                >
                  <CheckCircle2
                    className="shrink-0"
                    size={20}
                  />
                  <p>{success}</p>
                </div>
              )}

              <button
                type="submit"
                className={`${btnGold} w-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#E5B54B] focus:ring-offset-2 focus:ring-offset-[#0A0A0A]`}
              >
                <MessageCircle size={20} />
                Envoyer via WhatsApp
                <Send
                  size={17}
                  className="transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>

              <p className="text-center text-xs leading-5 text-white/40">
                WhatsApp s’ouvrira avec votre message prérempli.
                Vous devrez confirmer son envoi dans l’application.
              </p>
            </div>
          </form>
        </div>

        {/* Google Maps */}
        <section className="mt-24">
          <div className="mb-10">
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.28em] text-[#E5B54B]">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
              Nous trouver
            </p>

            <h2 className="bl-display mt-5 text-4xl font-medium leading-[1.05] sm:text-6xl">
              Retrouvez-nous sur{" "}
              <span className="bl-gold-text">Google Maps</span>
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
              Consultez notre emplacement et préparez votre itinéraire
              pour venir découvrir {company.name}.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#E5B54B]/25 bg-white/[0.03] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]">
            {company.mapsEmbedUrl ? (
              <iframe
                title={`Localisation de ${company.name} sur Google Maps`}
                src={company.mapsEmbedUrl}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block w-full"
              />
            ) : (
              <div className="flex min-h-[280px] flex-col items-center justify-center px-6 py-14 text-center sm:min-h-[340px]">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_50px_-10px_rgba(229,181,75,0.5)]">
                  <MapPin
                    size={34}
                    className="text-[#E5B54B]"
                  />
                </div>

                <h3 className="bl-display text-3xl font-semibold">
                  Localisation à configurer
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
                  Ajoutez le lien d’intégration Google Maps dans
                  src/data/company.ts pour afficher la carte ici.
                </p>

                {company.mapsUrl && (
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${btnGold} mt-8 px-7 py-3.5`}
                  >
                    <Navigation size={18} />
                    Ouvrir Google Maps
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            )}
          </div>

          {company.mapsUrl && company.mapsEmbedUrl && (
            <div className="mt-7 flex justify-center">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5B54B]/40 bg-[#E5B54B]/5 px-8 py-3.5 font-semibold text-[#F3CF75] transition duration-500 hover:border-transparent hover:bg-gradient-to-br hover:from-[#F3CF75] hover:to-[#C98A2B] hover:text-black hover:shadow-[0_10px_30px_-10px_rgba(229,181,75,0.7)]"
              >
                <Navigation size={18} />
                Voir l’itinéraire
                <ExternalLink size={15} />
              </a>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}
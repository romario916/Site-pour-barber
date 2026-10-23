import { useState } from "react";
import type { FormEvent } from "react";
import { company } from "../data/company";
import {
  CalendarDays,
  Clock,
  Scissors,
  CheckCircle2,
  MessageCircle,
  UserRound,
  Phone,
  AlertCircle,
} from "lucide-react";

interface Service {
  name: string;
  duration: string;
  price: string;
}

const services: Service[] = [
  { name: "Coupe de cheveux", duration: "30 min", price: "À définir" },
  { name: "Taille de barbe", duration: "20 min", price: "À définir" },
  { name: "Coupe + barbe", duration: "45 min", price: "À définir" },
  { name: "Soin premium", duration: "30 min", price: "À définir" },
];

const horaires = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];

const WHATSAPP_NUMBER = company.whatsapp.replace(/\D/g, "");

const inputClassName =
  "w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-3.5 text-white outline-none transition duration-300 placeholder:text-white/30 focus:border-[#E5B54B]/70 focus:bg-black/60 focus:shadow-[0_0_30px_-8px_rgba(229,181,75,0.5)] [color-scheme:dark]";

const labelClassName = "mb-2.5 flex items-center text-sm font-medium text-white/80";

function getTodayLocalDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function Reservation() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [heure, setHeure] = useState("");
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [erreur, setErreur] = useState("");
  const [confirmation, setConfirmation] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErreur("");
    setConfirmation("");

    const nomClient = nom.trim();
    const telephoneClient = telephone.trim();
    const prestation = services.find((item) => item.name === service);

    if (!prestation) {
      setErreur("Veuillez choisir une prestation.");
      return;
    }

    if (!nomClient || !telephoneClient || !date || !heure) {
      setErreur("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    if (date < getTodayLocalDate()) {
      setErreur("Veuillez choisir aujourd'hui ou une date ultérieure.");
      return;
    }

    if (!/^[+\d\s().-]{7,20}$/.test(telephoneClient)) {
      setErreur("Veuillez saisir un numéro de téléphone valide.");
      return;
    }

    if (!WHATSAPP_NUMBER) {
      setErreur(
        "Le numéro WhatsApp du salon doit être configuré avant l'envoi."
      );
      return;
    }

    const message = [
      "Bonjour Barber Lux !",
      "",
      "Je souhaite demander un rendez-vous.",
      "",
      `Nom : ${nomClient}`,
      `Téléphone : ${telephoneClient}`,
      `Prestation : ${prestation.name}`,
      `Durée estimée : ${prestation.duration}`,
      `Date souhaitée : ${date}`,
      `Heure souhaitée : ${heure}`,
      "",
      "Merci de me confirmer la disponibilité du créneau.",
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}` +
      `?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

setConfirmation(
  "Votre demande est prête. Si WhatsApp ne s'ouvre pas automatiquement, utilisez le lien ci-dessous."
);

    setConfirmation(
      "WhatsApp est ouvert avec votre demande. Envoyez le message pour que le salon puisse vous répondre."
    );
  }

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
        .bl-shine::before {
          content: ""; position: absolute; inset: 0; transform: translateX(-120%) skewX(-20deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent);
          transition: transform .9s ease;
        }
        .bl-shine:hover:not(:disabled)::before { transform: translateX(120%) skewX(-20deg); }
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
        className="pointer-events-none absolute -left-32 top-96 h-80 w-80 rounded-full bg-[#D9822B]/10 blur-[130px]"
      />

      <section className="relative mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <div className="bl-rise mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#E5B54B]/40 bg-gradient-to-br from-[#E5B54B]/20 to-transparent shadow-[0_0_60px_-10px_rgba(229,181,75,0.5)]">
            <CalendarDays size={29} className="text-[#E5B54B]" />
          </div>

          <p className="bl-rise bl-rise-2 mt-9 flex items-center justify-center gap-3 text-xs font-medium tracking-[0.3em] text-[#E5B54B]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#E5B54B]" />
            Votre prochain rendez-vous
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#E5B54B]" />
          </p>

          <h1 className="bl-display bl-rise bl-rise-2 mt-7 text-5xl font-medium leading-[0.98] tracking-tight sm:text-7xl lg:text-[7rem]">
            Réservez votre{" "}
            <span className="bl-gold-text">séance</span>
          </h1>

          <p className="bl-rise bl-rise-3 mx-auto mt-8 max-w-2xl text-sm leading-7 text-white/60 sm:text-lg sm:leading-8">
            Choisissez votre prestation et votre créneau préféré.
            Envoyez votre demande au salon via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="relative overflow-hidden rounded-[2rem] border border-[#E5B54B]/25 bg-gradient-to-br from-[#1A160D] to-[#0E0C08] p-6 shadow-[0_60px_120px_-40px_rgba(229,181,75,0.25)] sm:p-12"
        >
          <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#E5B54B] to-transparent" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E5B54B]/10 blur-[110px]"
          />

          <h2 className="bl-display relative mb-8 flex items-center gap-4 text-3xl font-semibold sm:text-4xl">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E5B54B]/30 bg-[#E5B54B]/10">
              <Scissors size={21} className="text-[#E5B54B]" />
            </span>
            Choisissez votre prestation
          </h2>

          <div className="relative grid gap-4 sm:grid-cols-2">
            {services.map((item) => (
              <button
                key={item.name}
                key-id={undefined}
                type="button"
                aria-pressed={service === item.name}
                onClick={() => {
                  setService(item.name);
                  setErreur("");
                  setConfirmation("");
                }}
                className={`group rounded-3xl border p-6 text-left transition duration-500 ${
                  service === item.name
                    ? "border-[#E5B54B] bg-gradient-to-br from-[#E5B54B]/20 to-[#E5B54B]/[0.03] shadow-[0_20px_50px_-20px_rgba(229,181,75,0.5)]"
                    : "border-white/10 bg-black/30 hover:-translate-y-1 hover:border-[#E5B54B]/40 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="bl-display text-2xl font-semibold leading-tight">
                    {item.name}
                  </span>
                  {service === item.name && (
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-[#E5B54B]"
                    />
                  )}
                </div>

                <div className="mt-5 flex justify-between gap-3 border-t border-white/10 pt-4 text-sm text-white/50">
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-[#E5B54B]" />
                    {item.duration}
                  </span>
                  <span className="font-medium text-[#F3CF75]">{item.price}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="relative mt-12 grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className={labelClassName}>
                <CalendarDays
                  size={16}
                  className="mr-2 inline text-[#E5B54B]"
                />
                Date souhaitée
              </label>

              <input
                id="date"
                name="date"
                type="date"
                required
                min={getTodayLocalDate()}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setErreur("");
                  setConfirmation("");
                }}
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="heure" className={labelClassName}>
                <Clock
                  size={16}
                  className="mr-2 inline text-[#E5B54B]"
                />
                Heure souhaitée
              </label>

              <select
                id="heure"
                name="heure"
                required
                value={heure}
                onChange={(e) => {
                  setHeure(e.target.value);
                  setErreur("");
                  setConfirmation("");
                }}
                className="w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-3.5 text-white outline-none transition duration-300 focus:border-[#E5B54B]/70 focus:shadow-[0_0_30px_-8px_rgba(229,181,75,0.5)]"
              >
                <option value="">Choisir une heure</option>
                {horaires.map((horaire) => (
                  <option key={horaire} value={horaire}>
                    {horaire}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="nom" className={labelClassName}>
                <UserRound
                  size={16}
                  className="mr-2 inline text-[#E5B54B]"
                />
                Votre nom
              </label>

              <input
                id="nom"
                name="nom"
                type="text"
                autoComplete="name"
                required
                minLength={2}
                maxLength={100}
                value={nom}
                onChange={(e) => {
                  setNom(e.target.value);
                  setErreur("");
                  setConfirmation("");
                }}
                placeholder="Votre nom complet"
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="telephone" className={labelClassName}>
                <Phone
                  size={16}
                  className="mr-2 inline text-[#E5B54B]"
                />
                Votre téléphone
              </label>

              <input
                id="telephone"
                name="telephone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={20}
                value={telephone}
                onChange={(e) => {
                  setTelephone(e.target.value);
                  setErreur("");
                  setConfirmation("");
                }}
                placeholder="Ex. : +261 34 00 000 00"
                className={inputClassName}
              />
            </div>
          </div>

          {erreur && (
            <div
              role="alert"
              className="relative mt-7 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
            >
              <AlertCircle size={20} className="shrink-0" />
              <p>{erreur}</p>
            </div>
          )}

          {confirmation && (
            <div
              role="status"
              className="relative mt-7 flex items-start gap-3 rounded-2xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300"
            >
              <CheckCircle2 size={20} className="shrink-0" />
              <p>{confirmation}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!service || !date || !heure || !nom.trim() || !telephone.trim()}
            className="bl-shine group relative mt-10 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-br from-[#F3CF75] via-[#E5B54B] to-[#C98A2B] px-6 py-4 font-semibold text-black shadow-[0_10px_35px_-10px_rgba(229,181,75,0.7)] transition duration-500 enabled:hover:-translate-y-0.5 enabled:hover:shadow-[0_18px_45px_-8px_rgba(229,181,75,0.85)] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            <MessageCircle size={20} />
            Demander mon rendez-vous sur WhatsApp
          </button>

          <p className="relative mt-5 text-center text-xs leading-5 text-white/40">
            Votre demande ne constitue pas une réservation confirmée.
            Le salon doit confirmer la disponibilité du créneau.
          </p>
        </form>
      </section>
    </main>
  );
}
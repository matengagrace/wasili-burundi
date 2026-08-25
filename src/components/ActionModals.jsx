import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  CarFront,
  Check,
  ChevronDown,
  Clock3,
  Eye,
  EyeOff,
  Mail,
  MapPin,
  Phone,
  User,
  X,
} from "lucide-react";
import { logo_google } from "../assets/images";
import { siteTranslations } from "../data/translations";

const inputClassName =
  "box-border h-14 min-w-0 max-w-full w-full rounded-2xl border border-gray-200 bg-gray-50/80 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-amber-400 focus:bg-white focus:ring-4 focus:ring-amber-400/10";

function ModalShell({
  children,
  onClose,
  label,
  wide = false,
  standalone = false,
}) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      className={`${standalone ? "min-h-screen" : "fixed inset-0 z-[70] bg-black/55 backdrop-blur-sm"} flex items-center justify-center overflow-y-auto p-4 sm:p-6`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={label}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className={`relative my-auto w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl ${wide ? "w-[min(92vw,1100px)] max-w-5xl" : "max-w-md"} ${standalone ? "min-h-[calc(100vh-3rem)] max-w-5xl rounded-[2rem] sm:min-h-0" : ""}`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Field({ label, icon: Icon, children, required = true }) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-gray-500">
        <Icon className="h-4 w-4 text-amber-500" />
        {label}
        {required && <span className="text-amber-500">*</span>}
      </span>
      {children}
    </label>
  );
}

export function BookingModal({ isOpen, onClose, language = "fr" }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = siteTranslations[language]?.modal ?? siteTranslations.fr.modal;
  const ui = siteTranslations[language]?.ui ?? siteTranslations.fr.ui;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalShell onClose={onClose} label={t.bookingTitle} wide>
          <div className="grid md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden bg-[#1A1C1C] p-7 text-white sm:p-9">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border-[18px] border-amber-400/20" />
              <CarFront className="relative mb-10 h-10 w-10 text-amber-400" />
              <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Wasili Burundi
              </p>
              <h2 className="relative mt-3 text-3xl font-black leading-tight sm:text-4xl">
                {t.bookingTitle.split(" ")[0]} {t.bookingTitle.split(" ")[1]}
                <br />
                {t.bookingTitle.split(" ").slice(2).join(" ")}
              </h2>
              <p className="relative mt-5 max-w-xs text-sm leading-6 text-white/65">
                {t.bookingSubtitle}
              </p>
              <div className="relative mt-10 flex items-center gap-3 text-xs font-semibold text-white/75">
                <Clock3 className="h-4 w-4 text-amber-400" /> {ui.available}
              </div>
            </div>

            <div className="p-6 sm:p-9">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.bookingInfo}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {t.bookingRequired}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={ui.close}
                  className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="flex min-h-[350px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <Check className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-gray-900">{ui.sent}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">{ui.sentText}</p>
                  <button type="button" onClick={onClose} className="mt-7 rounded-full bg-amber-400 px-7 py-3 text-sm font-bold text-gray-900 transition hover:bg-amber-500">
                    {ui.close}
                  </button>
                </div>
              ) : (
                <form
                  // onSubmit={handleSubmit}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  <Field label={t.name} icon={User}>
                    <input
                      className={inputClassName}
                      name="name"
                      placeholder={ui.fullNamePlaceholder}
                      required
                    />
                  </Field>
                  <Field label={t.phone} icon={Phone}>
                    <input
                      className={inputClassName}
                      name="phone"
                      type="tel"
                      placeholder="+257 79 00 00 00"
                      required
                    />
                  </Field>
                  <Field label={t.pickup} icon={MapPin}>
                    <div className="relative">
                      <input
                        className={`${inputClassName} pr-12`}
                        name="pickup"
                        placeholder={ui.pickupPlaceholder}
                        required
                      />
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        aria-label={ui.openMaps}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-amber-600 transition hover:bg-amber-100"
                      >
                        <MapPin className="h-5 w-5" />
                      </a>
                    </div>
                  </Field>
                  <Field label={t.destination} icon={MapPin}>
                    <div className="relative min-w-0">
                      <select
                        className={`${inputClassName} appearance-none pr-11`}
                        name="destination"
                        defaultValue=""
                        required
                      >
                        {ui.destinations.map((destination, index) => (
                          <option key={destination} value={index === 0 ? "" : destination} disabled={index === 0}>
                            {destination}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </Field>
                  <Field label={t.service} icon={CarFront}>
                    <div className="relative min-w-0">
                      <select
                        className={`${inputClassName} appearance-none pr-11`}
                        name="service"
                        defaultValue=""
                        required
                      >
                        {ui.services.map((service, index) => (
                          <option key={service} value={index === 0 ? "" : service} disabled={index === 0}>
                            {service}
                          </option>
                        ))}

                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </Field>
                  <Field label={t.email} icon={Mail}>
                    <input
                      className={inputClassName}
                      name="email"
                      type="email"
                      placeholder={ui.emailPlaceholder}
                      required
                    />
                  </Field>
                  <Field label={t.date} icon={CalendarDays}>
                    <div className="relative min-w-0">
                      <input
                        className={`${inputClassName} appearance-none pr-12 accent-amber-500`}
                        name="date"
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        required
                      />
                      <CalendarDays className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
                    </div>
                  </Field>
                  <button
                    type="submit"
                    className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-5 py-4 text-sm font-black text-gray-900 shadow-lg shadow-amber-400/20 transition hover:bg-amber-500 sm:col-span-2"
                  >
                    {t.bookingButton} <CarFront className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </ModalShell>
      )}
    </AnimatePresence>
  );
}

export function AuthModal({ isOpen, onClose, standalone = false, language = "fr" }) {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = siteTranslations[language]?.modal ?? siteTranslations.fr.modal;
  const ui = siteTranslations[language]?.ui ?? siteTranslations.fr.ui;

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalShell
          onClose={onClose}
          label={mode === "login" ? t.loginTab : t.signupTab}
          standalone={standalone}
        >
          <div className="p-7 sm:p-9">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
                  {t.authWelcome}
                </p>
                <h2 className="mt-2 text-3xl font-black text-gray-900">
                  {mode === "login"
                    ? t.authLoginTitle
                    : t.authSignupTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={ui.close}
                className="rounded-full p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-900"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-7 grid grid-cols-2 rounded-xl bg-gray-100 p-1 text-sm font-bold">
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setIsSubmitted(false);
                }}
                className={`rounded-lg py-2.5 transition ${mode === "login" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}
              >
                {t.loginTab}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setIsSubmitted(false);
                }}
                className={`rounded-lg py-2.5 transition ${mode === "signup" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}
              >
                {t.signupTab}
              </button>
            </div>
            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                  <Check className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-xl font-black">{ui.sent}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {ui.sentText}
                </p>
              </div>
            ) : (
              <form 
              // onSubmit={handleSubmit}
               className="mt-6 space-y-4">
                {mode === "signup" && (
                  <Field label={t.name} icon={User}>
                    <input
                      className={inputClassName}
                      name="auth-name"
                      placeholder={ui.fullNamePlaceholder}
                      required
                    />
                  </Field>
                )}
                <Field label={t.email} icon={Mail}>
                  <input
                    className={inputClassName}
                    name="auth-email"
                    type="email"
                    placeholder={ui.emailPlaceholder}
                    required
                  />
                </Field>
                <Field label={t.password} icon={User}>
                  <div className="relative">
                    <input
                      className={`${inputClassName} pr-12`}
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword
                          ? ui.hidePassword
                          : ui.showPassword
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-800"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-2xl bg-amber-400 py-4 text-sm font-black text-gray-900 transition hover:bg-amber-500"
                >
                  {mode === "login" ? t.submitLogin : t.submitSignup}
                </button>
                <div className="flex items-center gap-3 py-1 text-xs text-gray-400">
                  <span className="h-px flex-1 bg-gray-200" />
                  {ui.or}
                  <span className="h-px flex-1 bg-gray-200" />
                </div>
                <button
                  type="button"
                  // onClick={() => setIsSubmitted(true)}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl border border-gray-200 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-sm font-black text-[#4285F4] shadow-sm">
                    <img src={logo_google} alt={ui.googleLogoAlt} />
                  </span>
                  {ui.google}
                </button>
              </form>
            )}
          </div>
        </ModalShell>
      )}
    </AnimatePresence>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import { siteTranslations } from "../data/translations";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewsletterSection({ onSubscribe, language = "fr" }) {
  const t = siteTranslations[language]?.newsletter ?? siteTranslations.fr.newsletter;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!EMAIL_REGEX.test(email)) {
      setStatus("error");
      setErrorMessage(t.invalidEmail);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      if (onSubscribe) {
        await onSubscribe(email);
      }
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage(t.error);
    }
  }

  return (
    <section className="relative overflow-hidden bg-neutral-50 px-6 py-16 md:px-16 lg:py-20">
      <Mail
        className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-neutral-200 md:h-80 md:w-80"
        strokeWidth={1}
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
        >
          {t.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-lg text-gray-600"
        >
          {t.text}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mx-auto flex flex-col gap-3 sm:flex-row sm:items-stretch"
          noValidate
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t.placeholder}
            aria-label={t.ariaEmail}
            disabled={status === "loading"}
            className="w-full flex-1 rounded-lg border-2 border-amber-400 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
            {t.button}
          </button>
        </motion.form>

        <div className="mt-3 min-h-[1.5rem]">
          <AnimatePresence mode="wait">
            {status === "error" && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="text-sm font-medium text-red-600"
              >
                {errorMessage}
              </motion.p>
            )}
            {status === "success" && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center justify-center gap-1.5 text-sm font-medium text-green-600"
              >
                <CheckCircle2 className="h-4 w-4" />
                {t.success}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-2 text-lg text-gray-500">{t.privacy}</p>
      </div>
    </section>
  );
}

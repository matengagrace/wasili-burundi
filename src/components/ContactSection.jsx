import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, Loader2 } from "lucide-react";
import { siteTranslations } from "../data/translations";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactSection({
  onSubmit,
  googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.3063427308866!2d29.353521308794974!3d-3.4238372965362776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19c19d0017c465c5%3A0x7bf7ffacf9b39ce0!2sWasili!5e1!3m2!1sfr!2sbi!4v1787052336179!5m2!1sfr!2sbi",
  phoneNumbers = "+257 79 138 138 / 79 137 137 / 79 135 135",
  email = "info@wasiliburundi.com",
  language = "fr",
}) {
  const t = siteTranslations[language]?.contact ?? siteTranslations.fr.contact;
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(field) {
    return (event) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t.requiredName;
    if (!EMAIL_REGEX.test(form.email)) nextErrors.email = t.invalidEmail;
    if (!form.message.trim()) nextErrors.message = t.requiredMessage;
    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    try {
      if (onSubmit) await onSubmit(form);
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch {
      setStatus("error");
    }
  }

  const fieldClass = (field) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-amber-300 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-transparent bg-neutral-100"
    }`;

  return (
    <section id="contact" className="bg-GRAY-WHITE-COLOR px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          {t.title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-10 rounded-2xl bg-white p-6 shadow-sm md:p-10 lg:grid-cols-2 lg:gap-12"
        >
          <div>
            <h3 className="mb-6 text-xl font-bold text-gray-900">{t.formTitle}</h3>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={form.name}
                    onChange={handleChange("name")}
                    className={fieldClass("name")}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t.emailPlaceholder}
                    value={form.email}
                    onChange={handleChange("email")}
                    className={fieldClass("email")}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                </div>
              </div>

              <input
                type="text"
                placeholder={t.subjectPlaceholder}
                value={form.subject}
                onChange={handleChange("subject")}
                className={fieldClass("subject")}
              />

              <div>
                <textarea
                  placeholder={t.messagePlaceholder}
                  rows={5}
                  value={form.message}
                  onChange={handleChange("message")}
                  className={`${fieldClass("message")} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-neutral-900 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {t.send}
              </motion.button>
              {status === "success" && <p className="text-sm font-medium text-green-600">{t.sendSuccess}</p>}
              {status === "error" && <p className="text-sm font-medium text-red-600">{t.sendError}</p>}
            </form>

            <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:gap-8">
              <a
                href={`tel:${phoneNumbers.split("/")[0].trim().replace(/\s+/g, "")}`}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-amber-600"
              >
                <Phone className="h-4 w-4 text-amber-600" />
                {phoneNumbers}
              </a>
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm font-medium text-amber-600 underline-offset-2 hover:underline"
              >
                <Mail className="h-4 w-4 text-amber-600" />
                {email}
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-xl lg:min-h-full">
            <iframe
              src={googleMapsUrl}
              className="h-full w-full object-cover"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
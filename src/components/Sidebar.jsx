import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { siteTranslations } from "../data/translations";

function Sidebar({ isOpen, onClose, onLogin, language = "fr", setLanguage }) {
  const t = siteTranslations[language]?.nav ?? siteTranslations.fr.nav;
  const ui = siteTranslations[language]?.ui ?? siteTranslations.fr.ui;
  const MENU_LINKS = [
    { label: t.home, href: "#hero" },
    { label: t.services, href: "#services" },
    { label: t.about, href: "#about" },
    { label: t.contact, href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage((current) => (current === "fr" ? "en" : "fr"));
  };

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg lg:hidden"
          >
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-bold text-[#E2B40D]">Wasili Burundi</h2>
              <button
                onClick={onClose}
                aria-label={ui.closeMenu}
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-4 py-6">
              {MENU_LINKS.map(({ label, href }, index) => (
                <motion.a
                  key={label + href}
                  href={href}
                  onClick={handleLinkClick}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-amber-50 hover:text-amber-600"
                >
                  {label}
                </motion.a>
              ))}
            </nav>

            <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                className="w-fit rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-bold text-gray-900 shadow-sm transition hover:border-amber-400 hover:text-amber-600"
              >
                {language === "fr" ? "FR" : "EN"}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onLogin?.();
                }}
                className="w-full rounded-full bg-amber-400 px-6 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500"
              >
                {t.login}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;

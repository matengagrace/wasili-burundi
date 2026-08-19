import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MENU_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Sidebar({ isOpen, onClose, onLogin }) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 z-50 h-full w-64 bg-white shadow-lg lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <h2 className="text-lg font-bold text-[#E2B40D]">Wasili Burundi</h2>
              <button
                onClick={onClose}
                aria-label="Fermer le menu"
                className="rounded-lg p-2 hover:bg-gray-100"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-1 px-4 py-6">
              {MENU_LINKS.map(({ label, href }, index) => (
                <motion.a
                  key={label}
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

            {/* Footer */}
            <div className="absolute bottom-6 left-4 right-4 flex flex-col gap-3">
              <span className="text-sm font-medium text-gray-600">EN</span>
              <button onClick={() => { onClose(); onLogin(); }} className="w-full rounded-full bg-amber-400 px-6 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500">
                LOGIN
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;

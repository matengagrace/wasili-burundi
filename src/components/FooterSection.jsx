
import { motion } from "framer-motion";
import { AtSign, Share2 } from "lucide-react";
import { logo,downloadGooglestore, downloadAppstore ,bgFooter} from "../assets/images";

const QUICK_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const CONTACT_NUMBERS = ["+257 79 138 138", "+257 79 137 137", "+257 79 135 135"];

const SOCIAL_LINKS = [
  // { label: "Facebook", href: "https://facebook.com", icon:"" },
  // { label: "Instagram", href: "https://instagram.com", icon:"" },
  { label: "Email", href: "mailto:info@wasiliburundi.com", icon: AtSign },
  { label: "Partager", href: "#", icon: Share2 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-PRIMARY-COLOR">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100 z-1"
        style={{ backgroundImage: `url(${bgFooter})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
        whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pointer-events-none z-99 absolute right-16 top-8 hidden rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-lg font-bold text-neutral-800 shadow-sm md:block"
      >
        24H/7
      </motion.div>

      <div className="relative z-90 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 md:px-16 lg:grid-cols-4">
       
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0}
          variants={fadeUp}
        >
          <div className="mb-4 flex items-center gap-2">
             <div className="flex h-20 w-20 items-center justify-center rounded-full  text-xl font-bold text-white">
           <img src={logo} alt="Logo"  className="w-full"/>
        </div>
         <h3 className="font-bold text-[#E2B40D] hidden lg:inline">Wasili Burundi</h3>
          </div>
          <p className="mb-5 text-md leading-relaxed text-gray-700">
            La société WASILI Burundi opère une plateforme en ligne de mise
            en relation des usagers de transport avec des véhicules de
            transport avec chauffeurs (VTC).
          </p>
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition hover:border-amber-400 hover:text-amber-600"
              >
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </a>
            ))}
          </div>
        </motion.div>

     
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1}
          variants={fadeUp}
        >
          <h3 className="mb-5 text-lg font-bold text-gray-900">
            Liens Rapides
          </h3>
          <ul className="flex flex-col gap-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-md text-gray-700 transition hover:text-amber-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.2}
          variants={fadeUp}
        >
          <h3 className="mb-5 text-lg font-bold text-gray-900">Contacts</h3>
          <ul className="flex flex-col gap-3">
            {CONTACT_NUMBERS.map((number) => (
              <li key={number}>
                <a
                  href={`tel:${number.replace(/\s+/g, "")}`}
                  className="text-md text-gray-700 transition hover:text-amber-600"
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.3}
          variants={fadeUp}
        >
          <h3 className="mb-5 text-lg font-bold text-gray-900">
            Télécharger notre App
          </h3>
          <div className="flex flex-col gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.mediabox.wasilirider"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <img
                src={downloadGooglestore}
                alt="Disponible sur Google Play"
                className="h-11 w-auto"
              />
            </a>
            <a
              href="https://apps.apple.com/us/app/wasili-rider/id6504937342"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:opacity-80"
            >
              <img
                src={downloadAppstore}
                alt="Télécharger sur l'App Store"
                className="h-11 w-auto"
              />
            </a>
          </div>
        </motion.div>
      </div>

     
      <div className="relative z-80">
        <div className="mx-auto border-t border-gray-200 flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-gray-700 sm:flex-row md:px-16">
          <p>&copy; {year} Wasili Burundi. All right reserved.</p>
          <p className="font-semibold uppercase tracking-wide">
            Developpe par{" "}
            <a
              href="https://mediabox.bi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 underline underline-offset-2 hover:text-amber-700"
            >
              MEDIABOX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;

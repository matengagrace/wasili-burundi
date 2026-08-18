
import { motion } from "framer-motion";

const PARTNERS_ROW_1 = [
  { name: "BCB", logo: "/images/partners/bcb-logo.webp" },
  { name: "INGOMAG", logo: "/images/partners/ingomag.svg" },
  { name: "ENAP", logo: "/images/partners/enap.svg" },
  { name: "MEDIABOX", logo: "/images/partners/mediabox.svg" },
  { name: "BRARUDI", logo: "/images/partners/brarudi.svg" },
  { name: "WFP", logo: "/images/partners/wfp.svg" },
  { name: "PLAN", logo: "/images/partners/plan.svg" },
  { name: "BGF", logo: "/images/partners/bgf.svg" },
];

const PARTNERS_ROW_2 = [
  { name: "FinBank", logo: "/images/partners/finbank.svg" },
  { name: "InterBank", logo: "/images/partners/interbank.svg" },
  { name: "CRDB", logo: "/images/partners/crdb.svg" },
  { name: "RUBEYA", logo: "/images/partners/rubeya.svg" },
  { name: "ZEBRA", logo: "/images/partners/zebra.svg" },
  { name: "KCB", logo: "/images/partners/kcb.svg" },
  { name: "ABANK", logo: "/images/partners/abank.svg" },
  { name: "DTB", logo: "/images/partners/dtb.svg" },
];

function MarqueeRow({ partners, direction = "left", duration = 28 }) {
  const items = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-50 to-transparent" />

      <motion.div
        className="flex w-max items-center gap-16"
        animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {items.map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="flex flex-none items-center justify-center opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-8 w-auto object-contain md:h-10"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-neutral-50 px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          Ils nous font confiance
        </motion.h2>

        <div className="flex flex-col divide-y divide-gray-200">
          <MarqueeRow partners={PARTNERS_ROW_1} direction="left" duration={30} />
          <MarqueeRow partners={PARTNERS_ROW_2} direction="right" duration={26} />
        </div>
      </div>
    </section>
  );
}

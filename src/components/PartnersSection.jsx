
import { motion } from "framer-motion";
import { siteTranslations } from "../data/translations";
import {clubLac,bhb,akeza,musumbaSteel,africaGame,bancobu,bcab,bcb,globalPeace,kira,finbank,unWomen,ingomag,kcb,brb,UN,eperticeFrance,socabu,crdb,brarudi,healthy,interbank,mirego,bgf,mediabox,jimbere,fruito,streetChild,wfp,zebra} from "../assets/partners/partners.js";

const PARTNERS_ROW_1 = [
  { name: "Club Lac", logo: clubLac },
  { name: "bhb", logo: bhb },
  { name: "akeza", logo: akeza },
  { name: "musumbaSteel", logo: musumbaSteel },
  { name: "africaGame", logo: africaGame },
  { name: "bancobu", logo: bancobu },
  { name: "bcab", logo: bcab },
  { name: "bcb", logo: bcb },
];

const PARTNERS_ROW_2 = [
  { name: "globalPeace", logo: globalPeace },
  { name: "kira", logo: kira },
  { name: "finbank", logo: finbank },
  { name: "unWomen", logo: unWomen },
  { name: "ingomag", logo: ingomag },
  { name: "kcb", logo: kcb },
  { name: "brb", logo: brb },
];
const PARTNERS_ROW_3 = [
  { name: "un", logo: UN },
  { name: "eperticeFrance", logo: eperticeFrance },
  { name: "socabu", logo: socabu },
  { name: "crdb", logo: crdb },
  { name: "brarudi", logo: brarudi },
  { name: "healthy", logo: healthy },
  { name: "interbank", logo: interbank },
  { name: "mirego", logo: mirego },
];
const PARTNERS_ROW_4 = [
  { name: "bgf", logo: bgf },
  { name: "mediabox", logo: mediabox },
  { name: "jimbere", logo: jimbere },
  { name: "fruito", logo: fruito },
  { name: "streetChild", logo: streetChild },
  { name: "wfp", logo: wfp },
  { name: "zebra", logo: zebra },
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

export default function PartnersSection({ language = "fr" }) {
  const title = siteTranslations[language]?.sectionTitles?.partners ?? siteTranslations.fr.sectionTitles.partners;

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
          {title}
        </motion.h2>

        <div className="flex flex-col divide-y divide-gray-200">
          <MarqueeRow partners={PARTNERS_ROW_1} direction="left" duration={30} />
          <MarqueeRow partners={PARTNERS_ROW_2} direction="right" duration={26} />
          <MarqueeRow partners={PARTNERS_ROW_3} direction="left" duration={30} />
          <MarqueeRow partners={PARTNERS_ROW_4} direction="right" duration={26} />
        </div>
      </div>
    </section>
  );
}

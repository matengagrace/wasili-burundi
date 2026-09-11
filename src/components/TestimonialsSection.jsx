
import { motion } from "framer-motion";
import { siteTranslations } from "../data/translations";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: index * 0.12, ease: "easeOut" },
  }),
};

export default function TestimonialsSection({ language = "fr" }) {
  const testimonials = siteTranslations[language]?.testimonials ?? siteTranslations.fr.testimonials;
  const title = siteTranslations[language]?.sectionTitles?.testimonials ?? siteTranslations.fr.sectionTitles.testimonials;
  return (
    <section className="bg-neutral-100 px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-1rem)] max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/2"
            >
              <div>
                <p className="text-sm leading-relaxed text-gray-700">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-neutral-200 text-sm font-semibold text-gray-700">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-bold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

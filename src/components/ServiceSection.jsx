import {
  Car,
  Building2,
  Package,
  CarFront,
  Plane,
  Users,
  ShoppingCart,
  Ambulance,
} from "lucide-react";
import { siteTranslations } from "../data/translations";

const SERVICE_ICONS = [Car, Building2, Package, CarFront, Plane, Users, ShoppingCart, Ambulance];

function ServiceSection({ language = "fr" }) {
  const services = siteTranslations[language]?.services ?? siteTranslations.fr.services;

  return (
    <section id="services" className="bg-[#EEEEEE] px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-1rem)] max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-BLACK-COLOR md:text-4xl">
          {siteTranslations[language]?.sectionTitles?.services ?? siteTranslations.fr.sectionTitles.services}
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[index] ?? Car;

            return (
              <article
                key={`${service.title}-${index}`}
                className="rounded-xl bg-neutral-50 p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg"
              >
                <Icon className="mb-4 h-7 w-7 text-[#E2B40D]" strokeWidth={2} />
                <h3 className="mb-2 text-base font-bold text-gray-900">{service.title}</h3>
                <p className="text-sm leading-relaxed text-BLACK-COLOR">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
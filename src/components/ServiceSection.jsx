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

const SERVICES = [
  {
    icon: Car,
    title: "Service au grand public",
    description:
      "Ce service est dédié aux personnes désireuses de courses ponctuelles d'un point A à un point B.",
  },
  {
    icon: Building2,
    title: "Wasili Corporate",
    description:
      "WASILI propose une offre « Corporate », dédiée spécialement aux entreprises prises dans l'étau de la complexité et des coûts indirects onéreux du transport de leurs staffs.",
  },
  {
    icon: Package,
    title: "Livraison",
    description:
      "Wasili vous assure la livraison de différents colis (courriers, repas, courses, cadeaux, et autres).",
  },
  {
    icon: CarFront,
    title: "Location de véhicules",
    description:
      "Pour vos événements, vos voyages touristiques ou votre séjour à Bujumbura, Wasili vous propose des solutions de location pensées pour vous simplifier la mobilité. Nos services s'adaptent à la durée et à la nature de vos déplacements, afin de vous offrir une expérience pratique, organisée et sereine.",
  },
  {
    icon: Plane,
    title: "Navette aéroport",
    description:
      "Nous vous accompagnons pour tous vos déplacements vers et depuis l'aéroport, quelle que soit l'heure de votre vol. Tôt le matin, tard dans la nuit ou à tout moment de la journée, notre service est conçu pour vous offrir ponctualité, sérénité et confort.",
  },
  {
    icon: Users,
    title: "Wasili safety school",
    description:
      "Avec Wasili, le transport scolaire allie sécurité, fiabilité et confort. Nos chauffeurs professionnels et nos véhicules suivis assurent des trajets ponctuels et sereins, offrant aux parents tranquillité d'esprit et aux enfants une expérience agréable et sécurisée. Contactez Wasili !",
  },
  {
    icon: ShoppingCart,
    title: "Wasili Chap-chap",
    description:
      "Une plateforme qui rapproche le commerce de son public, afin d'effectuer leurs achats plus rapidement et facilement.",
  },
  {
    icon: Ambulance,
    title: "Ambulance e-Hute",
    description:
      "Avec l'ambulance e-Hute, Wasili assure une prise en charge rapide et professionnelle, partout et à tout moment, pour vous et vos proches. La sécurité n'a jamais été aussi réactive.",
  },
];


function ServiceSection() {
  return (
   <section className="bg-[#EEEEEE] px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-8xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-BLACK-COLOR md:text-4xl">
          Nos services
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-xl bg-neutral-50 p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-lg"
            >
              <Icon className="mb-4 h-7 w-7 text-[#E2B40D]" strokeWidth={2} />
              <h3 className="mb-2 text-base font-bold text-gray-900">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-BLACK-COLOR ">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
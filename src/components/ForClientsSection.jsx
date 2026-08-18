import  { useState } from "react";
import { Users, Briefcase, Landmark, ChevronRight } from "lucide-react";
import { grandPublic,corporate,economie } from "../assets/images";


const CLIENT_TABS = [
  {
    id: "grand-public",
    label: "Grand public",
    icon: Users,
    heading: "Pour nos clients « Grand Public »",
    paragraphs: [
      "Wasili met à votre disposition une solution de transport simple et accessible, permettant de commander une voiture en quelques clics via l'application mobile.",
      "Nos clients bénéficient d'un service disponible à tout moment, de chauffeurs vérifiés, de trajets suivis en temps réel et d'un accompagnement axé sur la sécurité et le confort.",
    ],
    image: grandPublic,
    imageAlt: "Client Wasili commandant une course depuis son smartphone",
  },
  {
    id: "corporate",
    label: "Corporate",
    icon: Briefcase,
    heading: "Pour nos clients « Corporate », en plus des services Grand Public",
    paragraphs: [
      "En complément des services Grand Public, Wasili propose une solution de transport dédiée aux entreprises pour les déplacements professionnels de leurs collaborateurs.",
      "Nos services sont conçus pour optimiser la mobilité du personnel, assurer des trajets fiables et offrir un cadre professionnel adapté aux exigences des entreprises.",
    ],
    image: corporate,
    imageAlt: "Pour nos clients « Corporate », en plus des services Grand Public",
  },
  {
    id: "economie-nationale",
    label: "Economie nationale",
    icon: Landmark,
    heading: "Economie nationale et l’image du pays",
    paragraphs: [
      "Wasili contribue au développement de l’économie nationale en favorisant l’emploi local et en soutenant la professionnalisation du secteur du transport.",
      "À travers ses services, Wasili participe également à la modernisation de la mobilité urbaine et à l’amélioration de l’image du pays.",
    ],
    image: economie,
    imageAlt: "Economie nationale et l’image du pays",
  },
];

function ForClientsSection() {
  const [activeId, setActiveId] = useState(CLIENT_TABS[0].id);
  const active =
    CLIENT_TABS.find((tab) => tab.id === activeId) ?? CLIENT_TABS[0];

  return (
    <section className="bg-GRAY-WHITE-COLOR px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold text-center text-BLACK-COLOR md:text-4xl">
          Pour nos clients
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
         
          <div className="flex flex-col gap-4">
            {CLIENT_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left transition cursor-pointer ${
                    isActive
                      ? "bg-neutral-800 text-white"
                      : "bg-white text-BLACK-COLOR hover:bg-neutral-50"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${
                      isActive ? "bg-JAUNE-COLOR text-neutral-900" : "bg-neutral-200 text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="flex-1 text-lg font-bold leading-snug">
                    {tab.label}
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 flex-none transition ${
                      isActive ? "text-white" : "text-gray-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

      
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border-2 border-amber-400 bg-white md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {active.heading}
              </h3>
              {active.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-justify leading-relaxed text-gray-700"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative min-h-[280px] bg-amber-500 md:min-h-full">
              <img
                key={active.image}
                src={active.image}
                alt={active.imageAlt}
                width="80%"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForClientsSection;

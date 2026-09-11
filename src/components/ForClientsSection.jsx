import { useState } from "react";
import { Users, Briefcase, Landmark, ChevronRight } from "lucide-react";
import { grandPublic, corporate, economie } from "../assets/images";
import { siteTranslations } from "../data/translations";

function ForClientsSection({ language = "fr" }) {
  const tabs = siteTranslations[language]?.clients?.tabs ?? siteTranslations.fr.clients.tabs;
  const images = [grandPublic, corporate, economie];

  const CLIENT_TABS = [
    { id: "grand-public", label: tabs[0].label, icon: Users, heading: tabs[0].heading, paragraphs: tabs[0].paragraphs, image: images[0], imageAlt: tabs[0].heading },
    { id: "corporate", label: tabs[1].label, icon: Briefcase, heading: tabs[1].heading, paragraphs: tabs[1].paragraphs, image: images[1], imageAlt: tabs[1].heading },
    { id: "economie-nationale", label: tabs[2].label, icon: Landmark, heading: tabs[2].heading, paragraphs: tabs[2].paragraphs, image: images[2], imageAlt: tabs[2].heading },
  ];

  const [activeId, setActiveId] = useState(CLIENT_TABS[0].id);
  const active = CLIENT_TABS.find((tab) => tab.id === activeId) ?? CLIENT_TABS[0];

  return (
    <section className="bg-GRAY-WHITE-COLOR px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto w-[calc(100%-1rem)] max-w-7xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-BLACK-COLOR md:text-4xl">
          {siteTranslations[language]?.sectionTitles?.company ?? siteTranslations.fr.sectionTitles.company}
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
                  className={`flex cursor-pointer items-center gap-4 rounded-xl px-5 py-4 text-left transition ${
                    isActive ? "bg-neutral-800 text-white" : "bg-white text-BLACK-COLOR hover:bg-neutral-50"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 flex-none items-center justify-center rounded-full ${
                      isActive ? "bg-JAUNE-COLOR text-neutral-900" : "bg-neutral-200 text-gray-700"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="flex-1 text-lg font-bold leading-snug">{tab.label}</span>
                  <ChevronRight className={`h-5 w-5 flex-none transition ${isActive ? "text-white" : "text-gray-400"}`} />
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border-2 border-amber-400 bg-white md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">{active.heading}</h3>
              {active.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="relative min-h-[280px] bg-amber-500 md:min-h-full">
              <img key={active.image} src={active.image} alt={active.imageAlt} width="80%" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForClientsSection;

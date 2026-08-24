import { about } from "../assets/images";
import { siteTranslations } from "../data/translations";

function AboutSection({ language = "fr" }) {
  const t = siteTranslations[language]?.about ?? siteTranslations.fr.about;

  return (
    <section id="about" className="bg-PRIMARY-COLOR px-6 py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="h-full w-full overflow-hidden rounded-2xl shadow-sm">
          <img
            src={about}
            alt={(siteTranslations[language]?.ui ?? siteTranslations.fr.ui).aboutImageAlt}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-BLACK-COLOR md:text-4xl">
              {t.title}
            </h2>
            <div className="rounded-xl border-l-4 bg-BLACK-COLOR/10 px-6 py-5">
              <p className="text-base leading-relaxed text-BLACK-COLOR">
                {t.intro}
                <br />
                {t.intro2}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-bold text-BLACK-COLOR md:text-3xl">
              {t.missionTitle}
            </h3>
            <div className="rounded-xl border-l-4 border-JAUNE-COLOR bg-JAUNE-COLOR/10 px-6 py-5">
              <p className="text-base leading-relaxed text-BLACK-COLOR">{t.mission}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
import { about } from "../assets/images";
function AboutSection() {
  return (
    <section id="about" className="bg-PRIMARY-COLOR px-6 py-16  lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center justify-center gap-12 lg:grid-cols-2 lg:gap-16">
     
        <div className="overflow-hidden rounded-2xl shadow-sm w-full h-full">
          <img
            src={about}
            alt="Équipe Wasili réunie devant les bannières de l'entreprise"
            className="h-full w-full object-cover"
          />
        </div>

     
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-BLACK-COLOR md:text-4xl">
              À propos de nous
            </h2>
            <div className="rounded-xl border-l-4 bg-BLACK-COLOR/10 px-6 py-5">
              <p className="text-base leading-relaxed text-BLACK-COLOR">
                Wasili Burundi est une plateforme de mise en relation entre passagers et chauffeurs de véhicules de transport avec chauffeur (VTC). Présente au Burundi depuis 2019, Wasili facilite les déplacements urbains grâce à une solution numérique simple, rapide et accessible.
                <br />
                Grâce à son application mobile, Wasili permet aux utilisateurs de commander une voiture en toute sécurité et aux chauffeurs partenaires d’offrir leurs services de manière efficace.
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-bold text-BLACK-COLOR md:text-3xl">
              Notre mission
            </h3>
            <div className="rounded-xl border-l-4 border-JAUNE-COLOR bg-JAUNE-COLOR/10 px-6 py-5">
              <p className="text-base leading-relaxed text-BLACK-COLOR">
             Offrir un service de transport fiable, efficace, abordable, confortable, ponctuel et de qualité, en répondant aux besoins quotidiens de mobilité de nos clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
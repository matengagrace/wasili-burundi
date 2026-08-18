import { useEffect, useRef, useState } from "react";
import { team_dg, team_denis,team_reine,team_ulysse,team_auberthe, team_gianna, team_vanessa, team_no_photo } from "../assets/images";

const TEAM = [
  {
    name: "Raïssa Nahayo",
    role: "Directrice Générale",
    photo: team_dg,
  },
  {
    name: "Denis Nzisabira",
    role: "Responsable Administratif et Financier",
    photo: team_denis,
  },
  {
    name: "Marie Reine Badogomba",
    role: "Chargée de Marketing",
    photo: team_reine,
  },
  {
    name: "Ulysse Muhire",
    role: "Responsable du service Facturation",
    photo: team_ulysse,
  },
  {
    name: "Auberthe Inamahoro",
    role: "Agent du service facturation",
    photo: team_auberthe,
  },
  {
    name: "Gianna Chamilla Cubahiro",
    role: "Agent du service facturation",
    photo: team_gianna,
  },
  {
    name: "Alain Chabert Mugisha",
    role: "Agent du service facturation",
    photo: team_no_photo,
  },
  {
    name: "Audreille Muhoza",
    role: "Agent du service facturation",
    photo: team_no_photo,
  },
  {
    name: "Vanessa Kaneza",
    role: "Responsable du service support",
    photo: team_vanessa,
  },
  {
    name: "Michaëlla Erika Munezero",
    role: "Responsable du service support",
    photo: team_no_photo,
  },
  {
    name: "Marie Rose Ingabire",
    role: "Responsable du service support",
    photo: team_no_photo,
  },
];
function TeamSection() {
  const scrollRef = useRef(null);

  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;

    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    setProgress(el.scrollLeft / maxScroll);
  };

  useEffect(() => {
    updateProgress();

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const handleSlider = (e) => {
    const value = Number(e.target.value);

    setProgress(value);

    const el = scrollRef.current;

    const maxScroll = el.scrollWidth - el.clientWidth;

    el.scrollTo({
      left: value * maxScroll,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#EEEEEE] px-6 py-16 md:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-bold">
          Notre Équipe
        </h2>

        <div
          ref={scrollRef}
          onScroll={updateProgress}
          className="
          flex
          gap-6
          overflow-x-hidden
          scroll-smooth
          snap-x
          snap-mandatory
          scrollbar-hide
        "
        >
          {TEAM.map((member, index) => (
            <article
              key={index}
              className="
                snap-start
                flex-shrink-0
                w-full
                md:w-[calc(50%-12px)]
                lg:w-[calc(25%-18px)]
                overflow-hidden
                rounded-xl
                bg-white
                shadow-sm
                overflow-hidden
              "
            >
              <div className="aspect-[4/5] overflow-hidden border-b-4 border-amber-500">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold">
                  {member.name}
                </h3>

                <p className="mt-1 text-md text-gray-500">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <input
            type="range"
            min={0}
            max={1}
            step={0.001}
            value={progress}
            onChange={handleSlider}
            className="
              w-full
              max-w-md
              accent-amber-600
              cursor-pointer
            "
          />
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
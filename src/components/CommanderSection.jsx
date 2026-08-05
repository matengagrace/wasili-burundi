import { useState } from "react";
import { Car, Play } from "lucide-react";
import { commanderAppPoster ,commanderAppVideo} from "../assets/images";


function CommanderSection({ videoPosterSrc = commanderAppPoster, videoSrc = commanderAppVideo }) {

  const [isPlaying, setIsPlaying] = useState(false);

  return (
     <section className="bg-BLACK-COLOR px-6 py-16 md:px-16 lg:py-20">
          <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
   
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Commander une course sur l'application Wasili Rider
              </h2>
              <p className="mb-8 max-w-lg text-PRIMARY-COLOR text-lg">
               Voici comment procéder pour commander une course via l'application Wasili Rider
              </p>
              <button
                type="button"
                onClick={()=> window.open("https://play.google.com/store/apps/details?id=com.mediabox.wasilirider", "_blank")}
                className="inline-flex items-center gap-2 cursor-pointer rounded-lg border border-neutral-500 bg-neutral-700/60 px-5 py-3 text-lg font-medium text-white transition hover:bg-neutral-700"
              >
                <Car className="h-4 w-4" />
                Commander
              </button>
            </div>
    
            {/* Video preview */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-600">
              {isPlaying && videoSrc ? (
                <video
                  src={videoSrc}
                  controls
                  autoPlay
                  className="h-full w-full object-cover"
                />
              ) : (
                <>
                  <img
                    src={videoPosterSrc}
                    alt="Aperçu de la vidéo de présentation de l'application Wasili"
                    className="h-full w-full object-cover object-center opacity-80 blur-[1px]"
                  />
                  <button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    aria-label="Lire la vidéo"
                    className="group absolute inset-0 flex items-center justify-center"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/90 text-white transition group-hover:scale-105 group-hover:bg-white/10">
                      <Play className="ml-1 h-6 w-6" fill="currentColor" />
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
  )
}

export default CommanderSection
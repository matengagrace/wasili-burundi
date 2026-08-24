import { siteTranslations } from "../data/translations";

function Button({ language = "fr" }) {
  const label = siteTranslations[language]?.nav?.login ?? siteTranslations.fr.nav.login;
  return (
    <button className="rounded-full cursor-pointer bg-amber-400 px-6 py-2.5 text-sm font-bold text-gray-900 shadow-sm transition hover:bg-amber-500">
      {label}
    </button>
  );
}

export default Button;

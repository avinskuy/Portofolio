import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="glass rounded-full p-1 flex items-center text-xs font-medium">
      {["id", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative px-3 py-1 rounded-full uppercase transition-colors ${
            lang === l ? "text-white" : "text-mist hover:text-dim"
          }`}
        >
          {lang === l && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-white/15 rounded-full"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
          <span className="relative z-10">{l === "id" ? "ID" : "EN"}</span>
        </button>
      ))}
    </div>
  );
}

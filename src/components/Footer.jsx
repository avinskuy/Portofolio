import { PROFILE } from "../data/content";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 py-8 px-6 text-center">
      <p className="text-sm text-mist">
        © {new Date().getFullYear()} {PROFILE.name}. {t.footerRights}
      </p>
    </footer>
  );
}

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";
import LanguageToggle from "./ui/LanguageToggle";

export default function Navbar() {
  const { t } = useLang();
  const LINKS = [
    { label: t.navHome, href: "#home" },
    { label: t.navAbout, href: "#about" },
    { label: t.navPortfolio, href: "#portfolio" },
    { label: t.navContact, href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 5.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-40"
    >
      <nav className="glass mx-auto max-w-6xl mt-4 rounded-full px-4 md:px-8 py-3 flex items-center justify-between gap-3">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">Afiq.</a>

        <ul className="hidden sm:flex gap-6 md:gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="group relative text-sm text-mist hover:text-white transition-colors">
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <LanguageToggle />
      </nav>
    </motion.header>
  );
}


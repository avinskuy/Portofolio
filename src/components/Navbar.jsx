import { motion } from "framer-motion";
import { PROFILE } from "../data/content";

const LINKS = ["Home", "About", "Portfolio", "Contact"];
const HREFS = { Home: "#home", About: "#about", Portfolio: "#portfolio", Contact: "#contact" };

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 5.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-40"
    >
      <nav className="glass !rounded-none border-x-0 border-t-0 mx-auto max-w-6xl mt-4 rounded-full px-6 md:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">{PROFILE.logo}</a>
        <ul className="flex gap-4 md:gap-8">
          {LINKS.map((link) => (
            <li key={link}>
              <a href={HREFS[link]} className="group relative text-sm text-mist hover:text-white transition-colors hidden sm:block">
                {link}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

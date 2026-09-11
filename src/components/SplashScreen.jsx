import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Maximize2 } from "lucide-react";
import { PROFILE, SOCIALS } from "../data/content";
import { useLang } from "../context/LanguageContext";

const ICONS = { github: Github, linkedin: Linkedin, instagram: Instagram, twitter: Twitter };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.35, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function SplashScreen({ onDone }) {
  const { t } = useLang();

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center text-center">
        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {PROFILE.logo}
        </motion.h1>

        <motion.div variants={item} className="flex gap-4 mt-8 mb-6">
          {SOCIALS.map((s) => {
            const Icon = ICONS[s.icon];
            return (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                 className="glass rounded-full p-3 text-mist hover:text-white transition-colors">
                <Icon size={18} />
              </a>
            );
          })}
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg md:text-2xl text-dim font-light tracking-wide max-w-md">
          {t.splashWelcome}
        </motion.p>

        <motion.button
          variants={item}
          onClick={onDone}
          className="glass glass-hover rounded-full px-8 py-3 mt-10 flex items-center gap-2 text-sm text-dim hover:text-white">
          <Maximize2 size={16} /> {t.splashFullscreen}
        </motion.button>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-white/40"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 4, ease: "easeInOut" }}
      />
    </motion.div>
  );
        }
        

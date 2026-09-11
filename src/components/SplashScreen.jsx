import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, Maximize2 } from "lucide-react";
import { PROFILE, SOCIALS } from "../data/content";

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
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink px-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center text-center">
        {/* Logo teks */}
        <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          {PROFILE.logo}
        </motion.h1>

        {/* Ikon sosial bergaya mobile present */}
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

        {/* Teks utama dengan efek typing */}
        <TypeText text="Welcome to my Portfolio Website" className="text-lg md:text-2xl text-dim font-light tracking-wide" />

        {/* Tombol layar penuh */}
        <motion.button
          variants={item}
          onClick={onDone}
          className="glass glass-hover rounded-full px-8 py-3 mt-10 flex items-center gap-2 text-sm text-dim hover:text-white"
        >
          <Maximize2 size={16} /> Layar Penuh
        </motion.button>
      </motion.div>

      {/* Progress bar halus */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-white/40"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 4.5, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

function TypeText({ text, className }) {
  return (
    <span className={className}>
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.035, duration: 0.05 }}
        >
          {ch}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.9 }}
        className="text-white"
      >
        |
      </motion.span>
    </span>
  );
    }

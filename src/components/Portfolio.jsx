import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TABS, PROJECTS } from "../data/content";
import Reveal from "./ui/Reveal";
import GlassCard from "./ui/GlassCard";

export default function Portfolio() {
  const [active, setActive] = useState("Project");
  const filtered = PROJECTS.filter((p) => p.category === active);
  const { t } = useLang();
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Portfolio Showcase</h2>
          <p className="mt-3 text-mist text-sm md:text-base max-w-xl mx-auto">
            Kumpulan project, sertifikasi, dan teknologi yang saya kuasai selama berkarir di dunia pengembangan web.
          </p>
        </Reveal>
        
        <Reveal delay={0.15} className="flex justify-center gap-3 mt-10">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)}
              className={`relative rounded-full px-5 py-2 text-sm transition-colors ${
                active === tab ? "text-white" : "text-mist hover:text-dim"
              }`}>
              {active === tab && (
                <motion.span layoutId="tab-pill" className="absolute inset-0 glass rounded-full" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <GlassCard className="overflow-hidden h-full flex flex-col">
                  <div className="h-44 bg-gradient-to-br from-smoke via-coal to-ink border-b border-white/5 flex items-center justify-center">
                    <span className="text-white/10 text-sm tracking-widest uppercase">{p.category}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white font-semibold">{p.title}</h3>
                    <p className="text-mist text-sm mt-2 leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[11px] text-mist border border-white/10 rounded-full px-3 py-1">{t}</span>
                      ))}
                    </div>
                    <button className="mt-5 inline-flex items-center gap-2 text-sm text-dim hover:text-white transition-colors group">
                      {p.cta} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
            }
                

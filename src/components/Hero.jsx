import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROFILE } from "../data/content";
import Reveal from "./ui/Reveal";

const ROLES = ["Frontend", "Backend", "Fullstack"];

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  const rotX = useTransform(sy, [-0.5, 0.5], [10, -10]);
  const rotY = useTransform(sx, [-0.5, 0.5], [-10, 10]);
  const cardX = useTransform(sx, [-0.5, 0.5], [25, -25]);
  const cardY = useTransform(sy, [-0.5, 0.5], [20, -20]);

  const onMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section id="home" onMouseMove={onMouseMove}
      className="min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">

        <div>
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight text-glow">
              {"Frontend Developer".split(" ").map((w, i) => (
                <motion.span key={i} className="inline-block mr-3"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 5.4 + i * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                  {w}
                </motion.span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-dim font-medium">{PROFILE.name}</p>
            <p className="mt-4 text-mist text-sm md:text-base max-w-md leading-relaxed">{PROFILE.intro}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap gap-3 mt-8">
              {ROLES.map((role, i) => (
                <motion.button key={role}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 6 + i * 0.12 }}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass glass-hover rounded-full px-6 py-2.5 text-sm text-dim hover:text-white">
                  {role}
                </motion.button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div style={{ perspective: 1000 }} className="relative h-[380px] md:h-[460px] hidden md:block">
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY, x: cardX, y: cardY }}
            className="glass rounded-2xl absolute top-0 right-0 w-72 p-6">
            <p className="text-[10px] uppercase tracking-widest text-mist">ID Card</p>
            <h3 className="mt-2 text-white font-semibold">{PROFILE.name}</h3>
            <p className="text-sm text-mist mt-1">{PROFILE.role}</p>
            <div className="mt-5 h-px bg-white/10" />
            <div className="mt-4 flex justify-between text-[11px] text-mist">
              <span>ID: AFIQ-2024</span><span>Status: Active</span>
            </div>
          </motion.div>

          <motion.div
            style={{ rotateX: rotX, rotateY: rotY, x: cardX, y: cardY }}
            className="glass glass-hover rounded-2xl absolute bottom-0 left-0 w-64 overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-smoke to-coal flex items-center justify-center">
              <span className="text-6xl font-bold text-white/10">AF</span>
            </div>
            <div className="p-4">
              <p className="text-sm text-white font-medium">{PROFILE.name}</p>
              <p className="text-xs text-mist">{PROFILE.role}</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="glass rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 w-16 h-16 flex items-center justify-center text-white/40 text-xs">
            ⚛
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
              }

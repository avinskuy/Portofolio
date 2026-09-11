import { Send, User, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIALS, COMMENTS } from "../data/content";
import Reveal from "./ui/Reveal";
import GlassCard from "./ui/GlassCard";
import FloatingLabelInput from "./ui/FloatingLabelInput";

const ICONS = { github: "🐙", linkedin: "💼", instagram: "📸", twitter: "🐦" };

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Contact Me</h2>
          <p className="mt-3 text-mist text-sm">Mari berkolaborasi dan wujudkan ide bersama.</p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 mt-12">

          <Reveal>
            <GlassCard hover={false} className="p-8 h-full">
              <h3 className="text-xl font-semibold text-white">Hubungi Saya</h3>
              <p className="text-mist text-sm mt-2">Isi formulir di bawah dan saya akan membalas secepatnya.</p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <FloatingLabelInput label="Name" icon={<User size={16} />} />
                <FloatingLabelInput label="Email" type="email" icon={<Mail size={16} />} />
                <FloatingLabelInput label="Message" textarea icon={<MessageSquare size={16} />} />
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full glass glass-hover rounded-xl py-3 text-sm text-white flex items-center justify-center gap-2">
                  Send Message <Send size={15} />
                </motion.button>
              </form>

              <div className="flex gap-3 mt-6">
                {SOCIALS.map((s, i) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                    whileHover={{ scale: 1.25 }} whileTap={{ scale: 0.9 }}
                    className="glass rounded-full w-11 h-11 flex items-center justify-center text-lg"
                    title={s.label}>
                    {ICONS[s.icon]}
                  </motion.a>
                ))}
              </div>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.15}>
            <GlassCard hover={false} className="p-8 h-full">
              <h3 className="text-xl font-semibold text-white">Comments</h3>
              <p className="text-mist text-sm mt-2">Tinggalkan pesan dan kesan Anda di sini.</p>

              <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <FloatingLabelInput label="Your Name" icon={<User size={16} />} />
                <FloatingLabelInput label="Your Comment" textarea icon={<MessageSquare size={16} />} />
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="w-full glass glass-hover rounded-xl py-3 text-sm text-white">
                  Post Comment
                </motion.button>
              </form>

              <div className="mt-8 space-y-4 max-h-72 overflow-y-auto pr-2">
                {COMMENTS.map((c, i) => (
                  <motion.div key={c.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className="glass rounded-xl p-4 flex gap-3">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white shrink-0">
                      {c.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-white font-medium">{c.name}</span>
                        <span className="text-[11px] text-mist">{c.time}</span>
                      </div>
                      <p className="text-sm text-mist mt-1 leading-relaxed">{c.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

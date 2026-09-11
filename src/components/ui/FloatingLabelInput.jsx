import { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingLabelInput({ label, type = "text", textarea = false, icon }) {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  const common = {
    value,
    onChange: (e) => setValue(e.target.value),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className: "w-full bg-transparent text-dim text-sm outline-none pt-5 pb-2 px-4 peer",
    placeholder: " ",
  };

  return (
    <div className="relative">
      <div className="glass rounded-xl flex items-start gap-3 focus-within:border-white/30 transition-colors">
        <span className="pl-4 pt-4 text-mist">{icon}</span>
        <div className="flex-1 relative">
          {textarea ? <textarea rows={4} {...common} /> : <input type={type} {...common} />}
          <motion.label
            animate={{
              y: active ? 4 : 22,
              fontSize: active ? "0.7rem" : "0.85rem",
              color: active ? "#e5e5e5" : "#a3a3a3",
            }}
            className="absolute left-0 pointer-events-none origin-left"
          >
            {label}
          </motion.label>
        </div>
      </div>
    </div>
  );
              }

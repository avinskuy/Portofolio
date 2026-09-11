export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <div className={`glass rounded-2xl hover?"glass−hover":""{hover ? "glass-hover" : ""}hover?"glass−hover":""{className}`}>
      {children}
    </div>
  );
}

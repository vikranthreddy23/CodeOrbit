import { Link, useLocation } from "react-router-dom";

const styles = [
  { path: "/", label: "V1 · Orbit", desc: "Dark terminal" },
  { path: "/editorial", label: "V2 · Editorial", desc: "Serif magazine" },
  { path: "/bold", label: "V3 · Bold", desc: "Neo-brutalist" },
];

export const StyleSwitcher = ({ theme = "dark" }) => {
  const { pathname } = useLocation();

  const base =
    theme === "dark"
      ? "bg-black/80 border-white/15 text-white backdrop-blur-xl"
      : theme === "cream"
        ? "bg-white/80 border-black/15 text-black backdrop-blur-xl"
        : "bg-black text-white border-black";

  const activeCls =
    theme === "dark"
      ? "bg-white text-black"
      : theme === "cream"
        ? "bg-black text-white"
        : "bg-[#faff00] text-black";

  const inactiveCls =
    theme === "dark"
      ? "text-zinc-400 hover:text-white"
      : theme === "cream"
        ? "text-zinc-600 hover:text-black"
        : "text-white hover:text-[#faff00]";

  return (
    <div
      data-testid="style-switcher"
      className={`fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] border ${base} px-2 py-2 flex items-center gap-1 shadow-2xl`}
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <span className="px-2 text-[9px] tracking-[0.25em] uppercase opacity-60">
        Style
      </span>
      {styles.map((s) => {
        const active = pathname === s.path;
        return (
          <Link
            key={s.path}
            to={s.path}
            data-testid={`style-switch-${s.path.replace("/", "") || "root"}`}
            className={`px-3 py-1.5 text-[10px] tracking-[0.15em] uppercase font-semibold transition-colors ${
              active ? activeCls : inactiveCls
            }`}
            title={s.desc}
          >
            {s.label}
          </Link>
        );
      })}
    </div>
  );
};

export default StyleSwitcher;

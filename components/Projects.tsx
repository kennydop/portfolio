import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-carbon">
          <span className="font-mono text-sm tracking-widest text-safety-orange uppercase">
            04
          </span>{" "}
          QUESTS
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className="group relative bg-terminal-dark border border-carbon/20 p-6 transition-all duration-300 hover:border-safety-orange/40 rotating-border"
            >
              {/* Grid overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest text-safety-orange/60">
                    P_{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[8px] md:text-[10px] tracking-wider text-white/20 uppercase"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="font-mono text-sm md:text-base font-bold text-white/90 mb-2 group-hover:text-safety-orange transition-colors duration-300">
                  {project.name}
                </h3>

                <p className="text-xs text-white/40 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-mono text-[10px] tracking-widest text-safety-orange/60 transition-colors duration-300 hover:text-safety-orange"
                  >
                    See Runes →
                  </a>
                ) : (
                  <span className="font-mono text-[10px] tracking-widest text-white/15 uppercase">
                    CLASSIFIED
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

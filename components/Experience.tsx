import { EXPERIENCE } from "@/lib/constants";

export default function Experience() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-carbon">
          <span className="font-mono text-sm tracking-widest text-safety-orange uppercase">
            03
          </span>{" "}
          RAIDS COMPLETED
        </h2>

        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-carbon/10" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={exp.company}
                className="group relative flex gap-6 md:gap-8"
              >
                {/* Timeline dot */}
                <div className="relative z-10 mt-1.5 flex-shrink-0">
                  <div className="h-[15px] w-[15px] md:h-[19px] md:w-[19px] rounded-full border-2 border-carbon/20 bg-canvas transition-colors duration-300 group-hover:border-safety-orange group-hover:bg-safety-orange" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
                    <div>
                      <h3 className="font-mono text-sm md:text-base font-bold text-carbon group-hover:translate-x-0.5 transition-transform duration-300">
                        {exp.company}
                      </h3>
                      <p className="text-xs md:text-sm text-mid-grey">
                        {exp.role}
                      </p>
                    </div>
                    <span className="font-mono text-xs md:text-sm tracking-wider text-carbon/50 uppercase whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* <p className="mt-2 text-xs md:text-sm text-mid-grey leading-relaxed max-w-xl">
                    {exp.description}
                  </p> */}

                  {i === 0 && (
                    <span className="inline-block mt-2 font-mono text-[10px] tracking-widest text-safety-orange uppercase">
                      CURRENT
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

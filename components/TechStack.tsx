import { TECH_STACK, DOMAINS } from "@/lib/constants";

export default function TechStack() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-carbon">
          <span className="font-mono text-sm tracking-widest text-safety-orange uppercase">
            02
          </span>{" "}
          SPELLBOOK
        </h2>

        <div className="mt-12 space-y-4">
          {TECH_STACK.map((unit) => (
            <div
              key={unit.id}
              className="group border border-carbon/10 bg-canvas transition-colors duration-300 hover:border-carbon/30"
            >
              {/* Rack header */}
              <div className="flex items-center gap-4 border-b border-carbon/10 px-4 py-3 md:px-6">
                <span className="font-mono text-[10px] tracking-widest text-safety-orange">
                  {unit.id}
                </span>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase">
                  {unit.label}
                </span>
                <div className="ml-auto flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-carbon/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-carbon/10" />
                  <span className="h-1.5 w-1.5 rounded-full bg-carbon/10" />
                </div>
              </div>

              {/* Tech items */}
              <div className="flex flex-wrap gap-2 p-4 md:px-6">
                {unit.items.map((item) => (
                  <span
                    key={item}
                    className="cursor-default font-mono text-[10px] md:text-xs tracking-wider text-mid-grey px-3 py-1.5 border border-carbon/10 transition-colors duration-300 hover:border-safety-orange/40 hover:text-carbon"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

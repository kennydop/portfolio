import { PERSONAL } from "@/lib/constants";
import StatusIndicator from "./StatusIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter text-carbon">
              SOFTWARE
              <br />
              ENGINEER
            </h1>

            <p className="max-w-lg text-base md:text-lg text-mid-grey leading-relaxed">
              {PERSONAL.subtitle}
            </p>

            <div className="flex flex-wrap gap-6">
              <StatusIndicator label={PERSONAL.status} />
              <StatusIndicator label="LOAD" value={PERSONAL.load} />
              <StatusIndicator label="UPTIME" value={PERSONAL.uptime} />
            </div>

            <div className="font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-carbon/30">
              LAT: {PERSONAL.coordinates.lat} &nbsp; LNG:{" "}
              {PERSONAL.coordinates.lng}
            </div>
          </div>

          {/* Right - Profile placeholder */}
          <div className="relative w-full md:w-80 lg:w-96 aspect-square flex-shrink-0">
            <div className="absolute inset-0 border border-carbon/10 bg-canvas">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  viewBox="0 0 200 200"
                  className="w-32 h-32 text-carbon/10"
                  fill="currentColor"
                >
                  <circle cx="100" cy="80" r="40" />
                  <ellipse cx="100" cy="170" rx="60" ry="40" />
                </svg>
              </div>
              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-carbon/20" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-carbon/20" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-carbon/20" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-carbon/20" />
            </div>
            <div className="absolute -bottom-4 left-0 font-mono text-[10px] tracking-widest text-carbon/20 uppercase">
              PROFILE_CAPTURE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

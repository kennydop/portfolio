import { PERSONAL } from "@/lib/constants";
import StatusIndicator from "./StatusIndicator";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Left-half portrait layer */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-1/2 md:block">
        <Image
          src="/i_am_god.png"
          alt="Patrick Offei Danso, portrait"
          fill
          priority
          className="object-cover object-[32%_50%] opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-canvas/60" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-end px-6">
        <div className="max-w-3xl space-y-8">
          <h1 className="text-7xl md:text-9xl font-black leading-[1.2] lg:leading-[0.9] tracking-tighter text-carbon">
            PATRICK
            <br />
            <span className="text-7xl md:text-8xl font-black leading-[1.2] lg:leading-[0.9] tracking-tighter">
              OFFEI DANSO
            </span>
          </h1>

          <p className="max-w-lg text-base md:text-lg text-mid-grey leading-relaxed mt-4">
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
      </div>
    </section>
  );
}

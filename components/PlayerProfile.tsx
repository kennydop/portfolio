import { PERSONAL, PLAYER_PROFILE } from "@/lib/constants";

export default function PlayerProfile() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-carbon">
          <span className="font-mono text-sm tracking-widest text-safety-orange uppercase">
            01
          </span>{" "}
          PROFILE
        </h2>
        {/* Main card */}
        <div className="border border-carbon/20 bg-canvas p-8 md:p-12 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12">
            {/* Left side: profile + name + summary */}
            <div className="flex flex-col md:flex-row gap-8">
              {/* Profile image */}
              <div className="flex-shrink-0">
                <div className="w-40 h-52 border border-carbon/10 bg-carbon/[0.03] flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 200"
                    className="w-20 h-20 text-carbon/10"
                    fill="currentColor"
                  >
                    <circle cx="100" cy="80" r="40" />
                    <ellipse cx="100" cy="170" rx="60" ry="40" />
                  </svg>
                </div>
                <p className="font-mono text-[10px] tracking-widest text-carbon/30 uppercase mt-2 text-center">
                  PROFILE
                </p>
              </div>

              {/* Name + summary */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-carbon leading-[0.9]">
                  PATRICK
                  <br />
                  OFFEI DANSO
                </h2>
                <p className="font-mono text-sm text-mid-grey leading-relaxed max-w-md">
                  {PLAYER_PROFILE.summary}
                </p>
              </div>
            </div>

            {/* Right side: barcode + status card */}
            <div className="flex flex-col items-end gap-6">
              {/* Barcode */}
              <div className="text-right">
                <div className="flex gap-[2px] justify-end mb-1">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-carbon"
                      style={{
                        width: i % 3 === 0 ? "2px" : "1px",
                        height: "24px",
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/50 uppercase">
                  ID: {PLAYER_PROFILE.id}
                </span>
              </div>

              {/* Status card */}
              <div className="bg-terminal-dark text-white p-6 w-full max-w-xs">
                <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-3">
                  CURRENT_STATUS
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg font-bold tracking-wide">
                    {PERSONAL.status}
                  </span>
                  <span className="h-3 w-3 rounded-sm bg-safety-orange" />
                </div>
                <div className="space-y-1 font-mono text-xs text-white/50">
                  <p>LOAD: {PERSONAL.load}</p>
                  <p>UPTIME: {PERSONAL.uptime}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom detail row */}
          <div className="mt-12 pt-8 border-t border-carbon/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase block mb-2">
                  EDUCATION
                </span>
                <p className="text-sm font-medium text-carbon">
                  {PLAYER_PROFILE.education.degree}
                </p>
                <p className="text-xs text-mid-grey">
                  {PLAYER_PROFILE.education.institution}
                </p>
                {/* <p className="text-xs text-mid-grey">
                  GPA: {PLAYER_PROFILE.education.gpa}
                </p> */}
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase block mb-2">
                  LANGUAGES
                </span>
                {PLAYER_PROFILE.languages.map((lang) => (
                  <p key={lang} className="text-sm font-medium text-carbon">
                    {lang}
                  </p>
                ))}
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase block mb-2">
                  FOCUS
                </span>
                {PLAYER_PROFILE.focus.map((area) => (
                  <p key={area} className="text-sm font-medium text-carbon">
                    {area}
                  </p>
                ))}
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase block mb-2">
                  EXP
                </span>
                <p className="text-sm font-medium text-carbon">5+ Years</p>
                <p className="text-xs text-mid-grey">Software Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

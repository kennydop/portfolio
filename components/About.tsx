import { ABOUT } from "@/lib/constants";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-carbon">
          <span className="font-mono text-sm tracking-widest text-safety-orange uppercase">
            01
          </span>{" "}
          CHARACTER SHEET
        </h2>
        {/* Main card */}
        <div className="border border-carbon/20 bg-canvas p-8 md:p-12 mt-12">
          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            {/* Left side: profile + name */}
            {/* Profile image */}
            <div className="flex-shrink-0">
              <div className="relative w-40 h-52 border border-carbon/10 bg-carbon/[0.03] flex items-center justify-center">
                <Image
                  src="/profile.jpeg"
                  alt="Patrick Offei Danso"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-mono text-[10px] tracking-widest text-carbon/30 uppercase mt-2 lg:text-center">
                PROFILE
              </p>
            </div>

            <div>
              {/* Name + Barcode */}
              <div className="flex flex-col-reverse md:flex-row justify-between w-full gap-4">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-carbon leading-[1.2]">
                    PATRICK
                    <br />
                    <span className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.2] block">
                      OFFEI DANSO
                    </span>
                  </h2>
                </div>

                {/* Barcode */}
                <div className="text-left md:text-right mt-4 md:mt-0">
                  <div className="flex gap-[2px] justify-start md:justify-end mb-1">
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
                    ID: {ABOUT.id}
                  </span>
                </div>
              </div>
              <p className="font-mono text-sm text-mid-grey leading-relaxed mt-4">
                {ABOUT.summary}
              </p>
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
                  {ABOUT.education.degree}
                </p>
                <p className="text-xs text-mid-grey">
                  {ABOUT.education.institution}
                </p>
                {/* <p className="text-xs text-mid-grey">
                  GPA: {PLAYER_PROFILE.education.gpa}
                </p> */}
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase block mb-2">
                  LANGUAGES
                </span>
                {ABOUT.languages.map((lang) => (
                  <p key={lang} className="text-sm font-medium text-carbon">
                    {lang}
                  </p>
                ))}
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-carbon/40 uppercase block mb-2">
                  FOCUS
                </span>
                {ABOUT.focus.map((area) => (
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

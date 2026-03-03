"use client";

import { useState, type FormEvent } from "react";
import { sendEmail } from "@/app/actions/send-email";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const result = await sendEmail(data);
      if (result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left side — heading + description */}
          <div className="flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-widest text-carbon/20 uppercase mb-6">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-carbon leading-tight">
              SUMMON
              <br />
              ME
            </h2>
            <p className="mt-6 text-base md:text-lg text-carbon/50 leading-relaxed max-w-md">
              Have a project in mind or want to collaborate? Send me a message
              and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {/* Right side — form card */}
          <div className="border border-white/10 p-8 md:p-10 bg-carbon">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border-2 border-white/20 bg-canvas px-4 py-3 font-mono text-sm text-carbon outline-none transition-colors focus:border-safety-orange placeholder:text-carbon/30"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full border-2 border-white/20 bg-canvas px-4 py-3 font-mono text-sm text-carbon outline-none transition-colors focus:border-safety-orange placeholder:text-carbon/30"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase mb-2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full border-2 border-white/20 bg-canvas px-4 py-3 font-mono text-sm text-carbon outline-none transition-colors focus:border-safety-orange placeholder:text-carbon/30"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-widest text-white/40 uppercase mb-2">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full border-2 border-white/20 bg-canvas px-4 py-3 font-mono text-sm text-carbon outline-none transition-colors focus:border-safety-orange resize-none placeholder:text-carbon/30"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="cursor-pointer w-full border-2 border-safety-orange bg-safety-orange text-white font-mono text-xs tracking-widest uppercase py-4 transition-all duration-300 hover:bg-transparent hover:text-safety-orange disabled:opacity-50"
              >
                {status === "sending"
                  ? "SENDING..."
                  : status === "sent"
                    ? "MESSAGE SENT ✓"
                    : "SEND MESSAGE"}
              </button>

              {status === "error" && (
                <p className="font-mono text-[10px] tracking-widest text-red-400 uppercase">
                  ERROR: FAILED TO SEND — PLEASE TRY AGAIN
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

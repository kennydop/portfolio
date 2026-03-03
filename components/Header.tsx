"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/constants";

function NavLink({
  href,
  active,
  className,
  onClick,
  children,
}: {
  href: string;
  active: boolean;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const stateClass = active
    ? "text-carbon bg-carbon/12 border-carbon/25"
    : "text-mid-grey border-transparent";
  const combined = `${className} ${stateClass}`.trim();

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={combined} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={combined} onClick={onClick}>
      {children}
    </a>
  );
}

function useActiveSection(sectionIds: string[], enabled: boolean) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    let raf = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort(
              (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
            );

          if (visible[0]?.target?.id) setActive(visible[0].target.id);
        });
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        // Pick the section sitting in the "reading" band.
        rootMargin: "-30% 0px -55% 0px",
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [enabled, sectionIds]);

  return active;
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const sectionIds = useMemo(
    () =>
      NAV_ITEMS.filter((i) => i.href.startsWith("#")).map((i) =>
        i.href.replace(/^#/, ""),
      ),
    [],
  );
  const activeSection = useActiveSection(sectionIds, isHome);
  const defaultHomeSection = sectionIds[0] ?? null;

  const questItems = useMemo(() => {
    return NAV_ITEMS.map((item) => ({
      label: item.label.toUpperCase(),
      href: item.href,
    }));
  }, []);

  function resolveHref(href: string) {
    // On non-home pages, anchor links need to point back to homepage
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  }

  function isActive(href: string) {
    if (href.startsWith("/") && !href.startsWith("/#")) {
      return pathname.startsWith(href);
    }
    // Anchor links are "active" only on the homepage
    if (href.startsWith("#") && pathname === "/") {
      const id = href.replace(/^#/, "");
      if (!activeSection && defaultHomeSection) {
        return id === defaultHomeSection;
      }
      return activeSection === id;
    }
    return false;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-sm border-b border-carbon/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xs md:text-sm font-bold tracking-wider text-safety-orange font-funnel-display"
        >
          kennydop
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] whitespace-nowrap">
          <div className="text-carbon/40">QUEST_LOG:</div>
          <div className="flex items-center gap-2">
            {questItems.map((q, idx) => {
              const active = isActive(q.href);
              return (
                <span
                  key={`${q.href}-${q.label}`}
                  className="flex items-center gap-2"
                >
                  <NavLink
                    href={resolveHref(q.href)}
                    active={active}
                    className="rounded-sm border px-2 py-1 transition-colors duration-300 hover:bg-carbon/6 hover:text-carbon"
                  >
                    {active ? `[${q.label}]` : q.label}
                  </NavLink>
                  {idx < questItems.length - 1 ? (
                    <span className="text-carbon/20">→</span>
                  ) : null}
                </span>
              );
            })}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-mono text-xs uppercase tracking-widest text-carbon"
          aria-label="Toggle menu"
        >
          {menuOpen ? "[CLOSE]" : "[MENU]"}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-carbon/10 bg-canvas/95 backdrop-blur-sm px-6 py-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-carbon/40">
            QUEST_LOG
          </div>
          <div className="mt-3 space-y-2">
            {questItems.map((q) => {
              const active = isActive(q.href);
              return (
                <NavLink
                  key={`m-${q.href}-${q.label}`}
                  href={resolveHref(q.href)}
                  active={active}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-sm border px-2 py-1 font-mono text-xs uppercase tracking-[0.25em] transition-colors hover:bg-carbon/6 hover:text-carbon"
                >
                  {active ? `[${q.label}]` : q.label}
                </NavLink>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
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
  const activeClass = active ? "text-carbon" : "";
  const combined = `${className} ${activeClass}`;

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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
      return false; // can't determine scroll position server-side
    }
    return false;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-sm border-b border-carbon/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-xs md:text-sm font-bold tracking-wider uppercase text-carbon"
        >
          kennydop
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={resolveHref(item.href)}
              active={isActive(item.href)}
              className="font-mono text-[10px] uppercase tracking-[0.25em] text-mid-grey transition-colors duration-300 hover:text-carbon"
            >
              {item.label}
            </NavLink>
          ))}
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
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={resolveHref(item.href)}
              active={isActive(item.href)}
              onClick={() => setMenuOpen(false)}
              className="block py-2 font-mono text-xs uppercase tracking-[0.25em] text-mid-grey transition-colors hover:text-carbon"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

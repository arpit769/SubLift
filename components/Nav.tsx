"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { FORM_URL } from "@/lib/form";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/88 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-ink">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-ink text-white">
              <BarChart3 size={19} />
            </span>
            SubLift
          </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
          <Link href="/#how">How it works</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="#pricing" variant="ghost">Pricing</ButtonLink>
          <ButtonLink href={FORM_URL} target="_blank" rel="noreferrer">Apply now</ButtonLink>
        </div>
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-md bg-slate-100 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {mobileOpen ? (
        <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/96 px-4 py-4 backdrop-blur md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            <Link href="/#how" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              How it works
            </Link>
            <Link href="/#pricing" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              Pricing
            </Link>
            <Link href="/#faq" onClick={closeMobileMenu} className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100">
              FAQ
            </Link>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-ink px-5 text-sm font-semibold text-white shadow-soft transition hover:bg-black"
            >
              Apply now
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/jogos", label: "Jogos" },
  { href: "/aplicativos", label: "Aplicativos" },
  { href: "/beta", label: "Beta" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" }
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-aurum/30 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Principal">
        <Link href="/" className="text-lg font-semibold tracking-[0.3em] text-midnight">
          AURELYUM
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 md:hidden"
          aria-label="Alternar menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="h-0.5 w-6 rounded-full bg-midnight transition" />
          <span className="h-0.5 w-6 rounded-full bg-midnight transition" />
          <span className="h-0.5 w-6 rounded-full bg-midnight transition" />
        </button>
        <ul className="hidden gap-6 text-sm uppercase tracking-wider md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className="relative pb-1 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:bg-aurum after:transition-transform hover:after:scale-x-100"
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open ? (
        <div className="border-t border-aurum/30 bg-ivory px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm uppercase tracking-wider">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

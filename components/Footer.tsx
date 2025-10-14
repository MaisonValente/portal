import Link from "next/link";

const links = [
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://instagram.com", label: "Instagram" }
];

export function Footer() {
  return (
    <footer className="border-t border-aurum/30 bg-midnight py-10 text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-aurum">AURELYUM</p>
          <p className="mt-2 text-xs text-ivory/70">
            O portal oficial para experiências interativas da Aurelion.
          </p>
        </div>
        <div className="flex gap-4 text-xs uppercase tracking-wider">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-aurum">
              {link.label}
            </Link>
          ))}
        </div>
        <p className="text-xs text-ivory/60">© {new Date().getFullYear()} Aurelion Labs.</p>
      </div>
    </footer>
  );
}

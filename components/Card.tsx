import Link from "next/link";

export interface ItemCard {
  id: string;
  name: string;
  platform: string;
  description: string;
  link: string;
  status?: string;
  thumbnail?: string;
}

interface CardProps {
  item: ItemCard;
  ctaLabel?: string;
}

export function Card({ item, ctaLabel = "Detalhes" }: CardProps) {
  const isExternal = item.link.startsWith("http");
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-aurum/20 bg-ivory/80 p-6 shadow-glow transition hover:-translate-y-1 hover:shadow-lg">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-aurum/80">{item.platform}</p>
        <h3 className="mt-2 text-2xl font-semibold text-midnight">{item.name}</h3>
        {item.status ? (
          <p className="mt-1 text-xs uppercase tracking-wider text-aurum">{item.status}</p>
        ) : null}
        <p className="mt-4 text-sm text-midnight/70">{item.description}</p>
      </div>
      <Link
        href={item.link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="mt-6 inline-flex items-center justify-center rounded-full border border-aurum bg-midnight px-4 py-2 text-xs uppercase tracking-wider text-ivory transition group-hover:bg-aurum group-hover:text-midnight"
      >
        {ctaLabel}
      </Link>
    </article>
  );
}

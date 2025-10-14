import type { Metadata } from "next";
import apps from "@/data/apps.json";
import games from "@/data/games.json";
import type { ItemCard } from "@/components/Card";
import { Section } from "@/components/Section";
import Link from "next/link";

const betaItems = [...(apps as ItemCard[]), ...(games as ItemCard[])]
  .filter((item) => item.link.includes("testflight"));

export const metadata: Metadata = {
  title: "Beta | Aurelion Portal"
};

export default function BetaPage() {
  return (
    <Section
      title="Programa Beta"
      description="Acesse compilações experimentais pelo TestFlight e acompanhe convites exclusivos."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-aurum/20 bg-ivory/90 p-6">
          <h3 className="text-xl font-semibold text-midnight">TestFlight</h3>
          <ol className="mt-4 list-decimal space-y-3 pl-6 text-sm text-midnight/80">
            <li>Instale o app TestFlight pela App Store.</li>
            <li>Entre com o Apple ID utilizado para receber convites Aurelion.</li>
            <li>Abra o link do app abaixo e aceite o convite.</li>
            <li>Envie feedback diretamente no TestFlight para nossa equipe.</li>
          </ol>
        </div>
        <div className="rounded-3xl border border-aurum/20 bg-ivory/90 p-6">
          <h3 className="text-xl font-semibold text-midnight">Links Disponíveis</h3>
          <ul className="mt-4 space-y-3 text-sm">
            {betaItems.map((item) => (
              <li key={item.id} className="flex flex-col rounded-2xl border border-aurum/20 p-4">
                <span className="text-xs uppercase tracking-[0.3em] text-aurum/80">{item.platform}</span>
                <span className="text-base font-semibold text-midnight">{item.name}</span>
                <span className="text-xs uppercase tracking-wider text-aurum/70">{item.status}</span>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-fit rounded-full border border-aurum px-4 py-2 text-xs uppercase tracking-[0.3em] text-midnight transition hover:bg-aurum"
                >
                  Abrir Convite
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

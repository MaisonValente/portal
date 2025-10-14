import type { Metadata } from "next";
import games from "@/data/games.json";
import { Card, type ItemCard } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Jogos | Aurelion Portal"
};

export default function GamesPage() {
  const items = games as ItemCard[];
  return (
    <Section title="Jogos" description="Experiências interativas criadas com precisão artesanal.">
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((game) => (
          <Card key={game.id} item={game} ctaLabel="Acessar" />
        ))}
      </div>
    </Section>
  );
}

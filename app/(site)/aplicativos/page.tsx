import type { Metadata } from "next";
import apps from "@/data/apps.json";
import { Card, type ItemCard } from "@/components/Card";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Aplicativos | Aurelion Portal"
};

export default function AppsPage() {
  const items = apps as ItemCard[];
  return (
    <Section
      title="Aplicativos"
      description="Ferramentas de luxo que expandem as capacidades do seu ecossistema Aurelion."
    >
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((app) => (
          <Card key={app.id} item={app} ctaLabel="Abrir" />
        ))}
      </div>
    </Section>
  );
}

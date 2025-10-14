import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Sobre | Aurelion Portal"
};

export default function AboutPage() {
  return (
    <Section
      title="Aurelion"
      description="Somos o laboratório responsável por criar experiências digitais que ampliam a percepção humana."
    >
      <div className="space-y-6 text-base text-midnight/80">
        <p>
          O Portal Aurelion é a casa oficial para jogos, aplicativos e experiências emergentes
          desenvolvidos pelo coletivo Aurelion Labs. Projetamos produtos que combinam tecnologia,
          estética e consciência expandida para públicos que valorizam luxo e inovação.
        </p>
        <p>
          Aqui você encontra lançamentos, betas exclusivos e ferramentas que conectam dispositivos
          inteligentes a uma visão integrada de futuro. Nosso compromisso é garantir que cada
          interação seja precisa, segura e poética.
        </p>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { Section } from "@/components/Section";

const highlights = [
  {
    title: "Experiências Cinemáticas",
    description: "Jogos sensoriais com narrativa viva e feedback háptico refinado."
  },
  {
    title: "Apps Inteligentes",
    description: "Ferramentas que acompanham a sua consciência aumentada em qualquer dispositivo."
  },
  {
    title: "Beta Exclusivo",
    description: "Acesso antecipado às fronteiras da interação humano-máquina."
  }
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-midnight text-ivory">
        <div className="absolute inset-0 bg-gradient-to-br from-aurum/20 via-transparent to-midnight" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-28 pt-32 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.4em] text-aurum">Aurelion Labs</p>
            <h1 className="mt-6 font-display text-5xl leading-tight md:text-6xl">
              Experimente o futuro da consciência interativa.
            </h1>
            <p className="mt-6 max-w-xl text-sm text-ivory/70">
              Um portal luxuoso para descobrir jogos e aplicativos visionários. Projetado para
              mentes que buscam sofisticação, tecnologia e transcendência em cada toque.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/jogos"
                className="inline-flex items-center justify-center rounded-full border border-aurum bg-aurum px-6 py-3 text-xs uppercase tracking-[0.4em] text-midnight transition hover:bg-transparent hover:text-ivory"
              >
                Ver Jogos
              </Link>
              <Link
                href="/beta"
                className="inline-flex items-center justify-center rounded-full border border-aurum px-6 py-3 text-xs uppercase tracking-[0.4em] text-aurum transition hover:bg-aurum hover:text-midnight"
              >
                Entrar no Beta
              </Link>
            </div>
          </div>
          <div className="max-w-sm rounded-[3rem] border border-aurum/30 bg-ivory/10 p-8 text-sm text-ivory/70 backdrop-blur">
            <p className="text-aurum">Coleção Aurelion</p>
            <p className="mt-3">
              Curadoria de experiências multissensoriais que combinam arte, ciência e luxo.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-aurum/70">Disponível em iOS e Android</p>
          </div>
        </div>
      </section>
      <Section
        title="Luxo Sensorial em Cada Detalhe"
        description="Nossas experiências são projetadas para serem tão refinadas quanto funcionais."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-aurum/20 bg-white/50 p-6 shadow-glow">
              <h3 className="text-xl font-semibold text-midnight">{item.title}</h3>
              <p className="mt-3 text-sm text-midnight/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

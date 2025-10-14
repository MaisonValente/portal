import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
}

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8 max-w-2xl">
        {title ? (
          <h2 className="text-3xl font-semibold tracking-wide text-midnight md:text-4xl">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="mt-4 text-base text-midnight/70">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

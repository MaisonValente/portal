"use client";

import { FormEvent, useState } from "react";
import type { Metadata } from "next";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Contato | Aurelion Portal"
};

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  email: "",
  message: ""
};

export default function ContactPage() {
  const [values, setValues] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!values.name.trim()) nextErrors.name = "Informe seu nome";
    if (!values.email.trim()) {
      nextErrors.email = "Informe um e-mail";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "E-mail inválido";
    }
    if (!values.message.trim()) nextErrors.message = "Escreva uma mensagem";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setValues(initialState);
  };

  return (
    <Section
      title="Contato"
      description="Envie uma mensagem para nossa equipe de curadoria. Retornaremos assim que possível."
    >
      <form onSubmit={handleSubmit} className="mx-auto flex max-w-2xl flex-col gap-6 rounded-3xl border border-aurum/20 bg-ivory/90 p-8">
        <label className="flex flex-col gap-2 text-sm text-midnight/70">
          Nome
          <input
            type="text"
            value={values.name}
            onChange={(event) => {
              setSubmitted(false);
              setErrors((prev) => ({ ...prev, name: "" }));
              setValues((prev) => ({ ...prev, name: event.target.value }));
            }}
            className="rounded-full border border-aurum/30 bg-white/70 px-4 py-3 focus:outline-none focus:ring focus:ring-aurum/40"
            required
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <span className="text-xs text-red-500">{errors.name}</span> : null}
        </label>
        <label className="flex flex-col gap-2 text-sm text-midnight/70">
          E-mail
          <input
            type="email"
            value={values.email}
            onChange={(event) => {
              setSubmitted(false);
              setErrors((prev) => ({ ...prev, email: "" }));
              setValues((prev) => ({ ...prev, email: event.target.value }));
            }}
            className="rounded-full border border-aurum/30 bg-white/70 px-4 py-3 focus:outline-none focus:ring focus:ring-aurum/40"
            required
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <span className="text-xs text-red-500">{errors.email}</span> : null}
        </label>
        <label className="flex flex-col gap-2 text-sm text-midnight/70">
          Mensagem
          <textarea
            value={values.message}
            onChange={(event) => {
              setSubmitted(false);
              setErrors((prev) => ({ ...prev, message: "" }));
              setValues((prev) => ({ ...prev, message: event.target.value }));
            }}
            className="rounded-3xl border border-aurum/30 bg-white/70 px-4 py-3 focus:outline-none focus:ring focus:ring-aurum/40"
            rows={5}
            required
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? <span className="text-xs text-red-500">{errors.message}</span> : null}
        </label>
        <button
          type="submit"
          className="self-start rounded-full border border-aurum bg-midnight px-6 py-3 text-xs uppercase tracking-[0.4em] text-ivory transition hover:bg-aurum hover:text-midnight"
        >
          Enviar mensagem
        </button>
        {submitted ? (
          <p className="text-xs text-aurum">
            Recebemos sua mensagem. Entraremos em contato em breve.
          </p>
        ) : null}
      </form>
    </Section>
  );
}

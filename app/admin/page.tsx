import { createHash } from "crypto";
import type { Metadata } from "next";
import { AdminClient } from "@/components/AdminClient";
import { Section } from "@/components/Section";

const ADMIN_KEY = process.env.ADMIN_KEY ?? "";

const hashAdminKey = createHash("sha256").update(ADMIN_KEY).digest("hex");

export const metadata: Metadata = {
  title: "Admin | Aurelion Portal"
};

export default function AdminPage() {
  if (!ADMIN_KEY) {
    return (
      <Section title="Admin">
        <p className="text-sm text-red-500">
          Defina uma variável de ambiente ADMIN_KEY para habilitar o painel administrativo.
        </p>
      </Section>
    );
  }

  return (
    <Section title="Admin">
      <AdminClient expectedHash={hashAdminKey} />
    </Section>
  );
}

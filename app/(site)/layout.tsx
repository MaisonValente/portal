import { ReactNode } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <ParticleBackground />
      {children}
    </div>
  );
}

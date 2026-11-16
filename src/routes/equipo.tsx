import { createFileRoute } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/equipo")({ component: Equipo });

const STEPS = [
  "Un administrador genera la invitación.",
  "El código se asocia a quien vende.",
  "Esa persona crea su cuenta.",
  "La cuenta queda autorizada.",
  "Entra a Radar System.",
];

function Equipo() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-14">
        <p className="text-xs font-medium uppercase tracking-widest text-signal">Equipo comercial</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-bone">
          Acceso del equipo.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">
          Entra con el código de invitación de <Mark />. Cada quien ve solo los negocios que captura.
        </p>

        <ol className="mt-12 max-w-xl">
          {STEPS.map((step, i) => (
            <li key={step} className="flex gap-5 border-t border-line py-5">
              <span className="font-display text-2xl text-signal">0{i + 1}</span>
              <span className="pt-1 text-bone">{step}</span>
            </li>
          ))}
        </ol>

        <div className="mt-10 max-w-xl border border-line p-6">
          <a
            href="https://radar.datable.com.mx/login"
            className="inline-flex h-11 items-center bg-signal px-5 text-sm font-medium text-void hover:bg-bone"
          >
            Entrar
          </a>
          <p className="mt-4 text-sm text-mute">
            El acceso se puede revocar. El primer negocio cargado se queda con quien lo cargó.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}

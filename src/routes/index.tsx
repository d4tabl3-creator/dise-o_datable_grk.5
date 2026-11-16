import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { RadarInstrument } from "@/components/radar-instrument";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/")({ component: Home });

const TICKER = ["Dªtªblɛ", "Ecosistema digital", "Stores", "Radar Solution", "Sin inventario", "A la medida"];

function Home() {
  const [beat, setBeat] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setBeat((n) => (n + 1) % 1000), 900);
    return () => window.clearInterval(id);
  }, []);

  return (
    <SiteShell>
      <main>
        <section className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-8 px-5 pb-8 pt-8 md:grid-cols-[1.15fr_0.85fr] md:pt-4">
          <div className="pointer-events-none absolute inset-x-0 top-2 flex justify-center md:hidden" aria-hidden="true">
            <div className="w-[78vw] max-w-sm opacity-90">
              <RadarInstrument />
            </div>
          </div>
          <div className="relative z-10">
            <p className="text-xs font-medium uppercase tracking-widest text-signal">
              Señal en vivo · {String(beat).padStart(3, "0")}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] text-bone drop-shadow-[0_0_18px_rgba(10,10,10,0.9)] md:text-7xl">
              El ecosistema que te da el poder de hacer negocios con el mundo digital.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-mute">
              No necesitas ser experto en tecnología. Necesitas saber reconocer una oportunidad.
            </p>
          </div>
          <div className="hidden justify-center md:flex md:justify-end">
            <RadarInstrument />
          </div>
        </section>

        <div className="overflow-hidden border-y border-line bg-void/80 py-4">
          <div className="lab-marquee">
            {[0, 1].map((copy) => (
              <p key={copy} className="flex gap-10 text-sm tracking-widest text-bone">
                {TICKER.map((item) => (
                  <span key={`${copy}-${item}`} className="flex items-center gap-10">
                    {item === "Dªtªblɛ" ? <Mark /> : <span className="uppercase">{item}</span>}
                    <span className="text-signal">+</span>
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <section className="mx-auto grid max-w-6xl gap-4 px-5 py-10 md:grid-cols-2">
          <article className="relative overflow-hidden border border-line bg-void/70 p-8">
            <div className="lab-scan" aria-hidden="true" />
            <p className="relative text-xs font-medium uppercase tracking-widest text-mute">Stores</p>
            <h2 className="relative mt-4 font-display text-4xl text-bone">Crea tu negocio digital.</h2>
            <p className="relative mt-4 max-w-md text-mute">
              Crea una tienda, desarrolla tu propia marca y vende sin comprar inventario. <Mark /> conecta catálogo, producción y envío para que tú te concentres en vender.
            </p>
            <p className="relative mt-6 text-sm text-bone">Empieza en 0 pesos al mes.</p>
            <Link
              to="/stores"
              className="relative mt-8 inline-flex h-11 items-center bg-signal px-5 text-sm font-medium text-void transition-transform duration-150 ease-out hover:bg-bone active:scale-[0.96]"
            >
              Crear mi tienda
            </Link>
          </article>
          <article className="relative overflow-hidden border border-signal/40 bg-panel p-8">
            <div className="lab-scan" aria-hidden="true" />
            <p className="relative text-xs font-medium uppercase tracking-widest text-signal">Radar Solution</p>
            <h2 className="relative mt-4 font-display text-4xl leading-tight text-bone">El Radar de tu empresa.</h2>
            <p className="relative mt-4 max-w-md text-mute">
              No es un software genérico. Se construye alrededor de tu proceso comercial, para que el vendedor hable, decida y cierre.
            </p>
            <p className="relative mt-6 text-sm text-mute">El precio se define con tu proceso.</p>
            <Link
              to="/radar"
              className="relative mt-8 inline-flex h-11 items-center border border-bone px-5 text-sm font-medium text-bone transition-transform duration-150 ease-out hover:bg-bone hover:text-void active:scale-[0.96]"
            >
              Conocer más
            </Link>
          </article>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-mute">
              Equipo comercial. Si ya tienes código, entra aquí.
            </p>
            <Link
              to="/equipo"
              className="inline-flex h-11 items-center justify-center border border-line px-5 text-sm font-medium text-bone hover:border-signal hover:text-signal"
            >
              Entrar
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}

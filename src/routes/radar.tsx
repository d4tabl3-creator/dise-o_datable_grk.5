import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Mark } from "@/components/mark";
import { RadarInstrument } from "@/components/radar-instrument";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/radar")({ component: Radar });

const VERBS = ["Equipa", "Prepara", "Automatiza", "Facilita", "Asiste", "Documenta", "Ejecuta"];
const PROBLEM = [
  "Descubre el negocio",
  "Visita una página",
  "Responde una campaña",
  "Es identificada como prospecto",
  "Recibe información",
  "Habla con un vendedor",
  "Pide una propuesta",
  "Desaparece",
  "Abandona el proceso",
  "O se convierte en cliente",
];
const HUMAN = ["Conversación", "Empatía", "Escucha", "Criterio", "Negociación", "Confianza", "Lectura del cliente", "Decisiones", "Cierre"];
const SYSTEM = ["Información", "Preparación", "Documentación", "Propuestas", "Cotizaciones", "Mensajes", "Expedientes", "Seguimiento", "Materiales", "Protocolos", "Recordatorios", "Automatizaciones"];
const FILE = [
  "Información del prospecto",
  "Información del negocio",
  "Contexto",
  "Primer contacto",
  "Mensaje recomendado",
  "Landing",
  "Propuesta",
  "Cotización",
  "Documentación",
  "Contrato",
  "Materiales",
  "Seguimiento",
  "Próximos pasos",
];
const CASES: { name: string; steps: string[] }[] = [
  { name: "Dªtªblɛ", steps: ["Landing", "Propuesta", "Cotización", "Contrato", "Seguimiento"] },
  { name: "Concesionaria", steps: ["Vehículo", "Cotización", "Financiamiento", "Promociones", "Documentación", "Crédito", "Seguimiento"] },
  { name: "Cadena hotelera", steps: ["Cliente", "Requerimiento", "Disponibilidad", "Propuesta", "Paquete", "Contrato", "Seguimiento"] },
];
const TASKS = [
  "Llenar información",
  "Preparar documentos",
  "Solicitar materiales",
  "Redactar correos",
  "Preparar cotizaciones",
  "Preparar propuestas",
  "Dar seguimiento",
  "Organizar expedientes",
  "Localizar información",
  "Preparar documentación",
];
const SUPPORT = ["Glosario", "Información del producto", "Guías rápidas", "Materiales", "Respuestas a objeciones", "Información comercial", "Protocolos", "Recursos de apoyo", "Materiales de consulta"];
const PERSON = ["Conversación", "Empatía", "Negociación", "Criterio", "Decisión"];
const RADAR_DOES = ["Preparación", "Documentación", "Información", "Seguimiento", "Propuestas", "Cotizaciones", "Protocolos", "Expediente", "Automatización"];
const FLOW = [
  ["entrada", "Prospecto registrado"],
  ["radar", "Radar prepara información"],
  ["radar", "Radar genera expediente"],
  ["radar", "Radar prepara mensaje"],
  ["radar", "Radar prepara landing"],
  ["radar", "Radar prepara propuesta"],
  ["radar", "Radar prepara cotización"],
  ["radar", "Radar prepara documentación"],
  ["humano", "El vendedor revisa"],
  ["humano", "Enviar"],
  ["radar", "Radar registra y continúa el flujo"],
];
const KINDS = ["Presenciales", "Remotas", "Telefónicas", "Digitales", "B2B", "B2C", "Ventas complejas", "Servicios", "Productos"];
const HUNT = [
  "Negocio identificado",
  "Análisis",
  "Oportunidad detectada",
  "Mensaje personalizado",
  "Landing / demostración",
  "Primer contacto",
  "Respuesta",
  "Siguiente acción",
  "Propuesta",
  "Cotización",
  "Cierre",
];
const PRICE = ["Tamaño", "Complejidad", "Número de procesos", "Integraciones", "Herramientas", "Documentación", "Automatizaciones", "Estructura del equipo", "Necesidades específicas"];

function usePulse(length: number, ms: number) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((n) => (n + 1) % length), ms);
    return () => window.clearInterval(id);
  }, [length, ms]);

  return { index, live: true };
}

function Radar() {
  const verb = usePulse(VERBS.length, 1100);
  const problem = usePulse(PROBLEM.length, 900);
  const file = usePulse(FILE.length, 700);
  const flow = usePulse(FLOW.length, 800);
  const hunt = usePulse(HUNT.length, 800);
  const sample = usePulse(CASES.length, 2400);
  const [sent, setSent] = useState(false);
  const shown = file.live ? file.index + 1 : FILE.length;
  const currentCase = CASES[sample.index];

  return (
    <SiteShell>
      <main>
        <section className="stage">
          <div className="stage-radar" aria-hidden="true">
            <RadarInstrument />
          </div>
          <div className="stage-copy">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-bone">Radar Solution</p>
            <div className="verb-reel mt-4" aria-hidden="true">
              <div className="verb-track">
                {VERBS.map((word) => (
                  <p key={word} className="stage-verb">{word}</p>
                ))}
                <p className="stage-verb">{VERBS[0]}</p>
              </div>
            </div>
            <h1 className="mt-4 font-display text-3xl leading-tight text-bone md:text-5xl">
              El Radar de tu empresa.
            </h1>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="max-w-3xl font-display text-3xl leading-tight text-bone md:text-5xl">
              Te construimos el sistema que convierte tu propio proceso comercial en una operación digital asistida, medible y repetible.
            </p>
            <p className="mt-6 max-w-2xl text-lg text-mute">
              Analizamos tu proceso comercial real y convertimos las partes repetitivas, documentales y operativas en un flujo digital. No vendemos un software genérico: construimos el Radar de tu empresa.
            </p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="max-w-4xl font-display text-3xl leading-tight text-bone md:text-5xl">
              “Cada minuto que tu vendedor pasa armando expedientes es un minuto que no está vendiendo.”
            </p>
            <p className="mt-6 max-w-xl text-lg text-mute">
              Radar convierte esos protocolos en herramientas. Y deja visible lo que sucede con cada oportunidad.
            </p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">El problema</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-bone md:text-4xl">
                ¿Qué pasa con todas las personas que muestran interés en tu negocio pero nunca llegan a convertirse en clientes?
              </h2>
            </div>
            <div>
            <div className="dial mx-auto mb-8" aria-hidden="true">
              {PROBLEM.map((item, i) => (
                <span
                  key={item}
                  className={problem.live && i === problem.index ? "dial-dot on" : "dial-dot"}
                  style={{ transform: `rotate(${i * 36}deg) translateY(-118px)` }}
                />
              ))}
              <p className="dial-label">{PROBLEM[problem.live ? problem.index : 0]}</p>
            </div>
            <ol className="space-y-2">
              {PROBLEM.map((item, i) => {
                const on = problem.live ? i === problem.index : true;
                return (
                  <li key={item} className={on ? "flex gap-4 text-signal" : "flex gap-4 text-mute"}>
                    <span className="w-8 font-display text-sm">{String(i + 1).padStart(2, "0")}</span>
                    <span className={on ? "font-display text-2xl" : "text-base"}>{item}</span>
                  </li>
                );
              })}
            </ol>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl md:grid-cols-2">
            <article className="border-b border-line px-5 py-12 md:border-b-0 md:border-r">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-mute">CRM</p>
              <h2 className="mt-4 font-display text-3xl text-bone">El CRM administra al cliente.</h2>
              <p className="mt-4 text-mute">
                Los sistemas tradicionales pueden registrar y administrar información comercial, e incluso automatizarla.
              </p>
            </article>
            <article className="bg-panel px-5 py-12">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Radar</p>
              <h2 className="mt-4 font-display text-3xl text-bone">Radar trabaja la oportunidad antes de que sea cliente.</h2>
              <p className="mt-4 text-mute">
                Su orientación es distinta: usa la información del proceso para ayudar al vendedor a ejecutar ese proceso.
              </p>
            </article>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Principio de diseño</p>
            <p className="mt-4 max-w-4xl font-display text-3xl leading-tight text-bone md:text-5xl">
              “No le pedimos información al vendedor para alimentar el sistema. Utilizamos la información del proceso para alimentar al vendedor.”
            </p>
            <p className="mt-6 max-w-xl text-mute">
              El vendedor no tiene que convertir su día en una tarea administrativa. El sistema absorbe el trabajo operativo para que él pueda concentrarse en vender.
            </p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone">Tu vendedor pone la cara. Radar hace el trabajo detrás.</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-human">Humano = relación</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {HUMAN.map((item) => (
                    <span key={item} className="rounded-full border border-human/50 px-4 py-2 text-sm text-bone">{item}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-mute">Todo lo que requiere criterio, lectura del otro y decisión sigue siendo de la persona.</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Radar = operación</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {SYSTEM.map((item) => (
                    <span key={item} className="rounded-full border border-signal/40 px-4 py-2 text-sm text-bone">{item}</span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-mute">
                  Radar no olvida un paso, no pierde un documento y tiene lista la siguiente herramienta. El vendedor sigue siendo quien habla, decide y cierra.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">El expediente del prospecto</p>
              <h2 className="mt-4 font-display text-4xl leading-tight text-bone">Desde que se captura la oportunidad, se arma una estructura operativa.</h2>
              <p className="mt-4 text-mute">
                No es “gestión de clientes”: es un expediente vivo que Radar construye alrededor de cada oportunidad, según el negocio.
              </p>
              <div className="relative mt-8">
                <svg viewBox="0 0 120 120" className="gauge" aria-hidden="true">
                  <circle className="gauge-track" cx="60" cy="60" r="52" />
                  <circle
                    className="gauge-value"
                    cx="60"
                    cy="60"
                    r="52"
                    style={{ strokeDasharray: `${(shown / FILE.length) * 327} 327` }}
                  />
                </svg>
                <p className="absolute inset-0 grid place-items-center font-display text-5xl text-signal">
                  {String(shown).padStart(2, "0")}
                </p>
              </div>
              <p className="text-sm text-mute">Construido por el sistema, no capturado por el vendedor.</p>
            </div>
            <ol className="space-y-2">
              {FILE.map((item, i) => (
                <li key={item} className={i < shown ? "border-b border-line py-2 text-bone" : "border-b border-line py-2 text-mute/40"}>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line bg-panel">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Ejemplo de implementación</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-bone">Lo que hoy ya genera nuestro propio Radar.</h2>
            <p className="mt-4 max-w-2xl text-mute">No es el límite de Radar: es una implementación concreta. Cada empresa tiene un proceso distinto.</p>
            <p key={currentCase.name} className="word-rise mt-10 font-display text-3xl text-signal">
              {currentCase.name === "Dªtªblɛ" ? <Mark /> : currentCase.name}
            </p>
            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              {currentCase.steps.map((item, i) => (
                <li key={item} className="border border-line px-4 py-3 text-bone">
                  <span className="mr-3 text-signal">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-4xl font-display text-4xl leading-tight text-bone">Los protocolos son necesarios. Perder horas ejecutándolos no.</h2>
            <p className="mt-4 max-w-2xl text-mute">
              Cada tarea parece pequeña. Multiplicada por decenas de vendedores y cientos de prospectos se convierte en una carga operativa enorme.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {TASKS.map((item, i) => (
                <li key={item} className={i === flow.index % TASKS.length ? "rounded-full bg-signal px-4 py-2 text-sm text-void" : "rounded-full border border-line px-4 py-2 text-sm text-bone"}>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-bone">Radar transforma esas tareas en acciones del sistema.</p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-3xl font-display text-4xl leading-tight text-bone">Un vendedor nuevo no debería necesitar semanas para aprender a utilizar tu operación.</h2>
            <p className="mt-4 max-w-2xl text-mute">De forma opcional, el sistema puede poner a la mano lo que normalmente vive en la cabeza de alguien más.</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {SUPPORT.map((item) => (
                <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-bone">{item}</li>
              ))}
            </ul>
            <p className="mt-6 max-w-2xl text-sm text-mute">
              Estos contenidos no son obligatorios para que el proceso principal funcione. Radar no es una plataforma de capacitación: son herramientas adicionales de apoyo al vendedor.
            </p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">La gran idea</p>
            <h2 className="mt-4 max-w-4xl font-display text-4xl leading-tight text-bone md:text-5xl">
              ¿Cuánto de tu proceso comercial necesita realmente una persona?
            </h2>
            <p className="mt-3 font-display text-2xl text-signal">¿Y cuánto podría hacer un sistema?</p>
            <div className="mt-10 grid items-start gap-6 md:grid-cols-[1fr_auto_1fr]">
              <div className="border border-human/40 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-human">Persona</p>
                <ul className="mt-4 space-y-2">
                  {PERSON.map((item) => (
                    <li key={item} className="text-bone">{item}</li>
                  ))}
                </ul>
              </div>
              <p className="hidden self-center font-display text-4xl text-signal md:block" aria-hidden="true">→</p>
              <div className="border border-signal/40 p-6">
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Radar</p>
                <ul className="mt-4 space-y-2">
                  {RADAR_DOES.map((item) => (
                    <li key={item} className="text-bone">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-10 font-display text-4xl text-signal">Dale a tu equipo espacio para vender.</p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Automatización</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-bone">El vendedor opera con acciones simples.</h2>
            <p className="mt-4 max-w-xl text-mute">El resto ocurre en el sistema, en orden, sin depender de la memoria de nadie.</p>
            <ol className="mt-8 max-w-xl space-y-2">
              {FLOW.map(([who, item], i) => {
                const on = flow.live ? i === flow.index : true;
                return (
                  <li key={item} className={on ? "flex items-center gap-4 border border-signal px-4 py-3 text-bone" : "flex items-center gap-4 border border-line px-4 py-3 text-mute"}>
                    <span className={who === "humano" ? "text-xs uppercase tracking-widest text-human" : "text-xs uppercase tracking-widest text-signal"}>{who}</span>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <h2 className="max-w-4xl font-display text-4xl leading-tight text-bone">
              Tu proceso comercial no tiene que adaptarse al software.
            </h2>
            <p className="mt-3 font-display text-2xl text-signal">Diseñamos Radar alrededor de tu proceso.</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {KINDS.map((item) => (
                <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-bone">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Prospección · ejemplo <Mark /></p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-bone">De información pública disponible a una oportunidad comercial.</h2>
            <p className="mt-4 max-w-2xl text-mute">
              Partimos de información de negocios que está disponible públicamente y construimos, a partir de ella, una oportunidad con su expediente y sus materiales.
            </p>
            <p className="mt-8 font-display text-5xl text-signal">{String(hunt.index + 1).padStart(2, "0")}</p>
            <p className="font-display text-2xl text-bone">{HUNT[hunt.index]}</p>
          </div>
        </section>

        <section className="border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Implementación</p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-bone">Implementación primero. Después, participación por resultado.</h2>
              <p className="mt-4 text-mute">Pago inicial por diseñar y construir el Radar específico de tu empresa.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {PRICE.map((item) => (
                  <li key={item} className="rounded-full border border-line px-4 py-2 text-sm text-bone">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-signal">Participación por resultado</p>
              <p className="mt-4 text-bone">Sin mensualidad tradicional por usuario como modelo principal.</p>
              <p className="mt-4 text-mute">Si Radar genera una venta, <Mark /> participa.</p>
              <p className="mt-3 text-mute">Si la oportunidad se pierde antes del punto acordado de conversión, no hay comisión por esa venta.</p>
              <p className="mt-3 text-mute">El porcentaje se define por industria, ticket promedio, margen y proceso; no es un número universal.</p>
              <p className="mt-3 text-sm text-mute">Este modelo empresarial es independiente del modelo de la red de vendedores <Mark />.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-line">
          <form
            className="mx-auto max-w-xl px-5 py-16"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h2 className="font-display text-4xl leading-tight text-bone">¿Quieres el Radar de tu empresa?</h2>
            <p className="mt-3 text-mute">Empezamos por entender tu proceso comercial real.</p>
            <label className="mt-8 block text-sm text-bone" htmlFor="empresa">Empresa</label>
            <input id="empresa" name="empresa" required className="mt-2 h-11 w-full border border-line bg-void px-3 text-bone outline-none focus:border-signal" />
            <label className="mt-4 block text-sm text-bone" htmlFor="proceso">Qué vende tu equipo</label>
            <textarea id="proceso" name="proceso" required rows={4} className="mt-2 w-full border border-line bg-void px-3 py-3 text-bone outline-none focus:border-signal" />
            <button type="submit" className="mt-5 inline-flex h-11 items-center bg-signal px-5 text-sm font-medium text-void active:scale-[0.96]">
              Cuéntanos qué necesitas
            </button>
            {sent ? <p className="mt-4 text-sm text-bone">Quedó escrito en esta pantalla. Desde aquí se revisa el proceso.</p> : null}
          </form>
        </section>
      </main>
    </SiteShell>
  );
}

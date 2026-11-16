import { createFileRoute } from "@tanstack/react-router";
import { Mark } from "@/components/mark";
import { SiteShell } from "@/components/site-shell";

export const Route = createFileRoute("/stores")({ component: Stores });

const STEPS = [
  ["Creas el producto", "Diseñas y publicas sin inventario previo."],
  ["Defines el precio", "Tú decides el margen de cada artículo."],
  ["Vendes", "La tienda queda en línea, con enlace propio."],
  ["Se cobra", "El pago se procesa dentro del sistema."],
  ["Se produce", "La producción bajo demanda se activa sola."],
  ["Se envía", "El pedido sale hacia tu cliente."],
];

function Stores() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-6xl px-5 pb-20 pt-14">
        <p className="text-xs font-medium uppercase tracking-widest text-signal">Stores</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-tight text-bone">
          Vende en línea sin comprar inventario.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-mute">
          Tú vendes. <Mark /> y sus sistemas hacen el trabajo operativo. Tú operas productos, precios, pedidos y clientes. La producción y el envío salen de la planta conectada.
        </p>

        <ol className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map(([title, body], i) => (
            <li key={title} className="bg-void p-6">
              <p className="text-xs font-medium text-signal">0{i + 1}</p>
              <h2 className="mt-3 font-display text-2xl text-bone">{title}</h2>
              <p className="mt-2 text-sm text-mute">{body}</p>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 font-display text-3xl text-bone">Dos formas de entrar.</h2>
        <p className="mt-3 max-w-xl text-mute">
          Puedes empezar sin mensualidad. <Mark /> se queda con el 20 por ciento de tu ganancia, nunca de tus costos. Cuando quieras el 100 por ciento de tus ventas, pasas a la mensualidad y la comisión desaparece.
        </p>

        <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
          <article className="bg-void p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-mute">Empieza</p>
            <p className="mt-4 font-display text-5xl text-bone">0 pesos</p>
            <p className="text-sm text-mute">al mes</p>
            <p className="mt-6 text-bone">20 por ciento de tu ganancia. Nunca de tus costos.</p>
          </article>
          <article className="bg-signal p-8 text-void">
            <p className="text-xs font-medium uppercase tracking-widest">Pro</p>
            <p className="mt-4 font-display text-5xl">499 pesos</p>
            <p className="text-sm">al mes</p>
            <p className="mt-6">0 por ciento de comisión por venta. El total de las ventas es tuyo.</p>
          </article>
        </div>
      </main>
    </SiteShell>
  );
}

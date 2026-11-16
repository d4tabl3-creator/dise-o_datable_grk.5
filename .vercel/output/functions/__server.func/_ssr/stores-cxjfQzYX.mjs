import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as Mark } from "./site-shell-D6fZBOqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stores-cxjfQzYX.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	["Creas el producto", "Diseñas y publicas sin inventario previo."],
	["Defines el precio", "Tú decides el margen de cada artículo."],
	["Vendes", "La tienda queda en línea, con enlace propio."],
	["Se cobra", "El pago se procesa dentro del sistema."],
	["Se produce", "La producción bajo demanda se activa sola."],
	["Se envía", "El pedido sale hacia tu cliente."]
];
function Stores() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 pb-20 pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-signal",
				children: "Stores"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-3xl font-display text-5xl leading-tight text-bone",
				children: "Vende en línea sin comprar inventario."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-xl text-lg text-mute",
				children: [
					"Tú vendes. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
					" y sus sistemas hacen el trabajo operativo. Tú operas productos, precios, pedidos y clientes. La producción y el envío salen de la planta conectada."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-14 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3",
				children: STEPS.map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "bg-void p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs font-medium text-signal",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-2xl text-bone",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: body
						})
					]
				}, title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-16 font-display text-3xl text-bone",
				children: "Dos formas de entrar."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-xl text-mute",
				children: [
					"Puedes empezar sin mensualidad. ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
					" se queda con el 20 por ciento de tu ganancia, nunca de tus costos. Cuando quieras el 100 por ciento de tus ventas, pasas a la mensualidad y la comisión desaparece."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-px border border-line bg-line md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-void p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-mute",
							children: "Empieza"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-5xl text-bone",
							children: "0 pesos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-mute",
							children: "al mes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-bone",
							children: "20 por ciento de tu ganancia. Nunca de tus costos."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-signal p-8 text-void",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest",
							children: "Pro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-5xl",
							children: "499 pesos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: "al mes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6",
							children: "0 por ciento de comisión por venta. El total de las ventas es tuyo."
						})
					]
				})]
			})
		]
	}) });
}
//#endregion
export { Stores as component };

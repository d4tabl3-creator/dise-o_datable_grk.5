import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as Mark } from "./site-shell-D6fZBOqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/radar-DiFAZBqG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HUMAN = [
	"Conversación",
	"Criterio",
	"Negociación",
	"Cierre"
];
var SYSTEM = [
	"Expediente",
	"Mensaje",
	"Landing",
	"Propuesta",
	"Cotización",
	"Seguimiento"
];
var EXAMPLE = [
	"Landing en vivo",
	"Manual de uso",
	"Propuesta",
	"Cotización",
	"Contrato borrador",
	"Texto de primer contacto"
];
function Radar() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-14 pt-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-signal",
					children: "Radar Solution"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-3xl font-display text-5xl leading-tight text-bone",
					children: "El sistema de ventas de tu empresa, armado a su proceso."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg text-mute",
					children: "Analizamos cómo vende tu equipo y construimos el Radar de esa operación. No es el mismo programa para todas las empresas."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-line px-5 py-10 md:border-b-0 md:border-r",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-bone",
							children: "La persona"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: "Lo que exige criterio se queda en quien vende."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: HUMAN.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line pb-3 text-bone",
								children: item
							}, item))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-bone",
							children: "El sistema"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: "Lo repetible lo prepara Radar, en orden."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3",
							children: SYSTEM.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line pb-3 text-bone",
								children: item
							}, item))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line bg-panel",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-widest text-signal",
						children: "Cómo lo usamos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl font-display text-4xl text-bone",
						children: "Un ejemplo, no tu cotización."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 max-w-2xl text-mute",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}), " corre su propio Radar para vender páginas a negocios. La página se entrega y se usa un mes sin pago. Si el negocio se la queda, con panel y el dominio del primer año, son 10,900 pesos. Si esa no la quiere y se va, la página sola y fija son 4,900 pesos. El IVA, si pide factura, va aparte. Tu empresa no compra ese precio: compra el Radar de su propio proceso."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
						children: EXAMPLE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "border border-line px-4 py-4 text-sm text-bone",
							children: item
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-2xl text-sm text-mute",
						children: "En ese ejemplo el contrato es un borrador. En tu empresa las piezas cambian según lo que vendas."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-bone",
					children: "Cómo se cobra"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium uppercase tracking-widest text-signal",
						children: "Implementación"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-mute",
						children: "Un pago inicial por diseñar y construir el Radar de tu empresa. Depende del tamaño, de los procesos y del equipo. No hay una tarifa única."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-medium uppercase tracking-widest text-signal",
						children: "Participación por resultado"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-mute",
						children: [
							"Si Radar genera una venta, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
							" participa. Si la oportunidad se pierde antes del punto acordado, no hay comisión por esa venta. El porcentaje se define por industria y por margen. No es un número universal."
						]
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "mt-14 max-w-xl border border-line p-6",
					onSubmit: (e) => {
						e.preventDefault();
						setSent(true);
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl text-bone",
							children: "Cuéntanos tu proceso"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mute",
							children: "Empresa, qué vende el equipo y cómo cierran hoy."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-6 block text-sm text-bone",
							htmlFor: "empresa",
							children: "Empresa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "empresa",
							name: "empresa",
							required: true,
							className: "mt-2 h-11 w-full border border-line bg-void px-3 text-bone outline-none focus:border-signal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-4 block text-sm text-bone",
							htmlFor: "proceso",
							children: "Qué vende tu equipo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "proceso",
							name: "proceso",
							required: true,
							rows: 4,
							className: "mt-2 w-full border border-line bg-void px-3 py-3 text-bone outline-none focus:border-signal"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "mt-5 inline-flex h-11 items-center bg-signal px-5 text-sm font-medium text-void hover:bg-bone",
							children: "Enviar"
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-bone",
							children: "Quedó escrito en esta pantalla. Desde aquí se revisa el proceso y se arma el Radar de esa empresa."
						}) : null
					]
				})
			]
		})
	] }) });
}
//#endregion
export { Radar as component };

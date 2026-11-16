import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as Mark } from "./site-shell-D6fZBOqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B7kEFDr4.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-widest text-signal",
					children: "Ecosistema digital"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 max-w-4xl font-display text-5xl leading-tight text-bone md:text-6xl",
					children: "El ecosistema que te da el poder de hacer negocios con el mundo digital."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xl text-lg text-mute",
					children: "No necesitas ser experto en tecnología. Necesitas saber reconocer una oportunidad."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border-b border-line px-5 py-12 md:border-b-0 md:border-r md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-mute",
							children: "Stores"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl text-bone",
							children: "Crea tu negocio digital."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 max-w-md text-mute",
							children: [
								"Crea una tienda, desarrolla tu propia marca y vende sin comprar inventario. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
								" conecta catálogo, producción y envío para que tú te concentres en vender."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-bone",
							children: "Empieza en 0 pesos al mes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/stores",
							className: "mt-8 inline-flex h-11 items-center bg-signal px-5 text-sm font-medium text-void hover:bg-bone",
							children: "Crear mi tienda"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "bg-panel px-5 py-12 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-widest text-signal",
							children: "Radar Solution"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl text-bone",
							children: "El Radar de tu área de ventas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-mute",
							children: "Para empresas que quieren convertir su proceso comercial en una operación. Se arma a la medida, porque cada equipo vende distinto."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-mute",
							children: "El precio se define con tu proceso."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/radar",
							className: "mt-8 inline-flex h-11 items-center border border-bone px-5 text-sm font-medium text-bone hover:bg-bone hover:text-void",
							children: "Conocer más"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-t border-line",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-mute",
					children: "Equipo comercial. Si ya tienes código, entra aquí."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/equipo",
					className: "inline-flex h-11 items-center justify-center border border-line px-5 text-sm font-medium text-bone hover:border-signal hover:text-signal",
					children: "Entrar"
				})]
			})
		})
	] }) });
}
//#endregion
export { Home as component };

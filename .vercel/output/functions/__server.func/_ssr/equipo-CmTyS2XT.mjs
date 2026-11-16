import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as SiteShell, t as Mark } from "./site-shell-D6fZBOqn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipo-CmTyS2XT.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	"Un administrador genera la invitación.",
	"El código se asocia a quien vende.",
	"Esa persona crea su cuenta.",
	"La cuenta queda autorizada.",
	"Entra a Radar System."
];
function Equipo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-5 pb-20 pt-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-widest text-signal",
				children: "Equipo comercial"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 max-w-3xl font-display text-5xl leading-tight text-bone",
				children: "Acceso del equipo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 max-w-xl text-lg text-mute",
				children: [
					"Entra con el código de invitación de ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {}),
					". Cada quien ve solo los negocios que captura."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 max-w-xl",
				children: STEPS.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-5 border-t border-line py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl text-signal",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pt-1 text-bone",
						children: step
					})]
				}, step))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 max-w-xl border border-line p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://radar.datable.com.mx/login",
					className: "inline-flex h-11 items-center bg-signal px-5 text-sm font-medium text-void hover:bg-bone",
					children: "Entrar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-mute",
					children: "El acceso se puede revocar. El primer negocio cargado se queda con quien lo cargó."
				})]
			})
		]
	}) });
}
//#endregion
export { Equipo as component };

import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-D6fZBOqn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Mark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `font-mark ${className}`,
		children: "Dªtªblɛ"
	});
}
var LINKS = [
	{
		to: "/stores",
		label: "Stores"
	},
	{
		to: "/radar",
		label: "Radar Solution"
	},
	{
		to: "/equipo",
		label: "Equipo comercial"
	}
];
function SiteShell({ children }) {
	const path = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-svh bg-void text-bone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-20 border-b border-line bg-void/95 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "text-2xl text-bone",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "hidden items-center gap-7 md:flex",
							children: LINKS.map((item) => {
								const active = path === item.to;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: item.to,
									className: active ? "text-sm font-medium text-signal" : "text-sm font-medium text-bone hover:text-signal",
									children: item.label
								}, item.to);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-11 w-11 place-items-center border border-line md:hidden",
							"aria-expanded": open,
							"aria-label": open ? "Cerrar menú" : "Abrir menú",
							onClick: () => setOpen((v) => !v),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex w-4 flex-col gap-1.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-full bg-bone" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-full bg-bone" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-full bg-bone" })
								]
							})
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "flex flex-col border-t border-line px-5 py-2 md:hidden",
					children: LINKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						className: "border-b border-line py-4 text-base text-bone last:border-b-0",
						onClick: () => setOpen(false),
						children: item.label
					}, item.to))
				}) : null]
			}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-2xl text-bone",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-sm text-sm text-mute",
						children: "El ecosistema para hacer negocios con el mundo digital."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-6 gap-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/stores",
								className: "text-bone hover:text-signal",
								children: "Stores"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/radar",
								className: "text-bone hover:text-signal",
								children: "Radar Solution"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/equipo",
								className: "text-bone hover:text-signal",
								children: "Equipo comercial"
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "border-t border-line px-5 py-4 text-center text-xs text-mute",
					children: ["2026 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {})]
				})]
			})
		]
	});
}
//#endregion
export { SiteShell as n, Mark as t };

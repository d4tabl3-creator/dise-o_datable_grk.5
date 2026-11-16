import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Mark } from "@/components/mark";

const LINKS = [
  { to: "/stores", label: "Stores" },
  { to: "/radar", label: "Radar Solution" },
  { to: "/equipo", label: "Equipo comercial" },
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-svh bg-void text-bone">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="lab-grid absolute inset-0" />
        <div className="lab-beam" />
      </div>
      <div className="relative z-10">
      <header className="sticky top-0 z-20 border-b border-line bg-void/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="text-2xl text-bone" onClick={() => setOpen(false)}>
            <Mark />
          </Link>
          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((item) => {
              const active = path === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={
                    active
                      ? "text-sm font-medium text-signal"
                      : "text-sm font-medium text-bone hover:text-signal"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-line md:hidden"
            aria-expanded={open}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex w-4 flex-col gap-1.5">
              <span className="h-px w-full bg-bone" />
              <span className="h-px w-full bg-bone" />
              <span className="h-px w-full bg-bone" />
            </span>
          </button>
        </div>
        {open ? (
          <nav className="flex flex-col border-t border-line px-5 py-2 md:hidden">
            {LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="border-b border-line py-4 text-base text-bone last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      {children}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl text-bone">
              <Mark />
            </p>
            <p className="mt-2 max-w-sm text-sm text-mute">
              El ecosistema para hacer negocios con el mundo digital.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/stores" className="text-bone hover:text-signal">Stores</Link>
            <Link to="/radar" className="text-bone hover:text-signal">Radar Solution</Link>
            <Link to="/equipo" className="text-bone hover:text-signal">Equipo comercial</Link>
          </div>
        </div>
        <p className="border-t border-line px-5 py-4 text-center text-xs text-mute">
          2026 <Mark />
        </p>
      </footer>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#/paper", label: "Papers & works" },
  { href: "#goals", label: "Goals" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="glass border-x-0 border-t-0">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
            <a href="#home" className="font-display text-sm font-bold tracking-wide sm:text-base">
              AMRUTH<span className="text-accent">.</span>
            </a>
            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 lg:inline-flex"
            >
              Get in touch
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-border p-2 text-foreground lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
          {open ? (
            <ul className="grid gap-1 px-5 pb-4 lg:hidden">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div
          aria-hidden
          className="h-0.5 origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-150"
          style={{ transform: `scaleX(${progress / 100})` }}
        />
      </header>

      <a
        href="#home"
        aria-label="Scroll to top"
        className={cn(
          "glass fixed bottom-6 right-5 z-50 grid size-11 place-items-center rounded-full text-accent transition-all",
          progress > 8 ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp size={18} />
      </a>
    </>
  );
}

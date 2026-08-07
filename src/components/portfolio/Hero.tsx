import { ArrowRight, GraduationCap, Mail, MapPin, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const particles = [
  { top: "12%", left: "8%", size: 6, delay: 0 },
  { top: "22%", left: "82%", size: 10, delay: 2 },
  { top: "58%", left: "16%", size: 8, delay: 4 },
  { top: "70%", left: "72%", size: 5, delay: 1 },
  { top: "38%", left: "48%", size: 4, delay: 3 },
  { top: "80%", left: "38%", size: 7, delay: 5 },
  { top: "16%", left: "62%", size: 5, delay: 6 },
];

export function Hero() {
  return (
    <section id="home" className="hero-bg relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {particles.map((p, i) => (
          <span
            key={i}
            className="animate-drift absolute rounded-full bg-accent/70 blur-[1px]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
        <div className="animate-glow absolute -top-24 left-1/2 size-[26rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.15fr_0.85fr]">
        <div className="text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles size={13} /> First-year ECE @ RIT Kottayam
          </span>
          <h1 className="mt-6 font-display text-[2.6rem] font-bold uppercase leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            <span className="block text-foreground">AMRUTH</span>
            <span className="block gradient-text">SANKAR R P</span>
          </h1>
          <p className="mt-5 text-xs font-medium uppercase tracking-[0.18em] text-accent sm:text-sm">
            ECE Student · Future VLSI Engineer · Technology Enthusiast
          </p>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0">
            I&apos;m a first-year engineering student with a strong academic record, hands-on
            leadership experience through NSS, and a genuine passion for innovation. My focus is
            simple: learn deeply, plan every step, and build electronics that make everyday life
            easier.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="#about"
              className="glow-shadow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              About Me <ArrowRight size={16} />
            </a>
            <a
              href="#education"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/70"
            >
              <GraduationCap size={16} /> Education
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} /> Contact
            </a>
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-6 md:justify-start">
            {[
              { value: "97.25%", label: "Higher Secondary" },
              { value: "3870", label: "KEAM Rank" },
              { value: "2 yrs", label: "NSS Unit Leader" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-y-4 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-accent/20 blur-2xl"
          />
          <div className="glass animate-float overflow-hidden rounded-[2rem] p-3">
            <img
              src={profileImg}
              alt="Portrait of Amruth Sankar R P, Electronics and Communication Engineering student"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[1.5rem] object-cover"
            />
            <div className="flex items-center justify-center gap-2 py-3 text-xs text-muted-foreground">
              <MapPin size={13} className="text-accent" /> Alappuzha, Kerala
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-5">
        <div className="glass flex flex-wrap items-center justify-center gap-x-8 gap-y-3 rounded-full px-6 py-4 text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
          {["VLSI", "Embedded Systems", "C & Python", "NSS Leadership", "Marathon Runner"].map(
            (k, i) => (
              <span key={k} className={i === 0 ? "text-accent" : undefined}>
                {k}
              </span>
            ),
          )}
        </div>
      </div>
    </section>

  );
}

import {
  Award,
  BookOpen,
  Brain,
  Cpu,
  Footprints,
  Github,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Medal,
  Megaphone,
  MonitorSmartphone,
  Rocket,
  Sparkles,
  Target,
  Timer,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  const milestones = [
    { icon: Trophy, title: "97.25% in Higher Secondary", text: "Consistent academic performance built on structured study routines." },
    { icon: Cpu, title: "B.Tech in ECE begins", text: "Started at Rajiv Gandhi Institute of Technology, Kottayam." },
    { icon: Target, title: "M.Tech in VLSI", text: "The next planned milestone — specialising in chip design." },
    { icon: Lightbulb, title: "Technology that simplifies life", text: "Long-term goal: build solutions people actually feel the benefit of." },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="About Me"
        title="Planning every step toward a clear goal"
        description="I'm Amruth Sankar R P, a first-year Electronics & Communication Engineering student at RIT Kottayam. I care about the kind of technology that quietly removes friction from everyday life."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <Reveal className="glass rounded-3xl p-7">
          <h3 className="text-xl font-semibold">A short introduction</h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              I finished Higher Secondary with 97.25% and secured rank 3870 in KEAM, which brought me
              to RIT Kottayam for Electronics &amp; Communication Engineering. Academics have always
              been about discipline for me rather than shortcuts.
            </p>
            <p>
              Outside the classroom I&apos;m a marathon runner and a footballer — both taught me
              pacing, patience and how to keep showing up. Two years as an NSS Unit Leader taught me
              the rest: coordinating people, owning outcomes, and speaking clearly.
            </p>
            <p>
              I plan in stages. Right now the plan is to build strong fundamentals, then specialise
              in VLSI through an M.Tech, and eventually work on hardware that simplifies human life.
            </p>
          </div>
        </Reveal>

        <ol className="relative space-y-4 border-l border-border pl-6">
          {milestones.map((m, i) => (
            <Reveal as="li" key={m.title} delay={i * 90} className="relative">
              <span className="absolute -left-[1.9rem] top-5 grid size-7 place-items-center rounded-full border border-border bg-card text-accent">
                <m.icon size={14} />
              </span>
              <div className="glass rounded-2xl p-5">
                <h4 className="font-display text-sm font-semibold">{m.title}</h4>
                <p className="mt-1.5 text-sm text-muted-foreground">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  const items = [
    {
      icon: GraduationCap,
      title: "Bachelor of Technology — ECE",
      org: "Rajiv Gandhi Institute of Technology, Kottayam",
      year: "2026–2030 (Expected)",
      badge: "Ongoing",
      note: "Electronics & Communication Engineering, first year.",
    },
    {
      icon: Award,
      title: "Higher Secondary (Plus Two)",
      org: "ABVHSS, Alappuzha",
      year: "2025",
      badge: "97.25%, KEAM 2026 RANK 3870",
      note: "Science stream with a focus on physics and mathematics.",
    },
    {
      icon: BookOpen,
      title: "SSLC",
      org: "ABVHSS, Alappuzha",
      year: "2023",
      badge: "90–100%",
      note: "Strong foundation in mathematics and science.",
    },
  ];

  return (
    <section id="education" className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Education"
        title="Academic journey"
        description="Each stage was a deliberate step toward electronics engineering."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 90} className="glass group rounded-3xl p-6 transition-transform hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-11 place-items-center rounded-2xl bg-primary/15 text-accent">
                <it.icon size={20} />
              </span>
              <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-accent">
                {it.badge}
              </span>
            </div>
            <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.org}</p>
            <p className="mt-3 font-display text-xs uppercase tracking-[0.18em] text-accent">
              {it.year}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{it.note}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Leadership() {
  const highlights = [
    { icon: Users, label: "Leadership" },
    { icon: HeartHandshake, label: "Community Service" },
    { icon: Sparkles, label: "Event Organization" },
    { icon: Target, label: "Team Coordination" },
    { icon: Megaphone, label: "Communication" },
    { icon: Timer, label: "Responsibility" },
  ];

  return (
    <section id="leadership" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Leadership & Experience"
        title="Leading through service"
        description="Two years with the National Service Scheme shaped how I work with people."
      />
      <Reveal className="glass rounded-3xl p-7 sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div>
            <h3 className="text-xl font-semibold">National Service Scheme (NSS)</h3>
            <p className="mt-1.5 font-display text-sm text-accent">Unit Leader</p>
          </div>
          <span className="rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold text-accent">
            2023–2025
          </span>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          As Unit Leader I coordinated volunteer teams, planned and executed community service
          drives, and represented the unit in front of larger groups. It taught me how to divide
          work fairly, keep momentum, and take responsibility when something needs fixing.
        </p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-4 py-3 transition-colors hover:border-accent/60"
            >
              <h.icon size={16} className="text-accent" />
              <span className="text-sm text-foreground">{h.label}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Skills() {
  const technical = [
    { name: "C Programming", icon: Cpu },
    { name: "Python", icon: Brain },
    { name: "Microsoft Office", icon: MonitorSmartphone },
  ];
  const professional = [
    "Problem Solving",
    "Leadership",
    "Teamwork",
    "Public Speaking",
    "Time Management",
    "Project Management",
  ];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Skills"
        title="What I'm building on"
        description="Technical fundamentals paired with the soft skills that make teamwork work."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          {technical.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-3 font-display text-sm font-semibold">
                  <s.icon size={18} className="text-accent" /> {s.name}
                </span>
                <span className="text-sm text-muted-foreground">{s.level}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {professional.map((p, i) => (
            <Reveal
              key={p}
              delay={i * 70}
              className="glass grid place-items-center rounded-3xl px-4 py-7 text-center text-sm font-medium transition-transform hover:-translate-y-1"
            >
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="Featured Projects" title="Coming soon" />
      <Reveal className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center">
        <div
          aria-hidden
          className="animate-glow pointer-events-none absolute -top-20 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/25 blur-[90px]"
        />
        <span className="animate-float relative mx-auto grid size-16 place-items-center rounded-3xl bg-primary/15 text-accent">
          <Cpu size={28} />
        </span>
        <p className="relative mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          &ldquo;Exciting engineering projects and innovations will be showcased here as I continue
          my academic journey.&rdquo;
        </p>
        <div className="relative mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {["Embedded Systems", "Digital Design", "VLSI Explorations"].map((p) => (
            <div
              key={p}
              className="rounded-2xl border border-dashed border-border/80 bg-secondary/30 px-4 py-8 text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              {p}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Goals() {
  const goals = [
    { icon: Cpu, title: "Become a skilled Electronics Engineer", text: "Master the fundamentals of circuits, signals and systems." },
    { icon: Target, title: "Specialize in VLSI", text: "Pursue an M.Tech focused on chip architecture and design." },
    { icon: Lightbulb, title: "Simplify human life", text: "Build technology that removes friction from daily routines." },
    { icon: Rocket, title: "Join innovative projects", text: "Work with teams pushing engineering boundaries." },
    { icon: HeartHandshake, title: "Create impact", text: "Contribute to technological solutions that genuinely matter." },
    { icon: BookOpen, title: "Never stop learning", text: "Keep sharpening technical expertise year after year." },
  ];

  return (
    <section id="goals" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Future Goals"
        title="The roadmap ahead"
        description="A clear sequence of milestones rather than a vague ambition."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {goals.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 80}
            className="glass rounded-3xl p-6 transition-transform hover:-translate-y-1"
          >
            <span className="grid size-11 place-items-center rounded-2xl bg-primary/15 text-accent">
              <g.icon size={19} />
            </span>
            <h3 className="mt-5 font-display text-base font-semibold">{g.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{g.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Interests() {
  const interests = [
    { icon: Footprints, label: "Marathon Running" },
    { icon: Trophy, label: "Football" },
    { icon: Cpu, label: "Technology" },
    { icon: Lightbulb, label: "Innovation" },
    { icon: BookOpen, label: "Continuous Learning" },
  ];

  return (
    <section id="interests" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading eyebrow="Interests" title="Beyond the syllabus" />
      <div className="flex flex-wrap justify-center gap-4">
        {interests.map((it, i) => (
          <Reveal
            key={it.label}
            delay={i * 80}
            className="glass flex w-40 flex-col items-center gap-3 rounded-3xl px-5 py-7 text-center transition-transform hover:-translate-y-1.5"
          >
            <it.icon size={24} className="text-accent" />
            <span className="text-sm font-medium">{it.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const socials = [
  { icon: Linkedin, label: "LinkedIn", handle: "amruthsankar", href: "https://www.linkedin.com/in/amruthsankar" },
  { icon: Github, label: "GitHub", handle: "amruthsankar", href: "https://github.com/amruthsankar" },
  { icon: Sparkles, label: "X", handle: "@amruthsankar_", href: "https://x.com/amruthsankar_" },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let's connect"
        description="Open to learning opportunities, collaborations and conversations about electronics."
      />
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass space-y-4 rounded-3xl p-7">
          <a
            href="mailto:amruthsankarrp@gmail.com"
            className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-4 py-3.5 text-sm transition-colors hover:border-accent/60 hover:text-accent"
          >
            <Mail size={17} className="text-accent" /> amruthsankarrp@gmail.com
          </a>
          <div className="grid gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-between rounded-2xl border border-border bg-secondary/40 px-4 py-3.5 text-sm transition-all hover:-translate-y-0.5 hover:border-accent/60"
              >
                <span className="flex items-center gap-3">
                  <s.icon size={17} className="text-accent" /> {s.label}
                </span>
                <span className="text-muted-foreground">{s.handle}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-secondary/40 px-4 py-3.5 text-sm text-muted-foreground">
            <MapPin size={17} className="text-accent" /> Alappuzha, Kerala
          </div>
        </Reveal>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <Reveal className="glass rounded-3xl p-7">
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          const subject = encodeURIComponent(`Portfolio message from ${data.get("name")}`);
          const body = encodeURIComponent(String(data.get("message") ?? ""));
          window.location.href = `mailto:amruthsankarrp@gmail.com?subject=${subject}&body=${body}`;
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="text-muted-foreground">Name</span>
            <input
              required
              name="name"
              className="mt-2 w-full rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm">
            <span className="text-muted-foreground">Email</span>
            <input
              required
              type="email"
              name="email"
              className="mt-2 w-full rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              placeholder="you@example.com"
            />
          </label>
        </div>
        <label className="block text-sm">
          <span className="text-muted-foreground">Message</span>
          <textarea
            required
            name="message"
            rows={5}
            className="mt-2 w-full resize-none rounded-2xl border border-input bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            placeholder="Say hello…"
          />
        </label>
        <button
          type="submit"
          className="glow-shadow inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
        >
          Send message <Mail size={16} />
        </button>
      </form>
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Amruth Sankar R P. All rights reserved.
        </p>
        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

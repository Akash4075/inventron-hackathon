import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Clock,
  Code2,
  Cpu,
  Gift,
  Lightbulb,
  MailCheck,
  MapPin,
  Phone,
  Target,
  Trophy,
  Users,
  Sparkles,
} from "lucide-react";
import { CircuitN } from "@/components/site/CircuitN";
import { Countdown } from "@/components/site/Countdown";
import { RegisterButton } from "@/components/site/RegisterButton";
import { EVENT } from "@/lib/event";
import campusImage from "@/assets/aerial-adichunchanagiri.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INVENTRON '26 — Intra College Hackathon at BGSIT" },
      {
        name: "description",
        content:
          "INVENTRON by NAIN 2.0, BGS Institute of Technology. Theme: Technology for a Better Tomorrow. 23 Nov 2026, 9:30 AM, BGSIT Seminar Hall.",
      },
      { property: "og:title", content: "INVENTRON '26 — Intra College Hackathon" },
      {
        property: "og:description",
        content: "Technology for a Better Tomorrow. 23 Nov 2026 at BGSIT Seminar Hall. Exciting prize pool and goodies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { icon: Trophy, v: "Exciting", l: "Prize Pool" },
  { icon: CalendarDays, v: EVENT.dateShort, l: EVENT.dayLabel },
  { icon: Clock, v: EVENT.duration, l: `Starts ${EVENT.timeLabel}` },
  { icon: Gift, v: "Goodies", l: "For All" },
];

const chips = [
  { icon: Code2, t: "Build Solutions" },
  { icon: Lightbulb, t: "Innovate Ideas" },
  { icon: Users, t: "Collaborate" },
  { icon: Target, t: "Compete & Win" },
];

const details = [
  { icon: CalendarDays, k: "Date", v: EVENT.dateLabel, s: EVENT.dayLabel },
  { icon: Clock, k: "Time & Duration", v: `${EVENT.timeLabel} (${EVENT.duration})`, s: "Intensive 6-hour hackathon" },
  { icon: MapPin, k: "Venue", v: EVENT.venueShort, s: "BGSIT Campus" },
  { icon: MailCheck, k: "Selection", v: "Selected Teams", s: "Confirmation email sent to selected teams" },
];

function SectionTitle({ hi, rest, sub }: { hi: string; rest: string; sub?: React.ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold sm:text-5xl">
        <span className="text-primary">{hi}</span> {rest}
      </h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero relative flex min-h-screen flex-col items-center justify-center px-5 py-24 text-center">
        <span className="rise rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
          Presented by {EVENT.organizerShort}, {EVENT.instituteShort}
        </span>

        <h1
          className="mt-8 flex flex-wrap items-center justify-center gap-x-4 text-5xl font-black leading-none sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">{EVENT.name}</span>
          <span className="text-foreground">{EVENT.year}</span>
          <CircuitN className="h-12 w-9 text-gold sm:h-16 sm:w-12" />
        </h1>

        <p className="rise mt-5 text-2xl text-muted-foreground sm:text-3xl" style={{ animationDelay: "0.05s" }}>
          {EVENT.tagline}
        </p>
        <p className="rise mt-2 text-2xl font-bold text-pink sm:text-4xl" style={{ animationDelay: "0.1s" }}>
          "{EVENT.theme}"
        </p>
        <p className="rise mt-2 text-base font-semibold text-primary sm:text-lg" style={{ animationDelay: "0.12s" }}>
          {EVENT.subTheme}
        </p>

        <div className="rise mt-12" style={{ animationDelay: "0.15s" }}>
          <p className="label-mono mb-4 text-muted-foreground">Event starts in</p>
          <Countdown />
        </div>

        <div className="rise mt-12 flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.2s" }}>
          <RegisterButton />
          <a href="#details" className="btn-ghost">
            Learn More
          </a>
        </div>

        <div
          className="rise mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          style={{ animationDelay: "0.25s" }}
        >
          {stats.map((s) => (
            <div key={s.l} className="rounded-xl border border-border bg-card/70 px-4 py-4">
              <s.icon className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 text-lg font-bold sm:text-xl">{s.v}</p>
              <p className="text-xs text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>

        <a
          href="#about"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 hidden h-10 w-6 -translate-x-1/2 justify-center rounded-full border-2 border-primary/70 pt-2 sm:flex"
        >
          <span className="scroll-dot h-2.5 w-1 rounded-full bg-primary" />
        </a>
      </section>

      {/* What is */}
      <section id="about" className="scroll-mt-4 px-5 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">
              <span className="text-primary">What is</span> {EVENT.name}?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {EVENT.name} {EVENT.year} is a 6-hour intra college hackathon organised by the {EVENT.organizer} at{" "}
              {EVENT.institute}, {EVENT.university}. Students team up to design and build technology-driven ideas
              around one theme — <span className="text-foreground">{EVENT.theme}</span>.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Bring your ideas, your team and your skills — and build something that makes tomorrow better.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {chips.map((c) => (
                <div key={c.t} className="flex items-center gap-3 rounded-lg bg-card px-4 py-3">
                  <c.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span>{c.t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 shadow-glow-soft">
            <img
              src={campusImage}
              alt="Aerial view of Adichunchanagiri University campus, home of BGS Institute of Technology"
              width={1280}
              height={720}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-lg border border-border bg-background/85 px-4 py-3 backdrop-blur">
              <p className="text-sm font-medium">
                {EVENT.institute} ({EVENT.instituteShort})
              </p>
              <p className="text-xs text-muted-foreground">{EVENT.town}</p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="mx-auto mt-20 max-w-6xl text-center">
          <p className="label-mono text-muted-foreground">In association with</p>
          <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
            {EVENT.partners.map((p) => (
              <div
                key={p}
                className="flex h-20 items-center justify-center rounded-xl border border-border bg-card px-4 text-lg font-semibold"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event details */}
      <section id="details" className="scroll-mt-4 bg-surface px-5 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            hi="Event"
            rest="Details"
            sub="Mark your calendars and prepare your team for an unforgettable hackathon experience"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {details.map((d) => (
              <div key={d.k} className="rounded-2xl border border-border bg-background/40 p-6">
                <d.icon className="h-9 w-9 text-primary" />
                <p className="label-mono mt-10 text-muted-foreground">{d.k}</p>
                <p className="mt-3 text-2xl font-bold">{d.v}</p>
                <p className="mt-4 text-sm text-muted-foreground">{d.s}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl border border-primary/20 bg-background/50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MailCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-foreground">Selection Process</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {EVENT.selectionProcessNote}
                </p>
              </div>
            </div>
            <a href="#register" className="btn-ghost shrink-0 text-sm">
              Register Team
            </a>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="scroll-mt-4 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            hi="Prizes"
            rest="& Rewards"
            sub={
              <>
                Compete for an <span className="font-bold text-gold">exciting prize pool</span>
              </>
            }
          />
          <div className="mt-14 grid items-end gap-5 sm:grid-cols-3">
            <PrizeCard place="2nd Place" medal="🥈" tone="silver" className="sm:order-1" />
            <PrizeCard place="1st Place" medal="🥇" tone="gold" big className="order-first sm:order-2" />
            <PrizeCard place="3rd Place" medal="🥉" tone="bronze" className="sm:order-3" />
          </div>
          <div className="mt-10 flex justify-center">
            <p className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm">
              <Gift className="h-4 w-4 text-secondary" /> Exciting goodies for <b>all participants!</b>
            </p>
          </div>
        </div>
      </section>

      {/* Registration */}
      <section id="register" className="scroll-mt-4 bg-surface px-5 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle hi="Registration" rest="Open" sub="Limited slots available – register your team today!" />
          <div className="mt-10 rounded-2xl border border-primary/30 bg-card p-8 shadow-glow-soft">
            <Sparkles className="mx-auto h-8 w-8 text-primary" />
            <p className="mt-4 text-xl font-semibold">Open to all students of {EVENT.institute}</p>
            <p className="mt-2 text-muted-foreground">
              {EVENT.dateLabel} · {EVENT.timeLabel} ({EVENT.duration}) · {EVENT.venue}
            </p>
            <div className="mx-auto mt-6 max-w-xl rounded-xl border border-primary/25 bg-background/60 p-4 text-left sm:p-5">
              <div className="flex items-start gap-3">
                <MailCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Selection Process</p>
                  <p className="mt-1 text-muted-foreground">
                    {EVENT.selectionProcessNote}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              {EVENT.registerUrl ? (
                <RegisterButton label="Register Your Team" icon="external" />
              ) : (
                <div className="inline-block rounded-xl border border-dashed border-primary/50 px-6 py-4">
                  <p className="font-semibold text-primary">Registration link opening soon</p>
                  <p className="text-sm text-muted-foreground">Contact your NAIN coordinator for details.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Venue */}
      <section id="venue" className="scroll-mt-4 px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle hi="Venue" rest="Location" />
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Map of BGS Institute of Technology"
              src={EVENT.mapEmbedUrl}
              className="h-80 w-full border-0 sm:h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-bold">
                  {EVENT.institute} ({EVENT.instituteShort})
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{EVENT.address}</p>
              </div>
              <a
                href={EVENT.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-primary/50 px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 sm:self-auto"
              >
                <MapPin className="h-4 w-4" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      {EVENT.contacts.length > 0 && (
        <section id="contact" className="scroll-mt-4 bg-surface px-5 py-24">
          <div className="mx-auto max-w-3xl">
            <SectionTitle hi="Contact" rest="Us" sub="Have questions? Reach out to our coordinators" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {EVENT.contacts.map((c) => (
                <div key={c.name} className="rounded-2xl border border-border bg-card p-6">
                  <p className="label-mono text-primary">{c.role}</p>
                  <h3 className="mt-5 text-xl font-bold">{c.name}</h3>
                  <a
                    href={`tel:${c.phone}`}
                    className="mt-5 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <Phone className="h-4 w-4" /> {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Selection & Evaluation Criteria */}
      <section id="criteria" className="scroll-mt-4 bg-surface px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            hi="Selection &"
            rest="Evaluation Criteria"
            sub="Understand how projects will be evaluated and shortlisted"
          />

          <div className="mt-12 rounded-2xl border border-primary/30 bg-card p-6 shadow-glow-soft sm:p-10">
            <div className="flex items-center gap-3 text-primary">
              <Cpu className="h-7 w-7 shrink-0" />
              <h3 className="text-xl font-bold sm:text-2xl text-foreground">
                AI Integration & Impact Focus
              </h3>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>{EVENT.criteria.lead}</p>
              <p className="rounded-xl border border-border bg-background/50 p-4 font-medium text-foreground/90 sm:p-5">
                {EVENT.criteria.emphasis}
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">01</p>
                <p className="mt-1 font-semibold text-foreground">Creative AI Integration</p>
                <p className="mt-1 text-xs text-muted-foreground">Effective feature embedding</p>
              </div>
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">02</p>
                <p className="mt-1 font-semibold text-foreground">Practical Application</p>
                <p className="mt-1 text-xs text-muted-foreground">Viable real-world usage</p>
              </div>
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">03</p>
                <p className="mt-1 font-semibold text-foreground">Innovation & Problem Solving</p>
                <p className="mt-1 text-xs text-muted-foreground">Novel technological approach</p>
              </div>
              <div className="rounded-xl border border-border bg-background/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">04</p>
                <p className="mt-1 font-semibold text-foreground">Real-World Impact</p>
                <p className="mt-1 text-xs text-muted-foreground">Measurable benefits & value</p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-primary/40 bg-primary/10 p-5 text-center sm:p-6">
              <p className="text-lg font-bold text-foreground sm:text-xl">
                {EVENT.criteria.callout}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const toneClass = {
  gold: "border-gold/60 bg-gold/10 text-gold shadow-glow",
  silver: "border-muted-foreground/40 bg-muted text-foreground",
  bronze: "border-bronze/40 bg-bronze/10 text-bronze",
} as const;

function PrizeCard({
  place,
  medal,
  tone,
  big = false,
  className = "",
}: {
  place: string;
  medal: string;
  tone: keyof typeof toneClass;
  big?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border px-6 text-center ${big ? "py-12" : "py-9"} ${toneClass[tone]} ${className}`}
    >
      {big && <Trophy className="mx-auto mb-4 h-12 w-12" />}
      <div className={big ? "text-6xl" : "text-5xl"} aria-hidden>
        {medal}
      </div>
      <p className={`mt-5 font-bold ${big ? "text-3xl" : "text-2xl"}`}>{place}</p>
      <p className={`mt-4 font-bold ${big ? "text-2xl" : "text-xl"}`}>To be announced</p>
    </div>
  );
}

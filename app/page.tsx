import Image from "next/image";
import {
  profile,
  story,
  journey,
  sovereignOps,
  projects,
  experience,
  skills,
  credentials,
} from "./content";

const nav = [
  { href: "#story", label: "Story" },
  { href: "#sovereignops", label: "SovereignOps" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function ButtonLink({
  href,
  children,
  variant = "solid",
  download,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  download?: boolean;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-[0.95rem] font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-gold text-ink hover:bg-gold-soft"
      : "border border-ink-soft/50 text-paper hover:border-paper hover:bg-paper/10";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(download ? { download: "" } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

function SectionHeading({ id, title, intro }: { id: string; title: string; intro?: string }) {
  return (
    <header className="max-w-2xl">
      <h2 id={id} className="scroll-mt-24 text-[2rem] font-bold sm:text-[2.6rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-slate">{intro}</p>}
    </header>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <nav className="no-print sticky top-0 z-40 border-b border-paper/10 bg-ink/95 text-paper backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Jane Anyanwu
          </a>
          <ul className="hidden items-center gap-7 text-[0.95rem] text-ink-soft md:flex">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-paper">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.cv}
            download
            className="rounded-md bg-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-gold-soft"
          >
            Download CV
          </a>
        </div>
      </nav>

      <main id="main">
        {/* Hero + journey */}
        <section id="top" className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
            <p className="text-ink-soft">{profile.role}</p>
            <h1 className="mt-5 max-w-4xl text-[2.6rem] font-extrabold sm:text-[4.1rem]">
              I build the C# services banks run on. I also know how to ship them.
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-ink-soft sm:text-xl">
              I have spent 4 years writing backend code for Nigerian banks and fintechs, including
              payments and account services at First Bank today. On my own time I learned the
              other half of the job: Docker, Kubernetes, Terraform, AWS and CI/CD.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={profile.cv} download>
                Download my CV
              </ButtonLink>
              <ButtonLink href={`mailto:${profile.email}`} variant="outline">
                Email me
              </ButtonLink>
              <ButtonLink href={profile.linkedin} variant="outline" external>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.github} variant="outline" external>
                GitHub
              </ButtonLink>
            </div>

            <p className="mt-6 flex items-start gap-2 text-[0.95rem] text-ink-soft">
              <span aria-hidden className="mt-[0.6rem] inline-block h-2 w-2 shrink-0 rounded-full bg-gold" />
              {profile.availability}
            </p>
          </div>

          {/* The journey, drawn as a pipeline: every stage passed, the last one running. */}
          <div className="border-t border-paper/10 bg-ink-2">
            <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
              <h2 className="text-xl font-semibold text-paper">My path so far</h2>
              <ol className="relative mt-8 grid gap-7 lg:grid-cols-7 lg:gap-4">
                <span
                  aria-hidden
                  className="absolute bottom-2 left-[7px] top-2 w-px bg-ink-soft/30 lg:bottom-auto lg:left-2 lg:right-2 lg:top-[7px] lg:h-px lg:w-auto"
                />
                {journey.map((s) => (
                  <li key={s.where} className="relative pl-9 lg:pl-0 lg:pt-9">
                    <span
                      aria-hidden
                      className={`absolute left-0 top-1 h-[15px] w-[15px] rounded-full border-2 lg:top-0 ${
                        s.current ? "beacon border-gold bg-gold" : "border-ink-soft bg-ink-2"
                      }`}
                    />
                    <p className={`text-sm ${s.current ? "text-gold" : "text-ink-soft"}`}>{s.when}</p>
                    <p className="mt-1 font-display text-[1.05rem] font-semibold leading-snug text-paper">
                      {s.where}
                    </p>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">{s.what}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 id="story" className="scroll-mt-24 text-[2rem] font-bold sm:text-[2.6rem]">
                How I got here
              </h2>
              <p className="mt-5 text-lg text-slate">
                The short version: I write backend code for banks, and I taught myself how that code
                gets built, deployed and watched in production.
              </p>
            </div>
            <div className="max-w-[38rem] space-y-6 text-[1.1rem] leading-[1.75]">
              {story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* SovereignOps */}
        <section className="bg-paper py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              id="sovereignops"
              title="What I am building now: SovereignOps"
              intro="My flagship project. A multi-tenant SaaS for banks and fintechs that need sovereign Kubernetes infrastructure and clear compliance."
            />

            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 text-[1.05rem]">
                <div>
                  <h3 className="text-xl font-semibold">The problem</h3>
                  <p className="mt-2 text-slate">{sovereignOps.problem}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">What SovereignOps does</h3>
                  <p className="mt-2 text-slate">{sovereignOps.answer}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Where it stands</h3>
                  <p className="mt-2 text-slate">{sovereignOps.status}</p>
                </div>
              </div>

              {/* System sketch */}
              <figure className="rounded-xl bg-ink p-6 text-paper sm:p-8">
                <figcaption className="text-sm text-ink-soft">How the pieces fit</figcaption>
                <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto_1.3fr] sm:items-center">
                  <div className="rounded-lg border border-dashed border-ink-soft/50 p-4">
                    <p className="text-sm text-ink-soft">The bank&apos;s side</p>
                    <div className="mt-3 rounded-md bg-ink-2 p-3">
                      <p className="font-display font-semibold">Customer agent</p>
                      <p className="text-sm text-gold">Go</p>
                    </div>
                  </div>
                  <p aria-hidden className="text-center text-2xl text-gold">
                    <span className="hidden sm:inline">⇄</span>
                    <span className="sm:hidden">⇅</span>
                  </p>
                  <div className="rounded-lg border border-ink-soft/40 p-4">
                    <p className="text-sm text-ink-soft">SovereignOps</p>
                    <div className="mt-3 grid gap-3">
                      <div className="rounded-md bg-ink-2 p-3">
                        <p className="font-display font-semibold">Control plane</p>
                        <p className="text-sm text-gold">.NET API, one space per bank</p>
                      </div>
                      <div className="rounded-md bg-ink-2 p-3">
                        <p className="font-display font-semibold">Dashboard</p>
                        <p className="text-sm text-gold">React</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-5 text-sm text-ink-soft">Runs locally with Docker Compose.</p>
              </figure>
            </div>

            <div className="mt-12 grid gap-10 border-t border-line pt-10 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">The parts</h3>
                <dl className="mt-4 space-y-4">
                  {sovereignOps.parts.map((p) => (
                    <div key={p.name}>
                      <dt className="font-semibold">
                        {p.name}, <span className="font-normal text-leaf">{p.tech}</span>
                      </dt>
                      <dd className="text-slate">{p.detail}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h3 className="text-xl font-semibold">What this project shows about me</h3>
                <ul className="mt-4 space-y-3">
                  {sovereignOps.shows.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span aria-hidden className="mt-[0.6rem] h-1.5 w-4 shrink-0 rounded-full bg-gold" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${profile.email}?subject=SovereignOps%20walkthrough`}
                  className="mt-7 inline-flex rounded-md bg-ink px-5 py-2.5 font-semibold text-paper hover:bg-ink-2"
                >
                  Ask for a walkthrough
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading
            id="projects"
            title="Projects you can open and check"
            intro="Each of these is public. I built them to learn DevOps properly, the way a real team would run it."
          />
          <div className="mt-14 space-y-20">
            {projects.map((p, i) => (
              <article
                key={p.title}
                className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-14 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="overflow-hidden rounded-xl border border-line bg-paper">
                  <a href={p.image} target="_blank" rel="noopener noreferrer" aria-label={`Open full image: ${p.imageAlt}`}>
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      width={p.width}
                      height={p.height}
                      sizes="(min-width: 1024px) 540px, 100vw"
                      className="h-auto w-full object-contain"
                    />
                  </a>
                </figure>
                <div>
                  <h3 className="text-[1.6rem] font-bold">{p.title}</h3>
                  <p className="mt-3 text-slate">{p.summary}</p>
                  <h4 className="mt-6 font-semibold">What I built</h4>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-gold">
                    {p.built.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <p className="mt-6 border-l-4 border-gold bg-paper px-4 py-3 text-[0.98rem]">
                    <span className="font-semibold">What I learned: </span>
                    {p.learned}
                  </p>
                  <p className="mt-5 text-sm text-slate">{p.stack.join(", ")}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md border border-ink/25 px-4 py-2 text-[0.95rem] font-semibold hover:border-ink hover:bg-paper"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-paper py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionHeading
              id="skills"
              title="Skills, and where I use them"
              intro="I keep these two lists separate on purpose, so you know exactly what I have done in a job and what I have built on my own."
            />
            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div className="rounded-xl border-t-4 border-ink bg-mist p-7">
                <h3 className="text-xl font-semibold">Used in my jobs</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {skills.atWork.map((s) => (
                    <li key={s} className="rounded-md bg-paper px-3 py-1.5 text-[0.95rem]">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border-t-4 border-gold bg-mist p-7">
                <h3 className="text-xl font-semibold">Built with in my own projects</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {skills.onMyOwn.map((s) => (
                    <li key={s} className="rounded-md bg-paper px-3 py-1.5 text-[0.95rem]">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <SectionHeading id="experience" title="Work experience" />
          <ol className="mt-12 space-y-12">
            {experience.map((j) => (
              <li key={j.company} className="grid gap-3 border-t border-line pt-8 md:grid-cols-[15rem_1fr] md:gap-10">
                <div>
                  <p className="text-slate">{j.dates}</p>
                  <p className="text-sm text-slate">{j.place}</p>
                </div>
                <div>
                  <h3 className="text-[1.35rem] font-bold">
                    {j.title}, <span className="font-semibold">{j.company}</span>
                  </h3>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-gold">
                    {j.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-8 border-t border-line pt-10 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Certification</h3>
              <p className="mt-2">{credentials.certification.name}</p>
              <p className="text-sm text-slate">{credentials.certification.code}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Training</h3>
              <p className="mt-2">
                {credentials.training.name}, {credentials.training.org}
              </p>
              <p className="text-sm text-slate">{credentials.training.dates}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="mt-2">
                {credentials.education.name}, {credentials.education.org}
              </p>
              <p className="text-sm text-slate">{credentials.education.dates}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
            <h2 id="contact" className="scroll-mt-24 max-w-3xl text-[2.2rem] font-bold sm:text-[3rem]">
              Need a backend engineer who understands the whole path to production?
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-ink-soft">
              Send me a message and I will get back to you. I am in Lagos (UTC+1), which overlaps
              well with UK, European and Canadian working hours.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-9 inline-block break-all font-display text-[1.6rem] font-semibold text-gold underline decoration-gold/40 underline-offset-8 hover:decoration-gold sm:text-[2.2rem]"
            >
              {profile.email}
            </a>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href={profile.cv} download>
                Download my CV
              </ButtonLink>
              <ButtonLink href={profile.linkedin} variant="outline" external>
                LinkedIn
              </ButtonLink>
              <ButtonLink href={profile.github} variant="outline" external>
                GitHub
              </ButtonLink>
            </div>
          </div>
          <footer className="border-t border-paper/10">
            <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-ink-soft sm:px-8">
              © {new Date().getFullYear()} Jane Anyanwu. Built with Next.js and checked by my own Jenkins pipeline.
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}

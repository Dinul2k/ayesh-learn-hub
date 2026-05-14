import { ArrowRight, BookOpen, PlayCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/ayesh-hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* decorative bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--gradient-hero)] opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/30 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24 lg:py-28">
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Government School • Science Educator
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl">
            I'm <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">Ayesh Randil</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Science Teacher <span className="mx-2 text-border">•</span>
            Government School Teacher <span className="mx-2 text-border">•</span>
            <span className="font-medium text-foreground">B.Sc, B.Ed</span>
          </p>

          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Helping curious students fall in love with science through clear lessons,
            video tutorials and hand-crafted study notes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#tutes"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-95"
            >
              <BookOpen className="h-4 w-4" />
              Access Tutes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-secondary"
            >
              <PlayCircle className="h-4 w-4 text-accent" />
              Watch Videos
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { v: "8+", l: "Years Teaching" },
              { v: "120+", l: "Video Lessons" },
              { v: "2k+", l: "Students" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="text-2xl font-semibold tracking-tight text-foreground">{s.v}</dt>
                <dd className="text-xs text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-[var(--gradient-hero)] opacity-90" />
            <div className="absolute -right-3 -top-3 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] md:block">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Now teaching</p>
              <p className="text-sm font-semibold text-foreground">Grades 6 – 11 Science</p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[var(--shadow-elegant)]">
              <img
                src={heroImg}
                alt="Ayesh Randil, science teacher"
                className="aspect-[4/5] h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-card)] md:block">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Qualified</p>
              <p className="text-sm font-semibold text-foreground">B.Sc · B.Ed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

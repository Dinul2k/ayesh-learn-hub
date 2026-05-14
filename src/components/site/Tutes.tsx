import { Download, FileText, Atom, FlaskConical, Leaf } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const tutes = [
  { grade: "Grade 6", title: "Matter & Materials", pages: 18, subject: "General Science", icon: Atom, tone: "from-sky-500/15 to-indigo-500/15", link: "https://drive.google.com/drive/folders/1Hxmykcm6-j8fu-5S6igQOjW8XuZBtNnV" },
  { grade: "Grade 7", title: "Force, Motion & Energy", pages: 22, subject: "Physics", icon: Atom, tone: "from-cyan-500/15 to-blue-500/15", link: "https://drive.google.com/drive/folders/1UUsCJ6fdaVyTVaMKQ6QaL2s4doYEZXUm" },
  { grade: "Grade 8", title: "The Living World", pages: 24, subject: "Biology", icon: Leaf, tone: "from-emerald-500/15 to-teal-500/15", link: "https://drive.google.com/drive/folders/1KQmDWwgqmMpL-LuY4MTS7oPNUYASb35H" },
  { grade: "Grade 9", title: "Atoms & Compounds", pages: 26, subject: "Chemistry", icon: FlaskConical, tone: "from-violet-500/15 to-fuchsia-500/15" , link: "https://drive.google.com/drive/folders/1Lo2nIm8AfiDpiQ_UqJ-prlttmZ38RGwO" },
  { grade: "Grade 10", title: "Electricity & Magnetism", pages: 30, subject: "Physics", icon: Atom, tone: "from-amber-500/15 to-orange-500/15" ,  link: "https://drive.google.com/drive/folders/10VoJQjme8-XcN7vav4WQS_bxsGAw8md-"  },
  { grade: "Grade 11", title: "Organic Chemistry Basics", pages: 28, subject: "Chemistry", icon: FlaskConical, tone: "from-rose-500/15 to-pink-500/15" , link: "https://drive.google.com/drive/folders/1OoPL0-f3ZO4LGN8gq8IFpChNp31tJSH3" },
];

export function Tutes() {
  return (
    <section id="tutes" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Tutes & Notes"
          title="A growing library of study materials."
          description="Download grade-wise tutorials and class notes — designed clean, printable and exam-ready."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tutes.map(({ icon: Icon, link, ...t }) => (
            <a
              key={t.title}
              href={link || "#"}
              target={link ? "_blank" : undefined}
              rel={link ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${t.tone} opacity-70`} />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-card text-primary shadow-[var(--shadow-card)]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-card px-2.5 py-1 text-[11px] font-semibold text-muted-foreground shadow-sm">
                    {t.grade}
                  </span>
                </div>

                <div className="mt-14">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                    {t.subject}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-foreground group-hover:text-primary">
                    {t.title}
                  </h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <FileText className="h-3.5 w-3.5" /> PDF · {t.pages} pages
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">Free download</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition group-hover:opacity-90">
                    <Download className="h-3.5 w-3.5" /> Download
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

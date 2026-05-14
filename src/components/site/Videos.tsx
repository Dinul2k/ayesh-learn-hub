import { useState } from "react";
import { PlayCircle, Clock } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

const categories = ["All", "Physics", "Chemistry", "Biology", "Grade 11"];

const videos = [
  { title: "Newton's Laws — Made Simple", subject: "Physics", duration: "12:40", thumb: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&q=80" },
  { title: "The Periodic Table Explained", subject: "Chemistry", duration: "18:05", thumb: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80" },
  { title: "Cell Structure & Function", subject: "Biology", duration: "15:22", thumb: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80" },
  { title: "Electricity & Circuits", subject: "Physics", duration: "20:11", thumb: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?w=800&q=80" },
  { title: "Acids, Bases & Salts", subject: "Chemistry", duration: "14:37", thumb: "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=800&q=80" },
  { title: "Photosynthesis — Step by Step", subject: "Biology", duration: "11:08", thumb: "https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=800&q=80" },
];

export function Videos() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? videos : videos.filter((v) => v.subject === active);

  return (
    <section id="videos" className="relative bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Videos"
            title="Learn science, lesson by lesson."
            description="Bite-sized video tutorials you can watch on any device, anytime."
          />
          <div className="-mx-1 flex flex-wrap gap-2 overflow-x-auto pb-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-medium transition",
                  active === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <a
              key={v.title}
              href="#"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={v.thumb}
                  alt={v.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                  <PlayCircle className="h-14 w-14 text-primary-foreground drop-shadow-lg" />
                </span>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground">
                  <Clock className="h-3 w-3" /> {v.duration}
                </span>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {v.subject}
                </span>
                <h3 className="mt-2 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                  {v.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import c6 from "@/assets/class-6.jpg";
import c7 from "@/assets/class-7.jpg";
import c8 from "@/assets/class-8.jpg";
import c9 from "@/assets/class-9.jpg";
import c10 from "@/assets/class-10.jpg";

const slides = [
  { src: c6, label: "Grade 6 Science" },
  { src: c7, label: "Grade 7 Science" },
  { src: c8, label: "Grade 8 Science" },
  { src: c9, label: "Grade 9 Science" },
  { src: c10, label: "Grade 10 Science" },
];

export function Classes() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const go = (n: number) => setIndex((n + slides.length) % slides.length);

  return (
    <section id="classes" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Classes"
          title="Classes :"
          description="Upcoming science class schedules — Grades 6 to 10."
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-elegant)]">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s) => (
                <div key={s.label} className="w-full shrink-0">
                  <img
                    src={s.src}
                    alt={s.label}
                    className="h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <button
              aria-label="Previous"
              onClick={() => go(index - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur transition hover:bg-background"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => go(index + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-background/80 text-foreground shadow backdrop-blur transition hover:bg-background"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.label}
                aria-label={`Go to ${s.label}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
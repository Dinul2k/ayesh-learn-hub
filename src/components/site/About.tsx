import { GraduationCap, FlaskConical, HeartHandshake, BookMarked } from "lucide-react";
import aboutImg from "@/assets/ayesh-about.jpg";
import { SectionHeading } from "./SectionHeading";

const values = [
  { icon: GraduationCap, title: "B.Sc & B.Ed", text: "A scientist's curiosity paired with a teacher's pedagogy." },
  { icon: FlaskConical, title: "Hands-on Science", text: "Real experiments, demos and questions over rote learning." },
  { icon: HeartHandshake, title: "Student-first", text: "Every lesson is designed for the learner, not the syllabus." },
  { icon: BookMarked, title: "Free Resources", text: "Tutes, notes and videos available openly for all students." },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8 lg:gap-16">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
            <img src={aboutImg} alt="Ayesh Randil" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden max-w-[220px] rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-elegant)] md:block">
            <p className="text-sm font-semibold text-foreground">"Science is best learned by asking better questions."</p>
            <p className="mt-2 text-xs text-muted-foreground">— Ayesh Randil</p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About"
            title="Teaching science with clarity, care and curiosity."
            description="I'm a government school science teacher passionate about making complex ideas feel simple. With a B.Sc in science and a B.Ed in education, I combine subject mastery with proven classroom practice to help students think critically and learn deeply."
          />

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            From physics and chemistry to biology, my goal is to give every student — wherever
            they study — access to high-quality science explanations, structured tutes and
            video lessons they can revisit anytime.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

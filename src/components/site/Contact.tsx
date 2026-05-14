import { useState } from "react";
import { Mail, Phone, MessageCircle, Send, MapPin } from "lucide-react";
import { z } from "zod";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(150),
  message: z.string().trim().min(5, "Message is too short").max(800),
});

export function Contact() {
  const [status, setStatus] = useState<{ type: "idle" | "ok" | "err"; msg?: string }>({ type: "idle" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      message: form.get("message"),
    });
    if (!result.success) {
      setStatus({ type: "err", msg: result.error.issues[0].message });
      return;
    }
    const subject = encodeURIComponent(`Message from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:ayeshrandil@gmail.com?subject=${subject}&body=${body}`;
    setStatus({ type: "ok", msg: "Opening your email app…" });
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Got a question? Let's talk."
          description="Students and parents are welcome to reach out for tutorial help, class info or feedback."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl bg-[var(--gradient-hero)] p-8 text-primary-foreground shadow-[var(--shadow-elegant)]">
              <h3 className="text-xl font-semibold">Reach out directly</h3>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Prefer email or WhatsApp? Use the details below.
              </p>

              <ul className="mt-8 space-y-5">
                <li>
                  <a href="mailto:ayeshrandil@gmail.com" className="group flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-widest text-primary-foreground/70">Email</span>
                      <span className="block text-sm font-medium group-hover:underline">ayeshrandil@gmail.com</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/94766074338" target="_blank" rel="noreferrer" className="group flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-widest text-primary-foreground/70">WhatsApp</span>
                      <span className="block text-sm font-medium group-hover:underline">+94 76 607 4338</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="tel:+94766074338" className="group flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                      <Phone className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-widest text-primary-foreground/70">Phone</span>
                      <span className="block text-sm font-medium group-hover:underline">0766 074 338</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/15">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[11px] uppercase tracking-widest text-primary-foreground/70">Based in</span>
                    <span className="block text-sm font-medium">Sri Lanka</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] lg:col-span-3 lg:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" name="name" placeholder="e.g. Nimal Perera" />
              <Field label="Email address" name="email" type="email" placeholder="you@example.com" />
            </div>
            <Field label="Message" name="message" textarea placeholder="How can I help?" />

            {status.type !== "idle" && (
              <p className={`mt-3 text-xs ${status.type === "ok" ? "text-primary" : "text-destructive"}`}>
                {status.msg}
              </p>
            )}

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:opacity-90 sm:w-auto"
            >
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  const cls =
    "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
  return (
    <label className={textarea ? "mt-4 block sm:col-span-2" : "block"}>
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required rows={5} placeholder={placeholder} className={cls} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={cls} />
      )}
    </label>
  );
}

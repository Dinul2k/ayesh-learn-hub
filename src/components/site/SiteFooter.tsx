import { Atom, Mail, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-hero)] text-primary-foreground">
                <Atom className="h-5 w-5" />
              </span>
              Ayesh Randil
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Science teacher · B.Sc, B.Ed. Free tutorials, videos and notes for students who love to learn.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#videos" className="hover:text-primary">Videos</a></li>
              <li><a href="#tutes" className="hover:text-primary">Tutes</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:ayeshrandil@gmail.com" className="inline-flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" /> ayeshrandil@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/94766074338" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-primary">
                  <MessageCircle className="h-4 w-4" /> 0766 074 338
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Ayesh Randil. All rights reserved.</p>
          <p>Built with care for curious students.</p>
        </div>
      </div>
    </footer>
  );
}

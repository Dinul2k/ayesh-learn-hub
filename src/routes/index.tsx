import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Videos } from "@/components/site/Videos";
import { Tutes } from "@/components/site/Tutes";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayesh Randil — Science Teacher | Tutorials & Videos" },
      { name: "description", content: "Personal site of Ayesh Randil, government school science teacher. Browse video lessons, download tutes and notes for grades 6–11." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Videos />
        <Tutes />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Contact,
  Education,
  Footer,
  Goals,
  Interests,
  Leadership,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";

const title = "Amruth Sankar R P — ECE Student & Future VLSI Engineer";
const description =
  "Portfolio of Amruth Sankar R P, first-year Electronics & Communication Engineering student at RIT Kottayam — education, NSS leadership, skills and future goals in VLSI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Leadership />
        <Skills />
        <Projects />
        <Goals />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Amruth Sankar R P",
            jobTitle: "Electronics & Communication Engineering Student",
            email: "amruthsankarrp@gmail.com",
            address: { "@type": "PostalAddress", addressLocality: "Alappuzha", addressRegion: "Kerala", addressCountry: "IN" },
            alumniOf: "ABVHSS, Alappuzha",
            affiliation: "Rajiv Gandhi Institute of Technology, Kottayam",
            sameAs: [
              "https://www.linkedin.com/in/amruthsankar",
              "https://github.com/amruthsankar",
              "https://x.com/amruthsankar_",
            ],
          }),
        }}
      />
    </div>
  );
}

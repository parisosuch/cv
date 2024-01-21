import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col max-w-4xl p-4 md:p-16 space-y-8 min-h-screen">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

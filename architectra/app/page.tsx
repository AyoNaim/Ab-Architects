import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home () {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <Projects />
    </main>
    )
}
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";

export default function Home () {
  return (
    <main>
      <Navbar />
      <Hero />
      <Gallery />
      <Projects />
      <Partners />
    </main>
    )
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <FAQ />
      <Footer />

      <button className="fixed bottom-6 right-6 bg-blue-500 w-16 h-16 rounded-full shadow-xl">
        AI
      </button>
    </main>
  );
}

import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyHireMe } from "./components/WhyHireMe";
import { CinematicPortfolio } from "./components/CinematicPortfolio";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ParticleField } from "./components/animations/FloatingElements";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ParticleField density="low" className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <WhyHireMe />
          <CinematicPortfolio />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </div>
  );
}
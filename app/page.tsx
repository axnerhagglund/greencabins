import CabinsList from "./components/CabinsList";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Hero />
      <CabinsList />
      <AboutSection />
      <FAQ />
      <Footer />
    </div>
  );
}

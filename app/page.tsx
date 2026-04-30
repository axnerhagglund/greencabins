import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CabinPreviewSection from "./components/CabinPreviewSection";
import SlowStaySection from "./components/SlowStaySection";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Hero />
      <CabinPreviewSection />
      <AboutSection />
      <SlowStaySection />
      <FAQ />
      <Footer />
    </div>
  );
}

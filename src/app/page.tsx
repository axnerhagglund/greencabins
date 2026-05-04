import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import CabinPreviewSection from "@/components/sections/CabinPreviewSection";
import SlowStaySection from "@/components/sections/SlowStaySection";

export default function Home() {
  return (
    <div style={{ background: "var(--bg)" }}>
      <Hero />
      <CabinPreviewSection />
      <AboutSection />
      <SlowStaySection />
      <FAQ />
    </div>
  );
}

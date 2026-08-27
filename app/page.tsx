import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import PlatformsMarquee from "@/components/sections/PlatformsMarquee";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero — all devices */}
        <Hero />

        {/* About — Mobile + Tablet only */}
        <div className="lg:hidden">
          <div>
            <About />
          </div>
        </div>

        {/* Platform Marquee — All devices */}
        <PlatformsMarquee />

        {/* Common Sections */}
        <Industries />
        
        <Services />

        <CaseStudies />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
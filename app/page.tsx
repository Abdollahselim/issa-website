import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import PlatformsMarquee from "@/components/sections/PlatformsMarquee";
import Industries from "@/components/sections/Industries";
import HeroMetrics from "@/components/sections/HeroMetrics";
import CTA from "@/components/sections/CTA";
import ServicesToCaseDivider from "@/components/ui/ServicesToCaseDivider";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero — all devices */}
        <Hero />

        {/* About — Mobile + Tablet only */}
        <div className="lg:hidden">
          <About />
        </div>

        {/* Platform Marquee — All devices */}
        <PlatformsMarquee />

        {/* Common Sections */}
        <div className="bg-[linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.94)_28%,rgba(0,0,0,0.72)_58%,rgba(0,0,0,0)_100%)]">
          <Industries />
        </div>

        {/* HeroMetrics — Mobile + Tablet only */}
        <div className="mt-10 lg:hidden">
          <HeroMetrics />
        </div>

        {/* Services Section */}
        
        <Services />
       

        {/* Custom Shape Divider */}
        <ServicesToCaseDivider fillColor="fill-black" />

        {/* Case Studies Section */}
        <section className="bg-gradient-to-t
          from-black/0
          via-black/50
          to-black">
          <CaseStudies />
        </section>

        <CTA />
        
      </main>

      <Footer />
    </>
  );
}
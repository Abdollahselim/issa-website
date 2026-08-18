import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CaseStudies from "@/components/sections/CaseStudies";
import PlatformsMarquee from "@/components/sections/PlatformsMarquee";
import StaticPlatforms from "@/components/sections/StaticPlatforms";
import Industries from "@/components/sections/Industries";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero — all devices */}
        <Hero />

        {/* About + Static Platforms — Mobile only */}
        <div className="md:hidden">
          <div className="bg-gradient-to-b from-black from-0% via-black via-[80%] to-transparent to-100%">
            <About />
            <StaticPlatforms />
          </div>
        </div>

        {/* Platform Marquee — Desktop / Tablet only */}
        <div className="hidden md:block">
          <PlatformsMarquee showHeading={false} />
        </div>

        {/* Common Sections */}
        <Industries />
        
        <Services />

        <CaseStudies />

        {/* Platform Marquee — All devices */}
        <PlatformsMarquee />

        <CTA />
      </main>

      <Footer />
    </>
  );
}
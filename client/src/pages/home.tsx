import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import BusinessArms from "@/components/business-arms";
import TribexAlpha from "@/components/tribex-alpha";
import TribexMedia from "@/components/tribex-wealth";
import TribexCapital from "@/components/tribex-capital";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <BusinessArms />
      <TribexAlpha />
      <TribexMedia />
      <TribexCapital />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

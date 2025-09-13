import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Safety from "@/components/Safety";
import AppPromotion from "@/components/AppPromotion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Safety />
      <AppPromotion />
      <Footer />
    </main>
  );
}
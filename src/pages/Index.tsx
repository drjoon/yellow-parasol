import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import InvestmentStructure from "@/components/InvestmentStructure";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InvestmentStructure />
      <Benefits />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

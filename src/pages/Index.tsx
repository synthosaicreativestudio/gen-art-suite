import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Features />
      <CTA />
    </div>
  );
};

export default Index;

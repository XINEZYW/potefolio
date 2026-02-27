import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionProblem from "@/components/SectionProblem";
import SectionSolution from "@/components/SectionSolution";
import SectionSocialProof from "@/components/SectionSocialProof";
import SectionCTA from "@/components/SectionCTA";
import SectionPricing from "@/components/SectionPricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SectionProblem />
        <SectionSolution />
        <SectionSocialProof />
        <SectionCTA />
        <SectionPricing />
      </main>
      <Footer />
    </>
  );
}

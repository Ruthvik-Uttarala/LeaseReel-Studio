import { AccuracyPromise } from "./components/AccuracyPromise";
import { Audience } from "./components/Audience";
import { Deliverables } from "./components/Deliverables";
import { DemoShowcase } from "./components/DemoShowcase";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { FounderCard } from "./components/FounderCard";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { PortfolioCTA } from "./components/PortfolioCTA";
import { PricingCard } from "./components/PricingCard";
import { ProcessTimeline } from "./components/ProcessTimeline";
import { TrustStrip } from "./components/TrustStrip";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "LeaseReel Studio",
  url: "https://www.leasereelstudio.com/",
  email: "hello@leasereelstudio.com",
  description:
    "Done-for-you rental-property video production from approved property photography for rental-property managers.",
  areaServed: "United States",
  founder: { "@type": "Person", name: "Ruth" },
  offers: {
    "@type": "Offer",
    name: "Founding Property Campaign",
    price: "149",
    priceCurrency: "USD"
  }
};

export default function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navigation />
      <main id="main">
        <Hero />
        <TrustStrip />
        <DemoShowcase />
        <Deliverables />
        <Audience />
        <ProcessTimeline />
        <AccuracyPromise />
        <PricingCard />
        <PortfolioCTA />
        <FounderCard />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

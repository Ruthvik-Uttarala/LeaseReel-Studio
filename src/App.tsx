import { AccuracyPromise } from "./components/AccuracyPromise";
import { Deliverables } from "./components/Deliverables";
import { DemoShowcase } from "./components/DemoShowcase";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
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
    "Done-for-you property video production from approved listing photography for rental-property managers.",
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
        <ProcessTimeline />
        <AccuracyPromise />
        <PricingCard />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PricingBanner from "@/components/Pricing/PricingBanner/page";
import InvestmentStep from "@/components/Pricing/investmentStep/page";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <PricingBanner />
      <InvestmentStep />
      <Footer />
    </div>
  );
};

export default Pricing;

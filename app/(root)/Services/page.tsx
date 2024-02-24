import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Services/Products";
import ServiceOffering from "@/components/Services/ServiceOffering/page";
import ServicesBanner from "@/components/Services/ServicesBanner/page";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <ServicesBanner />
      <ServiceOffering />
      <div className="container my-12 flex items-center justify-center">
        <div className="bg-blue-600 px-5 py-3 rounded-2xl text-2xl text-white shadow-inner font-medium">
          This will go to a dedicated blog page for each
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
};

export default Pricing;

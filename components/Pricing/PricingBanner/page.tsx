import Glitcheffect from "@/components/GlitchEffect/page";

const PricingBanner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-[80vh] w-full">
        <div className="container grid grid-cols-2">
          <div className="flex flex-col items-start justify-center">
            <Glitcheffect name="Pricing..." />
            {/* <div className="font-mono text-4xl text-white py-12">
              About Us...
            </div> */}
            <div className="font-mono text-xl text-white py-3">
              We offer a variaty of pricing options to make digitalization
              available.
              <br />
              <br />
              It all depends on how much of your company processes you wish to
              digitalize and automate.
              <br />
              <br />
              From personal Information Website, to Blogs, ecommerce and ERP.
              <br />
              Do continue to browse to see what is applicable to you.
            </div>
          </div>
          <div
            style={{
              backgroundImage: 'url("/Assets/Pricing/Investment.svg")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            className="h-[80vh]"
          ></div>
        </div>
      </div>
      <div className="container relative top-[-60px]">
        <div className="bg-yellow-300 h-[130px] shadow-md rounded-2xl">
          <div className="grid grid-cols-3">
            <div className="text-center font-bold text-xl h-[120px] flex flex-col items-center justify-center">
              <span className="font-mono text-4xl text-center">10 +</span>
              Years of Extensive
              <br /> Experience
            </div>
            <div className="text-center font-bold text-xl h-[120px] flex flex-col items-center justify-center">
              Creative Design
            </div>
            <div className="text-center font-bold text-xl h-[120px] flex flex-col items-center justify-center">
              Client-Centric <br />
              Approach
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingBanner;

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
              We offer a variaty of pricing options to help you in your
              digitalization journey.
              <br />
              <br />
              Depending on which stage of your digitalization journey you are
              in,
              <br />
              <br />
              the investment can vary and thus, encourage you to please refer to
              our digitalization step guide below.
              <br />
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
    </>
  );
};

export default PricingBanner;

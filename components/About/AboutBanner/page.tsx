import Glitcheffect from "@/components/GlitchEffect/page";

const AboutBanner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-[80vh] w-full">
        <div className="container grid grid-cols-2">
          <div>
            <Glitcheffect name="About Us..." />
            {/* <div className="font-mono text-4xl text-white py-12">
              About Us...
            </div> */}
            <div className="font-mono text-xl text-white py-3">
              [Company Name] is a reputable web design and ERP solutions
              provider dedicated to delivering exceptional digital experiences.
              <br />
              <br />
              With our expertise and commitment to excellence, we offer
              comprehensive services that can cater to your website design and
              Enterprise Resource Planning (ERP) system needs.
            </div>
            <div
              className="h-[450px]"
              style={{
                backgroundImage: 'url("/Assets/About/Solar-system.svg")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div
            style={{
              backgroundImage: 'url("/Assets/About/Astronaut.svg")',
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
            className="h-[80vh]"
          ></div>
        </div>
      </div>
      <div className="container relative top-[-60px] bg-gray-400/50 rounded-xl filter:blur('10px')">
        <div className=" h-[130px]">
          <div className="grid grid-cols-3 gap-3 pt-1 place-content-between">
            <div className="text-center font-bold text-xl h-[120px] flex flex-col items-center justify-center bg-yellow-300 rounded-lg shadow-md">
              <span className="font-mono text-4xl text-center">10 +</span>
              Years of Extensive
              <br /> Experience
            </div>
            <div className="text-center font-bold text-xl h-[120px] flex flex-col items-center justify-center bg-yellow-300 rounded-lg shadow-md">
              Creative Design
            </div>
            <div className="text-center font-bold text-xl h-[120px] flex flex-col items-center justify-center bg-yellow-300 rounded-lg shadow-md">
              Client-Centric <br />
              Approach
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutBanner;

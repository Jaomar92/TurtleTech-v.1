import Glitcheffect from "@/components/GlitchEffect/page";

const CaseBanner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-[80vh] w-full">
        <div className="container grid grid-cols-1">
          <div>
            <Glitcheffect name="Here What We Have to Say..." />
            <h3 className="font-mono text-3xl text-white">Our Latest Post</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseBanner;

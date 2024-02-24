import Glitcheffect from "@/components/GlitchEffect/page";
import { Button } from "@/components/ui/button";
import React from "react";

const ServicesBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-[80vh] w-full">
      <div className="container grid grid-cols-2">
        <div className="flex flex-col items-start justify-center gap-5">
          <Glitcheffect name="Our Services.." />

          <div className="font-mono text-xl text-white py-3">
            [Company Name] is a reputable web design and ERP solutions provider
            dedicated to delivering exceptional digital experiences.
            <br />
            <br />
            With our expertise and commitment to excellence, we offer
            comprehensive services that can cater to your website design and
            Enterprise Resource Planning (ERP) system needs.
          </div>
          <div className=" w-[50%] flex items-center justify-around gap-5">
            <Button className="w-full text-lg px-8 py-6 rounded-xl">
              Hello
            </Button>
            <Button className="w-full text-lg px-8 py-6 rounded-xl">Bye</Button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: 'url("/Assets/Services/Service.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-[80vh]"
        ></div>
      </div>
    </div>
  );
};

export default ServicesBanner;

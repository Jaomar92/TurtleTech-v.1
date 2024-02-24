import React from "react";

const AboutCompany = () => {
  return (
    <div className="container">
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-2 gap-5 py-5">
          <div className="text-md font-mono mb-4 text-lg h-[350px] ">
            <div className="text-4xl font-mono py-4">Company</div>
            [Company Name] was officially estabilished in 2024 when the founders
            decided to offer a service to an under served market in Malaysia
            with lots of potentials.
          </div>
          <div
            className="text-center"
            style={{
              backgroundImage: 'url("/Assets/About/metaverso.svg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="grid grid-cols-2">
          <div
            style={{
              backgroundImage: 'url("/Assets/About/MarketLaunch.svg")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "cover",
            }}
          ></div>
          <div className="text-md font-mono mb-4 text-lg h-[350px]">
            <div className="text-4xl font-mono my-4">
              Our Aim and Objectives
            </div>
            [Company Name] was officially estabilished in 2024 when the founders
            decided to offer a service to an under served market in Malaysia
            with lots of potentials.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;

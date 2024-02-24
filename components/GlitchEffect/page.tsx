"use Client";

import "./Glitch.css";

const Glitcheffect = (prop: { name: string }) => {
  return (
    // <div className="container">
    <div className="glitch-wrapper flex items-center justify-center ">
      <div
        className="glitch relative text-[50px] font-bold leading-[1.2] text-white z-10"
        data-glitch={prop.name}
      >
        {prop.name}
      </div>
    </div>
    // </div>
  );
};

export default Glitcheffect;

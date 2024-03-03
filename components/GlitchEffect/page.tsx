"use Client";

import "./Glitch.css";

const Glitcheffect = (prop: { name: string }) => {
  return (
    // <div className="container">
    <
      // className = "glitch-wrapper flex items-center justify-center "
    >
      <div
        className="glitch relative text-xl font-bold leading-[1.0] text-white z-10"
        data-glitch={prop.name}
      >
        {prop.name}
      </div>
    </>
    // </div>
  );
};

export default Glitcheffect;

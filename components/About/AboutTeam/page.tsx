import React from "react";
import Carousel from "./Components/Carosel/page";

const AboutTeam = () => {
  return (
    <div className="bg-gray-950 text-white">
      <div className="container py-5">
        <div className="text-3xl font-mono py-5">The Team</div>
        <Carousel />
      </div>
    </div>
  );
};

export default AboutTeam;

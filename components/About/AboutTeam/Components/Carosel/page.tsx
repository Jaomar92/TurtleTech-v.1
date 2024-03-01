"use client";

// Carousel.tsx

import "./Carousel.css";

const TeamMembers = [
  {
    key: 1,
    name: "Jeffrey Aroun Bin Omar",
    role: "Fullstack Developer",
    moto: "Start First systemize once everyone see's the big picture.",
  },
  {
    key: 2,
    name: "Zackrey Zainol Bin Omar",
    role: "Business Developer",
    moto: "Yes, Jeffrey is my big brother. He knows what he is doing.",
  },
  {
    key: 3,
    name: "Daniel Sharkif",
    role: "Client Relations",
    moto: "Get the money rolling see it grow on your phone.",
  },
  {
    key: 4,
    name: "Tong",
    role: "IT Business Expert/Back-end Engineer",
    moto: "Ya Ampun Patik tidak mahir berbahasa pantun kepada yang maha mulia",
  },
  {
    key: 5,
    name: "Dita Claudia",
    role: "Art Director/Designer",
    moto: "I designed Coca-Cola's Ad campaigns in Indonesia",
  },
  {
    key: 6,
    name: "One more Team Member",
    role: "Copy Writer",
    moto: "Language is an Art form in itself. It tempts and sways to those oblivious to it.",
  },
];

const Carousel = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {TeamMembers.map((team) => {
          return (
            <div
              key={team.key}
              className="bg-slate-400/70 flex flex-col gap-3 font-mono items-start justify-between p-5 rounded-xl"
            >
              <div className="flex items-stretch justify-between w-full">
                <div className="text-2xl w-full h-full flex items-center">
                  {team.name}
                </div>
                <div className="bg-gray-300 h-28 w-40 rounded-full flex items-center justify-center">
                  <div className="text-center">Image is here</div>
                </div>
              </div>
              <div className="font-semibold text-lg">{team.role}</div>
              <div className="text-lg">{team.moto}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Carousel;

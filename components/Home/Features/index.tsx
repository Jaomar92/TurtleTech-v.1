import Image from "next/image";
import React from "react";
import HTML from "../../../public/Assets/Home/htmlLogo.svg";

const languageList = [
  {
    id: 1,
    name: "HTML",
    img: "/Assets/Home/htmlLogo.svg",
  },
  {
    id: 2,
    name: "CSS",
    img: "/Assets/Home/cssLogo.svg",
  },
  {
    id: 3,
    name: "Javascript",
    img: "/Assets/Home/javascript.svg",
  },
  {
    id: 4,
    name: "Postgresql",
    img: "/Assets/Home/postgresql.svg",
  },
];

const framworksList = [
  {
    id: 1,
    name: "Next.js",
    img: "/Assets/Home/next.svg",
  },
  {
    id: 2,
    name: "React",
    img: "/Assets/Home/reactjs.svg",
  },
  {
    id: 3,
    name: "django",
    img: "/Assets/Home/django.svg",
  },
];
const framworksList2 = [
  {
    id: 1,
    name: "Node.js",
    img: "/Assets/Home/nodejs.svg",
  },
  {
    id: 2,
    name: "Express.js",
    img: "/Assets/Home/expressjs.svg",
  },
];

const Features = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="text-3xl font-mono pt-12 pb-2 text-center md:text-left">
        We provide Services in a variaty of programing languages
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 h-fit w-fit py-3 place-content-center">
        {languageList.map((item) => (
          <div className="flex-col py-6" key={item.id}>
            <div
              className="relative"
              style={{
                backgroundImage: `url(${item.img})`,
                height: "120px",
                width: "150px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <p className="text-lg font-semibold text-center pt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="text-2xl font-mono">Frameworks include</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        {framworksList.map((item) => (
          <div className="flex-col py-6" key={item.id}>
            <div
              className="relative"
              style={{
                backgroundImage: `url(${item.img})`,
                height: "120px",
                width: "150px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <p className="text-lg font-semibold text-center pt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6">
        {framworksList2.map((item) => (
          <div className="flex-col" key={item.id}>
            <div
              className="relative"
              style={{
                backgroundImage: `url(${item.img})`,
                height: "120px",
                width: "150px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center",
              }}
            ></div>
            <p className="text-lg font-semibold text-center pt-2">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      {/* <div className="text-2xl font-mono text-center py-5">
        Database
        <div
          className="flex gap-3  hover:bg-gray-200 hover:shadow-md rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/supabase.svg")',
            height: "150px",
            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div> */}
      <div className="font-mono text-2xl py-8 text-center">
        Click to see what kind of applications
        <br /> we envision utilizing code in everyday businesses!
      </div>
    </div>
  );
};

export default Features;

"use client";

const AnimatedScroll = () => {
  return (
    <div className="max-w-[800px]  min-w-[250px] flex items-center justify-start overflow-hidden ">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[5rem] animate-infinite-scroll">
          <li>
            <img src="./Assets/Home/Backend.svg" alt="Facebook" />
          </li>
          <li>
            <img src="./Assets/Home/Frontend.svg" alt="Disney" />
          </li>
          <li>
            <img src="./Assets/Home/Fullstack.svg" alt="Airbnb" />
          </li>

          <li>
            <img src="./Assets/Home/Backend.svg" alt="Facebook" />
          </li>
          <li>
            <img src="./Assets/Home/Frontend.svg" alt="Disney" />
          </li>
          <li>
            <img src="./Assets/Home/Fullstack.svg" alt="Airbnb" />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[5rem] animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <img src="./Assets/Home/Backend.svg" alt="Facebook" />
          </li>
          <li>
            <img src="./Assets/Home/Frontend.svg" alt="Disney" />
          </li>
          <li>
            <img src="./Assets/Home/Fullstack.svg" alt="Airbnb" />
          </li>

          <li>
            <img src="./Assets/Home/Backend.svg" alt="Facebook" />
          </li>
          <li>
            <img src="./Assets/Home/Frontend.svg" alt="Disney" />
          </li>
          <li>
            <img src="./Assets/Home/Fullstack.svg" alt="Airbnb" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnimatedScroll;

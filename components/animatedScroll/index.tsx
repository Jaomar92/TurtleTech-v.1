"use client";

import Image from "next/image";

const AnimatedScroll = () => {
  return (
    <div className="max-w-[800px]  min-w-[250px] flex items-center justify-start overflow-hidden ">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[5rem] animate-infinite-scroll">
          <li>
            <Image
              src="./Assets/Home/Backend.svg"
              alt="Facebook"
              width={200}
              height={200}
            />
          </li>

          <li>
            <Image
              src="./Assets/Home/Frontend.svg"
              alt="Disney2"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Fullstack.svg"
              alt="Airbnb"
              width={200}
              height={200}
            />
          </li>

          <li>
            <Image
              src="./Assets/Home/Backend.svg"
              alt="Facebook"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Frontend.svg"
              alt="Disney"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Fullstack.svg"
              alt="Airbnb"
              width={200}
              height={200}
            />
          </li>
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-[5rem] animate-infinite-scroll"
          aria-hidden="true"
        >
          <li>
            <Image
              src="./Assets/Home/Backend.svg"
              alt="Facebook"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Frontend.svg"
              alt="Disney"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Fullstack.svg"
              alt="Airbnb"
              width={200}
              height={200}
            />
          </li>

          <li>
            <Image
              src="./Assets/Home/Backend.svg"
              alt="Facebook"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Frontend.svg"
              alt="Disney"
              width={200}
              height={200}
            />
          </li>
          <li>
            <Image
              src="./Assets/Home/Fullstack.svg"
              alt="Airbnb"
              width={200}
              height={200}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AnimatedScroll;

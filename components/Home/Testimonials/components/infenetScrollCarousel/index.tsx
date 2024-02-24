"use client";

import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import "./sliderCarousel.css";

const Testimonials = [
  {
    id: 1,
    name: "Jeffrey",
    img: "/Assets/Home/Testimonials/Jeffrey.png",
    review:
      "It was awesome working Turtle Tech, they were essential in solidifying my ideas.",
  },
  {
    id: 2,
    name: "Arif",
    img: "/Assets/Home/Testimonials/Ariff.png",
    review:
      "I am familar with programing but these guys were able to clean up my code and make it more readable.",
  },
  {
    id: 3,
    name: "Dannon",
    img: "/Assets/Home/Testimonials/Dannon.png",
    review:
      "I had a design that many programers rejected due to the amount of animations they recommended Next.js to me that made my portfolio website more scalable.",
  },
];

// Defining initial Slide State

let count = 0;
let slideInterval: any;

const InfiniteScrollCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const removeAnimation = () => {
    sliderRef?.current?.classList.remove("fade-anim");
  };

  useEffect(() => {
    sliderRef?.current?.addEventListener("animationend", removeAnimation);
    // sliderRef?.current?.addEventListener("mouseenter", PauseSlider);
    // sliderRef?.current?.addEventListener("mouseleave", StartSlider);

    StartSlider();
    return () => {
      pauseSlider();
    };
  }, []);

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const StartSlider = () => {
    slideInterval = setInterval(() => {
      handleNext();
    }, 6000);
  };

  const PauseSlider = () => {
    clearInterval(slideInterval);
  };
  const handleNext = () => {
    count = (count + 1) % Testimonials.length;
    setCurrentIndex(count);
    sliderRef?.current?.classList.add("fade-anim");
  };
  const handlePrevious = () => {
    const TestimonialLength = Testimonials.length;
    count = (currentIndex + TestimonialLength - 1) % TestimonialLength;
    setCurrentIndex(count);
  };

  return (
    <>
      <div className="w-full h-full select-none relative flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex items-center justify-center gap-6 bg-gray-200/70 w-[600px] rounded-2xl shadow-md p-4"
        >
          <div>
            <div className="text-2xl font-mono">
              {Testimonials[currentIndex].name}
            </div>

            <Image
              src={Testimonials[currentIndex].img}
              width={100}
              height={100}
              alt={`Picture of ${Testimonials[currentIndex].name}`}
              className="rounded-full shadow-sm"
            />
          </div>

          <div className="max-w-[300px] min-w-[200px] text-lg h-[300px] flex items-center justify-center">
            {Testimonials[currentIndex].review}
          </div>
        </div>
        <div
          className=" 
        absolute 
        w-full
        top-1/2
        transform
        translate-y-1/2
        px-3
        flex
        justify-between
        items-center
        "
        >
          <Button variant="secondary" onClick={handlePrevious}>
            Previous
          </Button>
          <Button variant="secondary" onClick={handleNext}>
            Next
          </Button>
        </div>
        {/* {Testimonials.map((item) => {
        return (
          <div key={item.id} className="flex flex-col gap-1 py-3">
          <div className="font-mono text-lg">{item.name}</div>
          <div className="font-mono">{item.review}</div>
          </div>
          );
        })} */}
      </div>
      {/* AnimatedScroll -- Start */}

      {/* AnimatedScroll -- End */}
    </>
  );
};

export default InfiniteScrollCarousel;

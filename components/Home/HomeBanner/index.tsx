import React from "react";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import Glitcheffect from "@/components/GlitchEffect/page";

const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-[80vh] w-full">
      <div
        className="
    container 
    h-full 
    text-white 
    text-3xl 
    font-bold
    "
        style={{
          backgroundImage: "url('/Assets/Home/typing-bro.svg')",
          backgroundSize: "contain",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",

          // ... other styles
        }}
      >
        <div className="grid grid-cols-2">
          <div className=" h-[700px] w-[100%] ">
            <div className=" h-full flex flex-col justify-center gap-12 items-start">
              <div className="flex">
                <p className="text-4xl font-mono">
                  Welcome to,
                  <Glitcheffect name="Turtle Tech!" />
                </p>
              </div>
              <p className="font-mono text-2xl">
                Your Digitalization Partner for your digitalization
                transformation!
              </p>
              <div className="grid md:grid-cols-3 grid-cols-1 w-[80%] gap-2">
                <div className="w-full">
                  <Card className="shadow-md bg-orange-200/60 border-none">
                    <CardHeader>
                      <div
                        className="h-[70px] w-full"
                        style={{
                          backgroundImage: "url('/Assets/Home/Frontend.svg')",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </CardHeader>
                    <CardTitle className="text-center pb-5 font-mono text-xl ">
                      Front-End Development
                    </CardTitle>
                  </Card>
                </div>
                <div className="w-full">
                  <Card className="shadow-md bg-orange-200/60 border-none">
                    <CardHeader>
                      <div
                        className="h-[70px] w-full"
                        style={{
                          backgroundImage: "url('/Assets/Home/Backend.svg')",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </CardHeader>
                    <CardTitle className="text-center pb-5 font-semibold text-xl ">
                      Back-End
                      <br /> Development
                    </CardTitle>
                  </Card>
                </div>
                <div className="w-full">
                  <Card className="shadow-md bg-orange-200/60 border-none">
                    <CardHeader>
                      <div
                        className="h-[70px] w-full"
                        style={{
                          backgroundImage: "url('/Assets/Home/FullStack.svg')",
                          backgroundSize: "contain",
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                        }}
                      ></div>
                    </CardHeader>
                    <CardTitle className="text-center pb-5 font-semibold text-xl ">
                      FullStack Development
                    </CardTitle>
                  </Card>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary">Start Here</Button>
                <Button variant="link">See Our Works</Button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

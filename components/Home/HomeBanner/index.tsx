import React from "react";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import Glitcheffect from "@/components/GlitchEffect/page";

const HomeBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 from-5% via-red-500 via-50% to-orange-500 to-90% h-fit w-full">
      <div>
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
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className=" h-fit w-[100%] py-12 ">
              <div className=" h-full flex flex-col justify-center gap-12 items-start  p-4 md:p-0 backdrop-blur-xl md:backdrop-blur-none rounded-md shadow-lg md:shadow-none">
                <div className="flex flex-col">
                  <p className="text-4xl font-mono text-center md:text-left py-3">
                    Welcome to,
                  </p>
                  <Glitcheffect name="Turtle Tech!" />
                </div>
                <p className="font-mono text-3xl md:text-2xl text-center md:text-left">
                  Your Digitalization Partner for your digital transformation!
                </p>
                <div className=" md:grid-cols-3 grid-cols-1 w-[80%] gap-2 hidden md:grid">
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
                            backgroundImage:
                              "url('/Assets/Home/FullStack.svg')",
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
                <div className="flex gap-3 items-center justify-center w-full md:items-start md:justify-start">
                  <Button variant="secondary">Start Here</Button>
                  <Button variant="link">See Our Works</Button>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const AboutProjects = () => {
  return (
    <div className="container py-5">
      <div className="font-mono text-3xl pb-3">Our Projects</div>
      <div className="grid grid-rows-1 gap-5">
        <div>
          <div className="text-xl font-mono">Personal Website</div>
          <div className="flex gap-2">
            <div className="w-full py-3">
              <p className="font-mono">
                This project scope comes down to presentation by arranging
                enggaging elements such as pictures, animations, color-schema
                and font-Designs.
                <br />
                <br />
                Our cheapest and early entry product for anyone wishing to get
                into digitalization.
              </p>
              <h4 className="py-3 font-mono text-lg">Applications include:-</h4>
              <ul className="list-disc px-8 font-mono">
                <li>Portfolio</li>
                <li>Company/Product information</li>
                <li>Company information</li>
                <li>Bloging / Journalism</li>
                <li>About Me Website</li>
              </ul>
              <div className="">
                <Button variant="link" className="px-8">
                  Read more
                </Button>
              </div>
            </div>
            <div className="w-[50%] ">
              <Image
                className="rounded-2xl shadow-md"
                src="/Assets/About/Projects/kelly-sikkema.jpg"
                height={500}
                width={500}
                alt="Photo by Kelly Sikkema from unSplash"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-mono py-3">
            Personal Ecommerce Website
          </div>
          <div className="flex gap-2">
            <div className="w-[50%]">
              <Image
                className="rounded-2xl shadow-md"
                src="/Assets/About/Projects/rupixen-com.jpg"
                height={500}
                width={500}
                alt="Photo by Rupixen.com from unSplash"
              />
            </div>
            <div className="w-full h-12  px-3">
              <p className="font-mono">
                A step above of a personal website where inventory count,
                product listing and payment gateway via stripe is integrated.
                <br />
                <br />
                This option is aimed at providing business a digital front to
                reach more sales.
              </p>
              <p className="py-5 font-mono">This Package includes:-</p>
              <ul className="list-disc px-8 font-mono">
                <li>One-time payment</li>
                <li>Order listing</li>
                <li>Product uploading</li>
                <li>User Authentication</li>
              </ul>
              <div className="">
                <Button variant="link" className="">
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-mono">CMS Website</div>
          <div className="flex gap-2">
            <div className="w-full h-12 ">
              <p className="font-mono py-2">
                Wish to have a training website or teach people a certain skill
                and have control over your users. This product is meant to
                provide a subscription service to their audiances.
              </p>
              <p className="font-mono py-2">Applications include:-</p>
              <ul className="list-disc px-8 font-mono">
                <li>Online class and training</li>
                <li>Content Creation</li>
                <li>Software as a Service (SaaS)</li>
                <li>Bloging Platform</li>
              </ul>
              <p className="font-mono py-2">
                Prices for this service is not fixed and depends greatly on the
                amount of features needed per project.
              </p>
              <div className="">
                <Button variant="link" className="">
                  Read more
                </Button>
              </div>
            </div>
            <div className="w-[50%] ">
              <Image
                className="rounded-2xl shadow-md"
                src="/Assets/About/Projects/alvaro-reyes.jpg"
                height={500}
                width={500}
                alt="Photo by Rupixen.com from unSplash"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-mono">Company Admin Dashboard</div>
          <div className="flex gap-2">
            <div className="w-[50%] ">
              <Image
                className="rounded-2xl shadow-md"
                src="/Assets/About/Projects/luke-chesser.jpg"
                height={500}
                width={500}
                alt="Photo by Rupixen.com from unSplash"
              />
            </div>
            <div className="w-full h-12 px-3">
              <p className="font-mono py-2">
                This Service requires the use of a Backend Data center before it
                can be implemented but is the second step in developing an AI
                model to automate task.
              </p>
              <p className="font-mono py-2">
                Get control of the business data your company has been able to
                generate and receive automated reports and have be presented in
                a way you want it to be presented.
              </p>
              <p className="font-mono py-2">
                Have the ability to see performance and as well soon be able to
                make predictions. To be able to better prepare for your business
                direction.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-mono">AI Model</div>
          <div className="flex gap-2">
            <div className="w-full h-12 ">
              <p className="font-mono py-2">
                This product depends on how much digitalized data has been
                accumulated and requires the use of Python programing. The more
                data that is obtained the more accurate as it is the main tool
                to teach the computer to make predictions.
              </p>
              <p className="font-mono py-2">Applications:-</p>
              <ul className="list-disc px-8 font-mono">
                <li>
                  Credit Score.
                  <br /> Predict client turnover
                </li>
                <li>Customer Churn</li>
                <li>Stock price Predictions</li>
                <li>Customer Service Automation</li>
                <li>Company Report automation</li>
              </ul>
              <p className="font-mono py-2">
                Pricing for this service varies depending on application and
                amount of analysis.
              </p>
            </div>
            <div className="w-[50%] ">
              <Image
                className="rounded-2xl shadow-md"
                src="/Assets/About/Projects/igor-omilaev.jpg"
                height={500}
                width={500}
                alt="Photo by Rupixen.com from unSplash"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-mono">Backend Data Center</div>
          <div className="flex gap-2">
            <div className="w-[50%] ">
              <Image
                className="rounded-2xl shadow-md"
                src="/Assets/About/Projects/ramon-salinero.jpg"
                height={500}
                width={500}
                alt="Photo by Rupixen.com from unSplash"
              />
            </div>
            <div className="w-full h-12 px-3">
              <p className="font-mono py-2">
                This product looks at developing a digital brain for your
                business but only up to the point of being able to remember
                things. It is effective as it enables companies to effectively
                file and keep records.
                <br />
                <br />
                In which we will be able to use and manipulate later on further
                business transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProjects;

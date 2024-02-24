const About = () => {
  return (
    <div className="container">
      <div className=" grid grid-cols-2 py-5 items-stretch gap-8">
        <div>
          <div className="text-2xl font-mono">About Us...</div>
          <div className="text-md font-mono">
            <p>
              <br />
              We are a team experienced individuals with business administration
              and processes.
              <br />
              <br />
              Our aim is to provide digitalization service through programing
              and coding to enable businesses the ability to automate and reach
              out to more markets otherwise unavailable.
              <br />
              <br />
              We are pretty flexible to work with. We just need an Idea and we
              can work out the configuration.
            </p>
            <p className="hover:underline hover:cursor-pointer pt-12">
              Read More About Us...
            </p>
          </div>
        </div>
        <div
          className="h-[400px] bg-slate-100 rounded-xl shadow-lg"
          style={{
            backgroundImage: 'url("/Assets/Home/About-us.svg")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="h-[400px] bg-slate-100 rounded-xl shadow-lg"
          style={{
            backgroundImage: 'url("/Assets/Home/Services.svg")',
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div>
          <div className="text-2xl font-mono pb-5">
            Scope of Services Offered...
          </div>
          <div className="text-md font-normal">
            <div>
              <ul className="list-disc pl-5 font-mono text-lg">
                <li>
                  <span className="font-bold">Website Design:</span> A Crucial
                  aspect of creating a strong online presences.{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
                <li>
                  <span className="font-bold">Hosting Services:</span>{" "}
                  Infrastructure and resources to make websites accessible
                  online.{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
                <li>
                  <span className="font-bold">Website Development:</span>{" "}
                  Available in ReactJs, Wordpress-Elementor or Wix.{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
                <li>
                  <span className="font-bold">
                    SEO(Search Engine Optimization):
                  </span>{" "}
                  Strategies and techinques to improve a website's visibility
                  and rankings on search engine results pages, driving organic
                  traffic and maximizing online presence.{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
                <li>
                  <span className="font-bold">ERP System Development:</span>{" "}
                  Design and implement Enterprise Resource Planning(ERP) systems
                  to streamline business processes, enhance efficiency, and
                  improve overall operations.{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
                <li>
                  <span className="font-bold">Cybersecurity Software:</span>{" "}
                  Implement robust security measures and software solutions to
                  protect digital assets, networks, and sensitive information
                  from cyber threats.{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
                <li>
                  <span className="font-bold">Digital Database Capture</span>{" "}
                  <span className="font-mono hover:underline hover:cursor-pointer">
                    Read More...
                  </span>
                </li>
              </ul>
            </div>
            <p className="hover:underline hover:cursor-pointer pt-12">
              Read More About Us...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Features = () => {
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="text-3xl font-mono pt-12 pb-2">
        We provide Services in a variaty of programing languages
      </div>
      <div className="flex gap-5 py-3 items-stretch">
        <div className="flex gap-3 hover:bg-gray-200 hover:shadow-md p-3 rounded-xl transition duration-280 ease-in-out">
          <div className="text-lg font-bold text-center">
            <div
              style={{
                backgroundImage: 'url("/Assets/Home/htmlLogo.svg")',
                height: "90px",
                width: "70px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            HTML
          </div>

          <div className="text-lg font-bold text-center">
            <div
              style={{
                backgroundImage: 'url("/Assets/Home/cssLogo.svg")',
                height: "90px",
                width: "70px",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            CSS
          </div>
        </div>
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md p-3 rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/javascript.svg")',

            width: "150px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md p-3 rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/pythonLogo.svg")',

            width: "150px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md p-3 rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/postgresql.svg")',

            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="text-2xl font-mono">Frameworks include</div>
      <div className="flex gap-5 py-3">
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md p-3 rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/next.svg")',

            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/reactjs.svg")',
            height: "150px",
            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/django.svg")',
            height: "150px",
            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="flex gap-5">
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/nodejs.svg")',
            height: "150px",
            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="flex gap-3 hover:bg-gray-200 hover:shadow-md rounded-xl transition duration-280 ease-in-out"
          style={{
            backgroundImage: 'url("/Assets/Home/expressjs.svg")',
            height: "150px",
            width: "180px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="text-2xl font-mono text-center py-5">
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
      </div>
      <div className="font-mono text-2xl pb-8 text-center">
        Click to see what kind of applications
        <br /> we envision utilizing code in everyday businesses!
      </div>
    </div>
  );
};

export default Features;

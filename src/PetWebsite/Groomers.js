import React from "react";
import g1 from "../assets/G1.png";
import g2 from "../assets/G2.png";
import g3 from "../assets/G3.png";
import g4 from "../assets/G4.png";

const Groomers = () => {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="my-5 w-11/12 min-h-[80%] lg:h-fit bg-red-100 m-auto p-2 rounded-3xl">
        <h4 className="mt-10 text-center text-base md:text-xl text-orange-500 font-bold">
          Our Team
        </h4>
        <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl text-indigo-950 font-bold text-center ">
          Meet Our Groomers
        </h2>
        {/* Card Section Starts Here */}
        <div className="my-10 flex flex-wrap justify-center overflow-x-auto gap-2 gap-y-5 gap-x-10">
          {/* Single Card */}
          <div className="w-56 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover:bg-green-300 duration-300 rounded-full">
            <div className="w-40 h-40 rounded-full mt-7 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={g1}
                alt="service-icon"
              />
            </div>
            <h2 className="mt-5 text-2xl text-indigo-950 font-bold">Rosalina Wiliam</h2>
            <p className="my-1 text-base text-orange-500 font-semibold">
            CEO & Founder
            </p>
          </div>
          {/* Single Card End */}
          {/* Single Card */}
          <div className="w-56 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover:bg-green-300 duration-300 rounded-full">
            <div className="w-40 h-40 rounded-full mt-7 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={g2}
                alt="service-icon"
              />
            </div>
            <h2 className="mt-5 text-2xl text-indigo-950 font-bold">Rosalina Wiliam</h2>
            <p className="my-1 text-base text-orange-500 font-semibold">
            CEO & Founder
            </p>
          </div>
          {/* Single Card End */}
          {/* Single Card */}
          <div className="w-56 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover:bg-green-300 duration-300 rounded-full">
            <div className="w-40 h-40 rounded-full mt-7 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={g3}
                alt="service-icon"
              />
            </div>
            <h2 className="mt-5 text-2xl text-indigo-950 font-bold">Rosalina Wiliam</h2>
            <p className="my-1 text-base text-orange-500 font-semibold">
            CEO & Founder
            </p>
          </div>
          {/* Single Card End */}
          {/* Single Card */}
          <div className="w-56 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover:bg-green-300 duration-300 rounded-full">
            <div className="w-40 h-40 rounded-full mt-7 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={g4}
                alt="service-icon"
              />
            </div>
            <h2 className="mt-5 text-2xl text-indigo-950 font-bold">Rosalina Wiliam</h2>
            <p className="my-1 text-base text-orange-500 font-semibold">
            CEO & Founder
            </p>
          </div>
          {/* Single Card End */}
        </div>
      </div>
    </div>
  );
};

export default Groomers;

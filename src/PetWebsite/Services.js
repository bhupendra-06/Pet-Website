import React from "react";
import si1 from "../assets/service-image-1.png";
import si2 from "../assets/service-image-2.png";
import si3 from "../assets/service-image-3.png";
import si4 from "../assets/service-image-4.png";

const Services = () => {
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <div className="my-5 w-11/12 min-h-[80%] lg:h-fit bg-red-100 m-auto p-2 rounded-3xl">
        <h4 className="mt-10 text-center text-base md:text-xl text-orange-500 font-bold">
          Care For Your Pet
        </h4>
        <h2 className="mt-2 text-4xl sm:text-5xl md:text-6xl text-indigo-950 font-bold text-center ">
          What We Do
        </h2>
        {/* Card Section Starts Here */}
        <div className="my-10 flex flex-wrap justify-center gap-y-5 gap-x-10">
          {/* Single Card */}
          <div className="w-60 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover-gradient-background rounded-3xl">
            <div className="w-28 h-28 rounded-full mt-5 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={si1}
                alt="service-icon"
              />
            </div>
            <h2 className="text-2xl text-indigo-950 font-bold">Pet Grooming</h2>
            <p className="my-2 text-lg text-slate-500">
              There are many variatio of passage of Lorem for a Ipsum available
            </p>
          </div>
          {/* Single Card End */}
          {/* Single Card */}
          <div className="w-60 h-80 shadow-gray-400 mb-5 shadow-lg  text-center p-2 gradient-background rounded-3xl">
            <div className="my-5 w-20 h-20 rounded-full mt-5 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={si2}
                alt="service-icon"
              />
            </div>
            <h2 className="text-2xl text-white font-bold">Veterinary</h2>
            <p className="my-2 text-lg text-slate-100">
              There are many variatio of passage of Lorem for a Ipsum available
            </p>
          </div>
          {/* Single Card End */}
          {/* Single Card */}
          <div className="w-60 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover-gradient-background rounded-3xl">
            <div className="w-28 h-28 rounded-full mt-5 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={si3}
                alt="service-icon"
              />
            </div>
            <h2 className="text-2xl text-indigo-950 font-bold">Dog Setting</h2>
            <p className="my-2 text-lg text-slate-500">
              There are many variatio of passage of Lorem for a Ipsum available
            </p>
          </div>
          {/* Single Card End */}
          {/* Single Card */}
          <div className="w-60 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover-gradient-background rounded-3xl">
            <div className="w-28 h-28 rounded-full mt-5 mx-auto">
              <img
                className="w-full h-full object-contain"
                src={si4}
                alt="service-icon"
              />
            </div>
            <h2 className="text-2xl text-indigo-950 font-bold">Healthy Meals</h2>
            <p className="my-2 text-lg text-slate-500">
              There are many variatio of passage of Lorem for a Ipsum available
            </p>
          </div>
          {/* Single Card End */}
        </div>
      </div>
    </div>
  );
};

export default Services;

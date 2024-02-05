import React from "react";
import HeroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <>
      {/* Hero section START */}
      <div className="w-full min-h-fit p-[5%] sm:p-14 md:flex md:items-center md:justify-around lg:py-2">
        <div className="w-full sm:w-[560px] md:m-0 md:w-[300px] lg:w-[450px] lg:mr-10">
          <h2 className="text-indigo-950  text-6xl font-bold md:text-5xl lg:text-7xl">
            For Your Pet’s Natural Life & Care
          </h2>
          <p className="text-start text-slate-500 my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt
          </p>
          <div>
            <button className="gradient-background text-white shadow-sm custom-shadow text-sm font-semibold mr-1 px-4 py-2 rounded-full">
              Our Services
            </button>
            <button className="custom-green-btn text-white shadow-sm custom-shadow text-sm font-semibold m-1 px-4 py-2 rounded-full">
              Make Appointment
            </button>
          </div>
        </div>
        <div className="lg:w-[500px]  md:w-[350px] custom-dog-background">
          <img src={HeroImage} alt="hero-dog" className="w-full" />
        </div>
      </div>
      {/* Hero section END */}
    </>
  );
};

export default Hero;

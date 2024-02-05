import React from "react";
import HeroImage from "../assets/about-image.png";
import feetIcon from "../assets/feet-icon.png";

const About = () => {
  return (
    <>
      <div className=" w-full min-h-screen p-[5%] md:py-4 sm:p-14 md:flex md:items-center md:justify-around lg:py-2">
        <div className="w-full mx-auto sm:w-[560px] md:m-0 md:w-[400px] lg:w-[600px] lg:mr-10">
          <h4 className="text-start text-base md:text-xl text-orange-500 font-bold">
            Our Success Story{" "}
          </h4>
          <h2 className="mt-3 text-indigo-950 font-bold text-4xl sm:text-4xl lg:text-6xl">
            Experience Vet Clinic And Services{" "}
          </h2>
          <p className="text-start text-slate-500 my-4">
            Aliquam erat volutpat In id fermentum augue, ut pellentesque
            Maecenas at arcu risus. Donec commodo sodales ex, scelerisque
            laoreet nibh hakso hendrerit id.
          </p>
          <li className="list-none flex justify-start">
            <img src={feetIcon} alt="feet-icon" className="w-4 h-4 my-2"/>
            <h4 className="font-semibold m-1">Donec commodo scelerisque laoreet.</h4>
          </li>
          <li className="list-none flex justify-start">
            <img src={feetIcon} alt="feet-icon" className="w-4 h-4 my-2"/>
            <h4 className="font-semibold m-1">In aliquet magna nec lobortis maximus.</h4>
          </li>
          {/* <li className="list-none flex justify-start">
            <img src={feetIcon} alt="feet-icon" className="w-4 h-4 m-2"/>
            <h4 className="font-semibold m-1">Etiam dolor nec elementum ipsum convall Maecenas</h4>
          </li> */}
            <button className="gradient-background text-white shadow-sm custom-shadow text-sm font-semibold mr-1 mt-4 px-4 py-2 rounded-full">
              Know More About Us
            </button>
        </div>
        <div className="text-center mx-auto mt-10 sm:mt-5 md:mt-0 md:mx-0 w-60 sm:w-80 custom-dog-background">
          <img src={HeroImage} alt="hero-dog" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default About;

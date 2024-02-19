import React from "react";
import GroomerCard from "./GroomerCard";
import g1 from "../assets/G1.png";
import g2 from "../assets/G2.png";
import g3 from "../assets/G3.png";
import g4 from "../assets/G4.png";

const cards = [
  {
    name: "Bhupendra",
    role: "CEO & Founder",
    img: g1,
  },
  {
    name: "Rosalina Wiliam",
    role: "CEO & Founder",
    img: g2,
  },
  {
    name: "Bhupendra",
    role: "Frontend Developer",
    img: g3,
  },
  {
    name: "Bhupendra",
    role: "Backend Developer",
    img: g4,
  },
];

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
          <GroomerCard props={cards} />
        </div>
        {/* End of Card Section */}
      </div>
    </div>
  );
};

export default Groomers;

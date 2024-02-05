import React from "react";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Groomers from "./Groomers";

const PetBliss = () => {
  return (
    <>
      <div className="w-full h-auto bg-custom-bg ">
      <Home/>
      <Services/>
      <About/>
      <Groomers/>
      </div>
    </>
  );
};

export default PetBliss;

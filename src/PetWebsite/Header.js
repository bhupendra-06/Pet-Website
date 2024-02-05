import React from "react";

const Header = () => (
  <>
    {/* Header section starts here */}
    <header className=" bg-slate-200 w-full h-auto p-2 flex items-center justify-between md:px-12">
      <div className="text-2xl font-bold custom-font tracking-wide">
        <span className="text-orange-500">Pet</span>
        <span className="text-lime-500">Bliss</span>
      </div>
      <div className="hidden md:flex text-base font-semibold list-none text-indigo-950">
        <li className="p-2">Start</li>
        <li className="p-2">Services</li>
        <li className="p-2">About</li>
        <li className="p-2">News</li>
        <li className="p-2">Contact</li>
      </div>
      <div className="flex items-center">
        <div className="gradient-background text-white shadow-sm custom-shadow-red text-sm font-semibold px-4 py-[8px] rounded-full cursor-pointer">
          Get Started
        </div>
        <div className="md:hidden text-3xl ml-1">&equiv;</div>
      </div>
    </header>
    {/* Header section ends here */}

  </>
);

export default Header;

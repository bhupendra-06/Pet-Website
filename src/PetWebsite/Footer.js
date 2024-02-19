import React from "react";

const Footer = () => {
  return (
    <>
      <div className="m-14 px-4 sm:px-14 mx-auto grid justify-center min-[510px]:grid-cols-2 min-[700px]:grid-cols-4 bg-red-50">
        <div className="m-2">
          <div className="text-2xl font-bold custom-font tracking-wide">
            <span className="text-black">Pet</span>
            <span className="text-orange-500">Bliss</span>
          </div>
          <p className="text-lg text-slate-500 hidden min-[510px]:block sm:max-w-52">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className="m-2">
          <h4 className="text-2xl font-semibold text-indigo-950">Address</h4>
          <ul>
            <li className="text-lg text-slate-500">+23 000 485 29</li>
            <li className="text-lg text-slate-500">pet@care.com</li>
            <li className="text-lg text-slate-500">
              128 king street, Melbrown
            </li>
            <li className="text-lg text-slate-500">Victoria 3000, Australia</li>
          </ul>
        </div>
        <div className="m-2">
          <h4 className="text-2xl font-semibold text-indigo-950">Links</h4>
          <ul>
            <li className="text-lg text-slate-500">About Us</li>
            <li className="text-lg text-slate-500">Groomers</li>
            <li className="text-lg text-slate-500">Contact Us</li>
            <li className="text-lg text-slate-500">Privacy Policy</li>
            <li className="text-lg text-slate-500">Tearms</li>
          </ul>
        </div>
        <div className="m-2">
          <h4 className="text-2xl font-semibold text-indigo-950">
            Opening Hours
          </h4>
          <ul>
            <li className="text-lg text-slate-500">
              Monday-Tuesday 09:00-18:00
            </li>
            <li className="text-lg text-slate-500">Wednesday 09:00-18:00</li>
            <li className="text-lg text-slate-500">
              Thrusday-Friday 09:00-18:00
            </li>
            <li className="text-lg text-slate-500">Saturday 10:00-17:00</li>
            <li className="text-lg text-slate-500">Sunday 10:30-16:00</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React from "react";

const GroomerCard = ({ props }) => {
  return (
    // <div className="w-56 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover:bg-green-300 duration-300 rounded-full">
    //   <div className="w-40 h-40 rounded-full mt-7 mx-auto">
    //     <img
    //       className="w-full h-full object-contain"
    //       src={props.img}
    //       alt="service-icon"
    //     />
    //   </div>
    //   <h2 className="mt-5 text-2xl text-indigo-950 font-bold">{props.name}</h2>
    //   <p className="my-1 text-base text-orange-500 font-semibold">{props.role}</p>
    // </div>

    props.map((item) => {
      return (
        <div className="w-56 h-80 shadow-gray-400 mb-5 shadow-lg text-center p-2 bg-white hover:bg-green-300 duration-300 rounded-full">
          <div className="w-40 h-40 rounded-full mt-7 mx-auto">
            <img
              className="w-full h-full object-contain"
              src={item.img}
              alt="service-icon"
            />
          </div>
          <h2 className="mt-5 text-2xl text-indigo-950 font-bold">
            {item.name}
          </h2>
          <p className="my-1 text-base text-orange-500 font-semibold">
            {item.role}
          </p>
        </div>
      );
    })
  );
};

export default GroomerCard;

import React from 'react';
import image from "../Assests/headphone.jpg";

const Heroimg = () => {
  return (
    <div className="w-[90%] bg-yellow-50 m-auto h-[220px] flex flex-col md:flex-row mt-2 justify-between items-center">
      <div className="w-[100%] md:w-[30%] md:ml-[12%]">
        <div className="whitespace-normal pt-[15%] font-bold text-2xl text-green-800">
          <h1>Get Upto 50% off on Selected Headphones</h1>
        </div>
        <div>
          <button className="bg-green-800 text-white rounded-xl items-center p-[8px] pl-[15px] pr-[15px] pb-[8px] mt-[8%]">Buy Now</button>
        </div>
      </div>
      <div className="w-[100%] md:w-[70%] mt-2 md:mt-0 md:ml-[2rem] md:mr-[-2rem] hidden md:flex justify-center">
        <img className="h-40 w-40 md:h-[220px] md:w-[250px] md:ml-[25%] md:m-0" src={image} alt="imgage" />
      </div>
    </div>
  );
};

export default Heroimg;

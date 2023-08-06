import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

const AboveNav = () => {
  return (
    <div className="bg-green-900 px-4 py-2 md:flex md:justify-between md:items-center hidden ">
      {/* Phone number */}
      <div className="text-white md:ml-20">
        <h1 className="flex items-center">
          <FaPhoneAlt className="mr-2" />
          <span>+ 0123456489</span>
        </h1>
      </div>

      {/* Promotion message */}
      <div className="text-white text-sm md:text-base md:mr-4">
        Get 50% off on Selected Items | Shop Now
      </div>

      {/* Language and Location selects */}
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <select
          name=""
          id=""
          className="bg-green-900 text-white md:w-20"
        >
          <option className="text-white bg-green-900" value="Eng">
            Eng
          </option>
        </select>
        <select
          name=""
          id=""
          className="bg-green-900 text-white md:w-28"
        >
          <option className="text-white bg-green-900" value="Location">
            Location
          </option>
        </select>
      </div>
    </div>
  );
};

export default AboveNav;

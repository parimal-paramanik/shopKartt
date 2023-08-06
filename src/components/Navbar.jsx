import React from 'react';

import image from '../Assests/shopcart.png';
import { FiShoppingCart, FiUser } from 'react-icons/fi';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-[90%] m-auto mt-3">
      <div className="flex items-center md:w-[30%]">
        <img className="h-12 w-40" src={image} alt="shopCart" />
        <h3 className="font-semibold text-2xl ml-3 text-green-800">ShopCart</h3>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-[40%] mt-4 md:mt-0 md:ml-6">
        <select name="" id="" className="md:mr-4 mb-2 md:mb-0">
          <option value="Categories">Categories</option>
        </select>
        <p className="md:mr-4">Deals</p>
        <p className="md:mr-4">What's New</p>
        <p>Delivery</p>
      </div>
      <div className="relative w-full md:w-[30%] mt-4 md:mt-0 md:ml-6">
        <input
          type="text"
          placeholder="Search Product"
          className="bg-neutral-200 w-full pl-5 pr-4 py-1 rounded-2xl"
        />
        <div className="absolute top-0 right-4 pl-3 pt-2">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 md:mt-0 w-full md:w-[30%] md:ml-6">
        <div className="md:ml-10">
          <p className="flex items-center justify-between w-[120%] ml-0 ">
            <FiUser  /> Account
          </p>
        </div>
        <div>
          <p className="flex items-center justify-between w-[120%] ml-0">
              <FiShoppingCart />
            Cart
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

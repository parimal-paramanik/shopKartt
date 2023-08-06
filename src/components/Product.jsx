import React from 'react';
// import {useNavigate } from "react-router-dom";
import AllSelect from './allSelect'
import Heroimg from './Heroimg'
import ProductShow from './productShow';

const Product = () => {
  return (
      <div>
        <Heroimg />
        <AllSelect />
        <h1 className="font-bold text-xl ml-[5rem]  mt-6 text-left text-black">Headphones for you !</h1>
        <ProductShow/>
      </div>
  )
}
export default Product

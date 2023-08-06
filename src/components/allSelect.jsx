import React from 'react';
import Selecttag from './selecttag';

const AllSelect = () => {
  let Headphones = ['boAt', 'JBL', 'sony', 'Infinity', 'OnePlus'];
  let Price = [];
  let Review = [];
  let color = [];
  let Offer = [];
  let Material = [];
  let sortby = ['price', 'a-z', 'z-a'];
  let alloffer = [];

  return (
    <div className="flex flex-col md:flex-row md:items-center w-[90%] m-auto mt-3 justify-between">
      <div className="flex flex-col md:flex-row md:justify-even">
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="Headphones" options={Headphones} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="Price" options={Price} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="Review" options={Review} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="Color" options={color} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="Material" options={Material} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="Offer" options={Offer} />
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="alloffer" options={alloffer} />
        </div>
      </div>

      <div className="sort_by mt-3 md:mt-0">
        <div className="flex flex-col md:flex-row md:justify-between w-full md:w-[30%] ml-0 md:ml-[6%] items-center">
          <Selecttag value="sort-by" options={sortby} />
        </div>
      </div>
    </div>
  );
};

export default AllSelect;

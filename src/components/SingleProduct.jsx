import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { VscColorMode } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

function SinglePage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchAndUpdate();
  }, []);

  const fetchAndUpdate = () => {
    fetch(`https://app-7ls5.onrender.com/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-[90%] mx-auto mt-3">
      <p className="text-left text-gray-500">
        Electronics / Audio / Headphones /{" "}
        <span className="font-semibold text-sm ml-3 text-black">
          {product[0]?.title.split(" ").slice(0, 3).join(" ")}
        </span>
      </p>
      <div id="container" className="flex flex-col mt-10 mb-8 md:flex-row">
        <div id="leftdiv" className="w-full md:w-[40%] md:mr-10">
          <div className="w-[100%] m-auto">
            <img
              className="w-[100%] bg-white p-4 rounded-xl shadow-xl"
              src={product[0]?.img[0]}
              alt="img"
            />
          </div>
          <div className="flex w-[100%] mt-10 mb-[20px] items-center gap-5">
            {product[0]?.img.map((img, index) => 
              <div className="w-[22%]"  key={index}>
                <img
                  className="w-[100%] bg-white p-4 rounded-md shadow-xl"
                  src={img}
                  alt={`img-${index}`}
                />
              </div>
            )}
          </div>
        </div>
        <div
          id="rightdiv"
          className="w-full md:w-[40%] text-left mt-6 md:mt-0 md:text-left"
        >
          <h3 className="whitespace-normal font-bold text-2xl text-black-800">
            {product[0]?.title}
          </h3>
          <p className="text-gray-800 mt-2">
            Introducing our premium headphones - the perfect fusion of style,
            comfort, and outstanding audio performance. Immerse yourself in a
            world of unparalleled sound quality and experience music like never
            before.
          </p>
          <p className="text-green-800 flex items-center mt-3">
            <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />{" "}
            <span className="text-black pl-2"> (121)</span>
          </p>
          <hr className="mt-7 mb-5" />
          <h4 className="whitespace-normal font-bold text-xl text-black-800">
            $ {product[0]?.price} or $99.99/month
          </h4>
          <p className="text-gray-800">
            Suggested payments with 6 months special financing.
          </p>
          <hr className="mt-7 mb-5" />
          <h4 className="whitespace-normal font-bold text-l text-black-800 mb-2">
            Choose a color
          </h4>
          <div className="flex flex-wrap md:mr-2">
            <div className="mr-2">
              <VscColorMode size={30} color="red" />
            </div>
            <div className="mr-2">
              <VscColorMode size={30} color="black" />
            </div>
            <div className="mr-2">
              <VscColorMode size={30} color="gray" />
            </div>
            <div className="mr-2">
              <VscColorMode size={30} color="teal" />
            </div>
            <div className="">
              <VscColorMode size={30} color="green" />
            </div>
          </div>
          <hr className="mt-5 mb-5" />
          <div className="flex gap-7">
            <button className="bg-gray-300 py-2 px-8 rounded-3xl mt-2">
              <span className="pr-5 text-lg font-bold cursor-pointer">-</span>
              <span className="pr-5 text-lg">1</span>
              <span className="text-lg font-bold cursor-pointer">+</span>
            </button>
            <p>
              only <span className="text-orange-400"> 12 items</span> left!{" "}
              <br /> Don't miss it
            </p>
          </div>

          <div className="m-auto flex flex-col justify-between mt-3 sm:flex-row sm:justify-between">
  <button className="bg-white hover:bg-green-900 hover:text-white border-black border-[1px] text-black rounded-3xl py-5 px-20 mt-3 mb-3 sm:m-0 sm:mt-6">
    Buy Now
  </button>
  <button className="bg-white hover:bg-green-900 hover:text-white border-black border-[1px] text-black rounded-3xl py-5 px-20 mt-3 mb-3 sm:m-0 sm:mt-6">
    Add to Cart
  </button>
</div>


          <div>
            <div className="mt-7 border-t border-l border-r border-b py-2">
              <p className="flex items-center gap-5 font-bold" fontWeight="bold">
                <CiDeliveryTruck size={20} color="orange " className="font-bold" /> Free Delivery
              </p>
              <p>Enter your Postal Code for Delivery Availability</p>
            </div>
            <div className="mt-0 border-b border-l border-r py-2">
              <p className="flex items-center gap-5 font-bold">
                <FiShoppingBag className="font-bold" size={20} color="orange" /> Return Delivery
              </p>
              <p>Free 30 Days Return Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;

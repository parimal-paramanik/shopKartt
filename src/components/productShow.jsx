import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
const ProductShow = () => {
  const [product, setProduct] = useState([]);
  // const [isLiked, setIsLiked] = useState(false);
  // const  navigate= useNavigate()
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    fetch(`https://app-7ls5.onrender.com/product`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProduct(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // const handleHeartClick = () => {
  //   setIsLiked((prevIsLiked) => !prevIsLiked);
  // };

  return (
    <>

      <div className="w-[90%] items-center  m-auto mt-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20 ">
          {product.map(product => (
            <div key={product._id} className="bg-white p-4 rounded-md shadow-md w-[320px]  ">
              <div className='ml-[85%] mt-3'>
                <AiOutlineHeart size={24} />
              </div>
              <Link to={`/product/${product._id}`}>
                <div className="items-center flex justify-center"> <img className="w-[70%] " src={product.img[0]} alt='img' />

                </div>
              </Link>

              <div className="flex ">
              <Link to={`/product/${product._id}`}>
                <h3 className="text-md font-bold mt-2 text-left">{product.title.split(" ").slice(0, 2).join(" ")}</h3>
                </Link>
                <h4 className="font-bold  mt-[8px] ml-[45%]">${product.price}</h4>
              </div>


              <p className="text-left">{product.description.split(" ").slice(0, 3).join(" ")}</p>
              <p className="text-green-800 flex items-center mt-2"><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <span className="text-black pl-2"> (121)</span></p>

              <button className="bg-white hover:bg-green-900 hover:text-white border-black border-[1px] text-black rounded-xl py-1 px-3 mt-6 mb-3 mr-[62%]" >Add to Cart</button>

            </div>

          ))}
        </div>
      </div>
    </>
  )

}

export default ProductShow
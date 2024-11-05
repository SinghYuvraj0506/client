import React from "react";
import { ProductType } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../lib/hooks";
import { addItemToCart } from "../app/features/cartSlice";

const ProductCard = ({title, price, image, id, description, category, rating}:ProductType) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleAddToCart = (e:Event) => {
    e?.stopPropagation()
    dispatch(addItemToCart({
      data:{
        title,
        price,
        id,
        image,
        description,
        category,
        quantity: 1,
        rating
      }
    }))
  }

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition min-w-[300px] cursor-pointer"
      onClick={()=>{
        navigate(`/products/${id}`)
      }}
    >
      <img
        src={image || `https://via.placeholder.com/150?text=NoImage`}
        alt={`Product 1`}
        className="w-full h-40 object-fill rounded-md"
      />
      <h3 className="text-lg font-semibold mt-4 text-ellipsis line-clamp-1">{title}</h3>
      <p className="text-gray-600 mt-2">${price}</p>
      <button className="mt-4 w-full bg-yellow-500 text-gray-900 py-2 rounded-md" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

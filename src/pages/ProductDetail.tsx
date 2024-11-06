import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector, useQuery } from "../lib/hooks";
import { ProductType } from "../lib/types";
import ProductSlider from "../components/ProductSlider";
import Loader from "../components/Loader";
import { addItemToCart } from "../app/features/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch()
  const {cartIdMap} = useAppSelector(state => state.cart)

  const { data, loading }: { data: ProductType; loading: boolean } = useQuery(
    import.meta.env.VITE_APP_API_URL + `/products/${id}`,
    !!id
  );

  const { data: similarData, loading: similarLoading } = useQuery(
    import.meta.env.VITE_APP_API_URL + `/products/category/${data?.category}`,
    !!data?.category
  );

  useEffect(() => {
    window.scrollTo(0,0)
  }, [id])


  const handleAddToCart = () => {
    dispatch(addItemToCart({
      data:{
        ...data,
        quantity: 1,
      }
    }))
  }

  
  if(loading){
   return <div className="h-[80vh]">
    <Loader/>
    </div>
  }


  return (
    <div className="flex flex-col gap-10 my-10">
      <div className="flex flex-col md:flex-row items-start p-6 space-y-6 md:space-y-0 md:space-x-8 max-w-7xl mx-auto">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={data?.image}
            alt={`Productimage`}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800">{data?.title}</h1>
          <p className="text-xl text-gray-700 mt-2">
            ${data?.price?.toFixed(2)}
          </p>

          {/* Rating and Reviews */}
          <div className="flex items-center mt-2">
            <span className="text-primaryYellow text-lg font-bold">
              {data?.rating?.rate}★
            </span>
            <span className="text-gray-600 ml-2">
              ({data?.rating?.count} reviews)
            </span>
          </div>

          <p className="text-gray-700 mt-4">{data?.description}</p>

          <div className="flex space-x-4 mt-6">
            <button className={`px-6 py-3 ${cartIdMap?.includes(data?.id) ? 'bg-gray-500' : 'bg-primaryYellow ' } text-white font-semibold rounded-lg shadow-md focus:outline-none`} onClick={handleAddToCart} disabled={cartIdMap?.includes(data?.id)}>
              {cartIdMap?.includes(data?.id) ? "Added to Cart" : "Add to Cart"}
            </button>
            <button className="px-6 py-3 bg-primaryBlack text-white font-semibold rounded-lg shadow-md focus:outline-none">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <ProductSlider
        title="Similar Products"
        data={similarData}
        loading={similarLoading}
      />
    </div>
  );
};

export default ProductDetail;

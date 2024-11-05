import React, { useRef } from "react";
import ProductCard from "./ProductCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ProductType } from "../lib/types";
import Loader from "./Loader";

type Props = {
  title: string;
  data?: ProductType[];
  loading: boolean
};

const ProductSlider = ({ title, data, loading }: Props) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: window.screen.width * -0.7, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: window.screen.width * 0.7, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaChevronLeft/>
          </button>
          <button
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={sliderRef}
        className="flex items-start gap-6 overflow-x-auto scrollbar-hide"
      >
        {loading ? <div className="h-40 w-full"><Loader/></div> : data?.map((product, index) => (
          <ProductCard key={index} {...product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;

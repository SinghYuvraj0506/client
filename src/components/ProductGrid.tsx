import React from "react";
import { ProductType } from "../lib/types";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

type Props = {
  title: string;
  data: ProductType[];
  categoryLink: string;
  loading:boolean
};

const ProductGrid = ({ title, data, categoryLink, loading }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition min-w-[300px] flex flex-col gap-5">
      <h3 className="text-base font-bold">{title}</h3>
      {loading ? <div className="h-40 w-full"><Loader/></div> : <div className="grid grid-cols-2 gap-4">
        {data?.slice(0, 4)?.map((product, idx) => (
          <div
            className="cursor-pointer hover:underline"
            key={idx}
            onClick={() => {
              navigate(`/products/${product.id}`);
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-20 object-fill rounded-md"
            />
            <p className="text-ellipsis line-clamp-2 text-sm">
              {product.title}
            </p>
          </div>
        ))}
      </div>}
      <a href={categoryLink} className="text-blue-700">
        See more
      </a>
    </div>
  );
};

export default ProductGrid;

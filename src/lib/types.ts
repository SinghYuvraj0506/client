export type ProductType = {
  id:string
  title: string;
  price: number;
  description: string;
  image: string;
  category: "electronic" | "jewelery" | "men's clothing" | "women's clothing";
};

export type categoryDataType = {
  type: string;
  data: ProductType[];
};

export type ProductSlice = {
  featured: ProductType[];
  categoryData: categoryDataType[];
};

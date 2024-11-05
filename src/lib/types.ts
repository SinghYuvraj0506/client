export type ProductType = {
  id:string
  title: string;
  price: number;
  description: string;
  image: string;
  category: "electronic" | "jewelery" | "men's clothing" | "women's clothing";
  rating:{
    rate: number,
    count: number
  }
};

export type categoryDataType = {
  type: string;
  data: ProductType[];
};

export type ProductSlice = {
  featured: ProductType[];
  categoryData: categoryDataType[];
};

export interface CartItem extends ProductType {
  quantity: number
}

export type CartSlice = {
  cart: CartItem[];
  totalPrice: number
};

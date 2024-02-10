import { useState } from "react";
import { productsData } from "../fakeData/fakeData";
import { ProductInterface } from "../interfaces/products";

export const useFetchProduct = () => {
   const [products, setProducts] = useState<ProductInterface[] | null>(
      productsData
   );

   return {products, setProducts};
};

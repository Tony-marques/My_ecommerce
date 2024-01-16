import { useState } from "react";
import styled from "styled-components";
import { productsData } from "../fakeData/fakeData";
import Product from "./Product";
import { ProductInterface } from "../interfaces/products";

export default function Products() {
   const [products, setProducts] = useState<ProductInterface[] | null>(
      productsData
   );

   return (
      <ProductsStyled>
         {products?.map(
            ({ id, name, imageUrl, price, description, quantity }) => {
               return (
                  <Product
                     key={id}
                     name={name}
                     imageUrl={imageUrl}
                     price={price}
                     description={description}
                     id={id}
                     quantity={quantity}
                  />
               );
            }
         )}
      </ProductsStyled>
   );
}

const ProductsStyled = styled.div`
   flex: 1;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 15px;
`;

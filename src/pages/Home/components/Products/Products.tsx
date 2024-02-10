import styled from "styled-components";
import ProductList from "../ProductList/ProductList";
import EmptyProductListMessage from "../EmptyProductListMessage/EmptyProductListMessage";
import { ProductInterface } from "../../interfaces/products";

interface ProductsInterface {
   filteredProduct: ProductInterface[];
   inputSearchValue: string;
   inputSelectValue: string;
   inputRangeValue: number;
}

export default function Products({
   filteredProduct,
   inputRangeValue,
}: ProductsInterface) {
   return (
      <ProductsStyled>
         <div className="products">
            <ProductList
               filteredProduct={filteredProduct}
               inputRangeValue={inputRangeValue}
            />
            {filteredProduct.length === 0 && <EmptyProductListMessage />}
         </div>
      </ProductsStyled>
   );
}

const ProductsStyled = styled.div`
   .filters-inputs {
      display: flex;
   }
   .products {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
   }
`;

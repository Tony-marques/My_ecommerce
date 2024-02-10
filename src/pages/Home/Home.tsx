import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Panels from "../../components/admin/Panels";
import { useFetchProduct } from "../../hooks/useFetchProduct";
import { AdminSliceInterface } from "../../store/slices/Admin.slice";
import FiltersInputs from "./components/FilterInputs/FiltersInputs";
import Products from "./components/Products/Products";

export default function Home() {
   const { isAdmin } = useSelector((state: AdminSliceInterface) => state.admin);
   const {products} = useFetchProduct();

   const [inputRangeValue, setInputRangeValue] = useState<number>(
      products ? products.length : 0
   );
   const [inputSearchValue, setInputSearchValue] = useState("");
   const [inputSelectValue, setInputSelectValue] = useState("all");

   const handleUpdateInputSelectValue = (target: string) => {
      setInputSelectValue(target);
   };
   const handleUpdateInputSearchValue = (target: string) => {
      setInputSearchValue(target);
   };
   const handleUpdateRangeSearchValue = (target: number) => {
      setInputRangeValue(target);
   };

   const filteredProduct = products
      ? products
           ?.filter((product) => product.name.includes(inputSearchValue))
           .filter((product) => {
              return inputSelectValue !== "all"
                 ? product.category === inputSelectValue
                 : product;
           })
      : [];

   return (
      <HomeStyled>
         <div className="filters-inputs">
            <FiltersInputs
               handleUpdateInputSelectValue={handleUpdateInputSelectValue}
               handleUpdateInputSearchValue={handleUpdateInputSearchValue}
               handleUpdateRangeSearchValue={handleUpdateRangeSearchValue}
               inputRangeValue={inputRangeValue}
               products={products}
               inputSearchValue={inputSearchValue}
            />
         </div>
         <Products
            filteredProduct={filteredProduct}
            inputSearchValue={inputSearchValue}
            inputSelectValue={inputSelectValue}
            inputRangeValue={inputRangeValue}
         />
         {isAdmin && <Panels />}
      </HomeStyled>
   );
}

const HomeStyled = styled.main`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   gap: 10px;
   width: 1140px;
   margin: 0 auto;

   .filters-inputs {
      display: flex;
   }
`;

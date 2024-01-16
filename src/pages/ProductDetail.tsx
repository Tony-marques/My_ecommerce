import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function ProductDetail() {
   // const { id } = useParams();

   return <ProductDetailStyled>ProductDetail</ProductDetailStyled>;
}

const ProductDetailStyled = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   gap: 10px;
   width: 1140px;
   margin: 0 auto;
   background-color: #fff;
`;

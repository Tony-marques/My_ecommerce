import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export default function Home() {
   return (
      <HomeStyled>
         {/* <Navbar /> */}
         <Products />
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
`;

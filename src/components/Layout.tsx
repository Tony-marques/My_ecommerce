import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";

export default function Layout() {
   return (
      <LayoutStyled>
         <Navbar />
         <Outlet />
      </LayoutStyled>
   );
}

const LayoutStyled = styled.div`
   position: relative;

   display: flex;
   flex-direction: column;
   gap: 10px;
   min-height: 100vh;
`;

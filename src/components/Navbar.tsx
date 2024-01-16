import styled from "styled-components";
import Button from "./reusable-ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { calculatTotalproduct, toggleCart } from "../store/slices/Cart.slice";
import CartModal from "./CartModal";
import { useEffect } from "react";

export default function Navbar() {
   const { cart, isOpen, totalProduct } = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(calculatTotalproduct())
   }, [cart]);

   const handleOnCick = () => {
      dispatch(toggleCart());
   };
   return (
      <NavbarStyled>
         <p>My Ecommerce</p>
         <Button $variant="primary" $size="medium" onClick={handleOnCick}>
            Panier ({totalProduct})
         </Button>
         {isOpen && <CartModal />}
      </NavbarStyled>
   );
}

const NavbarStyled = styled.nav`
   width: 1140px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #fff;
   padding: 1rem;
   border-radius: 5px;

   p {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.2rem;
   }
`;

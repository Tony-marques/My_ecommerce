import styled from "styled-components";
import Button from "./reusable-ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { calculatTotalproduct, toggleCart } from "../store/slices/Cart.slice";
import CartModal from "./CartModal";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
   const { cart, isOpen, totalProduct } = useSelector((state) => state.cart);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(calculatTotalproduct());
   }, [cart]);

   const handleOnCick = () => {
      dispatch(toggleCart());
   };

   const linkConfigs = [
      {
         id: 1,
         to: "/admin",
         content: "Se connecter",
      },
      {
         id: 2,
         to: "/",
         content: "Accueil",
      },
   ];

   return (
      <NavbarStyled>
         <p>My Ecommerce</p>
         <div className="nav">
            <ul>
               {linkConfigs.map(({ id, to, content }) => {
                  return (
                     <li key={id}>
                        <NavLink to={to}>{content}</NavLink>
                     </li>
                  );
               })}
            </ul>
         </div>
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

   .nav {
      ul {
         display: flex;

         li {
            list-style: none;

            .active {
               color: red;
            }
         }
      }
   }
`;

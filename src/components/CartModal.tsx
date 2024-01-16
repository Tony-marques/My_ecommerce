import { createPortal } from "react-dom";
import styled from "styled-components";
import {
   addToCart,
   calculateTotalPrice,
   removeToCart,
   toggleCart,
} from "../store/slices/Cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "./reusable-ui/Button";
import { useEffect } from "react";

export default function CartModal() {
   const dispatch = useDispatch();
   const { cart, totalPrice } = useSelector((state) => state.cart);

   console.log(cart);
   

   useEffect(() => {
      dispatch(calculateTotalPrice());
   }, [cart]);

   const handleOnClick = () => {
      dispatch(toggleCart());
   };

   const handleAdd = (idProductToAdd: number) => {
      dispatch(addToCart(idProductToAdd));
   };

   const handleDelete = (idProductToDelete: number) => {
      dispatch(removeToCart(idProductToDelete));
   };

   return createPortal(
      <CartModalStyled onClick={handleOnClick}>
         <div className="modal" onClick={(event) => event.stopPropagation()}>
            {cart.length > 0 ? (
               <p>Votre panier:</p>
            ) : (
               <p>Votre panier est vide</p>
            )}
            {cart?.map(({ name, price, quantity, id }) => {
               return (
                  <div className="product-cart" key={id}>
                     <div className="informations">
                        <p className="name">{name}</p>
                        <p className="price">{price} €</p>
                     </div>
                     <div className="buttons-group">
                        <Button onClick={() => handleDelete({ id })}>-</Button>
                        <p>{quantity}</p>
                        <Button onClick={() => handleAdd({ id })}>+</Button>
                     </div>
                  </div>
               );
            })}
            {cart.length > 0 && <p>Prix total {totalPrice} €</p>}
         </div>
      </CartModalStyled>,
      document.body
   );
}

const CartModalStyled = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   background-color: rgba(0, 0, 0, 0.5);
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;

   .modal {
      padding: 1rem;
      background-color: white;
      width: 600px;
      min-height: min-content;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      gap: 5px;

      .product-cart {
         display: flex;
         justify-content: space-between;
         background-color: #242424;
         border-radius: 5px;
         padding: 1rem;
         color: white;

         .informations {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
         }

         .buttons-group {
            display: flex;
            align-items: center;
            gap: 5px;
         }
      }
   }
`;

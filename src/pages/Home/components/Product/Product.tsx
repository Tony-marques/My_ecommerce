import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../../../components/reusable-ui/Button";
import { addToCart } from "../../../../store/slices/Cart.slice";

interface ProductProps {
   id: number;
   name: string;
   imageUrl: string;
   price: number;
   description: string;
   quantity: number;
   category: string;
}

export default function Product({
   id,
   name,
   imageUrl,
   price,
   description,
   quantity,
   category,
}: ProductProps) {
   const dispatch = useDispatch();
   // const { cart } = useSelector((state: AppState) => state.cart);

   const handleOnClick = () => {
      const newProductToCart = {
         id,
         name,
         imageUrl,
         price,
         description,
         quantity,
         category,
      };
      dispatch(addToCart(newProductToCart));
   };
   return (
      <ProductStyled>
         <img src={imageUrl} />
         <div className="product-details">
            <div className="title">{name}</div>
            <div className="description">{description}</div>
            <div className="price">{price} €</div>
         </div>
         <div className="buttons-group">
            <Button onClick={handleOnClick}>Ajouter au panier</Button>
            <Button $size="withoutSpacing">
               <Link to={`/produit/${id}`}>Voir le produit</Link>
            </Button>
         </div>
      </ProductStyled>
   );
}

const ProductStyled = styled.div`
   display: grid;
   background-color: #fff;
   border-radius: 5px;
   padding: 1rem;
   gap: 15px;
   grid-template-rows: 2fr 2fr 2fr;

   img {
      max-width: 100%;
      border: 1px solid red;
   }

   .product-details {
      display: flex;
      flex-direction: column;
      gap: 5px;
   }

   .buttons-group {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
         color: white;
         transition: color 0.3s ease;
         padding: 0.75rem 1.25rem;
         display: flex;

         &:hover {
            color: #242424;
         }
      }
   }
`;

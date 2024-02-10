import { ProductInterface } from "../../../../interfaces/products";
import Product from "../Product/Product";

interface ProductListProps {
   filteredProduct: ProductInterface[];
   inputRangeValue: number;
}

const ProductList = ({
   filteredProduct,
   inputRangeValue,
}: ProductListProps) => {
   return (
      <>
         {filteredProduct
            ?.map(
               ({
                  id,
                  name,
                  imageUrl,
                  price,
                  description,
                  quantity,
                  category,
               }) => {
                  return (
                     <Product
                        key={id}
                        name={name}
                        imageUrl={imageUrl}
                        price={price}
                        description={description}
                        id={id}
                        quantity={quantity}
                        category={category}
                     />
                  );
               }
            )
            .slice(0, inputRangeValue)}
      </>
   );
};

export default ProductList;

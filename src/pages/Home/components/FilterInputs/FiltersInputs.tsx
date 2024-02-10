import { ChangeEvent } from "react";
import RangeInput from "../../../../components/reusable-ui/RangeInput";
import SearchInput from "../../../../components/reusable-ui/SearchInput";
import SelectInput from "../../../../components/reusable-ui/SelectInput/SelectInput";
import { ProductInterface } from "../../../../interfaces/products";

interface FiltersInputsProps {
   handleUpdateInputSelectValue: (target: string) => void;
   handleUpdateInputSearchValue: (target: string) => void;
   handleUpdateRangeSearchValue: (target: number) => void;
   inputRangeValue: number;
   products: ProductInterface[] | null;
   inputSearchValue: string;
}

const FiltersInputs = ({
   handleUpdateInputSelectValue,
   handleUpdateInputSearchValue,
   handleUpdateRangeSearchValue,
   inputRangeValue,
   products,
   inputSearchValue,
}: FiltersInputsProps) => {
   return (
      <>
         <SelectInput
            defaultValue="all"
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
               handleUpdateInputSelectValue(e.target.value)
            }
         >
            <SelectInput.Option value="all">
               Tous les produits
            </SelectInput.Option>
            <SelectInput.Option value="telephone">téléphone</SelectInput.Option>
            <SelectInput.Option value="ordinateur">
               ordinateur
            </SelectInput.Option>
         </SelectInput>
         <RangeInput
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
               handleUpdateRangeSearchValue(Number(e.target.value))
            }
            value={inputRangeValue}
            max={products ? products.length : 0}
            min={1}
         />
         <SearchInput
            placeholder={"rechercher"}
            value={inputSearchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
               handleUpdateInputSearchValue(e.target.value)
            }
         />
      </>
   );
};

export default FiltersInputs;

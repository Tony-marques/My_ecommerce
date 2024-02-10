import { ChangeEvent } from "react";
import styled from "styled-components";

interface FilterRangeProps {
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
   value: number;
   max: number;
   min: number;
}

const RangeInput = ({
   onChange,
   value,
   max,
   min,
}: FilterRangeProps) => {
   return (
      <FilterRangeStyled
         type="range"
         min={min}
         max={max}
         value={value}
         style={{
            backgroundSize: `${(value * 100) / max}% 100%`,
         }}
         onChange={onChange}
      />
   );
};

const FilterRangeStyled = styled.input`
   -webkit-appearance: none;
   height: 7px;
   background: grey;
   border-radius: 5px;
   background-image: linear-gradient(#d46a6a, #d46a6a);
   background-repeat: no-repeat;

   &[type="range"]::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background: #d46a6a;
      cursor: pointer;
      box-shadow: 0 0 2px 0 #555;

      &:hover {
         background: #bb5252;
      }
   }
   &[type="range"]::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      box-shadow: none;
      border: none;
      background: transparent;
   }
`;

export default RangeInput;

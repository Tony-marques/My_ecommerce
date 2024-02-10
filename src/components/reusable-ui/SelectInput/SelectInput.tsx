import { ChangeEvent, ReactNode } from "react";
import { SelectInputOption } from "./SelectInputOption";

interface SelectInputProps {
   defaultValue: string;
   onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
   children: ReactNode;
}

const SelectInput = ({
   defaultValue,
   onChange,
   children,
}: SelectInputProps) => {
   return (
      <select defaultValue={defaultValue} onChange={onChange}>
         {children}
      </select>
   );
};

export default SelectInput;

SelectInput.Option = SelectInputOption;

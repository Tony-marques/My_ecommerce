import { ChangeEvent } from "react";

interface SearchInputProps {
   value: string;
   placeholder: string;
   onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({
   value,
   placeholder,
   onChange,
}: SearchInputProps) => {
   return (
      <input
         type="text"
         placeholder={placeholder}
         onChange={onChange}
         value={value}
      />
   );
};

export default SearchInput;

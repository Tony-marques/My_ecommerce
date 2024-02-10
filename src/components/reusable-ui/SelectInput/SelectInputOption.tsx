import { ReactNode } from "react";

interface SelectInputOptionInterface {
   value: string;
   children: ReactNode;
}

export const SelectInputOption = ({
   value,
   children,
}: SelectInputOptionInterface) => {
   return <option value={value}>{children}</option>;
};

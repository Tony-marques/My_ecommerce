import { ReactNode } from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
   children: ReactNode;
   onClick?: () => void;
   $variant?: string;
   $size?: string;
}

export default function Button({
   children,
   $variant = "primary",
   $size = "medium",
   onClick,
}: ButtonProps) {
   return (
      <ButtonStyled $variant={$variant} $size={$size} onClick={onClick}>
         {children}
      </ButtonStyled>
   );
}

const ButtonStyled = styled.button<ButtonProps>`
   cursor: pointer;
   border: 1px solid transparent;
   border-radius: 5px;
   font-family: "Montserrat", sans-serif;

   ${({ $variant }) => $variant && variants[$variant]}
   ${({ $size }) => $size && size[$size]}
`;

const primary = css`
   background-color: #242424;
   color: white;
   transition: 0.3s ease;

   &:hover {
      background-color: white;
      border-color: #242424;
      color: #242424;
   }

   a {
      display: flex;
      padding: 0.75rem 1.25rem;
      color: white;
   }
`;

const variants: { [key: string]: ReturnType<typeof css> } = {
   primary,
};

const medium = css`
   padding: 0.75rem 1.25rem;
   font-size: 1rem;
`;
const withoutSpacing = css`
   padding: 0;
   font-size: 1rem;
`;

const size: { [key: string]: ReturnType<typeof css> } = {
   medium,
   withoutSpacing,
};

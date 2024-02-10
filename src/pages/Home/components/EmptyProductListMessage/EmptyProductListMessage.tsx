import styled from "styled-components"

interface EmptyProductListMessageProps {
  
}

const EmptyProductListMessage = () => {
  return (
    <EmptyProductListMessageStyled>
     <p>Il n'y a actuellement aucun produit.</p>
    </EmptyProductListMessageStyled>
  )
}

export default EmptyProductListMessage;

const EmptyProductListMessageStyled = styled.div`

`
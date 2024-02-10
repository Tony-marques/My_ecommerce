import styled from "styled-components";
import SelectInput from "../reusable-ui/SelectInput/SelectInput";

const SelectInputPanel = () => {
   const inputsConfig = [
      {
         id: 1,
         value: "telephone",
         content: "Téléphone",
      },
      {
         id: 2,
         value: "ordinateur",
         content: "Ordinateur",
      },
   ];

   return (
      <SelectInputPanelStyled>
         <SelectInput defaultValue="ordinateur">
            {inputsConfig.map(({ id, value, content }) => {
               return (
                  <SelectInput.Option value={value} key={id}>
                     {content}
                  </SelectInput.Option>
               );
            })}
         </SelectInput>
      </SelectInputPanelStyled>
   );
};

export default SelectInputPanel;

const SelectInputPanelStyled = styled.div``;

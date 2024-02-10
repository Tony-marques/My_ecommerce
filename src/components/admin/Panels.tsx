import styled from "styled-components";
import SelectInput from "../SelectInput/SelectInput";
import SelectInputPanel from "./SelectInputPanel";
import { useDispatch, useSelector } from "react-redux";
import { toggleCollapse } from "../../store/slices/Admin.slice";

interface PanelsProps {}

const Panels = ({}: PanelsProps) => {
   const { isCollapsed } = useSelector((state) => state.admin);
   const dispatch = useDispatch();

   const handleOnClick = () => {
      dispatch(toggleCollapse(!isCollapsed));
   };

   return (
      <PanelsStyled>
         {isCollapsed && (
            <div className="panels">
               <p>Ajouter un produit</p>
               <form action="">
                  <input type="text" name="name" />
                  <input type="text" name="imageUrl" />
                  <input type="text" name="price" />
                  <input type="text" name="description" />
                  <input type="text" name="category" />

                  <SelectInputPanel />
               </form>
            </div>
         )}
         <div className="button" onClick={handleOnClick}>
            X
         </div>
      </PanelsStyled>
   );
};

export default Panels;

const PanelsStyled = styled.div`
   display: flex;

   position: absolute;
   /* height: 100%; */
   width: max-content;
   top: 0;
   bottom: 0;
   left: 0;
   background-color: blue;

   .panels {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      background-color: red;
      flex: 1;
      width: 400px;
   }
   .button {
      /* right: 10px0; */
      position: absolute;
      top: 0;
      bottom: 0;
      right: -100%;
      background-color: yellow;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px !important;
      height: 50px;
   }
`;

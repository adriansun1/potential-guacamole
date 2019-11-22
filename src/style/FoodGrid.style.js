import styled from '@emotion/styled';

export const FoodGridWrapper = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
`
export const FoodGridChild= styled.div`
  width:25%;
  min-width:320px;
  position:relative;
  text-align:center;
  margin: 10px 0px;
  
`

export const FoodGridImage = styled.img`
  height:auto;
  width:100%;
  max-width: 300px;
  border-radius:4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const FoodGridTitle = styled.h3`
  position:absolute;
  top:50%;
  left:50%;
  font-size:25px;
  -webkit-transform: translate(-50%, -100%); /* iOS */
  transform: translate(-50%, -100%);
  color:white;  
  text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

import React from 'react';
import {
  FoodGridImage,
  FoodGridWrapper,
  FoodGridTitle,
  FoodGridChild,
} from 'style/FoodGrid.style'
import {Link} from 'react-router-dom';
import uuid from 'uuid/v4'
import {FoodGridDB} from 'shittydatabase';



const FoodGridElement = props => {
  const {
    element: { image, alt, title },
  } = props;

  return (
    <Link to={`/articles/${Math.floor(Math.random()*100)}`}>
      <FoodGridChild>
        <FoodGridImage src={image} alt={alt} />
        <FoodGridTitle>{title}</FoodGridTitle>
      </FoodGridChild>
    </Link>
  );
};

const FoodGrid = ({title})=> {
  const data = FoodGridDB;

  return (
    <>
    <h1>{title}</h1>
    <FoodGridWrapper>
        {data.map(element => (
          <FoodGridElement element={element} key={uuid()}/>
        ))}
    </FoodGridWrapper>
    </>
  );
};

export default FoodGrid;

import React from 'react'
import {useParams} from 'react-router-dom';
import {Title, Wrapper} from 'style/Article.style';
import {Recipe, FoodGrid,Carousel, Comments} from 'components';

const Article = (props) => {
  const { entry } = useParams();
  //TODO fetch article data
  const data = {
    title: 'ARTICLE TITLE',
    rating: 5,
    body: `something something blah blah,
    <h1> something title something </h1>
    `,
    steps: [
      'do a thing',
      'do another thing',
    ],
    ingredients: [
      {
        type: 'carrot',
        measurement: 'mass',
        amount: 200,
      },
    ],

  }

  return (
    <div>
      <Carousel/>
      <Wrapper>
        <Title>{data.title}</Title>
        <h3>{data.rating}/5</h3>
        <Recipe ingredients={data.ingredients} steps={data.steps}/>
        <div dangerouslySetInnerHTML={{__html:data.body}}/>
      </Wrapper>
      <Comments/>
      <FoodGrid title='Related Articles'/>
    </div>
  )
}

export default Article

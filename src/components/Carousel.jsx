import React,{useState} from 'react'
import styled from '@emotion/styled'

const ImageSlide = styled.div(({url})=> ({
  backgroundImage: `url(${url})`,
  height:'500px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const SlideButton = styled.div(({left}) => {
  const side = left ? 'left' : 'right';

  const style = {
    width: '10%',
    top: 0,
    height:'500px',
    position:'absolute',
    ':hover':{
      backgroundColor: 'black',
      background: `linear-gradient(90deg, rgba(0,0,0,${left ? .6 : 0}) 0%, rgba(0,0,0,.3) ${left ? 90 : 10}%, rgba(0,0,0,${left ? 0 : .6}) 100%)`,
      // TODO transitions
      // transition: 'all 3s ease',
    }
  }
  style[side] = '0px';
  return style;
})

const SlideWrapper = styled.div(props => ({
  position:'relative',
}))

const Carousel = props => {
  // get this from props eventually, or make a request out
  const images = ['https://placekitten.com/200/300', 'https://placekitten.com/300/300', 'https://placekitten.com/400/400'];

  const [imageCount, setImageCount] = useState(0);

  const handleClick = (num) => {
    const count = (imageCount + num) % images.length;
    setImageCount(count < 0 ? images.length - 1 : count);
  }

  return (
    <SlideWrapper>
      <SlideButton left={true} onClick={() => handleClick(-1)}/>
      <ImageSlide url={images[imageCount]}/>
      <SlideButton onClick={() => handleClick(1)}/>
    </SlideWrapper>
  )
}

export default Carousel;


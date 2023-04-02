import Carousel from 'react-elastic-carousel';
import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

import { Container } from "./styles";

export const CarouselControlls = ({children}) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1.5 },
    { width: 700, itemsToShow: 2.5 },
    { width: 1200, itemsToShow: 3 },
    { width: 1400, itemsToShow: 4 },
  ];

  function carousel(){
    carousel.slidePrev();
  };
  
  function carouselNext(){
    carousel.slideNext();
  };

  return (
    <Container>
      <div className='wrappper_plates' id={`${children.length < 4 ? 'addMargin' : ''}`}>

        <div 
        className='wrapper_buttom back' 
        id={`${children.length < 4 || window.innerWidth < 832 ? 'hidden' : ''}`}
        >
          <button onClick={carousel}><MdArrowBackIosNew /></button>
        </div>

        <Carousel
        breakPoints={breakPoints}
        pagination={false}
        showEmptySlots
        transitionMs={900}
        ref={ref => (carousel = ref)}
        > 
          {children}
        </Carousel>

        <div 
        className='wrapper_buttom forward' 
        id={`${children.length < 4 || window.innerWidth < 832 ? 'hidden' : ''}`}
        >
          <button onClick={carouselNext}><MdArrowForwardIos /></button>
        </div>

      </div>
    </Container>
  )
}
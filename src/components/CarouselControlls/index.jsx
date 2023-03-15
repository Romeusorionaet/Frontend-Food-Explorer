// import { Container } from "./styles";

// import Carousel from 'react-elastic-carousel';

// import {MdArrowBackIosNew, MdArrowForwardIos} from 'react-icons/md';

// export const CarouselControlls = ({children}) => {
//   const breakPoints = [
//     { width: 1, itemsToShow: 1 },
//     { width: 550, itemsToShow: 2 },
//     { width: 910, itemsToShow: 3 },
//     { width: 1200, itemsToShow: 4 },
//   ];
  
//   function carousel(){
//     carousel.slidePrev();
//   }
  
//   function carouselNext(){
//     carousel.slideNext();
//   }

//   return (
//     <Container>
//       <div className='wrappper_plates' id={`${children.length < 4 ? 'addMargin' : ''}`}>

//         <div 
//         className='wrapper_buttom back' 
//         id={`${children.length < 4 || window.innerWidth < 832 ? 'hidden' : ''}`}
//         >
//           <button onClick={carousel}><MdArrowBackIosNew /></button>
//         </div>

//         <Carousel
//         breakPoints={breakPoints}
//         itemsToShow={window.innerWidth < 832 ? 2 : 4}
//         pagination={false}
//         outerSpacing={window.innerWidth < 832 ? -120 : 50}
//         showEmptySlots
//         itemPadding={[0, 10]}
//         transitionMs={900}
//         ref={ref => (carousel = ref)}
//         > 
//           {children}
//         </Carousel>

//         <div 
//         className='wrapper_buttom forward' 
//         id={`${children.length < 4 || window.innerWidth < 832 ? 'hidden' : ''}`}
//         >
//           <button onClick={carouselNext}><MdArrowForwardIos /></button>
//         </div>

//       </div>
//     </Container>
//   )
// }
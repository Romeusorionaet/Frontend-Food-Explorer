// import {Plates} from '../Plates';
// import {CarouselControlls} from '../CarouselControlls';

// export function Desserts({date, ...rest}) {
//   const plates = []

//   date.map(item=>{
//     if(item.category === "Sobremesas"){
//       plates.push(item)
//     }
//   })

//   return(
//     <CarouselControlls>
//       {plates &&
//         plates.map((item, index)=>{
//           return(
//             <div key={String(index)}>
//               <Plates
//               date={item}
//               />
//             </div>
//           )
//         }) 
//       }
//     </CarouselControlls>            
//   )
// }
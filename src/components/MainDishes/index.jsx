// import {Plates} from '../Plates';
// import {CarouselControlls} from '../CarouselControlls';

// import {useEffect, useState} from "react"
// import {api} from "../../services/api";

// export function MainDishes({date, ...rest}) {
//   const plates = []

//   date.map(item=>{
//     if(item.category === "Refeições"){
//       plates.push(item)
//     }
//   })

//   // favorite.map(item=>{
    
//   //   favoritePlate.push(item.plate_id)
    
//   // })

//   // let details = favoritePlate.join(", ")

//   //console.log(favorite)

//   // const [favorite, setFavorite] = useState([]);

//   // const user = JSON.parse(localStorage.getItem("@rocketfood:user"))

//   // useEffect(()=>{
//   //   async function getFavorite(){
//   //       const response = await api.get(`favorites/${user.id}`)
//   //       setFavorite(response.data)
//   //   }
//   //   getFavorite();
//   // },[])

//   // favorite.map(item=>{
//   //   plates.push(item.user_id)
//   // })

//   // console.log(favorite)
  

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

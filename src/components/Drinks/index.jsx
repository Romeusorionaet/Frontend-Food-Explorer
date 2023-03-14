import {Plates} from '../Plates';
import {CarouselControlls} from '../CarouselControlls';

export function Drinks({date, ...rest}) {
  const plates = []

  date.map(item=>{
    if(item.category === "Bebidas"){
      plates.push(item)
    }
  })

  return(
    <CarouselControlls>
      {plates &&
        plates.map((item, index)=>{
          return(
            <div key={String(index)}>
              <Plates
                date={item}
                />
            </div>
          )
        }) 
      }
    </CarouselControlls>
  )
}
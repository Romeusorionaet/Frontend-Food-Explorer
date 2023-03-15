import {Header} from '../../components/Header';
import {HeaderAdm} from '../../components/HeaderAdm';
import {Description} from '../../components/Description';
import {Footer} from '../../components/Footer';

import {Plates} from '../../components/Plates';
//import {CarouselControlls} from '../../components/CarouselControlls';

import {useState} from "react";

import {Container} from './styles';

export function Home() {
  const [plate, setPlate] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

  //Merging arrays

  let favoritesId = []
  let newListPlates = []

  favorite.map(item=>{
    favoritesId.push(item.id)
  })
  
  for(let item of plate){
    if(favoritesId.includes(item.id) === false){
      newListPlates.push(item)
    }
  }
  
  let newListPlatesWithFavorites = newListPlates.concat(favorite)
  
  //list MainDishes

  const mainDishes = []
  
  newListPlatesWithFavorites.map(item=>{
    if(item.category === "Refeições"){
      mainDishes.push(item)
    }
  })  

  //List Desserts

  const desserts = []
  
  newListPlatesWithFavorites.map(item=>{
    if(item.category === "Sobremesas"){
      desserts.push(item)
    }
  }) 

  //List Drinks

  const drinks = []
  
  newListPlatesWithFavorites.map(item=>{
    if(item.category === "Bebidas"){
      drinks.push(item)
    }
  })

  const homePage = document.getElementById('homePage')

  return(
    <Container id='homePage'>
    
      {
        user.admin == 1 ?
        <HeaderAdm 
        setPlate={setPlate} 
        plate={plate}/>
        :
        <Header 
        setPlate={setPlate} 
        setFavorite={setFavorite} 
        favorite={favorite}
        />
      }

      <Description />

      {/* <main>
        <h2>Pratos principais</h2>
        <CarouselControlls>
          {
            mainDishes && mainDishes.map((item, index)=>(
              <div key={String(index)}>
                <Plates
                date={item}
                />
              </div> 
            )) 
          }
        </CarouselControlls>

        <h2>Sobremesas</h2>
        <CarouselControlls>
          {
            desserts && desserts.map((item, index)=>(
              <div key={String(index)}>
                <Plates
                date={item}
                />
              </div> 
            )) 
          }
        </CarouselControlls>

        <h2>Bebidas</h2>
        <CarouselControlls>
          {
            drinks && drinks.map((item, index)=>(
              <div key={String(index)}>
                <Plates
                date={item}
                />
              </div> 
            )) 
          }
        </CarouselControlls>
      </main> */}

      <Footer />
    </Container>
  )
}
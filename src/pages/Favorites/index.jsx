import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { api } from '../../services/api';

import { useEffect, useState } from 'react';

import { Container } from './styles';

export function Favorites() {
    const [favorites, setFavorites] = useState([]);

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

    useEffect(()=>{
        try{
            async function catchFavorites(){
                const response = await api.get(`/favorites/${user.id}`)
                setFavorites(response.data)
            }
            catchFavorites()
        }catch(err){
            if(err.response){
                alert(err.response.data.message)
            }else{
                alert('Não foi possível carregar os dados desse prato.')
            }
        };
    });
    
    async function removeFavorite(id){
        await api.delete(`favorites/${id}/${user.id}`);
    };

    return(
        <Container>
            <Header />
            
            <h1>Meus Favoritos</h1>

            <section>
                <ul>
                    {favorites &&
                        favorites.map((item, index)=>{
                            return(
                                <li key={String(index)}>
                                    <img src={`${api.defaults.baseURL}/files/${item.imagem}`} alt="imagem do prato" />
                                    
                                    <div className="wrapper_title_button">
                                        <h2>{item.title}</h2>
                                        <button onClick={()=>removeFavorite(item.id)}>remover dos Favoritos</button>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

            <Footer />
        </Container>
    )
}
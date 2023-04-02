import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import {AiFillHeart} from 'react-icons/ai';
import {BsFire} from 'react-icons/bs';

import {Container} from './styles';

export function PlatesFavorited() {
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        try{
            async function catchFavorites(){
                const response = await api.get(`/plates`);
                setFavorites(response.data);
            }
            catchFavorites()
        }catch(err){
            if(err.response){
                alert(err.response.data.message);
            }else{
                alert('Não foi possível carregar os dados desse prato.');
            }
        };
    });

    return(
        <Container>

            <div className='wrapper_title'>
                <h1>Pratos mais avaliado</h1>
                <AiFillHeart />
            </div>

            <section>
                <ul>
                    {favorites &&
                        favorites.map((item, index)=>{
                            return(
                                <li key={String(index)}>
                                    <div className="wrapper_title_like">
                                        <img src={`${api.defaults.baseURL}/files/${item.imagem}`} alt="imagem do prato" />

                                        <div>
                                            <h2>{item.title}</h2>
                                            <span>{item.favorited}</span>
                                            <BsFire />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </Container>
    )
}
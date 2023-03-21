import { HeaderAdm } from '../../components/HeaderAdm';
import { Footer } from '../../components/Footer';

import { api } from '../../services/api';

import {AiFillLike} from 'react-icons/ai';
import { Container } from './styles';
import { useEffect, useState } from 'react';

export function FavoritesAdmin() {
    const [favorites, setFavorites] = useState([]);

    useEffect(()=>{
        async function catchFavorites(){
            const response = await api.get(`/plates`)
            setFavorites(response.data)
        }
        catchFavorites()
    })

    return(
        <Container>
            <HeaderAdm />
            
            <h1>Todos os pratos</h1>

            <section>
                <ul>
                    {favorites &&
                        favorites.map((item, index)=>{
                            return(
                                <li key={String(index)}>
                                    <div className="wrapper_title_like">
                                        <img src={`${api.defaults.baseURL}/files/${item.imagem}`} alt="imagem do prato" />

                                        <h2>{item.title}</h2>
                                        <span>{item.favorited} <AiFillLike /></span>
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
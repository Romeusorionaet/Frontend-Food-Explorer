import React, { useEffect } from 'react';
import {FiSearch} from 'react-icons/fi';
import {Input} from '../../components/Input';
import {Container, Content} from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Sidebar({setSearch=()=>{}, active, search}) {
    const {signOut} = useAuth()
    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"));

    useEffect(()=>{
        let container = document.getElementById('container');

        if(search){
            container.style.height = '15vh'
        }else{
            container.style.height = '100vh'
        }
    },[search])

    function logOut() {
        navigate("/")
        signOut();
    }

    return(
        <Container id='container' sidebar={active} className={user.admin == 1 ? 'addMarginAdmin' : 'addMarginUser'}>
            <div id='wrapper_input'>
                <Input
                    icon={FiSearch}
                    placeholder="Busque pelas opções de pratos" 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {
                user.admin == 1 ?
                <Content>
                    <Link to='/OrderHistoryAdm'><span>Histórico de pedido</span></Link>
                    <Link to='/FavoritesAdmin'><span>Favoritados</span></Link>
                    <Link to='/AdminAddPlate'><span>Novo prato</span></Link>
                    <span onClick={logOut}>Sair</span>
                </Content>
                :
                <Content>
                    <Link to='/OrderHistory'><span>Histórico de pedido</span></Link>
                    <Link to='/Favorites'><span>Meus favoritos</span></Link>
                    <Link to='/Payment'><span>Meus pedidos</span></Link>
                    <span onClick={logOut}>Sair</span>
                </Content>
            }

        </Container>
    )
}
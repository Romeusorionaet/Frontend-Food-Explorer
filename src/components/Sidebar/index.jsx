import {useNavigate} from 'react-router-dom';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {FiSearch} from 'react-icons/fi';

import {Input} from '../../components/Input';
import {useAuth} from '../../hooks/auth';

import {Container, Content} from './styles';

export function Sidebar({setSearch=()=>{}, active, search}) {
    const {signOut, user} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        let container = document.getElementById('container');

        if(search){
            container.style.height = '15vh';
        }else{
            container.style.height = '100vh';
        }
    },[search]);

    function logOut() {
        navigate("/")
        signOut();
    };

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
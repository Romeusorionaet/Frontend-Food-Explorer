import logoHeaderFoodExplorer from '../../assets/logoHeaderFoodExplorer.svg';
import {FiSearch} from 'react-icons/fi';
import lista from '../../assets/piceOfPaper.svg';
import {Input} from '../../components/Input';
import {FiLogOut} from 'react-icons/fi';

import {AiOutlineMenu} from 'react-icons/ai';
import {GiCrossMark} from 'react-icons/gi';

import {api} from "../../services/api";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {Container, Button, MobileButton} from './styles';
import { useState, useEffect } from 'react';

import {Sidebar} from '../Sidebar';

export function Header({setPlate=()=>{}, setFavorite=()=>{}, favorite}) {
    const [search, setSearch] = useState("");
    const [ingredients, setIngredients] = useState([]);

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"));
    let applicationLength = localStorage.getItem("@rocketfood:applicationLength");

    const navigate = useNavigate();
    const {signOut} = useAuth();

    useEffect(()=>{
        async function fetchIngredients(){
            const response = await api.get(`/ingredients?name=${search}`);
            setIngredients(response.data);
        }
        fetchIngredients();
    },[search]);

    useEffect(()=>{
        async function fetchPlate(){
            const response = await api.get(`/plates?title=${search}&ingredients=${JSON.stringify(ingredients)}`);
            setPlate(response.data)    
        }
        fetchPlate();
    },[ingredients, search]);
    
    useEffect(()=>{
        async function fetchFavorite(){
            const response = await api.get(`/favorites/${user.id}?title=${search}`);
            setFavorite(response.data);
        }
        fetchFavorite();
    },[search, favorite]);

    function logOut() {
        navigate("/");
        signOut();
    }

    function turnHomePage(){
        navigate("/");
    }

    function payment(){
        navigate("/Payment");
    }

    //===========moblie===================
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
 
    useEffect(()=>{
        const menu = document.querySelector('.menu')
        if(window.innerWidth < 832){
            menu.classList.remove('hidden')
        }else{
            menu.classList.add('hidden')
        }

        if(window.innerWidth > 832){
            setSidebar(false)
        }
    },[window.innerWidth])

    useEffect(()=>{
        const menu = document.querySelector('.menu')

        if(sidebar === true){
            menu.classList.add('formatSidebarMenu')
        }else{
            menu.classList.remove('formatSidebarMenu')
        }
    },[sidebar])

    return(
        <Container>
            <div className="wrapper_menu">
                <div className='menu hidden'>
                    {sidebar === true ?
                    <div className='sidebar'>
                        <GiCrossMark onClick={showSidebar}/>
                        <span>Menu</span>
                    </div>
                    :
                    <AiOutlineMenu onClick={showSidebar}/>
                    }
                    {
                        sidebar 
                        && 
                        <Sidebar 
                        active={setSidebar} 
                        setSearch={setSearch}
                        search={search}
                        />
                    }
                </div>

                <button onClick={turnHomePage}>
                    <img src={logoHeaderFoodExplorer} alt='logo food Explorer'/>
                </button>
            </div>

            <div className='wrapper_input'>
                <Input
                icon={FiSearch}
                placeholder="Busque pelas opções de pratos" 
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className='wrapper_favorites_historic'>
                <Link 
                to={'/Favorites'}>
                    <h2>Meus Favoritos</h2>
                </Link>

                <Link to='/OrderHistory'><h2>Histórico de pedido</h2></Link>
            </div>

            <div>
                {window.innerWidth < 832 ?
                <MobileButton onClick={payment}>
                    <img src={lista}/>
                    <span>{applicationLength ?? 0}</span>
                </MobileButton>
                :
                <Button onClick={payment}>
                    <img src={lista}/>
                    <span>Meu pedido ({applicationLength ?? 0})</span>
                </Button>
                }
            </div>

            <button onClick={logOut} className="logOut">
                <FiLogOut />
            </button>
        </Container>
    )
}
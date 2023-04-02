import logoHeaderFoodExplorer from '../../assets/logoHeaderFoodExplorer.svg';
import {AiOutlineMenu} from 'react-icons/ai';
import {GiCrossMark} from 'react-icons/gi';
import {FiSearch} from 'react-icons/fi';
import {FiLogOut} from 'react-icons/fi';


import {Input} from '../../components/Input';
import {api} from '../../services/api';
import {Sidebar} from '../Sidebar';

import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {useAuth} from '../../hooks/auth';
import {Link} from 'react-router-dom';

import {Container, Button} from './styles';

export function HeaderAdm({setPlate=()=>{}, plate}) {
    const [search, setSearch] = useState("");

    const navigate = useNavigate();
    const {signOut} = useAuth();

    useEffect(()=>{
        async function fetchPlate(){
            const response = await api.get(`/plates?title=${search}`);
            setPlate(response.data);
        }
        fetchPlate();
      },[search, plate]);

    function logOut() {
        navigate("/");
        signOut();
    };

    function turnHomePage(){
        navigate("/");
    };

    async function addPlate(){
        navigate("/AdminAddPlate");
    };

    //=================mobile===================

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar)
 
    useEffect(()=>{
        const menu = document.querySelector('.menu');
        
        if(window.innerWidth < 950){
            menu.classList.remove('hidden');
        }else{
            menu.classList.add('hidden');
        };

        if(window.innerWidth > 950){
            setSidebar(false)
        };
    },[window.innerWidth]);

    useEffect(()=>{
        const menu = document.querySelector('.menu');

        if(sidebar === true){
            menu.classList.add('formatSidebarMenu');
        }else{
            menu.classList.remove('formatSidebarMenu');
        }
    },[sidebar]);

    return(
        <Container>
            <div className="wrapper_button_logo" id={sidebar === true ? 'hidden' : ''}>
                <button onClick={turnHomePage}>
                    <img src={logoHeaderFoodExplorer} alt='logo food Explorer'/>
                </button>
                <span>admin</span>
            </div>

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
            </div>

            <div className='wrapper_input'>
                <Input
                icon={FiSearch}
                placeholder="Busque por pratos ou ingredientes" 
                onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className='wrapper_favorites_historic'>
                <Link 
                to={'/FavoritesAdmin'}>
                    <h2>Favoritados</h2>
                </Link>

                <Link to='/OrderHistoryAdm'><h2>Histórico de pedidos</h2></Link>
            </div>
            
            <div className='wrapper_buttons'>
                <Button id='buttonAddPlate' onClick={addPlate}>
                    <span>Novo prato</span>
                </Button>

                <button onClick={logOut} className="logOut">
                    <FiLogOut />
                </button>
            </div>
        </Container>
    )
}
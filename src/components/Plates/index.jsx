import {RiArrowDropRightLine} from 'react-icons/ri';
import {GoPlus} from 'react-icons/go';
import {CgBorderStyleSolid} from 'react-icons/cg';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import {BsPencil} from 'react-icons/bs';

import {Container} from './styles';
import {Button} from '../Button';

import {Link} from 'react-router-dom'
import {api} from "../../services/api";
import {useState, useEffect} from "react"
import {useNavigate} from 'react-router-dom';

import { RingLoader } from 'react-spinners';

export function Plates({date, ...rest}) {
    const [amount, setAmount] = useState(1);
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"))
   
    function AddAmount(){
        setAmount(prevState => prevState + 1)
    }
    function removeAmount(){
        if(amount > 1){
            setAmount(prevState => prevState - 1)
        }else{
            return
        }
    }
   
    async function addPlateInList(){
        await api.post("/requests", {
            title: date.title,
            description: date.description,
            price: date.price,
            category: date.category,
            amount,
            plate_id: date.id,
            user_id: user.id
        });
        setForList();
        alert("Prato adicionado a lista!");
    }

    async function setForList(){
        const response = await api.get(`/requests/${user.id}`)
        const applicationLength = response.data.length;
        localStorage.setItem("@rocketfood:applicationLength", applicationLength)
    } 
   
//===================================================

    async function addFavorite(){
        await api.post(`favorites/${date.id}`, {
            title: date.title,
            imagem: date.imagem,
            category: date.category,
            description: date.description,
            price: date.price,
            plate_id: date.id,
            user_id: user.id,
        })
    }

    async function actionCheck() {
        addFavorite() 
        alert('fazer uma animação aq quando for curtido')
    }

    function admEdit(){
        navigate(`/AdminEdit/${date.id}`)
    }

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    return(
        <Container {...rest}>
            {loading ?
            <RingLoader
            size={50}
            color={'#ffffff'}
            loading={loading}
            />
            :
            <div>
                {user.id == 1 ?
                <div className='wrapper_favorite'>
                    <Button
                    onClick={admEdit} 
                    id='buttonFavorite'
                    />
                    <BsPencil />
                </div>
                : 
                <div className='wrapper_favorite'>
                    <Button
                    onClick={actionCheck} 
                    id='buttonFavorite'
                    />

                    {date.user_id == user.id ?
                    <AiFillHeart /> : <AiOutlineHeart /> }
                </div>
                }

                <div className={window.innerWidth < 832 ? 'wrapper_plate_mobile' : ''}>
                    <Link to={`/Details/${date.id}`}>
                        
                        <div className='wrapper_img'>
                            <img src={`${api.defaults.baseURL}/files/${date.imagem}`} alt="imagem do prato" />
                        </div>

                        <div className='wrapper_title'>
                            <h1>{date.title}</h1>
                            <RiArrowDropRightLine />
                        </div>

                        <div className='wrapper_description'>
                            <p>{date.description}</p>
                        </div>
                        
                        <div className='wrapper_price'>
                            {/* essa trasnformação n está funcionando */}
                            <span>R$ {date.price}</span>
                        </div>

                    </Link>
                </div>

                {
                user.id == 1 ?
                null
                :
                <div className='wrapper_buttons' id={window.innerWidth < 832 ? 'wrapper_buttons_mobile': ''}>
                    <div className='wrapper_controll'>
                        <button onClick={removeAmount} id='buttonLess'><CgBorderStyleSolid /></button>
                        <span>{String(amount).padStart(2, "0")}</span>
                        <button onClick={AddAmount} id='buttonMore'><GoPlus /></button>
                    </div>

                    <Button 
                    onClick={addPlateInList} 
                    title='Incluir'
                    />
                </div>
                }
            </div>}

        </Container>
    )
}

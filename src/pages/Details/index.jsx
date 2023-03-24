import {Header} from '../../components/Header'
import {HeaderAdm} from '../../components/HeaderAdm';
import {Footer} from '../../components/Footer'

import {IoIosArrowBack} from 'react-icons/io';
import {GoPlus} from 'react-icons/go';
import {CgBorderStyleSolid} from 'react-icons/cg';
import {Button} from '../../components/Button';

import {api} from '../../services/api';
import {useState, useEffect} from 'react';

import {Container} from './styles'

import { useParams, useNavigate} from 'react-router-dom'

export function Details() {
    const [adm, setAdm] = useState("");
    const [plate, setPlate] = useState({});
    const [ingredient, setIngredient] = useState([]);
    const [amount, setAmount] = useState(1);

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"))
    localStorage.setItem("@rocketfood:plateDetails", JSON.stringify(plate))

    const navigate = useNavigate();
    const params = useParams();
    
    useEffect(()=>{
        async function getPlate(){
            const response = await api.get(`/plates/${params.id}`);
            setPlate(response.data[0])
            setIngredient(response.data[1])
        }
        getPlate();
    },[]);
    
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("@rocketfood:user"));
        return setAdm(user.admin);
    },[]);

    function handleEdit(){
        return navigate(`/AdminEdit/${plate.id}`);
    };

    function handleBack(){
        return navigate("/");
    };


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
        const plateDetails = JSON.parse(localStorage.getItem("@rocketfood:plateDetails"))

        await api.post("/requests", {
            title: plateDetails.title,
            description: plateDetails.description,
            price: plateDetails.price,
            category: plateDetails.category,
            amount,
            plate_id: plateDetails.id,
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

    return(
        <Container>

            {adm == 1 ? <HeaderAdm /> : <Header />}

            {plate && 
            <section className='wrapper_dish_details'>
                <div className='turn_back'>
                    <IoIosArrowBack />
                    <button onClick={handleBack}>Voltar</button>
                </div>
                
                <div className='wrapper_img_dish'>
                    <img src={`${api.defaults.baseURL}/files/${plate.imagem}`} alt="imagem do prato" />
                </div>

                <div className='wrapper_description'>
                    <div className='wrapper_title'>
                        <h1>{plate.title}</h1>
                        <p>{plate.description}</p>
                    </div>

                    <div className='wrapper_ingredients'>
                        <ul>
                            {
                                ingredient.map((e, index)=>{
                                    return(
                                    <li key={String(index)}>
                                        {ingredient[index].name}
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='wrapper_buttons'>
                        {adm == 1 ?
                        null
                        :
                        <div>
                            <button onClick={removeAmount} id='buttonLess'><CgBorderStyleSolid /></button>
                            <span>{String(amount).padStart(2, "0")}</span>
                            <button onClick={AddAmount} id='buttonMore'><GoPlus /></button>
                        </div>
                        }

                        {
                        adm == 1 ?
                        <Button onClick={handleEdit} title='Editar prato'/>
                        :
                        <button onClick={addPlateInList} id="btnInclude">incluir &nbsp;&bull; R$ {plate.price * amount}</button>
                        }
                    </div>
                </div>
            </section>
            }
            
            <Footer />
        </Container>
    )
}
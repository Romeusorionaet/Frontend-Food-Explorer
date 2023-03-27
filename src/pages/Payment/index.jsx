import waitingPaymentImg from '../../assets/waitingPayment.svg';
import paymentApprovedImg from '../../assets/paymentApproved.svg';
import orderDeliveredImg from '../../assets/orderDelivered.svg';
import QrCode from '../../assets/QrCode.svg';

import pixImg from '../../assets/pix.svg';
import creditImg from '../../assets/credit.svg';

import {api} from "../../services/api";
import { useEffect, useState } from 'react';
import {Header} from '../../components/Header';
import {Button} from '../../components/Button';
import {Footer} from '../../components/Footer';

import {Container, SectionRequest, SectionPayment, Form} from './styles';

export function Payment() {
    const [plate, setPlate] = useState([]);
    const [remove, setRemove] = useState([]);
    const [total, setTotal] = useState(0);

    const [hiddenSection, setHiddenSection] = useState(false);
    const [pix, setPix] = useState(false);
    const [transitionImg, setTransitionImg] = useState(60);

    const [orderLength, setOrderLength] = useState([]);

    var count = 60;

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"))

    useEffect(()=>{
        async function requestedDishes(){
            const response = await api.get(`/requests/${user.id}`);
            setPlate(response.data);
            localStorage.setItem("@rocketfood:totalDebt", JSON.stringify(response.data))
        }
        requestedDishes();
    },[plate])

    useEffect(()=>{
        if(remove.length !== 0){
            async function removePlate(){
                await api.delete(`/requests/${remove}/${user.id}`);
            }
            removePlate();
        }
    },[remove])

    useEffect(()=> {
        let totalDebt = 0
      
        plate.forEach(plate => {
            totalDebt += (Number(plate.price) * Number(plate.amount))
        });
        setTotal(totalDebt)
    },[plate])

    useEffect(()=>{
        async function getOrderLength(){
            const response = await api.get(`/requests/${user.id}`);
            setOrderLength(response.data);
        }
        getOrderLength();
    },[orderLength])

    function startPayment(){
        if(orderLength.length === 0){
            alert('Lista de pedido vazio!')
        }else{
            start();
            setPix()
        }
    }

    function start() {
        //trocar esse alert por outro tipo personalizado q n precise de confirm 
        //alert('Prato recebido! Você pode acompanhar o status do seu prato em "Histórico de pedido".')
        setPix()
        
        if (count > 0){
            count -= 1;
            if (count == 30) {

                setTransitionImg(29);
                orderHistory();

            }else if(count < 10){
                count = "0" + count;
            }
            setTimeout(start, 100); 
        }

        if(count == 0){
            setTransitionImg(0);
        }
    }

    async function orderHistory(){
        await api.post(`/orderHistory/${user.id}`)
    }

    return(
        <Container>
            <Header />

            <SectionRequest>
                
                <div 
                className={(hiddenSection === true && window.innerWidth <= 800) ? 'hidden' : 'list'}
                >
                    <h2>Meu pedido</h2>

                    <div>
                        <ul>
                            {plate &&
                            plate.map((item, index)=>{
                                let price = item.price * item.amount

                                return(
                                    <li key={String(index)}>
                                        <img src={`${api.defaults.baseURL}/files/${item.imagem}`} alt="imagem do prato" />
                                        <div>
                                            <div id="wrapper_text_and_price">
                                                <p>{item.amount + "X"} {item.title}</p>
                                                <span>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                                            </div>
                                        
                                            <button 
                                            onClick={()=>{setRemove(item.plate_id)}}
                                            >
                                                Excluir
                                            </button>
                                        </div>
                                    </li>
                                )
                            })
                            }   
                        </ul>
                    </div>
                </div>
                
                <div className={hiddenSection === true ? 'hidden' : 'wrapper_totalAndButton'}>
                    <span>Total: {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                        
                    <Button 
                    onClick={()=>{setHiddenSection(true)}}
                    title='Avançar' 
                    className={window.innerWidth <= 800 ? '' : 'hidden'} 
                    />
                </div>

            </SectionRequest>

            <SectionPayment
            className={
                (hiddenSection === false && window.innerWidth <= 800) ? 'hidden' : ''
            }
            >

                <h2>Pagamento</h2>
                
                <div className='wrapper'>

                    <div className='wrapper_option'>
                        <button 
                        className='opcionPix'
                        id={`${pix === false ? "" : "backgroundCheck"}`} 
                        onClick={()=>{setPix(false)}}
                        >
                            <img src={pixImg} alt="pix symbol svg" />
                            <span>PIX</span>
                        </button>

                        <button
                        className='opcionCredit'
                        id={`${pix === true ? "" : "backgroundCheck"}`}
                        onClick={()=>{setPix(true)}}
                        >  
                            <img src={creditImg} alt="credit symbol svg" />
                            <span>Crédito</span>
                        </button>
                    </div>

                    <div className='wrapper_form_and_pix'>

                        <div className={pix === false ? 'pix' : 'hidden'}>
                            <img src={QrCode} alt="Campo QrCode em caso de pagamento, Pix." />
                        </div>

                        <div className={`wrapper_form ${pix === true ? "" : "hidden"}`}>
                            <Form>
                                <label>
                                    Número do Cartão
                                    <input 
                                    disabled
                                    placeholder="0000 0000 0000 0000"
                                    type="number" 
                                    />
                                </label>

                                <div className='wrapper_date_and_cvc'>
                                    <label>
                                        Validade
                                        <input 
                                        disabled
                                        placeholder="04/26"
                                        type="number" 
                                        />
                                    </label>

                                    <label>
                                        CVC
                                        <input 
                                        disabled
                                        placeholder="04/26"
                                        type="number" 
                                        />
                                    </label>
                                </div>

                                <Button onClick={startPayment} title="Finalizar pagamento" />
                            </Form>
                        </div>

                        <div className={pix === undefined ? 'wrapper_waitingPaymentImg' : 'hidden'}>
                            <img className={transitionImg > 30 ? '' : 'hidden'} src={waitingPaymentImg} alt="watch" />
                            <img className={(transitionImg <= 29 && transitionImg > 0) ? '' : 'hidden'} src={paymentApprovedImg} alt="payment Approved" />
                            <img className={transitionImg === 0 ? '' : 'hidden'} src={orderDeliveredImg} alt="payment Approved" />
                        </div>
                    </div>

                </div>

            </SectionPayment>

            <Footer />
        </Container>
    )
}
import waitingPaymentImg from '../../assets/waitingPayment.svg';
import paymentApprovedImg from '../../assets/paymentApproved.svg';
import orderDeliveredImg from '../../assets/orderDelivered.svg';
import QrCode from '../../assets/QrCode.svg'

import pixImg from '../../assets/pix.svg'
import creditImg from '../../assets/credit.svg'


import {api} from "../../services/api";
import { useEffect, useState } from 'react';
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'

import {Container, SectionRequest, SectionPayment, Form} from './styles'

export function Payment() {
    const [plate, setPlate] = useState([]);
    const [remove, setRemove] = useState([]);
    const [total, setTotal] = useState(0);
    const [isContainerActive, setIsContainerActive] = useState(false);

    //preciso pensar em refatorar essa parte onde tem document, seperar em outro arquivo
    //chamdo de elements

    var count = 60;
    const hiddenWatch = document.getElementById("hiddenWatch");
    const paymentApproved = document.getElementById("hiddenPaymentApproved");
    const hiddenOrderDelivered = document.getElementById("hiddenOrderDelivered");

    const buttonPix = document.querySelector('.opcionPix');
    const buttonCredit = document.querySelector('.opcionCredit');
    const form = document.querySelector('.wrapper_form form');
    const showWrapper = document.querySelector('.wrapper_waitingPaymentImg');
    const pix = document.querySelector('.pix');

    const user = JSON.parse(localStorage.getItem("@rocketfood:user"))

    useEffect(()=>{
        async function requestedDishes(){
            const response = await api.get(`/requests/${user.id}`);
            setPlate(response.data);
            localStorage.setItem("@rocketfood:totalDebt", JSON.stringify(response.data))
        }
        requestedDishes();
    },[plate])

    function opcionPix(){
        setIsContainerActive(false);
    }
    
    function opcionCredit(){
        setIsContainerActive(true);
    }

    useEffect(()=>{
        async function removePlate(){
            await api.delete(`/requests/${remove}/${user.id}`);
            const value = localStorage.getItem("@rocketfood:applicationLength")
            localStorage.setItem("@rocketfood:applicationLength", value -1)
        }
        removePlate();
    },[remove])

    useEffect(()=> {
        let totalDebt = 0
      
        plate.forEach(plate => {
            totalDebt += (Number(plate.price) * Number(plate.amount))
        });
        setTotal(totalDebt)
    },[plate])

    function waitingPayment(){
        buttonCredit.style.pointerEvents = 'none';
        buttonPix.style.pointerEvents = 'none';
        
        form.style.display = 'none';

        showWrapper.classList.remove('hidden');
        pix.classList.add('hidden');

        start();
    }

    //como o form de credit é só como demostração, então avisar o usuário em um alert

    function start() {
        if (count > 0){
            count -= 1;
            if (count == 30) {
                hiddenWatch.classList.add("hiddenWatchClass");
                paymentApproved.classList.remove("hidden");

                orderHistory();
            }else if(count < 10){
                count = "0" + count;
            }
            setTimeout(start, 100); 
        }

        if(count == 0){
            paymentApproved.classList.add("hidden");
            hiddenOrderDelivered.classList.remove('hidden')
            //Depois que o pagamento for confirmado, mostrar um alert informando que pode
            //acompanhar o status do prato em histórico de pedidos
        }
    }

    async function orderHistory(){
        await api.post(`/orderHistory/${user.id}`)
    }


    return(
        <Container>
            <Header />

            <SectionRequest>
                <h2>Meu pedido</h2>

                <div className='list'>
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

                <div className='total'>
                    <span>Total: {total.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                </div>
            </SectionRequest>

            <SectionPayment>
                <h2>Pagamento</h2>
                <div className='wrapper'>
                    <div className='wrapper_option'>
                        <button 
                        className='opcionPix'
                        id={`${isContainerActive !== true ? "backgroundCheck" : ""}`} 
                        onClick={opcionPix}
                        >
                           <img src={pixImg} alt="pix symbol svg" />
                            <span>PIX</span>

                        </button>

                        <button
                        className='opcionCredit'
                        id={`${isContainerActive !== false ? "backgroundCheck" : ""}`}
                        onClick={opcionCredit}
                        >
                            
                           <img src={creditImg} alt="credit symbol svg" />
                            <span>Crédito</span>

                        </button>
                    </div>
        {/* ver outro nome de class para esse wrapper abaixo */}
                    <div className='wrapper_input_cretid_and_pix'>
                        <div className={`pix ${isContainerActive !== false ? "hidden" : ""}`}>
                            <img src={QrCode} alt="Campo QrCode Em caso de pagamento, Pix." />
                        </div>

                        <div className={`wrapper_form ${isContainerActive !== true ? "hidden" : ""}`}>
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

                                <Button onClick={waitingPayment} title="Finalizar pagamento" />

                            </Form>
                        </div>

                        <div className='wrapper_waitingPaymentImg hidden'>
                            <img id='hiddenWatch' src={waitingPaymentImg} alt="watch" />
                            <img id='hiddenPaymentApproved' className='hidden' src={paymentApprovedImg} alt="payment Approved" />
                            <img id='hiddenOrderDelivered' className='hidden' src={orderDeliveredImg} alt="payment Approved" />
                        </div>
                    </div>
                </div>
            </SectionPayment>

        </Container>
    )
}
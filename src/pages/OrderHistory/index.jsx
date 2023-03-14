import {VscDebugBreakpointData} from 'react-icons/vsc';

import {Header} from '../../components/Header';
import {Footer} from '../../components/Footer';

import statusRed from '../../assets/statusRed.svg';
import statusGreen from '../../assets/statusGreen.svg';
import statusOrange from '../../assets/statusOrange.svg';

import {Container} from './styles';
import {api} from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function formattingDateAndTime(datetime) {
    const [date, time] = datetime.split(" ");
    const [yyyy, mm, dd] = date.split("-");
    const [hour, minutes] = time.split(":");
    const newHour = hour - 3;
    const hourFormatted = `${newHour}:${minutes}`;
    const dateFormatted = `${dd}/${mm}/${yyyy} às ${hourFormatted}`;
    
    return {dateFormatted}
}

export function OrderHistory() {
    const [orderHistory, setOrderHistory] = useState([]);


    const user = JSON.parse(localStorage.getItem("@rocketfood:user"))

    const navigate = useNavigate();

    function payment(){
        navigate("/Payment")
    }

    useEffect(()=>{
        async function getOrderHistory(){
            const response = await api.get(`/orderHistory/${user.id}`)
            setOrderHistory(response.data)
        }
        getOrderHistory();
    },[])

    return(
        <Container>
            <Header />

            <h1>Histórico de Pedidos</h1>
                        
            <section>

                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orderHistory &&
                            orderHistory.map((item, index)=>{
                                return(
                                    <tr key={String(index)}>
                                        <td>
                                            {
                                                item.status === 'pendente' ?
                                                <img id='imgStatus' src={statusRed} alt='ball status indicator' />
                                                :
                                                item.status === 'preparando' ?
                                                <img src={statusOrange} alt='ball status indicator' />
                                                :
                                                <img src={statusGreen} alt='ball status indicator' />  
                                            }
                                            
                                            {item.status}
                                        </td>
                                        <td>{item.id}</td>
                                        <td>{item.details}</td>
                                        <td>{formattingDateAndTime(item.created_at).dateFormatted}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </section>
            <Footer />
        </Container>
    )
}
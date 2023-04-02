import { useEffect, useState } from 'react'
import {Container} from './styles'

export function Popover({title, event}) {
    const [eventPopover, setEventPopover] = useState(true);

    useEffect(()=>{
        if(event === true){
            setTimeout(()=>{
                event = false
                setEventPopover(false);
            },5000);
        }
    },[event]);

    return(
        <Container className={event === false || eventPopover === false ? 'hidden' : 'popover'}>
            <p>{title}</p>
        </Container>
    )
}
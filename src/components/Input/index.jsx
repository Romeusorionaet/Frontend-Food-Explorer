import {Container} from './style';

export function Input({icon: Icon, ...rest}) {
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest} />
        </Container>
    )
}
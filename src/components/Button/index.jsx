import {Container} from './style';

export function Button({title, ...rest}) {
    return (
        <Container 
            type="button"
            {...rest}
        >
            {title}
        </Container>
    );
}
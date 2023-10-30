import {Container} from './style';

export function Button({title, loading = false, ...rest}) {
    return (
        <Container 
            type="button"
            {...rest}
            isDesabled={loading}
        >
            {title}
        </Container>
    );
}
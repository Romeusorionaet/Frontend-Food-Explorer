import {Container} from './style';

export function Button({title, loading = false, icon: Icon, ...rest}) {
    return (
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    );
}
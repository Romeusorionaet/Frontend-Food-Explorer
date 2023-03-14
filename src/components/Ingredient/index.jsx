import {FiPlus, FiX} from 'react-icons/fi';

import {Container} from './style';

export function Ingredient({isNew = false, shadow = false, value, onClick, ...rest}) {
    return(
        <Container isNew={isNew} shadow={shadow}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                {isNew ? <FiPlus /> : <FiX />}
                
            </button>
        </Container>
    )
}
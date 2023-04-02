import styled from 'styled-components';

export const Container = styled.button`
    border: none;
    border-radius: 5px;
    padding: 12px 24px;

    :hover{
        opacity: .8;
    }

    background-color: ${({theme}) => theme.COLORS.RED_900};
    color: ${({theme}) => theme.COLORS.WHITE_900};
    font-weight: 500;
`;
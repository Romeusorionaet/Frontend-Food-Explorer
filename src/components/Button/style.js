import styled from 'styled-components';

export const Container = styled.button`
    /* width: auto;
    height: auto; */

    border-radius: 5px;
    padding: 12px 24px;

    background-color: ${({theme}) => theme.COLORS.RED_900};
    color: ${({theme}) => theme.COLORS.WHITE_900};
    font-weight: 500;
`;
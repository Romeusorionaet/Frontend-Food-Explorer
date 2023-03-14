import styled from 'styled-components'

export const Container = styled.div`
    grid-area: Footer;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 45px 120px;
    margin: 100px 0 0;

    position: absolute;
    width: 100%;
    bottom: 0;
    
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};

    >span{
        font-weight: 400;
        font-size: 14px;
    }
`;
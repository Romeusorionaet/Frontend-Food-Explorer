import styled from 'styled-components'

export const Container = styled.div`
    grid-area: Footer;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    padding: 45px 200px;
    margin: 100px 0 0;

    position: absolute;
    width: 100%;
    bottom: 0;
    
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};

    >span{
        display: flex;
        justify-content: end;
        
        min-width: 100%;

        font-weight: 400;
        font-size: 14px;
    }

   @media (max-width: 760px){
    height: 50px;
    padding: 0;

    >img{
        width: 114px;
        height: 18px;
    }

    >span{
        min-width: 230px;
        font-size: 11px;
    }
   }

   @media (max-height: 800px){
    height: 50px;
    padding: 0;
    
    >img{
        width: 114px;
        height: 18px;
    }

    >span{
        min-width: 230px;
        font-size: 11px;
    }
   }
`;
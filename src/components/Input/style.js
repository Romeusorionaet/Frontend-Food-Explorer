import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
    border-radius: 10px;

    >svg{
        margin-left: 10px;
        color: ${({theme})=>theme.COLORS.WHITE_900};
    }

    >input{
        
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({theme})=>theme.COLORS.WHITE_900};

        background: transparent;
        border: 0;

        &:placeholder{
            color: ${({theme})=>theme.COLORS.PLACEHOLDER};
        }
    }

    @media (max-width: 1340px){
           min-width: 310px;
    }

    @media (max-width: 827px){
           min-width: 90vw;
    }
`;
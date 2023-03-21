import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    position: absolute;
    min-width: 100vw;
    height: 100vh;

    #wrapper_input{
        width: 100%;
        margin-top: 30px;
        margin-left: -20px;
        display: flex;
        justify-content: center;

        Input{
            min-width: 90%;
            height: 100%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    min-width: 100%;
    padding: 45px 20px;  

    a{
        color: ${({theme})=>theme.COLORS.WHITE_900};
        text-decoration: none;
        width: 96%;
        margin-bottom: 20px;
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;

    }
    
    >span{
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;
        cursor: pointer;
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    min-width: 100vw;
    overflow: hidden;
    
    #wrapper_input{
        width: 100%;
        display: flex;
        padding-top: 30px;
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

    padding: 45px 35px;  

    a{
        color: ${({theme})=>theme.COLORS.WHITE_900};
        text-decoration: none;
        margin-bottom: 20px;
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;
    }
    
    >span{
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;
        cursor: pointer;
    }
`;
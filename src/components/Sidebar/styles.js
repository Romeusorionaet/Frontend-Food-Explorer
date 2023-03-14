import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    position: absolute;
    min-width: 100vw;
    height: 100vh;
    margin-top: 105px;

    top: 0;
    left: 0;

    #wrapper_input{
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        /* margin-left: -10px; */

        Input{
            min-width: 90%;
            height: 100%;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    min-width: 100%;
    padding: 45px 20px;  

    a{
        color: ${({theme})=>theme.COLORS.WHITE_900};
        text-decoration: none;
        width: 96%;
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;

    }
    >span{
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;
        cursor: pointer;
    }
`;
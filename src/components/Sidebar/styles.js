import styled from "styled-components";

export const Container = styled.div`
    min-width: 100vw;
    overflow: hidden;

    animation: toRotate 0.5s;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
    
    #wrapper_input{
        display: flex;
        justify-content: center;

        width: 100%;
        padding-top: 30px;
        
        Input{
            min-width: 90%;
            height: 100%;
        }
    }

    @keyframes toRotate{
        0%{transform: rotate(0.9turn)}
        100%{transform: rotate(1turn)}
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;

    animation: toRotate 1s;
    padding: 45px 35px;  

    a{
        text-decoration: none;

        margin-bottom: 20px;
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;

        color: ${({theme})=>theme.COLORS.WHITE_900};
    }
    
    span{
        border-bottom: ${({theme})=>theme.COLORS.BACKGROUND_LINE} solid 1px;

        font-weight: 300;
        cursor: pointer;
    }
`;
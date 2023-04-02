import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    height: 100vh;

    animation: 0.5s screenScale;

    .wrapper_logo{
        width: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 20px 100px;
        align-items: center;

        img{
            width: 320px;
        }
        
        #logo{
            box-shadow: rgba(102, 945, 546, 1) 0px 110px 60px 0px;
        }

        #logoShadow{
            margin-top: 30px;
            height: 80px;
            opacity: .15;
        }
    }

    @media (max-width: 865px){
        flex-direction: column;

        .wrapper_logo{
            margin: 20px 0;
        }
    }
`;

export const Form = styled.form`
    display: flex;
    gap: 32px;
    flex-direction: column;

    width: 840px;
    
    padding: 65px;
    margin: 200px 135px;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};

    label{
        color: ${({theme})=>theme.COLORS.WHITE_100};
    }

    h1{
        text-align: center;
        font-weight: 500;
        font-size: 32px;
    }

    Button{
        min-height: 56px;
        margin: 24px 0 30px 0;
    }

    >div{
        text-align: center;
    }

    @media (max-width: 865px){
        width: auto;
        margin: 20px;
        padding: 0;
        background: none;

        >h1{
            display: none;
        }
    }

`;

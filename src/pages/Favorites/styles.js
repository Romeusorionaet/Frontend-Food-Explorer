import styled from 'styled-components';

export const Container = styled.div`
    animation: 0.5s screenScale;
    height: 100vh;
    
    h1{
        padding: 180px 120px 0;

        font-style: normal;
        font-weight: 500;
        font-size: 32px;
    }

    section{
        margin: 30px 120px;
        height: 60vh;
       
        overflow-x: hidden;
        overflow: auto;

        ul{
            display: flex;
            gap: 32px;

            list-style: none;
            flex-wrap: wrap;
        }

        ul li{
            display: flex;
            align-items: center;
            gap: 15px;
        }

        ul li img{
            height: 100px;
            width: 100px;
        }

        ul li .wrapper_title_button{
            min-width: 100%;

            h2{
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
            }
            button{
                border: none;

                background: none;
                color: ${({theme})=>theme.COLORS.RED_500};
            }
        }
        
        @media (max-width: 760px){
            margin: 10px 20px;
            height: 60vh;
        }
    }

    @media (max-width: 760px){
        h1{
            padding: 120px 20px 0;
            
            font-style: normal;
            font-weight: 500;
            font-size: 28px;
        }
    }
`;



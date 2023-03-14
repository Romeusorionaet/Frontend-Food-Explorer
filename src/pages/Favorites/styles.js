import styled from 'styled-components';

export const Container = styled.div`
    
    h1{
        padding: 180px 120px 0;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
    }

    section{
       
        height: 60vh;;
        margin: 30px 120px;
       
        overflow: auto;

        ul{
            list-style: none;
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        ul li{
            display: flex;
            gap: 15px;
            align-items: center;
        }

        ul li img{
            width: 100px;
            height: 100px;
        }

        ul li .wrapper_title_button{
            min-width: 100%;

            h2{
                font-style: normal;
                font-weight: 500;
                font-size: 20px;
            }
            button{
                background: none;
                border: none;
                color: ${({theme})=>theme.COLORS.RED_500};
            }
        }

        
    }
`;



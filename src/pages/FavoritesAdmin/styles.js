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
       
        overflow: auto;

        ul{
            display: flex;
            gap: 32px;
            
            list-style: none;
            flex-wrap: wrap;
        }

        ul li img{
            width: 100px;
            height: 100px;
        }

        ul li .wrapper_title_like{
            display: flex;
            flex-direction: column;
            align-items: center;
            
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
            div{
                display: flex;
                align-items: center;
                gap: 5px;
                
                svg{
                    color: ${({theme})=>theme.COLORS.RED_900};
                }
            }
        }
    }
    
    @media (max-width: 765px){
        h1{
            padding: 120px 20px 0;
            font-size: 28px;
        }

        section{
            margin: 20px;

            ul li{
                width: 100%;

                .wrapper_title_like{
                    flex-direction: row;
                    gap: 20px;
                }
            }
        }
    }
`;



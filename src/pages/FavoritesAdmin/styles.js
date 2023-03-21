import styled from 'styled-components';

export const Container = styled.div`
    h1{
        padding: 180px 120px 0;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
    }

    section{
        height: 60vh;
        margin: 30px 120px;
       
        overflow: auto;

        ul{
            list-style: none;
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        ul li img{
            width: 100px;
            height: 100px;
        }

        ul li .wrapper_title_like{
            min-width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;

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



import styled from 'styled-components'

export const Container = styled.div`
    animation: 0.5s screenScale;
    height: 100vh;

    >h1{
        padding:  180px 120px 50px;
        font-size: 32px;
    }

    >section{
        padding: 0 120px;
        overflow: auto;
        height: 58vh;
        
        >table{
            width: 100%;

            >thead{
                tr{
                    th{
                        text-align: start;
                    }
                }
            }

            tbody tr td img{
              width: 10px;
              margin-right: 8px; 
            }
        }

        table, td, th{
            border-collapse: collapse;
            border: 1px solid ${({theme})=>theme.COLORS.BACKGROUND_LINE};
            
            padding: 15px;

        }
    }

    .wrapper_mobile{
        height: 70vh;
        overflow: auto;
    }

    @media (max-width: 832px){

        >h1{
            padding:  120px 20px 20px;
            font-size: 22px;
        }
    }

    @media (max-width: 450px){
        .wrapper_mobile{
            height: 68vh;
        }
    }
`;

export const SectionMobile = styled.div`
    border: 1px solid ${({theme})=>theme.COLORS.BACKGROUND_LINE};
    border-radius: 8px;
    padding: 20px;
    margin: 0 10px 10px;
    overflow: auto;
    max-width: 100%;

    color: ${({theme})=>theme.COLORS.WHITE_100};

    .wrapper_header{
        display: flex;
        gap: 25px;
        justify-content: center;
        margin-bottom: 10px;
        color: ${({theme})=>theme.COLORS.WHITE_500};

        .wrapper_status{
            display: flex;
            gap: 10px;
            align-items: center;

            img{
                width: 10px;
            }
        }

    }

    @media (max-width: 450px){
        font-size: 11px;
    }
`;
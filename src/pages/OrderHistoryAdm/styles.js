import styled from 'styled-components'

export const Container = styled.div`
    animation: 0.5s screenScale;

    height: 100vh;
    
    >h1{
        padding:  150px 120px 50px;
        font-size: 32px;
    }
    
    >section{
        padding: 0 120px;
        overflow: auto;
        height: 60vh;
        
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

            #tdStatus{
                width: 180px;
            }

            #wrapper_status{
                padding: 15px;
                background: ${({theme})=>theme.COLORS.BACKGROUND_100};
                width: 170px;;

                select{
                    background: none;
                    border: none;
                    color: white;
                    font-size: 18px;

                    option{
                        background: ${({theme})=>theme.COLORS.BACKGROUND_100};
                    }
                }
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
            height: 60vh;
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

    display: flex;
    flex-direction: column;

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

    .wrapper_select{
        display: flex;
        justify-content: center;
    }

    select{
        margin-top: 10px;
        width: 300px;
        height: 40px;
        
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};
        border: none;
        color: ${({theme})=>theme.COLORS.WHITE_500};
        padding-left: 5px;
    }

    @media (max-width: 450px){
        font-size: 11px;
    }
`;
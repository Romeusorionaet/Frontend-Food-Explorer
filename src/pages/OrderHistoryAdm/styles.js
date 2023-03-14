import styled from 'styled-components'

export const Container = styled.div`
    
    >h1{
        padding:  150px 120px 50px;
        font-size: 32px;
    }

    svg{
        color: red;
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
                width: 165px;;

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

    @keyframes teste {
        
    }
`;
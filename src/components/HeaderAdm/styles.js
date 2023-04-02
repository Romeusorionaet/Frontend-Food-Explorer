import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Header;
    position: fixed;
    z-index: 3;
    
    display: flex;
    justify-content: space-between;
    gap: 30px;
    
    width: 100%;
    padding: 35px 120px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};

    .wrapper_button_logo{
       display: flex;
       flex-direction: column;
       align-items: end;

       >span{
           padding-right: 5px;
           margin-top: -5px;
            font-size: 12px;
            color: ${({theme})=>theme.COLORS.PRICE_$};
       }

       button{
        background: none;
        border: none;
       }
    }

    .wrapper_menu{
        display: flex;
        align-items: center;

        .menu{
            svg{
                font-size: 22px;
                margin-top: 2px;
            }
        }
    }

    .wrapper_input{
        width: 65%;
    }

    .logOut{
        background: none;
        border: none;

        >svg{
            min-height: 25px;
            min-width: 25px;
            
            opacity: .8;
            color: ${({theme})=>theme.COLORS.WHITE_900};
        }
    }

    >svg:hover{
        opacity: 1;
    }

    .wrapper_favorites_historic{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;

        width: 50%;
        
        h2{
            font-style: normal;
            line-height: 100%;
            font-weight: 400;
            font-size: 16px;

            color: ${({theme})=>theme.COLORS.WHITE_500};
        }
    }

    .wrapper_buttons{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    @media (max-width: 1500px){
        .wrapper_favorites_historic{
            flex-direction: column;
        }
    }

    @media (max-width: 1340px){
        padding: 35px 2vw;
        gap: 10px;
        
        .wrapper_menu button{
            margin: 0;
        }

        .wrapper_buttons{
            gap: 0;
            >button{
                width: 100px;
            }
        }
        
        .wrapper_favorites_historic a h2{
            text-align: center;
        }
    }

    @media (max-width: 950px){
        flex-direction: row-reverse;
        padding: 35px 10px;

        .wrapper_button_logo{
            justify-content: center;
            flex-direction: row;
            align-items: center;
            gap: 10px;

            width: 100%;
        }

        .wrapper_menu{
            .sidebar{
                position: absolute;
                left: 20px;
                
                display: flex;
                align-content: center;

                svg{
                    margin-right: 10px;
                }
            }
        }
        .wrapper_favorites_historic, .wrapper_input, .logOut, #buttonAddPlate{
            display: none;
        }        
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: 210px;
    height: 48px;

    padding: 15px;
    border-radius: 5px;

    border: none;
    color: ${({theme})=>theme.COLORS.WHITE_900};
    background-color: ${({theme})=>theme.COLORS.RED_900};

    >span{
        min-width: 100px;
    }

    @media (max-width: 670px){
        width: auto;
    }
`;

import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Header;
    position: fixed;
    width: 100%;
    z-index: 3;

    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;

    padding: 35px 120px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};

    .wrapper_button_logo{
       display: flex;
       flex-direction: column;
       align-items: end;

       >span{
        font-size: 12px;
        padding-right: 5px;
        margin-top: -5px;
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
                font-size: 26px;
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
            min-width: 25px;
            min-height: 25px;
            opacity: .8;

            color: ${({theme})=>theme.COLORS.WHITE_900};
        }
    }

    >svg:hover{
        opacity: 1;
    }

    .wrapper_favorites_historic{
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        width: 50%;
        
        h2{
            font-size: 16px;
            color: ${({theme})=>theme.COLORS.WHITE_500};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
        }
    }

    @media (max-width: 1500px){
        .wrapper_favorites_historic{
            flex-direction: column;
        }
    }

    @media (max-width: 1340px){
        flex-direction: column;
           //background: gray;
    }

    /* @media (max-width: 1115px){
        flex-direction: column;
        gap: 20px;

        padding-top: 40px;

        >svg{
            position: absolute;
            top: 20px;
            right: 20px;
        }     
    } */

    @media (max-width: 831px){
        flex-direction: row;
        padding: 35px;

        flex-direction: row-reverse;
        
        .wrapper_button_logo{
            flex-direction: row;
            align-items: center;
            gap: 10px;
        }

        .sidebar{
            display: flex;
            align-content: center;
            gap: 10px;
            
            svg{
                font-size: 26px;
            }
        }
        .wrapper_favorites_historic, .wrapper_input, .logOut, #buttonAddPlate{
            display: none;
        }        
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 210px;
    height: 48px;

    padding: 15px;

    border-radius: 5px;

    color: ${({theme})=>theme.COLORS.WHITE_900};
    background-color: ${({theme})=>theme.COLORS.RED_900};
    border: none;

    >span{
        min-width: 100px;
    }

    @media (max-width: 670px){
        width: auto;
    }
`;

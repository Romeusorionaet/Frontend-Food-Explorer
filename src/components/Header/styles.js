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

    .wrapper_menu{
        display: flex;
        align-items: center;

        .menu{
            width: 100%;
            svg{
                font-size: 26px;
            }
        }

        button{
         background: none;
         border: none;
         margin-right: 50px;
        }
    }

    .formatSidebarMenu{
        position: absolute;
        background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};
        min-width: 100vh;
        height: 115px;
        left: -10px;
        display: flex;
    }

    .wrapper_input{
        width: 65%;
    }
    
    .wrapper_favorites_historic{
        display: flex;
        gap: 30px;
        align-items: center;
        justify-content: center;
        width: 50%;
        text-align: center;
        
        h2{
            font-size: 16px;
            color: ${({theme})=>theme.COLORS.WHITE_500};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 100%;
        }
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

    @media (max-width: 1500px){
        justify-content: space-around;

        .wrapper_favorites_historic{
            flex-direction: column;
        }
    }
    
    @media (max-width: 1340px){
        .wrapper_menu button{
            margin: 0;
        }
    }

    @media (max-width: 1060px){
        padding-right: 150px;

        .wrapper_favorites_historic a h2{
            text-align: center;
        }

    }

    @media (max-width: 831px){
        flex-direction: row;
        gap: 50px;
        width: 100vmin;

        .wrapper_menu{
            width: 70%;
            padding-right: 280px !important;
            gap: 15vw;
        }

        .sidebar{
            display: flex;
            align-items: center;
            gap: 10px;
            
            svg{
                margin-left: 40px;
            }
        }
        .wrapper_favorites_historic, .wrapper_input, .logOut{
            display: none;
        }      
    }

    @media (max-width: 730px){
        .wrapper_menu{

            >button{
                margin-left: 50px;
            }

            svg{
                margin-left: 15px;
            }

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

export const MobileButton = styled.button`
    background: none;
    border: none;
    position: relative;

    img{
        min-width: 25px;
        height: 25px;
    }

    span{
        color: ${({theme})=>theme.COLORS.WHITE_900};
        position: absolute;
        top: -12px;
        right: -10px;
        background-color: ${({theme})=>theme.COLORS.RED_900};
        border-radius: 10px;
        width: 25px;
        height: 25px;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Header;
    position: fixed;
    z-index: 3;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    width: 100%;
    padding: 35px 100px;
    
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
            margin-right: 50px;
            background: none;
            border: none;
        }
    }
    
    .formatSidebarMenu{
        position: absolute;
        height: 115px;
        left: -10px;
        
        min-width: 100vh;
        display: flex;

        background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};
    }

    .wrapper_input{
        width: 65%;
    }
    
    .wrapper_favorites_historic{
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;

        text-align: center;
        width: 50%;
        
        h2{
            font-style: normal;
            line-height: 100%;
            font-weight: 400;
            font-size: 16px;

            color: ${({theme})=>theme.COLORS.WHITE_500};
        }
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
        padding: 35px 30px;
        gap: 0;

        .wrapper_menu{
            min-width: 100%;
            
            button{
                min-width: 90%;
            }
        }

        .sidebar{
            display: flex;
            align-items: center;
            width: 200px;
            gap: 10px;
            
            span{
                font-size: 20px;
            } 
            svg{
                margin-left: 40px;
            }           
        }
        
        .wrapper_favorites_historic, .wrapper_input, .logOut{
            display: none;
        }      
    }

    @keyframes toRotate{
        0%{transform: rotate(0.9turn)}
        100%{transform: rotate(1turn)}
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

    background-color: ${({theme})=>theme.COLORS.RED_900};
    color: ${({theme})=>theme.COLORS.WHITE_900};
    border: none;

    >span{
        min-width: 100px;
    }
`;

export const MobileButton = styled.button`
    position: relative;
    background: none;
    border: none;

    img{
        min-width: 25px;
        height: 25px;
    }

    span{
        position: absolute;
        top: -12px;
        right: -10px;

        width: 25px;
        height: 25px;

        border-radius: 10px;

        background-color: ${({theme})=>theme.COLORS.RED_900};
        color: ${({theme})=>theme.COLORS.WHITE_900};
    }
`;
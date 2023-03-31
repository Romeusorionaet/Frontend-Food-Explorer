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
        gap: 0;
        padding: 35px 30px;

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
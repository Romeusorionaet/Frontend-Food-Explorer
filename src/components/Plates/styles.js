import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    cursor: grab;
    overflow: hidden;

    .wrapper_favorite{
        position: absolute;
        background: none;
        border: none;
        right: 15px;
        top: 15px;
        z-index: 2;

        #buttonFavorite{
            position: absolute;
            right: -10px;
            top: 3px;
            opacity: 0;
        }

        svg{
            font-size: 35px;
            color: ${({theme})=>theme.COLORS.RED_900};
        }

        @media (max-width: 800px){
            svg{
                font-size: 30px;
            }
        }
    }

    /* =======================mobile================== */

    .wrapper_plate_mobile{
        max-width: 200px;
        max-height: 290px;

        display: flex;
        flex-direction: column;
        align-items: center;

        a{
            gap: 10px;
            
            .wrapper_img{
                padding-top: 20px;
            
                img{
                    width: 90px;
                    height: 90px;
                }
            }

            .wrapper_title{
                max-width: 100%;
                display: flex;
                align-items: center;
                margin-right: 10px;

                svg, h1{
                    font-size: 15px;
                }
            }
    
            .wrapper_description{
                display: none;
            }
    
            .wrapper_price span{
                font-size: 16px;
            }
        }
    }

    #wrapper_buttons_mobile{
        flex-direction: column;
        left: 0;
        width: 100%;
        margin-bottom: -20px;

        span{
            font-size: 20px;
            /* margin-bottom: 5px; */
        }

        #buttonLess, #buttonMore{
            background: none;
            border: none;
            
            svg{
                font-size: 15px;
            }
        }
        
        #buttonLess{
            margin-right: 15px;
        }

        #buttonMore{
            margin-left: 15px;
        }

        >Button{
            width: 90%;
            height: 30px;
            padding: 0;
            margin: 0;
            border: none;
        }
    }

    /* =============================================== */
    
    a{
        display: flex;
        flex-direction: column;
        gap: 18px;
        text-align: center;
        background: rgba(0, 0, 0, 0.65);
        position: relative;
        
        width: 350px;
        height: 530px;

        .wrapper_img{
            padding-top: 55px;
            
            img{
                width: 180px;
                height: 180px;
            }
        }
    
        .wrapper_title{
            display: flex;
            align-items: center;
            margin-left: 30px;
            justify-content: center;
            color: ${({theme})=>theme.COLORS.WHITE_900};
    
            svg{
                font-size: 35px;
            }
        }
    
        .wrapper_description{
            font-family: 'Roboto', serif;
            font-weight: 400;
            font-size: 14px;
            color: ${({theme})=>theme.COLORS.WHITE_100};
            text-align: center;
            height: 50px;
            padding: 0 25px;
            overflow: auto;
       }
    
        .wrapper_price{
            span{
                font-weight: 400;
                font-size: 32px;
                color: ${({theme})=>theme.COLORS.PRICE_$};
            }
        }
    
    }
    
    .wrapper_buttons{
        position: absolute;
        bottom: 35px;
        left: 45px;
        right: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 17px;
        z-index: 2;
        
        span{
            font-size: 20px;
            margin-bottom: 5px;
        }

        #buttonLess, #buttonMore{
            background: none;
            border: none;
    
            svg{
                font-size: 18px;
                color: ${({theme})=>theme.COLORS.WHITE_500};
            }
        }

        .wrapper_controll{
            display: flex;
            gap: 25px;
            width: 80%;
            justify-content: center;
        }
    }
`;
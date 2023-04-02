import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    animation: 0.5s screenScale;

    height: 100vh;
    
    .wrapper_dish_details{
        position: relative;
        height: 100%;

        display: flex;
        justify-content: center;
        gap: 20px;

        padding: 220px 120px;
        margin: 0 120px;

        .turn_back{
            position: absolute;
            top: 150px;
            left: 0;
            
            button{
                display: flex;
                align-items: center;
                gap: 5px;
                
                border: none;

                background: none;
                color: ${({theme})=>theme.COLORS.WHITE_900};

                svg{
                    font-size: 20px;
                }
                span{
                    font-size: 22px;
                }
            }
        }

        .wrapper_img_dish{
            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;

            min-width: 400px;
            height: 400px;

            overflow: hidden;

            >img{
                height: 389.47px;
                width: 389.47px;
            }
        }

        .wrapper_description{
            display: flex;
            justify-content: center;
            flex-direction: column;
            gap: 10px;

            width: 500px;
            height: 400px;

            .wrapper_title{
                overflow: auto;
                height: 100px;

                h1{
                    font-weight: 500;
                    color: ${({theme})=>theme.COLORS.WHITE_900};
                }
                p{
                    color: ${({theme})=>theme.COLORS.WHITE_100};
                }
            }
        }

        .wrapper_ingredients ul{
            display: flex;
            list-style: none;
            gap: 12px;

            overflow: auto;
        }
        
        .wrapper_ingredients ul li{
            display: flex;
            flex-direction: column;
            align-items: center;

            height: 35px;

            border-radius: 8px;
            padding: 4px 8px;

            background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D};
        }
        
        .wrapper_buttons{
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 17px;

            margin-top: 20px;

            div{
                display: flex;
                gap: 17px;

                #buttonLess, #buttonMore{
                    background: none;
                    border: none;
    
                    >svg{
                        color: ${({theme})=>theme.COLORS.WHITE_900}
                    }
                }
                >span{
                    font-size: 20px;
                    margin-bottom: 5px;
                }
            }

            #btnInclude{
                display: flex;
                align-items: center;

                padding: 24px 12px;
                border-radius: 8px;
                border: none;
                height: 48px;

                color: ${({theme})=>theme.COLORS.WHITE_900};
                background-color: ${({theme})=>theme.COLORS.RED_1000};
            }

        }
    }

    @media (max-width: 1500px){
        .wrapper_dish_details{
            .turn_back{
                top: 180px;
            }
        }
    }

    @media (max-width: 800px){
        .wrapper_dish_details{
            flex-direction: column;
            padding: 180px 0;
            margin: 0;
            
            .wrapper_description{
                width: 100%;
                height: 100%;

                align-items: center;
                overflow: hidden;

                margin-bottom: -180px;
                
                position: relative;
                
                .wrapper_title{
                    position: absolute;
                    height: 95px;
                    top: 0;

                    text-align: center;
                    overflow: auto;
                }
                
                .wrapper_ingredients{
                    display: flex;

                    overflow: auto;

                    height: 110px;
                    padding: 5px;
                    
                    ul{
                        flex-wrap: wrap;
                    }
                }
            }

            .wrapper_img_dish{
                justify-content: center;
                margin: -0px auto;
                min-width: 200px;

                height: auto;

                >img{
                    width: 50vw;
                    height: 50vw;
                }
            }
            .turn_back{
                position: absolute;
                top: 130px;
                left: 15px;
            }
        }
    }

    @media (max-height: 700px){
        .wrapper_dish_details{
            padding: 140px 0;
        }
    }
`;
import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    position: relative;
    
    .wrapper_dish_details{
        position: relative;
        display: flex;
        gap: 50px;
        justify-content: center;
        padding: 220px 120px;
        margin: 0 120px;

        .turn_back{
            position: absolute;
            top: 150px;
            left: 0;
            display: flex;
            align-items: center;
            gap: 5px;
            button{
                background: none;
                border: none;
                color: ${({theme})=>theme.COLORS.WHITE_900};
            }
        }

        .wrapper_img_dish{
            >img{
                width: 389.47px;
                height: 389.47px;

            }

        }

        .wrapper_description{
            width: 600px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            
            justify-content: center;
        }

        .wrapper_ingredients ul{
            display: flex;
            gap: 12px;
            list-style: none;
            overflow: auto;
        }
        
        .wrapper_ingredients ul li{
            align-items: center;
            display: flex;
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D};
            border-radius: 8px;
            padding: 4px 8px;
            flex-direction: column;
        }
        
        .wrapper_buttons{
            display: flex;
            margin-top: 20px;
            align-items: center;
            justify-content: start;
            gap: 17px;

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
                background-color: ${({theme})=>theme.COLORS.RED_1000};
                border: none;
                color: ${({theme})=>theme.COLORS.WHITE_900};
                padding: 24px 12px;
                height: 48px;
                display: flex;
                align-items: center;
                border-radius: 8px;;
            }

        }
    }
`;
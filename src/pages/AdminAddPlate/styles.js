import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    animation: 0.5s screenScale;
    height: 100vh;

    >Form{
        padding: 150px 120px;
    }
    
    .wrapper_footer{
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    @media (max-width: 800px) {
        height: 100%;

        >Form{
            padding: 150px 25px;
        }
    }
`;

export const Form = styled.form`
    input{
        height: 50px;
        color: ${({theme})=>theme.COLORS.WHITE_900};
    }

    label{
        display: flex;
        flex-direction: column;
        gap: 5px;

        input, textarea{
            border-radius: 8px;
            padding: 15px;
            border: none;

            background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
        }

        textarea{
            height: 170px;
            resize: none;

            color: ${({theme})=>theme.COLORS.WHITE_900};
        }
    }

    .wrapper_title_and_button{
        display: flex;
        flex-direction: column;
        gap: 25px;

        margin-bottom: 30px;

        h1{
            font-weight: 500;
            font-size: 32px;
        }

        >button{
            display: flex; 
            align-items: center;
            border: none;
            
            background: none;
            color: ${({theme})=>theme.COLORS.WHITE_900}; 

            svg{
                font-size: 30px;
            }
            span{
                font-size: 22px;
            }
        }
    }

    .wrapper_inpunts{
        display: flex;
        gap: 40px;
    
        flex-direction: column;
        
        .wrapper_plate{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            gap: 30px;

            >div{
                display: flex;
                gap: 30px;
                
                label{
                    width: 20%;

                    >div{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 5px;

                        height: 45px;

                        border-radius: 8px;
                        padding: 5px;

                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
    
                        >svg{
                            font-size: 24px;
                        }
                    }
                    input[type='file']{
                        display: none;
                    }
                }

                .wrapper_name_category{
                    display: flex;
                    gap: 30px;

                    border-radius: 8px;
                    width: 80%;
    
                    label{
                        width: 100%;
                       
                    }

                    #select{
                        padding: 13px;
                        border: none;
                        
                        color: ${({theme})=>theme.COLORS.WHITE_100};
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};

                        option{
                            background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
                        }
                    }
                }
            }

            .wrapper_ingredients_price{
                display: flex;

                div{
                    width: 80%;
                    
                    .ingredients{
                        display: flex;
                        align-items: center;
                        gap: 5px;

                        border-radius: 8px;

                        width: 100%;
                        height: 50px;

                        overflow-y: hidden;
                        overflow-x: auto;
                        
                        padding: 5px;
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
                    }
                }
            }
            
        }
    }

    .button{
        display: flex;
        justify-content: end;
        margin-top: 20px;

        >button{
            border-radius: 8px;
            border: none;
            
            width: 360px;
            height: 60px;
            
            color: ${({theme})=>theme.COLORS.WHITE_900};
            background-color: ${({theme})=>theme.COLORS.RED_500};
        }
    }

    @media (max-width: 800px){
        .wrapper_inpunts .wrapper_plate{
            >div{
                flex-direction: column;

                label{
                    width: 100%;
                }

                .wrapper_name_category{
                    flex-direction: column;
                    width: 100%;
                }
            }

            .wrapper_ingredients_price{
                div{
                    width: 100%;
                }
            }
        }
    }

`;
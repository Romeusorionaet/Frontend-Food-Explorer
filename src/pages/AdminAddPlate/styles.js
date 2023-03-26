import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
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
        gap: 5px;
        flex-direction: column;

        input, textarea{
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
            padding: 15px;
            border: none;
            border-radius: 8px;;
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
            align-items: center;
            display: flex; 
            background: none;
            border: none;
            width: 80px;
            color: ${({theme})=>theme.COLORS.WHITE_900}; 
        }
    }

    .wrapper_inpunts{
        display: flex;
        gap: 40px;
    
        flex-direction: column;
        
        .wrapper_plate{
            display: flex;
            flex-direction: column;
            gap: 30px;
            justify-content: space-between;

            >div{
                display: flex;
                gap: 30px;
                
                label{
                    width: 20%;
                    >div{
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
                        display: flex;
                        border-radius: 8px;
                        gap: 5px;
                        align-items: center;
                        justify-content: center;
                        height: 45px;
                        padding: 5px;
    
                        >svg{
                            font-size: 24px;
                        }
                    }
                    input[type='file']{
                        display: none;
                    }
                }

                .wrapper_name_category{
                    width: 80%;
                    display: flex;
                    gap: 30px;
                    border-radius: 8px;
    
                    label{
                        width: 100%;
                       
                    }

                    #select{
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
                        color: ${({theme})=>theme.COLORS.WHITE_100};
                        padding: 13px;
                        border: none;

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
                        border-radius: 8px;
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
                        width: 100%;
                        height: 50px;
                        overflow-y: hidden;
                        overflow-x: auto;
                        display: flex;
                        gap: 5px;
                        padding: 5px;
                        align-items: center;
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
            background-color: ${({theme})=>theme.COLORS.RED_500};
            color: ${({theme})=>theme.COLORS.WHITE_900};
            border-radius: 8px;
            border: none;
            width: 360px;
            height: 60px;
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
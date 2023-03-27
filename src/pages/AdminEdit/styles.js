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

    @media (max-height: 800px){
        height: 100%;
    }
`;

export const Form = styled.form`
    label{
        display: flex;
        gap: 5px;
        flex-direction: column;

        input, textarea{
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
            border: none;
            padding: 15px;
            border-radius: 8px;
            color: ${({theme})=>theme.COLORS.WHITE_900};
        }

        input{
            height: 45px;
        }
        textarea{
            height: 170px;
            resize: none;
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
                        border-radius: 8px;
                        border: none;
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
                        display: flex;
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
    
                    label{
                        width: 100%;
                       
                    }

                    #select{
                        border-radius: 8px;
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

            .wrapper_ingredients_and_price{
                position: relative;
                display: flex;

                div{
                    width: 80%;
                
                    .ingredients{
                        width: 95%;
                        height: 50px;
                        overflow-y: hidden;
                        overflow-x: auto;
                        display: flex;
                        gap: 5px;
                        padding: 5px;
                        align-items: center;
                        border-radius: 8px;
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};

                        .ingredients_registered{
                            width: 65.5%;
                            opacity: .5;
                            position: absolute;
                            bottom: 55px;
                            left: 160px;
                            overflow-y: hidden;
                            overflow-x: auto;
                            display: flex;
                            gap: 5px;
                        }
                    }
                }
            } 
        }

    .buttons{
        display: flex;
        gap: 30px;
        justify-content: end;
        margin-top: 20px;

        >button:nth-child(1){
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
        }

        >button{
            background-color: ${({theme})=>theme.COLORS.RED_500};
            color: ${({theme})=>theme.COLORS.WHITE_900};
            border-radius: 8px;
            border: none;
            padding: 12px;
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

            .wrapper_ingredients_and_price{
                div{
                    width: 100%;
                    
                    .ingredients{
                        margin-bottom: 50px;
                        
                        .ingredients_registered{
                            width: 100%;
                            bottom: 90px;
                            left: 0;
                        }
                    }
                }
            }
        }

        .buttons{
            gap: 10px;
            justify-content: center;
        }
    }
`;
import styled from 'styled-components'

export const Container = styled.div`
    position: relative;

    height: 100vh;

    animation: 0.5s screenScale;

    >Form{
        padding: 150px 120px;

        label{
            color: ${({theme})=>theme.COLORS.WHITE_100};
        }
    }

    .wrapper_footer{
        position: absolute;
        bottom: 0;

        width: 100%;
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
    #wrapper_file{
        color: ${({theme})=>theme.COLORS.WHITE_900};
    }

    label{
        display: flex;
        flex-direction: column;
        gap: 5px;

        input, textarea{
            border-radius: 8px;
            border: none;

            padding: 15px;

            color: ${({theme})=>theme.COLORS.WHITE_900};
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};
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
            display: flex; 
            align-items: center;

            background: none;
            border: none;
            color: ${({theme})=>theme.COLORS.WHITE_900};

            svg{
                font-size: 30px;
            }
            span{
                font-size: 22px;
            }
        }
    }

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

                        border-radius: 8px;
                        border: none;
                        
                        height: 45px;
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
                    
                    width: 80%;

                    label{
                        width: 100%;
                    }

                    #select{
                        border-radius: 8px;
                        border: none;

                        padding: 13px;

                        color: ${({theme})=>theme.COLORS.WHITE_100};
                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};

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
                        display: flex;
                        align-items: center;
                        gap: 5px;

                        width: 95%;
                        height: 50px;

                        overflow-y: hidden;
                        overflow-x: auto;
                        
                        border-radius: 8px;
                        padding: 5px;

                        background-color: ${({theme})=>theme.COLORS.BACKGROUND_INGREDIENT_D2};

                        .ingredients_registered{
                            position: absolute;
                            bottom: 55px;
                            left: 160px;

                            display: flex;
                            width: 45.5%;
                            gap: 5px;

                            overflow-y: hidden;
                            overflow-x: auto;

                            opacity: .5;
                        }
                    }
                }
            } 
        }

    .buttons{
        display: flex;
        justify-content: end;
        gap: 30px;

        margin-top: 20px;

        >button:nth-child(1){
            background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
        }

        >button{
            border-radius: 8px;
            border: none;

            padding: 12px;
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
            justify-content: center;
            gap: 10px;
        }
    }
`;
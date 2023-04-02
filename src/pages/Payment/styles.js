import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 120px 0 0;

    height: 100vh;
    overflow-y: hidden;

    animation: 0.5s screenScale;

    .loader{
        width: 50%;;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 800px){
        padding: 0;

        .loader{
            width: 100%;
        }
    }
`;

export const SectionRequest = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;

    padding: 180px 120px;

    h2{
        font-weight: 500; 
        font-size: 32px;
    }

    .list{
        overflow: auto;
        min-height: 100%;

        #wrapper_text_and_price{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;

            span{
                color: ${({theme})=>theme.COLORS.WHITE_100};
                font-size: 12px;
            }
        }
       
        ul{
            list-style: none;
            li{
                display: flex;
                align-items: center;
                gap: 10px;
                
                padding: 5px 10px 5px 0;
                margin-top: 15px;
                
                img{
                    width: 75px;
                }
                div{
                    display: flex;
                    flex-direction: column;   
                }
                button{
                    width: 35px;
                    color: ${({theme})=>theme.COLORS.RED_900};
                    background: none;
                    border: none;
                }
            }
        }
    }
    
    @media (max-width: 800px){
        padding: 130px 5px;
        width: 100%;

        .list{
            min-height: 58vh;
            
        }
        .wrapper_totalAndButton{
            display: flex;
            min-width: 100%;
            align-items: center;
            justify-content: space-between;
            padding: 0 5px;
        }
    }

    @media (max-height: 800px) and (min-width: 1000px){
        padding: 140px 120px;
    }
`;

export const SectionPayment = styled.section`
    padding: 180px 0;
    width: 530px;

    h2{
        font-weight: 500; 
        font-size: 32px;
        margin-bottom: 30px;
    }

    .wrapper{
        border: solid 1px ${({theme})=>theme.COLORS.BACKGROUND_LINE};

        .wrapper_option{
            display: flex;

            #backgroundCheck{
                background-color: ${({theme})=>theme.COLORS.BACKGROUND_900};
            }

            button{
                display: flex;
                gap: 15px;
                align-items: center;
                justify-content: center;

                width: 100%;
                height: 80px;
                border: solid 1px ${({theme})=>theme.COLORS.BACKGROUND_LINE};
                background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
                color: ${({theme})=>theme.COLORS.WHITE_900};
            }
        }

        .wrapper_form_and_pix{
            .pix{
                display: hidden;
                text-align: center;
                padding: 50px;
            }

            .wrapper_waitingPaymentImg{
                text-align: center;
                margin: 50px 0 50px;

                img{
                    width: 300px;
                }

                .hiddenWatchClass{
                    display: none;
                }
            }
        }
    }

    .wrapper_form{
        padding: 50px 100px;
    }

    @media (max-width: 800px){
        padding: 120px 25px 0 0 ;
        min-width: 100%;

        .wrapper{
            .wrapper_form_and_pix{
                .pix{
                    display: flex;
                    justify-content: center;
                }

                .wrapper_form{
                    padding: 10px 10px;

                    .wrapper_date_and_cvc{
                        width: 100%;
                        
                        label input{
                            min-width: 100%;
                        }
                    }
                }
            }
        }
    }

    @media (min-width: 400px) and (max-width: 800px){
        .wrapper .wrapper_form_and_pix .wrapper_form form{
            padding: 50px 150px;
        }
    }

    @media (max-height: 800px) and (min-width: 1000px){
        padding: 140px 0;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 40px;

    input{
        cursor: not-allowed;
    }

    label{
        display: flex;
        gap: 5px;
        flex-direction: column;
    }

    .wrapper_date_and_cvc{
        display: flex;
        gap: 30px;

        overflow: hidden;

        input{
            width: 160px;
            cursor: not-allowed;
        }
    }
`;
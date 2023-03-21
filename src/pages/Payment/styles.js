import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    height: 98vh;
`;

export const SectionRequest = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;

    padding: 230px 120px;

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

    .buttonForward{
        position: absolute;
        bottom: 15px;
        right: 15px;
    }

    @media (max-width: 800px){
        padding: 130px 20px;
    }

`;

export const SectionPayment = styled.section`
    padding: 220px 10px;
    width: 530px;

    >h2{
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

                width: 265px;
                height: 80px;
                border: solid 1px ${({theme})=>theme.COLORS.BACKGROUND_LINE};
                background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};
                color: ${({theme})=>theme.COLORS.WHITE_900};
            }
        }

        .wrapper_input_cretid_and_pix{
            .pix{
                display: hidden;
                text-align: center;
                padding: 50px 100px;
            }

            .wrapper_waitingPaymentImg{
                display: hidden;
                text-align: center;
                margin: -50px 0 50px;

                .hiddenWatchClass{
                    display: none;
                }
            }
        }
    }

    .wrapper_form{
        padding: 50px 100px;
    }

    /* @media (max-width: 800px){
        display: none;
    } */
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
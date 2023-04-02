import styled from 'styled-components'

export const Container = styled.section`
    padding: ${window.innerWidth < 832 ? '0 10px': '0 120px'};

    #hidden{
        display: none;
    }

    .wrappper_plates{
        position: relative;
 
        .wrapper_buttom{
            button{
                background: none;
                border: none;

                width: 40px;
                height: 40px;

                svg{
                    font-size: 32px;
                    color: ${({theme})=>theme.COLORS.WHITE_900};
                }
            }
        }
        .wrapper_buttom{
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 0px;
            z-index: 1;

            height: 100%;
            width: 200px;
        }
        .back{
            background: linear-gradient(90deg, #000A0F 0%, rgba(0, 10, 15, 0.472541) 100%);
        }
        .forward{
            background: linear-gradient(90deg, rgba(0, 10, 15, 0.472541) 0%, #000A0F 100%);
            right: 0;
        }
    }
    .rec.rec-arrow{
        display: none;
    }

    @media (max-width: 832px){
        #addMargin{
            margin-left: 0;
        }
    }

    @media (max-width: 1300px){
        .back, .forward{
            width: 50px !important;
        }
    }
`;
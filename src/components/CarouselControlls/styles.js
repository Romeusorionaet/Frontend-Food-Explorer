import styled from 'styled-components'

export const Container = styled.section`
    /* padding: 0 120px; */

    padding: ${window.innerWidth < 832 ? '0 10px': '0 120px'};

    #hidden{
        display: none;
    }

    #addMargin{
        margin-left: -90px;
    }

    .wrappper_plates{
        position: relative;
 
        .wrapper_buttom{
            
            button{
                border: none;
                background: none;
                width: 40px;
                height: 40px;
                svg{
                    font-size: 32px;
                    color: ${({theme})=>theme.COLORS.WHITE_900};
                }
            }
            button:disabled{
                display: none
            }
        }
        .wrapper_buttom{
            position: absolute;
            z-index: 1;
            height: 100%;
            width: 200px;
            top: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
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
`;
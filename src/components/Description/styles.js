import styled from 'styled-components';

export const Container = styled.div`
    animation: 0.5s screenScale;
    grid-area: Description;
    position: relative;
    display: flex;

    height: 260px;
    margin: 300px 125px 0;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};

    .wrapper_img{
        position: absolute;
        top: -148px;
        left: -60px;
    }

    .wrapper_description{
        position: absolute;
        right: 100px;
        top: 100px;

        h1{
            font-weight: 600;
            font-size: 50px;
        }
        p{
            Line-height: 16.8px;
            font-weight: 400;
            font-size: 16px;
        }
    }

    @media (max-width: 1340px){
        justify-content: center;
        align-items: center;

        .wrapper_description{
            z-index: 1;

            h1{
                font-size: 40px;
            }
        }
    }
    
    @media (max-width: 830px){
        margin: 150px 20px 0;
        height: 115px;

        .wrapper_img{
            position: absolute;

            left: -25px;
            top: -15px;

            height: 150px;
            width: 190px;

            img{
                padding-right: 250px;
                width: 450px;

                left: -15px;
                top: -30px;
            }
        }

        .wrapper_description{
            right: 0px;
            top: 30px;
            
            text-align: center;
            width: 100%;

            h1{
                font-size: 18px;
            }
            p{
                font-size: 12px;
            }
        }
    }
`;
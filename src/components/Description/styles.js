import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Description;
    
    animation: 0.5s screenScale;

    margin: 300px 125px 0;
    height: 260px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};

    display: flex;  

    position: relative;

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
            font-weight: 400;
            font-size: 16px;
            Line-height: 16.8px;
        }
    }

    @media (max-width: 1340px){
        align-items: center;
        justify-content: center;

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
            width: 190px;
            height: 150px;
            position: absolute;
            top: -15px;
            left: -25px;

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
            width: 100%;
            text-align: center;

            h1{
                font-size: 18px;
            }
            p{
                font-size: 12px;
            }
        }
    }
`;
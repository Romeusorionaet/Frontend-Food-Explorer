import styled from 'styled-components';

export const Container = styled.div`
    grid-area: Description;

    margin: 300px 125px 0 125px;
    height: 260px;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_100};

    display: flex;  

    position: relative;

    .wrapper_img{
        background: blue;
        img{
            position: absolute;
            top: -148px;
            left: -60px;
        }
    }

    .wrapper_description{
        position: absolute;
        right: 100px;
        top: 100px;

        h1{
            font-weight: 500;
            font-size: 50px;
        }
        p{
            font-weight: 400;
            font-size: 16px;
        }
    }

    @media (max-width: 1115px){
        margin-top: 550px;
        align-items: center;
        justify-content: center;

        .wrapper_description{
            position: static;
            z-index: 1;

            h1{
                font-size: 40px;
            }
        }
    }
    
    @media (max-width: 850px){
        margin: 450px 0 20px;

        .wrapper_img{
        img{
            width: 450px;
            left: -15px;
            top: -30px;
        }
    }
    }
`;
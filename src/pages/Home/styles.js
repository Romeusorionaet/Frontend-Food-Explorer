import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
    "Header"
    "Description"
    "Main"
    "Favorite"
    "Footer";

    min-height: 100vh;

    overflow: hidden;

    .wrapper_slider_button{
        display: flex;
        background: gray;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        top: 500px;
        z-index: 1;
        button{
            
        }
    }

    main{
        position: relative;
        grid-area: Main;
        margin-bottom: 150px;

        >h2{
            margin: 50px 120px;
            width: 100%;
            margin: ${window.innerWidth < 832 ? '20px 20px' : '50px 120px'}
        }
    }

    @media (max-width: 700px){
        main{
            margin-bottom: 70px;
        }
    }
`;

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

    main{
        position: relative;
        grid-area: Main;

        margin-bottom: 150px;

        >h2{
            font-weight: 500;
            font-size: 32px;

            width: 100%;
            
            margin: 50px 120px;
            margin: ${window.innerWidth < 832 ? '20px 20px' : '50px 120px'}
        }
    }

    @media (max-width: 700px){
        main{
            margin-bottom: 70px;
        }
    }
`;

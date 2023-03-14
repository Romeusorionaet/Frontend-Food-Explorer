import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
    "Header"
    "Description"
    "Main"
    "Footer";

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
        margin-bottom: 200px;

        >h2{
            margin: 50px 120px;
        }
    }

    
`;

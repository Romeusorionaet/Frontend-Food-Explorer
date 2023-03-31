import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_LINE};;
    position: absolute;
    border-radius: 10PX;
    padding: 10px;
    text-align: center;
    top: 100px;
    z-index: 3;
    width: 100%;;
    line-height: 1.2;

    animation: topDrop 1s;

    @keyframes topDrop {
        0%{transform: translateY(-150px)}
        100%{transform: translateY(0px)}
    }

    @media (max-width: 800px) {
        top: 45px;
        left: 0;
        right: 0;
        padding: 0;
    }
`;
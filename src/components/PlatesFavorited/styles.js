import styled from "styled-components";

export const Container = styled.div`
    grid-area: Favorite;
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_500};
    height: 150px;
    margin-bottom: 150px;

    padding: 10px;

    overflow-x: auto;
    overflow-y: hidden;

    display: flex;
    flex-direction: column;
    justify-content: end;
    
    position: relative;
    
    
    .wrapper_title{
        position: absolute;
        top: 10px;
        display: flex;
        gap: 10px;
        align-items: center;
        
        h1{
            font-size: 20px;
        }
    }
    
    section{
        
        ul{
            animation: autoScroll 5s ease-in-out infinite;

            list-style: none;
            display: flex;
            gap: 25px;
            
            li{
                .wrapper_title_like{
                    display: flex;
                    align-items: center;
                    gap: 5px;

                    img{
                        width: 70px;
                        height: 70px;
                    }

                    div{
                        width: 100%;

                        h2{
                            font-size: 18px;
                        }
                        svg{
                            margin-left: 5px;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 800px){
        margin-bottom: 80px;
    }

    @keyframes autoScroll{
        0%{transform: translateX(0px)}
        40%{transform: translateX(-10px)}
        50%{transform: translateX(-30px)}
        100%{transform: translateX(0px)}
    }

`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    max-width: ${({isNew})=>isNew ? "150px" : "120px"};
    
    color: ${({theme})=>theme.COLORS.WHITE_900};

    border: ${({theme, isNew})=>isNew ? `1px dashed ${theme.COLORS.WHITE_900}` : "none"};
    background-color: ${({theme, isNew})=>isNew ? 'none' : `${theme.COLORS.BACKGROUND_INGREDIENT}`};
    background-color: ${({theme, shadow})=>shadow ? `${theme.COLORS.RED_500}` : "none"};

    padding-right: 16px;
    border-radius: 8px;

    >button{
        border: none;
        background: none;
    }
    .button-delete{
        color: ${({theme})=>theme.COLORS.WHITE_900};
    }
    .button-add{
        color: ${({theme})=>theme.COLORS.WHITE_900};
    }
    >input{
        height: 30px;
        min-width: ${({isNew})=>isNew ? "120px" : "100%"};

        padding: 12px;

        color: ${({theme})=>theme.COLORS.WHITE_900};
        background: transparent;

        border: none;
        
        &::placeholder{
            color: ${({theme})=>theme.COLORS.WHITE_900};
        }
    }
`;
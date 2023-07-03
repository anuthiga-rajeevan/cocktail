import { Card, IconButton, Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const EmptyStateDiv = styled.div`
    padding: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
    font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
    font-weight: 500;
`;

export const CocktailCard = styled(Card)`
    &&{
        background-color: ${({ theme }: { theme?: any }) => theme?.colors?.[8]};
        padding: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
        width: 46%;
        margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
        margin-left: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
        margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
        display: flex;
        justify-content: space-between;
    }`;

export const StyledImage = styled.img`
    width: 50%; 
`;

export const CocktailContentDiv = styled.div`
    &&{
        width: 50%;
        margin-left: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
    }`;

export const CocktailNameTypography = styled(Typography)`
    &&{
        color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
        font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
        font-weight: 600;
    }`;
export const CocktailCategoryTypography = styled(Typography)`
    &&{
        color: ${({ theme }: { theme?: any }) => theme?.colors?.[4]};
        font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
        font-weight: 300;
        margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    }`;

export const StyledButton = styled(IconButton)`
    &&{
        color: ${red[900]};
    }`;
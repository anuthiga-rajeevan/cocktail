import { Card } from "@mui/material";
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const CocktailCard = styled(Card)`
    &&{
        padding: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        width: 45%;
        box-sizing: border-box;
        box-shadow: 0 0 0 1px black;
        margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        margin-left: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    }`;

export const StyledImage = styled.img`
    padding-left: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    width: 25%;
`;
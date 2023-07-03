import { IconButton, Typography } from "@mui/material";
import { styled } from "styled-components";

export const BaseDiv = styled.div`
  display: flex;
`;

export const FilterDiv = styled.div`
  width: 20%;
`;

export const CocktailDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const RefreshDiv = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: flex-start;
`;

export const StyledButton = styled(IconButton)`
&&{
  background-color: ${({ theme }: { theme?: any }) => theme?.colors?.[5]};
  color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
  margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(8)};
  margin-top: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
  margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
}`;

export const StyledHeading = styled(Typography)`
    &&{
        padding: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        color: ${({ theme }: { theme?: any }) => theme?.colors?.[5]};
        text-decoration: none;
        font-size: ${({ theme }: { theme?: any }) => theme.sizes.large};
        line-height: ${({ theme }: { theme?: any }) => theme.sizes.small};
        font-weight: 700;
    }`;

    export const EmptyStateDiv = styled.div`
    padding: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
    font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
    font-weight: 500;
`;
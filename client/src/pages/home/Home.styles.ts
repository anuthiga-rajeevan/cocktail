import { IconButton } from "@mui/material";
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
justify-content: flex-end;
`;

export const StyledButton = styled(IconButton)`
&&{
  background-color: ${({ theme }: { theme?: any }) => theme?.colors?.[7]};
  color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
  margin-right: ${({ theme }: { theme?: any }) => theme.getSpacing(8)};
  margin-top: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
  margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
}`;
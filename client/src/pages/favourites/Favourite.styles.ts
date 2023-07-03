import { Typography } from "@mui/material";
import { styled } from "styled-components";

export const BaseDiv = styled.div`
  padding: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
`;

export const StyledHeading = styled(Typography)`
    &&{
        padding: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
        color: ${({ theme }: { theme?: any }) => theme?.colors?.[5]};
        text-decoration: none;
        font-size: ${({ theme }: { theme?: any }) => theme.sizes.large};
        line-height: ${({ theme }: { theme?: any }) => theme.sizes.small};
        font-weight: 700;
    }`;
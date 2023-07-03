import { TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from 'styled-components';

export const StyledSearchField = styled(TextField)`
    &&{
        width: 100%;
        & .MuiSvgIcon-root {
            color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
        }
        & .MuiInputBase-input {
            color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
            border-bottom-color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
        }
        & .MuiInput-underline:after {
            border-bottom-color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
        }
    }`;

export const ErrorTypography = styled(Typography)`
    &&{
        color: ${red[500]};
    }`;

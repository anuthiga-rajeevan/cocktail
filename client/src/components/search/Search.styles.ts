import { TextField } from '@mui/material';
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

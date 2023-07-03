import { Card, Typography } from '@mui/material';
import { styled } from 'styled-components';

export const StyledSideBar = styled(Card)`
    &&{
        background: ${({ theme }: { theme?: any }) => theme?.colors?.[8]};
        height: ${({ theme }: { theme?: any }) => theme.getSpacing(80)};
        overflow-y: scroll;
        display: block;
    }`;

export const HeadingDiv = styled.div`
    background: ${({ theme }: { theme?: any }) => theme?.colors?.[9]};
    display: flex;
    cursor: pointer;
    margin-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(0.2)};
`;

export const StyledHeadingTypography = styled(Typography)`
  &&{
    color: ${({ theme }: { theme?: any }) => theme?.colors?.[3]};
    display: inline;
    padding-left: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    padding-top: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
    padding-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
    padding-right: ${({ theme }: { theme?: any }) => theme.getSpacing(0.5)};
    text-transform: capitalize;
    font-size: ${({ theme }: { theme?: any }) => theme.sizes.small};
    line-height: ${({ theme }: { theme?: any }) => theme.sizes.small};
    font-weight: 700;
  }
`;

export const StyledArrowDiv = styled.div`
  &&{
    color: ${({ theme }: { theme?: any }) => theme?.colors?.[3]};
    padding-top: ${({ theme }: { theme?: any }) => theme.getSpacing(1.5)};
  }
`;

export const BodyDiv = styled.div`
    background: ${({ theme }: { theme?: any }) => theme?.colors?.[8]};
    width: 100%;
    display: block;
    text-transform: capitalize;
    font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
    line-height: ${({ theme }: { theme?: any }) => theme.sizes.medium};
    font-weight: 500;
    :hover {
      background: ${({ theme }: { theme?: any }) => theme?.colors?.[7]};
    }
`;

export const AlphabetBodyDiv = styled.div`
    background: ${({ theme }: { theme?: any }) => theme?.colors?.[8]};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-transform: capitalize;
    font-size: ${({ theme }: { theme?: any }) => theme.sizes.medium};
    line-height: ${({ theme }: { theme?: any }) => theme.sizes.medium};
    font-weight: 500;
    :hover {
      background: ${({ theme }: { theme?: any }) => theme?.colors?.[7]};
    }
`;

export const StyledListTypography = styled(Typography)`
  &&{
    cursor: pointer;
    color: ${({ theme }: { theme?: any }) => theme?.colors?.[4]};
    padding-left: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
    padding-top: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
    padding-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
    text-transform: capitalize;
    font-size: ${({ theme }: { theme?: any }) => theme.sizes.small};
    line-height: ${({ theme }: { theme?: any }) => theme.sizes.small};
    font-weight: 400;
    :hover {
      color: ${({ theme }: { theme?: any }) => theme?.colors?.[3]};
    }
  }
`;

export const StyledListSelectedTypography = styled(Typography)`
  &&{
      background: ${({ theme }: { theme?: any }) => theme?.colors?.[7]};
      padding-left: ${({ theme }: { theme?: any }) => theme.getSpacing(4)};
      padding-top: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
      padding-bottom: ${({ theme }: { theme?: any }) => theme.getSpacing(2)};
      text-transform: capitalize;
      font-size: ${({ theme }: { theme?: any }) => theme.sizes.small};
      line-height: ${({ theme }: { theme?: any }) => theme.sizes.small};
      font-weight: 400;
      cursor: default;
      color: ${({ theme }: { theme?: any }) => theme?.colors?.[1]};
  }
`;

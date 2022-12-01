import styled, { css } from 'styled-components/native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends RectButtonProps {
    color: string;
    disabled?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 19px;
    background-color: ${({theme, color}) => color ? color : theme.colors.main};
    ${({disabled}) => disabled && css`
        opacity: 0.5;
    `};

`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    color: ${({theme}) => theme.colors.background_secondary}
`
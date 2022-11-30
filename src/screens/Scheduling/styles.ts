import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';

interface DateValueProps {
    value?: string;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 40%;

    background-color: ${({ theme }) => theme.colors.header};

    justify-content:  space-between;
    padding: 25px;
    padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
   color: ${({ theme }) => theme.colors.background_secondary};
   font-family: ${({ theme }) => theme.fonts.secondary_600};
   font-size: ${RFValue(34)}px;
   line-height: ${RFValue(34)}px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: space-between;
    align-items: center;
`;

export const RentalPDateInfoeriod = styled.View`

`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text};

`;

export const DateValue = styled.Text<DateValueProps>`
    color: ${({ theme }) => theme.colors.background_secondary};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    
    ${({value, theme}) => !Boolean(value) && css`
    border-bottom
        border-bottom-style: solid;
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.text};
        padding-bottom: 5px;
    
    `}
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
})`

`;

export const Footer = styled.View`
    padding: 24px;
    padding-bottom: ${getBottomSpace() + 24}px

`;

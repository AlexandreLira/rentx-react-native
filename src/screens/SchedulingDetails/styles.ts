import styled from 'styled-components/native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
`

export const CarImageContent = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center'
    },
    showsVerticalScrollIndicator: false
})``;

export const Details = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 38px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.main};
`;

export const Accessories = styled.View`
    width: 100%;

    flex-direction: row;
    flex-wrap: wrap;

    align-items: center;
    justify-content:space-between;
    
    margin-top: 16px;
`;

export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 40px;


    border-bottom-width: 1px;
    border-bottom-color: ${({theme}) => theme.colors.line};
    padding-bottom: 16px;
`

export const CalendarIcon = styled.View`
    background-color: ${({ theme }) => theme.colors.main};
    padding: 14px;
    justify-content:center;
    align-items: center;
`
export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text_detail};

`;

export const DateValue = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
    
`;

export const RentalPrice = styled.View`
    margin-top: 16px;
    width: 100%;
`
export const RentalPriceLabel = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.text_detail};
`;

export const RentalPriceDetails = styled.View`
    width: 100%;

    flex-direction:row ;
    justify-content: space-between;
    align-items: flex-end;

    margin-top: 8px;
`;

export const RentalPriceQuota = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ theme }) => theme.colors.title};
`
export const RentalPriceTotal = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.success};
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding: 24px 24px;

    padding-bottom: ${getBottomSpace() + 24}px
`;

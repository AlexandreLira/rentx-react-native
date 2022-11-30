import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.header};
    justify-content: center;
`;

export const Content = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.secondary_600};
    color: ${({theme}) => theme.colors.background_secondary};
    font-size: ${RFValue(30)}px;

    margin-top: ${RFPercentage(4)}px;
    margin-bottom: ${RFPercentage(2)}px;

`;
export const Message = styled.Text`
    text-align: center;
    font-family: ${({theme}) => theme.fonts.primary_400};
    color: ${({theme}) => theme.colors.text_detail};
    font-size: ${RFValue(15)}px;
    line-height: ${RFValue(25)}px;
    margin-bottom: ${RFPercentage(6)}px;
`;


export const Footer = styled.View`
    align-self: center;
    margin-bottom: ${getBottomSpace() + RFPercentage(10)}px;
    width: 80px;
`
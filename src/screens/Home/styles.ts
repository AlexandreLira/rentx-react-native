import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color:${({ theme }) => theme.colors.background_primary} ;
`

export const Header = styled.View`
    width: 100%;
    height: 113px;

    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    padding: 32px 24px;
    background-color:${({ theme }) => theme.colors.header};
`

export const TotalCars = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
`;
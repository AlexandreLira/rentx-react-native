import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

import { CarDTO } from '../../dtos/CarDTOS';
import { RectButton } from 'react-native-gesture-handler';

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
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
`;

export const CarList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    },
    showVerticalScrollIndicator: false
})`` as React.ComponentType as new <CarDTO>() => FlatList<CarDTO>;

export const Separator = styled.View`
    height: 16px;
    width: 100px;
`;

export const MyCarButton = styled(RectButton)`
    width: 60px;
    height: 60px;

    position: absolute;
    justify-content: center;
    align-items: center;

    bottom: ${RFPercentage(3)}px;
    right: ${RFPercentage(3)}px;

    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 30px;
`

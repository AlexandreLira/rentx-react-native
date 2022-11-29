import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    TotalCars
} from './styles';

export function Home() {
    return (
        <Container>
            <StatusBar style="light" />
            <Header>
                <Logo
                    width={RFValue(108)}
                    height={RFValue(12)}
                />
                <TotalCars>Total de 11 carros</TotalCars>
            </Header>
        </Container>
    )
}
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { RFValue } from 'react-native-responsive-fontsize';
import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    TotalCars
} from './styles';
import { Car } from '../../components/Car';

export function Home() {

    const carData = {
        name: 'Corvette Z06',
        brand: 'chevrolet',
        rent: {
            period: 'ao dia',
            price: 150
        },
        thumbnail: 'https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png'
    }
    
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

            <Car
                data={carData}
            />
        </Container>
    )
}
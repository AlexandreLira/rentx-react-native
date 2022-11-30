import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
    Container,
    CarList,
    Header,
    TotalCars,
    Separator
} from './styles';

export function Home() {

    const { navigate } = useNavigation<any>()

    const carData = {
        id: '1',
        name: 'Corvette Z06',
        brand: 'chevrolet',
        rent: {
            period: 'ao dia',
            price: 150
        },
        thumbnail: 'https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png'
    }

    function handleCarDetials(){
        navigate('CarDetails')
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

            <CarList
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={({ item }) => <Car data={carData} onPress={handleCarDetials}/>}
                keyExtractor={item => item.toString()}
                ItemSeparatorComponent={() => <Separator />}
            />


        </Container>

    )
}
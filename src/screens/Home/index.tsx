import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';

import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTOS';

import { Car } from '../../components/Car';
import { Load } from '../../components/Load';

import Logo from '../../assets/logo.svg';

import {
    Container,
    CarList,
    Header,
    TotalCars,
    Separator,
    MyCarButton
} from './styles';


export function Home() {

    const navigation = useNavigation<any>()

    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)

    function handleCarDetials(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars(){
        navigation.navigate('MyCars')
    }


    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('cars')
                setCars(response.data)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchCars()
    }, [])

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
            {!loading
                ? <CarList
                    data={cars}
                    renderItem={({ item }) => <Car data={item} onPress={() => handleCarDetials(item)} />}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                />
                : <Load />
            }
            <MyCarButton onPress={handleOpenMyCars}>
                <Ionicons name="ios-car-sport" size={30} color="white" />
            </MyCarButton>
        </Container>

    )
}
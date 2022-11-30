import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize';

import { api } from '../../services/api';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
    Container,
    CarList,
    Header,
    TotalCars,
    Separator
} from './styles';
import { CarDTO } from '../../dtos/CarDTOS';
import { Load } from '../../components/Load';


export function Home() {

    const { navigate } = useNavigation<any>()

    const [cars, setCars] = useState<CarDTO[]>([])
    const [loading, setLoading] = useState(true)

    function handleCarDetials() {
        navigate('CarDetails')
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
                    renderItem={({ item }) => <Car data={item} onPress={handleCarDetials} />}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={() => <Separator />}
                />
                : <Load />
            }

        </Container>

    )
}
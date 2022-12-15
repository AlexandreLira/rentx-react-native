import React, { useState } from 'react';
import { Alert } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/CarDTOS';
import { api } from '../../services/api';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
    Container,
    Header,
    CarImageContent,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    RentalPeriod,
    CalendarIcon,
    Footer,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';


interface Params {
    rentalPeriod: {
        startDateFormatted: string
        endDateFormatted: string
        numberOfDays: number,
        dates: string[]
    },
    car: CarDTO
}

export function SchedulingDetails() {
    const [loading, setLoading] = useState(false)

    const route = useRoute()
    const { colors } = useTheme()
    const navigation = useNavigation<any>()

    const { rentalPeriod, car } = route.params as Params

    async function handleConfirmRental() {
        setLoading(true)

        const response = await api.get(`/schedules_bycars/${car.id}`)
        const { unavailable_dates } = response.data

        const unavailableDates = [
            ...unavailable_dates,
            ...rentalPeriod.dates
        ]

        await api.post('/schedules_byuser', {
            id: String(new Date().getTime()),
            user_id: 1,
            car,
            startDate: rentalPeriod.startDateFormatted,
            endDate: rentalPeriod.endDateFormatted,

        });

        api.put(`/schedules_bycars/${car.id}`, {
            id: car.id,
            unavailable_dates: unavailableDates
        })
            .then(() => {
                setLoading(false)
                navigation.navigate('SchedulingComplete')
            })
            .catch(() => {
                setLoading(false)
                Alert.alert('Não foi possivel confirmar o agendamento.')
            })

       

    }

    return (
        <Container>
            <StatusBar style="dark" />
            <Header>
                <BackButton />
            </Header>

            <CarImageContent>
                <ImageSlider imagesUrl={car.photos} />
            </CarImageContent>


            <Content>
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {car.accessories.map(item => (
                        <Accessory
                            key={item.type}
                            name={item.name}
                            icon={getAccessoryIcon(item.type)}
                        />
                    ))}
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={colors.background_secondary}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue>{rentalPeriod.startDateFormatted}</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={colors.text}
                    />

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>{rentalPeriod.endDateFormatted}</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ {car.rent.price} x{rentalPeriod.numberOfDays} diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ {(rentalPeriod.numberOfDays * car.rent.price).toFixed(2)}</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button
                    title="Alugar agora"
                    color={colors.success}
                    onPress={handleConfirmRental}
                    loading={loading}
                />
            </Footer>
        </Container>
    )
}
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native'

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import gasolineSvg from '../../assets/gasoline.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import peopleSvg from '../../assets/people.svg'
import speedSvg from '../../assets/speed.svg'
import exchangeSvg from '../../assets/exchange.svg'

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
import { CarDTO } from '../../dtos/CarDTOS';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

interface Params {
    rentalPeriod: {
        startDateFormatted: string
        endDateFormatted: string
        numberOfDays: number,
    },
    car: CarDTO
}

export function SchedulingDetails() {


    const { colors } = useTheme()
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { rentalPeriod, car } = route.params as Params

    function handleConfirmRental() {
        navigation.navigate('SchedulingComplete')
    }

    return (
        <Container>
            <StatusBar style="dark" />
            <Header>
                <BackButton/>
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
                />
            </Footer>
        </Container>
    )
}
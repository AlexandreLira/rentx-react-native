import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

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

import gasolineSvg from '../../assets/gasoline.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import peopleSvg from '../../assets/people.svg'
import speedSvg from '../../assets/speed.svg'
import exchangeSvg from '../../assets/exchange.svg'

export function SchedulingDetails() {

    const accessoriesItems = [
        {
            name: '380km/h',
            icon: speedSvg
        },
        {
            name: '3.2s',
            icon: accelerationSvg
        },
        {
            name: '800 HP',
            icon: forceSvg
        },
        {
            name: 'Gasolina',
            icon: gasolineSvg
        },
        {
            name: 'Auto',
            icon: exchangeSvg
        },
        {
            name: '2 pessoas',
            icon: peopleSvg
        },
    ]

    const { colors } = useTheme()

    return (
        <Container>
            <StatusBar style="dark" />
            <Header>
                <BackButton
                    onPress={() => console.log('dajkh')}
                />
            </Header>

            <CarImageContent>
                <ImageSlider imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png']} />
            </CarImageContent>


            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborghini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {accessoriesItems.map(item => (
                        <Accessory
                            key={item.name}
                            name={item.name}
                            icon={item.icon}
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
                        <DateValue>19/07/2029</DateValue>
                    </DateInfo>

                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={colors.text}
                    />

                    <DateInfo>
                        <DateTitle>Até</DateTitle>
                        <DateValue>19/07/2029</DateValue>
                    </DateInfo>
                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>




            <Footer>
                <Button title="Alugar agora" color={colors.success}/>
            </Footer>
        </Container>
    )
}
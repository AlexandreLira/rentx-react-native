import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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
    About,
    Accessories
} from './styles';

import gasolineSvg from '../../assets/gasoline.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import peopleSvg from '../../assets/people.svg'
import speedSvg from '../../assets/speed.svg'
import exchangeSvg from '../../assets/exchange.svg'

export function CarDetails() {

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
                            name={item.name}
                            icon={item.icon}
                        />
                    ))}
                </Accessories>

                <About>
                    Este é automóvel desportivo.
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    )
}
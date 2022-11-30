import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
    About
} from './styles';

export function CarDetails(){
    return (
        <Container>
            <StatusBar style="dark"/>
            <Header>
                <BackButton 
                    onPress={() => console.log('dajkh')}
                />
            </Header>

            <CarImageContent>
                <ImageSlider imagesUrl={['https://cdn.wheel-size.com/automobile/body/audi-rs5-2020-2022-1613028936.4473815.png']}/>
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

                <About>
                    Este é automóvel desportivo. 
                    Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>
        </Container>
    )
}
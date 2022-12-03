import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native'

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
    About,
    Accessories,
    Footer
} from './styles';

import { CarDTO } from '../../dtos/CarDTOS';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { RefreshControl } from 'react-native-gesture-handler';

interface Params {
    car: CarDTO;
}

export function CarDetails() {
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params

    const scrollY = useSharedValue(0)

    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y

    })

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0, 150],
                [150, 40],
                Extrapolate.CLAMP
            ),
            opacity: interpolate(scrollY.value, [0, 150], [1, 0])
        }
    })

    function handleConfirmRental() {
        navigation.navigate('Scheduling', { car })
    }

    return (
        <Container>
            <StatusBar style="dark" />
            <Header>
                <BackButton />
            </Header>

            <CarImageContent

                style={headerStyleAnimation}
            >
                <ImageSlider imagesUrl={car.photos} />
            </CarImageContent>


            <Content
                onScroll={scrollHandler}
                scrollEventThrottle={16}
            >
                <Details>
                    <Description>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Description>

                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Details>

                <Accessories>
                    {car.accessories.map(accessory => (
                        <Accessory
                            key={accessory.type}
                            name={accessory.name}
                            icon={getAccessoryIcon(accessory.type)}
                        />
                    ))}
                </Accessories>

                <About>{car.about}</About>
                <About>{car.about}</About>
                <About>{car.about}</About>
                <About>{car.about}</About>
                <About>{car.about}</About>
                <About>{car.about}</About>
            </Content>

            <Footer>
                <Button
                    title="Escolher período do aluguel"
                    onPress={handleConfirmRental}
                />
            </Footer>
        </Container>
    )
}
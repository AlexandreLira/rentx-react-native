import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { CarDTO } from "../../dtos/CarDTOS";

import GasolineSvg from '../../assets/gasoline.svg'

import {
    About,
    Brand,
    CarImage,
    Container,
    Details,
    Name,
    Period,
    Price,
    Rent,
    Type
} from "./styles";


interface CarProps extends RectButtonProps{
    data: CarDTO
}

export function Car({ data, ...rest }: CarProps) {

    const {
        brand,
        name,
        rent,
        thumbnail
    } = data

    return (        
        <Container {...rest}>
            <Details>
                <Brand>{brand}</Brand>
                <Name>{name}</Name>

                <About>
                    <Rent>
                        <Period>{rent.period}</Period>
                        <Price>R$ {rent.price}</Price>
                    </Rent>

                    <Type>
                        <GasolineSvg width={16}/>
                    </Type>
                </About>
            </Details>

            <CarImage
                source={{ uri: thumbnail }}
            />
        </Container>
    )
}
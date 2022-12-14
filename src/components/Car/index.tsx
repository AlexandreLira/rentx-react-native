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
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";


interface CarProps extends RectButtonProps{
    data: CarDTO
}

export function Car({ data, ...rest }: CarProps) {

    const {
        brand,
        name,
        rent,
        thumbnail,
        fuel_type
    } = data

    const MotorIcon = getAccessoryIcon(fuel_type)

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
                        <MotorIcon width={16}/>
                    </Type>
                </About>
            </Details>

            <CarImage
                source={{ uri: thumbnail }}
            />
        </Container>
    )
}
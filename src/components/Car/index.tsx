import React from "react";
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

import GasolineSvg from '../../assets/gasoline.svg'

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string;
}

interface CarProps {
    data: CarData
}

export function Car({ data }: CarProps) {

    const {
        brand,
        name,
        rent,
        thumbnail
    } = data

    return (
        <Container>
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
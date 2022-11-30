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
import { RectButtonProps } from "react-native-gesture-handler";

interface CarData {
    brand: string;
    name: string;
    rent: {
        period: string;
        price: number;
    }
    thumbnail: string;
}

interface CarProps extends RectButtonProps{
    data: CarData
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
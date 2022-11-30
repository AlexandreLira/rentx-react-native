import React from "react";
import { useWindowDimensions } from "react-native";

import { Button } from "../../components/Button";

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';
import { useTheme } from "styled-components";



export function SchedulingComplete() {
    const { width } = useWindowDimensions();
    const {colors} = useTheme()
    return (
        <Container>
            <LogoSvg width={width}/>

            <Content>
                <DoneSvg width={80} height={80}/>
                <Title>Carro alugado!</Title>
                <Message>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.{'\n'}
                </Message>
            </Content>

            <Footer>
                <Button title="Ok" color={colors.shape_dark}/>
            </Footer>
        </Container>
    )
}
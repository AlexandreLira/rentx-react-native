import React from "react";
import { useWindowDimensions } from "react-native";
import { useNavigation } from '@react-navigation/native'

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
import { StatusBar } from "expo-status-bar";



export function SchedulingComplete() {
    const { width } = useWindowDimensions();
    const { colors } = useTheme()
    const navigation = useNavigation<any>()

    function handleConfirm(){
        navigation.navigate('Home')
    }

    return (
        <Container>
            <StatusBar style="light" />

            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>
                <Message>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.{'\n'}
                </Message>
            </Content>

            <Footer>
                <Button 
                    title="Ok"
                    color={colors.shape_dark}
                    onPress={handleConfirm}
                />
            </Footer>
        </Container>
    )
}
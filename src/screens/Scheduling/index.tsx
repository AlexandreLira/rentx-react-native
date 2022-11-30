import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    DateInfo,
    DateTitle,
    DateValue,
    Header,
    RentalPeriod,
    Title,
    Content, 
    Footer
} from './styles';
import { Button } from '../../components/Button';

export function Scheduling() {
    const {colors} = useTheme()
    return (
        <Container>
            <StatusBar style="light"/>
            <Header>
                <BackButton
                    onPress={() => console.log('dajkh')}
                    color={colors.background_secondary}
                />


                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>


                <RentalPeriod>
                    <DateInfo>
                        <DateTitle>De</DateTitle>
                        <DateValue value="a">19/07/2029</DateValue>
                    </DateInfo>

                    <ArrowSvg/>

                    <DateInfo>
                        <DateTitle>até</DateTitle>
                        <DateValue/>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>

            </Content>

            <Footer>
                <Button title="Confirmar"/>
            </Footer>
        </Container>
    )
}
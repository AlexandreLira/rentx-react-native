import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native'

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
import {
    Calendar,
    DayProps,
    MarkedDateProps,
    generateInterval
} from '../../components/Calendar';
import { addDays, format } from 'date-fns';
import { CarDTO } from '../../dtos/CarDTOS';

interface rentalPeriodProps {
    startDateFormatted: string
    endDateFormatted: string
    numberOfDays: number,
    dates: string[]
}

interface Params {
    car: CarDTO
}

export function Scheduling() {
    const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<rentalPeriodProps>({} as rentalPeriodProps)

    const { colors } = useTheme()
    const navigation = useNavigation<any>()
    const route = useRoute()
    const { car } = route.params as Params


    function handleConfirmRental() {
        navigation.navigate('SchedulingDetails', { car, rentalPeriod })
    }

    function handleChangeDate(date: DayProps) {
        let startDate = lastSelectedDate.timestamp ? lastSelectedDate : date
        let endDate = date

        if (startDate.timestamp > endDate.timestamp) {
            [startDate, endDate] = [endDate, startDate]

        }

        setLastSelectedDate(endDate)

        const interval = generateInterval(startDate, endDate)
        const intervalSize = Object.keys(interval).length

        intervalSize > 1
            ? setLastSelectedDate({} as DayProps)
            : setLastSelectedDate(endDate)

        setMarkedDates(interval)
        setRentalPeriod({
            startDateFormatted: format(addDays(startDate.timestamp, 1), 'dd/MM/yyyy'),
            endDateFormatted: format(addDays(endDate.timestamp, 1), 'dd/MM/yyyy'),
            numberOfDays: intervalSize,
            dates: Object.keys(interval)
        })
    }

    return (
        <Container>
            <StatusBar style="light" />
            <Header>
                <BackButton
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
                        <DateValue value={rentalPeriod.startDateFormatted}>
                            {rentalPeriod.startDateFormatted}
                        </DateValue>
                    </DateInfo>

                    <ArrowSvg />

                    <DateInfo>
                        <DateTitle>até</DateTitle>
                        <DateValue value={rentalPeriod.endDateFormatted}>
                            {rentalPeriod.endDateFormatted}
                        </DateValue>
                    </DateInfo>
                </RentalPeriod>
            </Header>

            <Content>
                <Calendar
                    markedDates={markedDates}
                    onDayPress={handleChangeDate}
                />

            </Content>
            <Footer>
                <Button
                    title="Confirmar"
                    onPress={handleConfirmRental}
                    disabled={Boolean(rentalPeriod.numberOfDays < 2) || Boolean(!rentalPeriod.numberOfDays)}
                />
            </Footer>
        </Container>
    )
}
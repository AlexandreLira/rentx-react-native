import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';

import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Content,
    Schedules,
    SchedulesTitle,
    SchedulesQuantity,
    CarList,
    Separator,

    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate
} from './styles';
import { api } from '../../services/api';
import { Load } from '../../components/Load';
import { CarDTO } from '../../dtos/CarDTOS';

export interface MyCarsProps {
    id: string;
    user_id: number;
    car: CarDTO;
    startDate: string;
    endDate: string;
}

export function MyCars() {

    const [myCars, setMyCars] = useState<MyCarsProps[]>([])
    const [loading, setLoading] = useState(true)
    const { colors } = useTheme()

    useEffect(() => {
        async function fetchMyCars() {
            const response = await api.get('/schedules_byuser')
            const data = response.data
            setMyCars(data)
            setLoading(false)
        }
        fetchMyCars()
    }, [])

    return (
        <Container>
            <Header>
                <BackButton color={colors.background_secondary} />

                <Title>
                    Seus agendamentos, estão aqui.
                </Title>

                <SubTitle>Conforto, segurança e praticidade.</SubTitle>
            </Header>


            {
                loading ? <Load /> :
                    <Content>
                        <Schedules>
                            <SchedulesTitle>Agendamentos feitos</SchedulesTitle>
                            <SchedulesQuantity>{String(myCars.length).padStart(2, '0')}</SchedulesQuantity>
                        </Schedules>
                        <CarList
                            data={myCars}
                            renderItem={({ item }) => (
                                <>
                                    <Car data={item.car} />
                                    <CarFooter>
                                        <CarFooterTitle>Período</CarFooterTitle>
                                        <CarFooterPeriod>
                                            <CarFooterDate>{item.startDate}</CarFooterDate>
                                            <AntDesign
                                                name="arrowright"
                                                size={16}
                                                color={colors.text_detail}
                                                style={{ marginHorizontal: 10 }}
                                            />
                                            <CarFooterDate>{item.endDate}</CarFooterDate>
                                        </CarFooterPeriod>
                                    </CarFooter>
                                </>
                            )}
                            ListHeaderComponent={() => <Separator height={26}/>}
                            ListFooterComponent={() => <Separator height={26}/>}
                            ItemSeparatorComponent={() => <Separator height={16}/>}
                            showsVerticalScrollIndicator={false}
                        />
                    </Content>
            }
        </Container>
    )
}

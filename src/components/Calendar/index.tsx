import React, { useState } from 'react';
import {
    Calendar as CustomCalendar,
    LocaleConfig,

} from 'react-native-calendars'

import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { generateInterval } from './generateInterval';
import { ptBR } from './localeConfig';
import { format } from 'date-fns';


LocaleConfig.locales['pt-br'] = ptBR
LocaleConfig.defaultLocale = 'pt-br'


interface MarkedDateProps {
    [date: string]: {
        endingDay?: boolean;
        startingDay?: boolean;
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    }
}

interface DayProps {
    dateString: string;
    day: number;
    month: number;
    year: number;
    timestamp: number;
}

interface CalendarProps {
    markedDates: MarkedDateProps
    onDayPress: (date: DayProps) => void
}

function Calendar({
    markedDates,
    onDayPress
}: CalendarProps) {

    const { colors, fonts } = useTheme()

    return (
        <CustomCalendar
            renderArrow={(direction) => (
                <Feather
                    size={24}
                    color={colors.text}
                    name={direction === "left" ? "chevron-left" : "chevron-right"}
                />
            )}

            headerStyle={{
                backgroundColor: colors.background_secondary,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10,
            }}

            theme={{
                textDayFontFamily: fonts.primary_400,
                textDayFontSize: 15,

                textDayHeaderFontFamily: fonts.secondary_600,
                textDayHeaderFontSize: 10,

                textMonthFontSize: 20,
                textMonthFontFamily: fonts.secondary_600,
                monthTextColor: colors.title,


                arrowStyle: {
                    marginHorizontal: -15,
                }
            }}

            firstDay={1}
            minDate={format(new Date(), 'yyyy-MM-dd')}
            markingType={'period'}
            markedDates={markedDates}
            onDayPress={onDayPress}
            
        />


    )
}

export {
    Calendar,
    DayProps,
    MarkedDateProps,
    generateInterval
}
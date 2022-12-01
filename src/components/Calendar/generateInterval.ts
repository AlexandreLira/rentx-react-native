import { addDays, eachDayOfInterval, format } from 'date-fns';

import { MarkedDateProps, DayProps } from '.'
import theme from '../../styles/theme';

export function generateInterval(startDate: DayProps, endDate: DayProps): MarkedDateProps {
    let interval: MarkedDateProps = {}

    const startDateObject = new Date(addDays(startDate.timestamp, 1))
    const endDateObject = new Date(addDays(endDate.timestamp, 1))

    eachDayOfInterval({ start: startDateObject, end: endDateObject })
        .forEach(item => {
            const dateformatted = format(item, 'yyyy-MM-dd')
            const isTheStartDateOrEndDate = startDate.dateString === dateformatted || endDate.dateString === dateformatted

            const color = isTheStartDateOrEndDate ? theme.colors.main : theme.colors.main_light
            const textColor =  isTheStartDateOrEndDate ? theme.colors.background_secondary : theme.colors.main
            interval = {
                ...interval,
                [dateformatted]: {
                    color, textColor
                }
            }
        })

    return interval

}
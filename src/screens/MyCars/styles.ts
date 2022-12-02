import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

interface SeparatorProps {
    height: number;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width:  100%;
    height: ${RFPercentage(40)}px;

    background-color: ${({ theme }) => theme.colors.header};

    padding: 24px;
    padding-top: ${getStatusBarHeight() + 30}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(30)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};

    color: ${({ theme }) => theme.colors.background_secondary};

    line-height: ${RFValue(34)}px;

    margin-top: ${RFPercentage(4)}px;
    margin-bottom: ${RFPercentage(3)}px;

`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Content = styled.View`
    padding: 0px 16px;
    flex: 1;
`;

export const Schedules = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;

    padding-top: ${RFValue(24)}px;
    padding-bottom: ${RFValue(6)}px;
`;

export const SchedulesTitle = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
`;

export const SchedulesQuantity = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
`;

export const CarList = styled(FlatList)`

` as React.ComponentType as new <MyCarsProps>() => FlatList<MyCarsProps>

export const Separator = styled.View<SeparatorProps>`
    width: 100%;
    height: ${({ height }) => height ? height : 0}px;
`;

export const CarFooter = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color:${({ theme }) => theme.colors.background_secondary};

    margin-top: 4px;
    padding: 15px 25px;
`;

export const CarFooterTitle = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;

export const CarFooterPeriod = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CarFooterDate = styled.Text`
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.title};
`
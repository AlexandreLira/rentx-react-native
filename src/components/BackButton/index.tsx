import React from 'react';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
interface Props extends BorderlessButtonProps {
    color?: string;
}

export function BackButton({ color, ...rest }: Props) {

    const { colors } = useTheme()
    const navigation = useNavigation<any>()
    return (
        <Container {...rest} onPress={() => navigation.goBack()}>
            <MaterialIcons
                name="chevron-left"
                size={24}
                color={color ? color : colors.text}
            />
        </Container>
    )
}
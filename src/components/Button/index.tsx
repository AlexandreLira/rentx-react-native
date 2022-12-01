import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
    Container,
    Title
} from './styles';

interface Props extends RectButtonProps{
    title: string;
    color?: string;
    disabled?: boolean;
    onPress: () => void
}

export function Button({
    title,
    color,
    disabled,
    onPress,
    ...rest
}: Props){
    return (
        <Container 
            {...rest} 
            color={color} 
            disabled={disabled}
            onPress={!disabled && onPress}
        >
            <Title>{title}</Title>
        </Container>
    )
}
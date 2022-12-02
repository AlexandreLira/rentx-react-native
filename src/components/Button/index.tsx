import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
    Container,
    Title
} from './styles';

interface Props extends RectButtonProps {
    title: string;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    onPress: () => void
}

export function Button({
    title,
    color,
    disabled = false,
    loading = false,
    onPress,
    ...rest
}: Props) {

    return (
        <Container
            {...rest}
            color={color}
            disabled={disabled || loading}
            onPress={(!disabled || loading) && onPress}
        >
            {loading
                ? <ActivityIndicator size="small" color="#FFF"/>
                : <Title>{title}</Title>
            }
        </Container>
    )
}
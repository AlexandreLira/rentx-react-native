import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

export function Load() {

    const {colors} = useTheme()

    return (
        <Container>
            <ActivityIndicator color={colors.main} size="large"/>
        </Container>
    )
}
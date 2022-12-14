import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCars';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes() {
    return (
        <Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="Splash"
                component={Splash}
            />
            <Screen
                name="Home"
                component={Home}
            />
            <Screen
                name="MyCars"
                component={MyCars}
            />
            <Screen
                name="CarDetails"
                component={CarDetails}
            />
            <Screen
                name="Scheduling"
                component={Scheduling}
            />
            <Screen
                name="SchedulingDetails"
                component={SchedulingDetails}
            />
            <Screen
                name="SchedulingComplete"
                component={SchedulingComplete}
                options={{
                    gestureDirection: 'vertical'
                }}
            />
        </Navigator>
    )
}
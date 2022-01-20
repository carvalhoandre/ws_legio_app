import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Readings from '../screens/readings/readings';
import OrderR from '../screens/readings/orderR';
import Instructions from '../screens/readings/instructions';
import commonStyles from '../styles/commonStyles';

const Stack = createNativeStackNavigator();

function ReadingRoute() {
    return (
        <Stack.Navigator
            initialRouteName="ReadingsMain"
        >
            <Stack.Screen
                name="ReadingsMain"
                component={Readings}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name="OrderR"
                component={OrderR}
                options={{
                    headerTitle: "Ordem da Reunião",
                    headerTitleStyle: {
                        fontFamily: commonStyles.fontFamily.josefin,
                        color: commonStyles.colors.primaryColor,
                        fontSize: commonStyles.fontSize.medium,
                    }
                }}
            />
            <Stack.Screen
                name="Instructions"
                component={Instructions}
                options={{
                    headerTitle: "Instrução Permanente",
                    headerTitleStyle: {
                        fontFamily: commonStyles.fontFamily.josefin,
                        color: commonStyles.colors.primaryColor,
                        fontSize: commonStyles.fontSize.medium,
                    }
                }}
            />
           
        </Stack.Navigator>
    )
}

export default ReadingRoute;

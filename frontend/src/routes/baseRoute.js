import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Data from '../screens/dataBase/dataBase';
import CreateAta from '../screens/dataBase/ata/create';
import commonStyles from '../styles/commonStyles';

const Stack = createNativeStackNavigator();

function BaseRoute() {
    return (
        <Stack.Navigator
            initialRouteName="CreateAta"
        >
            <Stack.Screen
                name="DataMain"
                component={Data}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name="CreateAta"
                component={CreateAta}
                options={{
                    headerShown: false,
                }} 
            />
        </Stack.Navigator>
    )
}

export default BaseRoute;

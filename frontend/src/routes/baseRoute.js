import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Data from '../screens/dataBase/dataBase';
import AtaCreate from '../screens/dataBase/ata/AtaCreate';
import CreateMember from '../screens/dataBase/member/create'
import AtaSearch from '../screens/dataBase/ata/AtaSearch';
import AtaFound from '../screens/dataBase/ata/AtaFound';

const Stack = createNativeStackNavigator();

function BaseRoute() {
    return (
        <Stack.Navigator
            initialRouteName="AtaSearch"
        >
            <Stack.Screen
                name="DataMain"
                component={Data}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name="AtaCreate"
                component={AtaCreate}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name="CreateLegio"
                component={CreateMember}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name="AtaSearch"
                component={AtaSearch}
                options={{
                    headerShown: false,
                }} 
            />
            <Stack.Screen
                name="AtaFound"
                component={AtaFound}
                options={{
                    headerShown: false,
                }} 
            />
        </Stack.Navigator>
    )
}

export default BaseRoute;

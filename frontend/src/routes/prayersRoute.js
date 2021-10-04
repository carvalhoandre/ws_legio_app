import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/* catena */
import Catena from '../screens/tessera/catena'
import Final from '../screens/tessera/final'
import Opening from '../screens/tessera/opening'
import Prayers from '../screens/tessera/prayers'
/* founders */
import Afonso from '../screens/founders/afonso'
import Frank from '../screens/founders/frank'
import Edel from '../screens/founders/edel'
/* misterios  */
import Dolorosos from '../screens/mysteries/dolorosos'
import Gloriosos from '../screens/mysteries/gloriosos'
import Gozosos from '../screens/mysteries/gozosos'
import Luminosos from '../screens/mysteries/luminosos'

const Stack = createNativeStackNavigator();

function PrayersRoute() {
    return (
        <Stack.Navigator
            initialRouteName="Prayers"
        >
            <Stack.Screen
                name="Catena"
                component={Catena}
               
            />
            <Stack.Screen
                name="Final"
                component={Final}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Opening"
                component={Opening}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Prayers"
                component={Prayers}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Frank"
                component={Frank}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Edel"
                component={Edel}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Afonso"
                component={Afonso}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Dolorosos"
                component={Dolorosos}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Gloriosos"
                component={Gloriosos}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Gozosos"
                component={Gozosos}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Luminosos"
                component={Luminosos}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default PrayersRoute;

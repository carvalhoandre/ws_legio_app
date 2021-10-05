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
                options={{
                    headerTitle: "Catena Legionis",
                }}
            />
            <Stack.Screen
                name="Final"
                component={Final}
                options={{
                    headerTitle: "Orações Finais",
                }}
            />
            <Stack.Screen
                name="Opening"
                component={Opening}
                options={{
                    headerTitle: "Orações Iniciais",
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
                    headerTitle: "Frank Duff",
                }}
            />
            <Stack.Screen
                name="Edel"
                component={Edel}
                options={{
                    headerTitle: "Edel Quinn",
                }}
            />
            <Stack.Screen
                name="Afonso"
                component={Afonso}
                options={{
                    headerTitle: "Afonso Lambe",
                }}
            />
            <Stack.Screen
                name="Dolorosos"
                component={Dolorosos}
            />
            <Stack.Screen
                name="Gloriosos"
                component={Gloriosos}
            />
            <Stack.Screen
                name="Gozosos"
                component={Gozosos}
            />
            <Stack.Screen
                name="Luminosos"
                component={Luminosos}
            />
        </Stack.Navigator>
    )
}

export default PrayersRoute;

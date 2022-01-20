import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
/* screens */
import Home from '../screens/home'
import PrayersRoute from './prayersRoute'
import ReadingRoute from "../routes/readingRoute";
import BaseRoute from "./baseRoute";

const Tab = createBottomTabNavigator();

export default class Routes extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    options={{
                        headerShown: false,
                    }}
                    screenOptions={({ route }) => ({
                        tabBarActiveTintColor: "#11142D",
                        tabBarInactiveTintColor: "#11142D",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size, focused }) => {
                            let iconName;
                            switch (route.name) {
                                case 'Home':
                                    iconName = focused ? 'home-sharp' : 'home-outline';
                                    break;
                                case 'PrayersRoute':
                                    iconName = focused ? 'flame' : 'flame-outline';
                                    break;
                                case 'Readings':
                                    iconName = focused ? 'document-attach':'document-attach-outline';
                                    break;
                                case 'Database':
                                    iconName = focused ? 'flask' : 'flask-outline';
                                    break;
                                default:
                                    iconName = 'albums-outline';
                                    break;
                            }
                            return <Icon name={iconName} size={size} color={color} />
                        },
                    })}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Tab.Screen
                        name="PrayersRoute"
                        component={PrayersRoute}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Tab.Screen
                        name="Database"
                        component={BaseRoute}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Tab.Screen
                        name="Readings"
                        component={ReadingRoute}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}


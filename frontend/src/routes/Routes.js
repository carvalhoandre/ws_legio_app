import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import commonStyles from '../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet } from "react-native";
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
                    initialRouteName="Database"
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconTabRound: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 6,
        shadowColor: commonStyles.colors.primaryColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    title: {
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: commonStyles.fontSize.small,
        textAlign: "center",
        justifyContent: "center",
    },
});

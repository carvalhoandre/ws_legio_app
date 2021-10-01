import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import commonStyles from './src/styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
/* screens */
import Home from './src/screens/home'


const Tab = createBottomTabNavigator();

const Settings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Configurações</Text>
        </View>
    )
}

const Prayers = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Orações</Text>
        </View>
    )
}

const Readings = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leituras</Text>
        </View>
    )
}

const Database = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Database</Text>
        </View>
    )
}

export default class Routes extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    screenOptions={({ route }) => ({
                        tabBarActiveTintColor: commonStyles.colors.primaryHoverColor,
                        tabBarInactiveTintColor: "#4b4d53",
                        tabBarShowLabel: false,
                        tabBarIcon: ({ color, size }) => {
                            let iconName;
                            switch (route.name) {
                                case 'Home':
                                    iconName = 'home-outline';
                                    break;
                                case 'Settings':
                                    iconName = 'settings-outline';
                                    break;
                                case 'Prayers':
                                    iconName = 'flame-outline';
                                    break;
                                case 'Readings':
                                    iconName = 'document-attach-outline';
                                    break;
                                case 'Database':
                                    iconName = 'create-outline';
                                    break;
                                default:
                                    iconName = 'albums-outline';
                                    break;
                            }
                            return <Icon name={iconName} size={size} color={color} />
                        },
                    })}
                >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Prayers" component={Prayers} />
                    <Tab.Screen
                        name="Database"
                        component={Database}
                        options={() => ({
                            tabBarIcon: ({ tintColor }) => (
                                <View>
                                    <LinearGradient
                                        style={styles.iconTabRound}
                                        start={{ x: 0, y: 1 }}
                                        end={{ x: 0, y: 0 }}
                                        colors={[commonStyles.colors.primaryHoverColor, commonStyles.colors.firstColorLight]}
                                    >
                                        <Icon name="add-outline" size={26} color="#FFF" />
                                    </LinearGradient>
                                </View>
                            )
                        })}
                    />
                    <Tab.Screen name="Readings" component={Readings} />
                    <Tab.Screen name="Settings" component={Settings} />

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
        fontFamily: commonStyles.fontFamily.semiBold,
        fontSize: commonStyles.fontSize.small,
        textAlign: "center",
        justifyContent: "center",

    }
});

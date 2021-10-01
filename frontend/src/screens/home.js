import React, { Component } from "react";
import {Text, View, StyleSheet } from 'react-native'
import commonStyles from '../styles/commonStyles'

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Legio Mariae</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: commonStyles.fontFamily.LegioTitle,
        color: commonStyles.colors.primaryColor,
        fontSize: commonStyles.fontSize.title,
    }
})

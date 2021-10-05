import React from "react";
import {Text, View, StyleSheet } from 'react-native'
import commonStyles from '../styles/commonStyles'

const Readings = () => {

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Leituras</Text>
            </View>
        )
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
        
    }
})

export default Readings;

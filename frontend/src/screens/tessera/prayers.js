import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Prayers extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Orações da Legião</Text>

                    <Text style={styles.paragraph}>
                        Damos a seguir as orações da Legião de Maria, conforme devem ser rezadas nas
                        reuniões. Rezadas em particular, dispensam tal ordem
                    </Text>

                    <Text style={styles.paragraph}>
                        Os membros Auxiliares deverão rezá-las diariamente por inteiro.
                    </Text>

                    <Text style={styles.paragraph}>
                        O Sinal da Cruz, que vai no princípio e no fim de cada parte, marca a divisão das
                        orações. No caso de estas se rezarem em seguida, o Sinal da Cruz será feito apenas no
                        início e no fim das mesmas.
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 0,
        marginBottom: 20,
    },
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

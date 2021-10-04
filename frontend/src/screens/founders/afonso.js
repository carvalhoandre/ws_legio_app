import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Afonso extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Oração para pedir a beatificação de Alphonsus Lambe</Text>

                    <Text style={styles.paragraph}>
                        Oh! Deus, que por sua clemência infinita inflamou o coração de seu criado, Alphonsus Lambe com um amor ardente por Vós e por Maria, nossa Mãe; um amor que se revelou em uma vida de intenso trabalho, oração e sacrifício para a salvação de almas, conceda, se for Vossa vontade, que nós possamos obter, por sua intercessão, o que nós não podemos obter por nossos próprios méritos.
                    </Text>

                    <Text style={styles.paragraph}>
                        Isto Vos pedimos por Jesus Cristo, Nosso Senhor. Amém.
                    </Text>

                    <Text style={styles.paragraph}>(Com aprovação eclesiástica)</Text>
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

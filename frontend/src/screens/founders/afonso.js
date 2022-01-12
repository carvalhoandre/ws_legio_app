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

                    <Text style={styles.observation}>(Com aprovação eclesiástica)</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 80,
        paddingEnd: 50,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.primaryColor,
        fontSize: commonStyles.fontSize.medium,
        marginBottom: 20,
        textAlign: 'center'
    },
    paragraph: {
        lineHeight: 30,
        textAlign: 'justify',
        fontFamily: commonStyles.fontFamily.text,
        marginBottom: 10,
        fontSize: commonStyles.fontSize.small,
    },
    observation: {
        fontFamily: commonStyles.fontFamily.light,
        color: commonStyles.colors.textColorLight,
        marginBottom: 15,
    }
})

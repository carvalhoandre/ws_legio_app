import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Catena extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>

                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Ant.</Text> Quem é esta que avança como a aurora, formosa como a lua, brilhante como o sol, terrível como um exército em ordem de batalha?
                    </Text>

                    <Text style={styles.paragraph}>
                        A minh’alma + engrandece ao Senhor*
                    </Text>

                    <Text style={styles.paragraph}>
                        E se alegra e meu espírito em Deus, meu Salvador,
                    </Text>

                    <Text style={styles.paragraph}>
                        Pois ele viu a pequenez de sua serva, * eis que agora as gerações hão de chamar-me
                        de bendita.
                    </Text>

                    <Text style={styles.paragraph}>
                        O Poderoso fez por mim maravilhas* e Santo é o seu nome!
                    </Text>

                    <Text style={styles.paragraph}>
                        Seu amor, de geração em geração,* chega a todos que o respeitam.
                    </Text>

                    <Text style={styles.paragraph}>
                        Demonstrou o poder de seu braço, * dispersou os orgulhosos.
                    </Text>

                    <Text style={styles.paragraph}>
                        Derrubou os poderosos de seus tronos* e os humildes exaltou
                    </Text>

                    <Text style={styles.paragraph}>
                        De bens saciou os famintos* e despediu, sem nada, os ricos.
                    </Text>

                    <Text style={styles.paragraph}>
                        Acolheu Israel, seu servidor,* fiel ao seu amor,
                    </Text>

                    <Text style={styles.paragraph}>
                        Como havia prometido aos nossos pais, * em favor de Abraão e de seus filhos, para
                        sempre.
                    </Text>

                    <Text style={styles.paragraph}>
                        Glória ao Pai e ao Filho e ao Espírito Santo, *
                    </Text>
                    <Text style={styles.paragraph}>
                        Como era no princípio, agora e sempre. Amém.
                    </Text>

                    <Text style={styles.paragraph}>
                        <Text style={styles.bold}>Ant.</Text> Quem é esta que avança como a aurora, formosa como a lua, brilhante como o sol, terrível como um exército em ordem de batalha?
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. Ó Maria concebida sem pecado,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós que recorremos a Vós.
                    </Text>

                    <Text style={styles.paragraph}>
                        P. <Text style={styles.bold}>Oremos</Text>: Senhor Jesus Cristo, Mediador nosso perante o Pai, que Vos dignastes escolher a Virgem Santíssima, Vossa Mãe, para Mãe e Medianeira nossa junto de Vós, concedei
                        misericordiosamente a quem a Vós recorrer, buscando os Vossos favores, se regozije de os
                        receber todos por Ela. Amém.
                    </Text>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 0,
    },
    container: {
        padding: 25,
    },
    paragraph: {
        lineHeight: 22,
        textAlign: "justify",
        fontFamily: commonStyles.fontFamily.body,
        marginBottom: 15,
        fontSize: commonStyles.fontSize.normal,
    },
    jaculatory: {
        lineHeight: 20,
        textAlign: "auto",
        fontFamily: commonStyles.fontFamily.body,
        fontSize: commonStyles.fontSize.normal,
    },
    repply: {
        marginBottom: 15,
        lineHeight: 20,
        textAlign: "auto",
        fontFamily: commonStyles.fontFamily.italic,
        fontSize: commonStyles.fontSize.normal,
    },
    bold: {
        fontFamily: commonStyles.fontFamily.semiBold,
        color: commonStyles.colors.textColor,
    },
})

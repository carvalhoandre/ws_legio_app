import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Gloriosos extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Mistérios Gloriosos</Text>

                    <Text style={styles.subtitle}>Primeiro Mistério Glorioso: Ressurreição de Jesus</Text>
                    <Text style={styles.paragraph}>
                        No primeiro dia da semana, muito cedo, dirigiram-se ao sepulcro com os aromas que haviam preparado. Acharam a pedra removida longe da abertura do sepulcro. Entraram, mas não encontraram o corpo do Senhor Jesus. Não sabiam elas o que pensar, quando apareceram em frente delas dois personagens com vestes resplandecentes. Como estivessem amedrontadas e voltassem o rosto para o chão, disseram-lhes eles: "Por que buscais entre os mortos aquele que está vivo? Não está aqui, mas ressuscitou" (Lc 24, 1-6).
                    </Text>

                    <Text style={styles.subtitle}>Segundo Mistério Glorioso: Ascensão de Jesus ao Céu</Text>
                    <Text style={styles.paragraph}>
                        Depois que o Senhor Jesus lhes falou, foi levado ao céu e está sentado à direita de Deus (Mc 16, 19).
                    </Text>

                    <Text style={styles.subtitle}>Terceiro Mistério Glorioso: Vinda do Espírito Santo sobre os Apóstolos</Text>
                    <Text style={styles.paragraph}>
                        Chegando o dia de Pentecostes, estavam todos reunidos no mesmo lugar. De repente, veio do céu um ruído, como se soprasse um vento impetuoso, e encheu toda a casa onde estavam sentados. Apareceu-lhes então uma espécie de línguas de fogo que se repartiram e pousaram sobre cada um deles. Ficaram todos cheios do Espírito Santo e começaram a falar em línguas, conforme o Espírito Santo lhes concedia que falassem (At 2, 1-4).
                    </Text>

                    <Text style={styles.subtitle}>Quarto Mistério Glorioso: Assunção de Maria</Text>
                    <Text style={styles.paragraph}>
                        Por isto, desde agora, me proclamarão bem-aventurada todas as gerações, porque realizou em mim maravilhas aquele que é poderoso e cujo nome é Santo (Lc 1, 48-49).
                    </Text>

                    <Text style={styles.subtitle}>Quinto Mistério Glorioso: Coroação de Maria no Céu</Text>
                    <Text style={styles.paragraph}>
                        Apareceu em seguida um grande sinal no céu: uma Mulher revestida do sol, a lua debaixo dos seus pés e na cabeça uma coroa de doze estrelas (Ap 12, 1).
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

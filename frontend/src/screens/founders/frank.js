import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Frank extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Oração para pedir a beatificação de Frank Duff</Text>

                    <Text style={styles.paragraph}>
                        Deus Pai, Vós inspirastes ao vosso servo Frank Duff, um profundo discernimento do mistério de vossa Igreja, Corpo de Cristo, e do lugar de Maria, Mãe de Jesus, nesse mistério. Em seu imenso desejo de compartilhar esse discernimento com outros e, com filial confiança em Maria, ele fundou uma Legião, para ser um sinal do maternal Amor da Virgem pelo mundo e um meio de engajar todos os seus filhos no trabalho de evangelização da Igreja. Nós vos agradecemos, Pai, pelas graças a ele concedidas e pelos benefícios advindos à Igreja, por sua corajosa e radiante fé. Agora, confiadamente, rogamos que, por sua intercessão, nos concedais a graça que agora vos suplicamos...
                    </Text>

                    <Text style={styles.paragraph}>
                        Humildemente vos pedimos, também que, se de acordo com Vossa Vontade, a santidade de sua vida possa ser reconhecida pela Igreja, o mais breve possível, para a glória de Vosso Nome. É o que vos pedimos, por Cristo, Nosso Senhor, Amém!
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

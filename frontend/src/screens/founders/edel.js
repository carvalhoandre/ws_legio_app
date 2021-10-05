import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Edel extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    <Text style={styles.title}>Oração para Beatificação de Edel Quinn</Text>

                    <Text style={styles.paragraph}>
                        Eterno Pai, eu Vos agradego a graça que concedestes à Vossa serva Edel Quinn, de se esforçar por viver sempre na alegria da Vossa presença; eu Vos agradeço a irradiante caridade infundida no seu coração pelo Vosso Espirito Santíssimo, e a força que ela hauriu no Pão da Vida, para trabalhar até à morte pela glória do Vosso nome, em amorosa dependência de Maria, a Mãe da Igreja. Confiado, ó Pai Misericordioso, em que a sua vida Vos tenha agradado peço-Vos me concedais, por sua intercessão, o favor especial que agora Vos imploro...
                    </Text>

                    <Text style={styles.paragraph}>
                        E torneis conhecida por meio de milagres a glória de que ela goza no céu, para que possa ser também glorificada pela Vossa Igreja na terra, por Cristo Nosso Senhor. Amém
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
        fontFamily: commonStyles.fontFamily.LegioTitle,
        color: commonStyles.colors.primaryHoverColor,
        fontSize: commonStyles.fontSize.subtitle,
        marginBottom: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily.italic,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.small,
        marginBottom: 20,
    },
    paragraph: {
        lineHeight: 23,
        textAlign: 'justify',
        fontFamily: commonStyles.fontFamily.body,
        marginBottom: 10,
        fontSize: commonStyles.fontSize.normal,
    },
    observation: {
        fontFamily: commonStyles.fontFamily.light,
        color: commonStyles.colors.textColorLight,
        marginBottom: 15,
    },
})

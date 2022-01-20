import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

const Instructions = () => {

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.observation}>“O Serviço Legionário exige de cada membro da Legião: </Text>
                <Text style={styles.item}>
                    <Text style={styles.bold}>Primeiro:</Text> A assistência pontual e regular à reunião semanal do Praesidium, onde
                    deve apresentar em voz alta e compreensível o relatório exato do trabalho realizado.
                </Text>

                <Text style={styles.item}><Text style={styles.bold}>Segundo:</Text> A reza diária da Catena.</Text>

                <Text style={styles.item}>
                    <Text style={styles.bold}>Terceiro:</Text> A execução de um trabalho legionário, ativo e bem definido, em espírito
                    de fé e união com Maria, de tal forma que, pelo legionário, seja Maria, a Mãe de Jesus, que
                    mais uma vez contemple e sirva a pessoa Adorável de seu divino Filho, naqueles por quem
                    o legionário trabalha e nos seus colegas de ação.
                </Text>

                <Text style={styles.item}>
                    <Text style={styles.bold}>Quarto:</Text> Segredo absoluto sobre os assuntos tratados em reunião ou conhecidos na
                    realização da atividade legionária”.
                </Text>

                <Text style={styles.observation}>
                    “Por meu intermédio, Maria deseja também amar a Jesus, no coração daqueles a
                    quem eu posso inflamar de amor com o meu apostolado e com as minhas orações
                    contínuas.Se me identificar inteiramente com ela, serei coberto tão abundantemente de
                    suas graças e de seu amor, que me tornarei como um rio caudaloso, capaz de, por minha
                    vez, transbordar sobre outras almas.Por mim, Maria poderá amar a Jesus e enchê-lo de
                    alegria, não só por meio do meu coração mas também por meio dos inumeráveis corações unidos ao meu” (De
                    Jaegher: A virtude da Confiança.Esta citação não faz parte da Ordem Permanente).
                </Text>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 0,
    },
    container: {
        flex: 1,
        marginBottom: 20,
        marginTop: 10
    },
    title: {
        fontSize: commonStyles.fontSize.medium,
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
        textAlign: "center",
        marginTop: 20
    },
    item: {
        fontFamily: commonStyles.fontFamily.text,
        marginTop: 15,
        marginLeft: 10,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.titleColor,
        lineHeight: 23
    },

    bold: {
        fontFamily: commonStyles.fontFamily.title,
        marginTop: 15,
        marginLeft: 10,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.titleColor,
        lineHeight: 23
    },
    observation: {
        fontFamily: commonStyles.fontFamily.light,
        color: commonStyles.colors.textColorLight,
        marginTop: 15,
        lineHeight: 20,
        textAlign: "center",
        margin: 5,
    }
})

export default Instructions;

import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Luminosos extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>

                    <Text style={styles.title}>Primeiro Mistério: Batismo de Jesus no rio Jordão</Text>
                    <Text style={styles.paragraph}>
                        Depois que Jesus foi batizado, saiu logo da água. Eis que os céus se abriram e viu descer sobre ele, em forma de pomba, o Espírito de Deus. E do céu baixou uma voz: "Eis meu Filho muito amado em quem ponho minha afeição" (Mt 3,16-17).
                    </Text>

                    <Text style={styles.title}>Segundo Mistério: Auto-revelação de Jesus nas Bodas de Caná</Text>
                    <Text style={styles.paragraph}>
                        Três dias depois, celebravam-se bodas em Caná da Galiléia, e achava-se ali a mãe de Jesus. Também foram convidados Jesus e os seus discípulos. Como viesse a faltar vinho, a mãe de Jesus disse-lhe: "Eles já não têm vinho". Respondeu-lhe Jesus: "Mulher, isso compete a nós? Minha hora ainda não chegou". Disse, então, sua mãe aos serventes: "Fazei o que ele vos disser". (Jo 2, 1-5)
                    </Text>

                    <Text style={styles.title}>Terceiro Mistério: Anúncio do Reino de Deus</Text>
                    <Text style={styles.paragraph}>
                        Completou-se o tempo e o Reino de Deus está próximo; fazei penitência e crede no Evangelho. (Mc 1, 15)
                    </Text>

                    <Text style={styles.title}>Quarto Mistério: Transfiguração de Jesus</Text>
                    <Text style={styles.paragraph}>
                        Seis dias depois, Jesus tomou consigo Pedro, Tiago e João, seu irmão, e conduziu-os à parte a uma alta montanha.Lá se transfigurou na presença deles: seu rosto brilhou como o sol, suas vestes tornaram-se resplandecentes de brancura (Mt 17, 1-2).
                    </Text>

                    <Text style={styles.title}>Quinto Mistério: Instituição da Eucaristia</Text>
                    <Text style={styles.paragraph}>
                        Durante a refeição, Jesus tomou o pão, benzeu-o, partiu-o e o deu aos discípulos, dizendo: "Tomai e comei, isto é meu corpo" (Mt 26, 26).
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
        flex: 1,
        paddingTop: 30,
        paddingEnd: 50,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: commonStyles.fontFamily.subtitle,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.normal,
        marginBottom: 15,
    },
    paragraph: {
        lineHeight: 25,
        fontFamily: commonStyles.fontFamily.text,
        textAlign: 'justify',
        color: commonStyles.colors.textColor,
        marginBottom: 25,
        fontSize: commonStyles.fontSize.small,
    }
})

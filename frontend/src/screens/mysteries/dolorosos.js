import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Dolorosos extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>

                    <Text style={styles.title}>Primeiro Mistério: Agonia de Jesus no Horto</Text>
                    <Text style={styles.paragraph}>
                        Retirou-se Jesus com eles para um lugar chamado Getsêmani e disse-lhes: "Assentai-vos aqui, enquanto eu vou ali orar". E, tomando consigo Pedro e os dois filhos de Zebedeu, começou a entristecer-se e a angustiar-se. Disse-lhes, então: "Minha alma está triste até a morte. Ficai aqui e vigiai comigo". Adiantou-se um pouco e, prostrando-se com a face por terra, assim rezou: "Meu Pai, se é possível, afasta de mim este cálice! Todavia não se faça o que eu quero, mas sim o que tu queres" (Mt 26, 36-39).
                    </Text>

                    <Text style={styles.title}>Segundo Mistério: Flagelação de Jesus</Text>
                    <Text style={styles.paragraph}>
                        Então lhes soltou Barrabás; mas a Jesus mandou açoitar, e o entregou para ser crucificado (Mt 27,26).
                    </Text>

                    <Text style={styles.title}>Terceiro Mistério: Coroação de Espinhos</Text>
                    <Text style={styles.paragraph}>
                        Os soldados do governador conduziram Jesus para o pretório e rodearam-no com todo o pelotão. Arrancaram-lhe as vestes e colocaram-lhe um manto escarlate. Depois, trançaram uma coroa de espinhos, meteram-lha na cabeça e puseram-lhe na mão uma vara. Dobrando os joelhos diante dele, diziam com escárnio: "Salve, rei dos judeus!" (Mt 27, 27-29).
                    </Text>

                    <Text style={styles.title}>Quarto Mistério: Jesus carregando a cruz no caminho do Calvário</Text>
                    <Text style={styles.paragraph}>
                        Passava por ali certo homem de Cirene, chamado Simão, que vinha do campo, pai de Alexandre e de Rufo, e obrigaram-no a que lhe levasse a cruz. Conduziram Jesus ao lugar chamado Gólgota, que quer dizer lugar do crânio (Mc 15, 21-22).
                    </Text>

                    <Text style={styles.title}>Quinto Mistério: Crucifixão e morte de Jesus</Text>
                    <Text style={styles.paragraph}>
                        Chegados que foram ao lugar chamado Calvário, ali o crucificaram, como também os ladrões, um à direita e outro à esquerda. E Jesus dizia: "Pai, perdoa-lhes; porque não sabem o que fazem"...
                        Era quase à hora sexta e em toda a terra houve trevas até a hora nona. Escureceu-se o sol e o véu do templo rasgou-se pelo meio. Jesus deu então um grande brado e disse: "Pai, nas tuas mãos entrego o meu espírito". E, dizendo isso, expirou (Lc  23, 33-46).
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

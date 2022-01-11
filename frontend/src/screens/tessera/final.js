import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Final = () => {

    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const list = [
        {
            title: 'Frank Duff',
            onPress: (() => {
                navigation.navigate('Frank');
            }),
        },
        {
            title: 'Alfie Lambe',
            onPress: (() => {
                navigation.navigate('Afonso');
            }),
        },
        {
            title: 'Edel Quin',
            onPress: (() => {
                navigation.navigate('Edel');
            }),
        },
        {
            title: 'Cancelar',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => hideModal(),
        },
    ];

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}>
            <Provider>
                <View style={styles.container}>
                    <Text style={styles.paragraph}>
                        Em nome do Pai + e do Filho e do Espírito Santo. Amém.
                    </Text>

                    <Text style={styles.paragraph}>
                        P. À Vossa proteção recorremos, Santa Mãe de Deus; não desprezeis as súplicas que em
                        nossas necessidades vos dirigimos, mas livrai-nos sempre de todos os perigos, ó Virgem
                        gloriosa e bendita.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. (Invocação própria do Praesidium)
                    </Text>
                    <Text style={styles.observation}>
                        Fora das reuniões do Praesidium reza-se sempre a invocação seguinte:
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós
                    </Text>


                    <Text style={styles.jaculatory}>
                        P. Maria Imaculada, Medianeira de todas as graças,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. S. Miguel e S. Gabriel,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. Milícias todas dos céus, Legião dos Anjos de Maria,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. S. João Batista,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. S. Pedro e S. Paulo,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>

                    <Text style={styles.paragraph}>
                        Concedei-nos, Senhor, a nós que militamos sob o estandarte da Virgem, aquela
                        plenitude de fé em Vós e de confiança em Maria, que nos assegurem a conquista do mundo.
                        Dai-nos uma fé viva, animada pela caridade, que nos leve a praticar as nossas ações,
                        unicamente por amor de Vós, e a ver-Vos e a servi-Vos sempre no nosso próximo; uma fé
                        firme e inabalável como a rocha, que nos conserve calmos e resolutos no meio das cruzes,
                        trabalhos e decepções da vida; uma fé corajosa que nos anime a empreender e prosseguir,
                        sem hesitação, grandes coisas, por Deus e pela salvação do próximo; uma fé que seja a
                        Coluna de Fogo da nossa Legião que nos guie avante unidos, – para acender em todos a
                        chama do Amor divino, – iluminar os que estão nas trevas e sombras da morte, – animar os
                        indecisos – restituir a vida aos mortos no pecado; e nos dirija os passos no caminho da paz;
                        de forma que, terminada a batalha da vida, a nossa Legião possa reunir-se, sem uma só
                        perda, no Reino do Vosso Amor e Glória. Amém.
                    </Text>

                    <Text style={styles.paragraph}>
                        P. Que as almas dos Legionários e de todos os fiéis defuntos, pela misericórdia de Deus,
                        descansem em paz. Amém.
                    </Text>

                    <Text style={styles.observation}>
                        (Segue-se a bênção do Diretor Espiritual)
                    </Text>

                    <Text style={styles.paragraph}>
                        Em nome do Pai <Icon name={"christianity"} size={20} color={"#000"} /> e do Filho e do Espírito Santo. Amém.
                    </Text>

                    <Portal>
                        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerOptions}>
                            {list.map((u, i) => {
                                return (
                                    <Button key={i} onPress={u.onPress}>
                                        <Text style={styles.option}>{u.title}</Text>
                                    </Button>
                                )
                            })}
                        </Modal>
                    </Portal>
                    <Button style={{ marginTop: 30 }} onPress={showModal}>
                        <Text style={styles.titleOption}>Orações dos Fundadores</Text>
                    </Button>
                </View>
            </Provider>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 0,
        paddingBottom: 50
    },
    container: {
        padding: 25,
    },
    paragraph: {
        lineHeight: 35,
        textAlign: "justify",
        fontFamily: commonStyles.fontFamily.text,
        marginBottom: 20,
        fontSize: commonStyles.fontSize.normal,
    },
    jaculatory: {
        lineHeight: 20,
        textAlign: "auto",
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
    },
    repply: {
        marginTop: 5,
        marginBottom: 15,
        lineHeight: 20,
        textAlign: "auto",
        fontFamily: commonStyles.fontFamily.light,
        fontSize: commonStyles.fontSize.normal,
    },
    observation: {
        fontFamily: commonStyles.fontFamily.sitacao,
        color: commonStyles.colors.textColor,
        textAlign: 'center',
        fontSize: commonStyles.fontSize.small,
        marginBottom: 5
    },
    bold: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.textColor,
    },
    containerOptions: {
        backgroundColor: '#FFF',
        padding: 20,
        zIndex: 100,
        marginTop: 800
    },

    titleOption: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.primaryColor,
        textTransform: 'capitalize',
    },

    option: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.titleColor,
        textTransform: 'capitalize',
        textAlign: 'center',
    }
})

export default Final;

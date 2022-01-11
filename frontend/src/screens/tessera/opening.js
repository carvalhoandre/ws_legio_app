import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Opening = () => {

    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const list = [
        {
            title: 'Gloriosos (quartas-feiras e domingos)',
            onPress: (() => {
                navigation.navigate('Gloriosos');
            }),
        },
        {
            title: 'Gozosos (segundas-feiras e sábados)',
            onPress: (() => {
                navigation.navigate('Gozosos');
            }),
        },
        {
            title: 'Dolosorosos (terças e sextas-feiras)',
            onPress: (() => {
                navigation.navigate('Dolorosos');
            }),
        },
        {
            title: 'Luminosos (quintas-feiras)',
            onPress: (() => {
                navigation.navigate('Luminosos');
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
            contentContainerStyle={styles.scrollView}
        >
            <View style={styles.container}>
                <Provider >
                    <Text style={styles.paragraph}>
                        Em nome do Pai <Icon name={"christianity"} size={20} color={"#000"} /> e do Filho e do Espírito Santo. Amém.
                    </Text>

                    <Text style={styles.paragraph}>
                        P. Vinde, Espírito Santo, enchei os corações dos Vossos fiéis e acendei neles o fogo do
                        Vosso amor, enviai, Senhor, o Vosso Espírito e tudo será criado.
                    </Text>

                    <Text style={styles.repply}>
                        R. E renovareis a face da terra.
                    </Text>

                    <Text style={styles.paragraph}>
                        P. <Text style={styles.bold}>Oremos</Text>: ó Deus que santificais a Vossa Igreja inteira, em todos os povos e nações,derramai por toda a extensão do mundo os dons do Espírito Santo e realizai agora no
                        coração dos fiéis as maravilha que operastes no início da pregação do Evangelho.
                    </Text>

                    <Text style={styles.paragraph}>
                        Por Nosso Senhor Jesus Cristo, vosso Filho na unidade do Espírito Santo. Amém.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. Abri os meus lábios, ó Senhor.
                    </Text>
                    <Text style={styles.repply}>
                        R. E minha boca anunciará o Vosso louvor.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. Vinde, ó Deus, em meu auxílio.
                    </Text>
                    <Text style={styles.repply}>
                        R. Socorrei-me sem demora.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. Glória ao Pai e ao Filho e ao Espírito Santo
                    </Text>
                    <Text style={styles.repply}>
                        R. Como era no princípio, agora e sempre. Amém.
                    </Text>

                    <Text style={styles.observation}>
                        (Segue-se o terço terminado pela Salve Rainha).
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
                    <Button style={{ marginTop: 20, marginBottom: 20 }} onPress={showModal}>
                        <Text style={styles.titleOption}>Mistérios</Text>
                    </Button>

                    <Text style={styles.jaculatory}>
                        P. Rogai por nós, Santa Mãe de Deus.
                    </Text>
                    <Text style={styles.repply}>
                        R. Para que sejamos dignos das promessas de Cristo.
                    </Text>

                    <Text style={styles.paragraph}>
                        P. <Text style={styles.bold}>Oremos</Text>: Ó Deus, cujo Filho Unigênito, por Sua vida, morte e ressurreição, nos obteve o prêmio da salvação eterna, concedei-nos, nós Vô-lo pedimos que, meditando estes mistérios do Sacratíssimo Rosário da Bem-Aventurada Virgem Maria, imitemos o que contêm e
                        consigamos o que prometem. Pelo mesmo Cristo, Senhor Nosso. Amém.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. Coração Sacratíssimo de Jesus
                    </Text>
                    <Text style={styles.repply}>
                        R. tende piedade de nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. Coração Imaculado de Maria,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. São José,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. São João Evangelista
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. São Luís Maria de Montfort,
                    </Text>
                    <Text style={styles.repply}>
                        R. Rogai por nós.
                    </Text>

                    <Text style={styles.paragraph}>
                        Em nome do Pai + e do Filho e do Espírito Santo. Amém
                    </Text>
                </Provider>
            </View>
        </ScrollView>
    )
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
        fontFamily: commonStyles.fontFamily.text,
        marginBottom: 15,
        fontSize: commonStyles.fontSize.normal,
    },
    jaculatory: {
        lineHeight: 20,
        textAlign: "auto",
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
    },
    repply: {
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
        fontSize: commonStyles.fontSize.small
    },
    bold: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.textColor,
    },
    containerOptions: {
        backgroundColor: '#FFF',
        padding: 20,
        zIndex: 100,
    },

    titleOption: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.primaryColor,
        textTransform: 'capitalize'
    },

    option: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.titleColor,
        textTransform: 'capitalize',
        textAlign: 'center',
    }
})

export default Opening;

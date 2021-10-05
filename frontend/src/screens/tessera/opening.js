import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { Button, Modal, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Opening = () => {

    const navigation = useNavigation();

    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const containerStyle = { backgroundColor: 'white', padding: 20 };

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
            contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Orações Iniciais da reunião</Text>

                <Text style={styles.paragraph}>
                    Em nome do Pai + e do Filho e do Espírito Santo. Amém.
                </Text>

                <Text style={styles.paragraph}>
                    P. Vinde, Espírito Santo, enchei os corações dos Vossos fiéis e acendei neles o fogo do
                    Vosso amor, enviai, Senhor, o Vosso Espírito e tudo será criado.
                </Text>

                <Text style={styles.paragraph}>
                    R. E renovareis a face da terra.
                </Text>

                <Text style={styles.paragraph}>
                    P. <Text style={styles.bold}>Oremos</Text>: ó Deus que santificais a Vossa Igreja inteira, em todos os povos e nações,derramai por toda a extensão do mundo os dons do Espírito Santo e realizai agora no
                    coração dos fiéis as maravilha que operastes no início da pregação do Evangelho.
                </Text>

                <Text style={styles.paragraph}>
                    Por Nosso Senhor Jesus Cristo, vosso Filho na unidade do Espírito Santo. Amém.
                </Text>

                <Text style={styles.paragraph}>
                    <Text style={styles.jaculatory}>
                        P. Abri os meus lábios, ó Senhor.
                    </Text>
                    <Text style={styles.jaculatory}>
                        R. E minha boca anunciará o Vosso louvor.
                    </Text>
                </Text>

                <Text style={styles.paragraph}>
                    <Text style={styles.jaculatory}>
                        P. Vinde, ó Deus, em meu auxílio.
                    </Text>
                    <Text style={styles.jaculatory}>
                        R. Socorrei-me sem demora.
                    </Text>
                </Text>

                <Text style={styles.paragraph}>
                    <Text style={styles.jaculatory}>
                        P. Glória ao Pai e ao Filho e ao Espírito Santo
                    </Text>
                    <Text style={styles.jaculatory}>
                        R. Como era no princípio, agora e sempre. Amém.
                    </Text>
                </Text>

                <Text style={styles.paragraph}>
                    (Segue-se o terço terminado pela Salve Rainha).
                </Text>
            </View>

            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        {list.map((u, i) => {
                            return(
                                <Button key={i} onPress={u.onPress}> 
                                    {u.title}
                                </Button>
                            )
                        })}
                    </Modal>
                </Portal>
                <Button style={{ marginTop: 30 }} onPress={showModal}>
                    Mistérios
                </Button>
            </Provider>

            <View>
                <Text style={styles.paragraph}>
                    <Text style={styles.jaculatory}>
                        P. Rogai por nós, Santa Mãe de Deus.
                    </Text>
                    <Text style={styles.jaculatory}>
                        R. Para que sejamos dignos das promessas de Cristo.
                    </Text>
                </Text>

                <Text style={styles.paragraph}>
                    P. <Text style={styles.bold}>Oremos</Text>:  Ó Deus, cujo Filho Unigênito, por Sua vida, morte e ressurreição, nos obteve o prêmio da salvação eterna, concedei-nos, nós Vô-lo pedimos que, meditando estes mistérios do Sacratíssimo Rosário da Bem-Aventurada Virgem Maria, imitemos o que contêm e
                    consigamos o que prometem. Pelo mesmo Cristo, Senhor Nosso. Amém.
                </Text>

                <Text style={styles.paragraph}>
                    <Text style={styles.jaculatory}>
                        P. Coração Sacratíssimo de Jesus R. tende piedade de nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. Coração Imaculado de Maria, R. Rogai por nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. São José, R. Rogai por nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. São João Evangelista, R. Rogai por nós.
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. São Luís Maria de Montfort, R. Rogai por nós.
                    </Text>
                </Text>

                <Text style={styles.paragraph}>
                    Em nome do Pai + e do Filho e do Espírito Santo. Amém
                </Text>
            </View>
        </ScrollView>
    )
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
    },
    buttonField: {
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        width: 50,
        height: 50,
    }
})

export default Opening;

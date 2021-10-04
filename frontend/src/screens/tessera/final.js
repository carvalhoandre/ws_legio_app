import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { BottomSheet } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';

const Final = () => {

    const navigation = useNavigation();

    const [isVisible, setIsVisible] = useState(false);
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
            onPress: () => setIsVisible(false),
        },
    ];

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <Text style={styles.title}>Orações finais</Text>

                <Text style={styles.paragraph}>
                    Em nome do Pai + e do Filho e do Espírito Santo. Amém.
                </Text>

                <Text style={styles.paragraph}>
                    P. À Vossa proteção recorremos, Santa Mãe de Deus; não desprezeis as súplicas que em
                    nossas necessidades vos dirigimos, mas livrai-nos sempre de todos os perigos, ó Virgem
                    gloriosa e bendita.
                </Text>

                <Text style={styles.paragraph}>
                    <Text style={styles.jaculatory}>
                        P. (Invocação própria do Praesidium)
                    </Text>
                    <Text style={styles.jaculatory}>
                        Fora das reuniões do Praesidium reza-se sempre a invocação seguinte:
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. Maria Imaculada, Medianeira de todas as graças, R. Rogai por nós
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. S. Miguel e S. Gabriel, R. Rogai por nós
                    </Text>
                    <Text style={styles.jaculatory}>
                        P. Milícias todas dos céus, Legião dos Anjos de Maria, R. Rogai por nós.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. S. João Batista, R. Rogai por nós.
                    </Text>

                    <Text style={styles.jaculatory}>
                        P. S. Pedro e S. Paulo, R. Rogai por nó
                    </Text>
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

                <Text style={styles.paragraph}>
                    (Segue-se a bênção do Diretor Espiritual)
                </Text>

                <Text style={styles.paragraph}>
                    Em nome do Pai + e do Filho e do Espírito Santo. Amém.
                </Text>


                <View style={styles.areaButton}>
                    <BottomSheet
                        isVisible={isVisible}
                        containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
                    >
                        {list.map((l, i) => (
                            <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
                                <ListItem.Content>
                                    <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        ))}
                    </BottomSheet>;
                </View>

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
    }
})

export default Final;

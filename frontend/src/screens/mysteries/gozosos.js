import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

export default class Gozosos extends Component {

    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollView}>
                <View style={styles.container}>
                    
                    <Text style={styles.title}>Primeiro Mistério: Anunciação a Maria</Text>
                    <Text style={styles.paragraph}>
                        No sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galiléia, chamada Nazaré,  a uma virgem desposada com um homem que se chamava José, da casa de Davi e o nome da virgem era Maria (Lc 1, 26-27).
                    </Text>

                    <Text style={styles.title}>Segundo Mistério: Visitação de Nossa Senhora a sua prima Isabel</Text>
                    <Text style={styles.paragraph}>
                        Naqueles dias, Maria se levantou e foi às pressas às montanhas, a uma cidade de Judá. Entrou em casa de Zacarias e saudou Isabel. Ora, apenas Isabel ouviu a saudação de Maria, a criança estremeceu no seu seio; e Isabel ficou cheia do Espírito Santo. E exclamou em alta voz: "Bendita és tu entre as mulheres e bendito é o fruto do teu ventre" (Lc 1, 39-42).
                    </Text>

                    <Text style={styles.title}>Terceiro Mistério: Nascimento de Jesus</Text>
                    <Text style={styles.paragraph}>
                        Naqueles tempos apareceu um decreto de César Augusto, ordenando o recenseamento de toda a terra. Este recenseamento foi feito antes do governo de Quirino, na Síria.  Todos iam alistar-se, cada um na sua cidade.
                        Também José subiu da Galiléia, da cidade de Nazaré, à Judéia, à Cidade de Davi, chamada Belém, porque era da casa e família de Davi,  para se alistar com a sua esposa Maria, que estava grávida.  Estando eles ali, completaram-se os dias dela.
                        E deu à luz seu filho primogênito, e, envolvendo-o em faixas, reclinou-o num presépio; porque não havia lugar para eles na hospedaria (Lc 2,1-7).
                    </Text>

                    <Text style={styles.title}>Quarto Mistério: Apresentação do Menino Jesus no Templo</Text>
                    <Text style={styles.paragraph}>
                        Completados que foram os oito dias para ser circuncidado o menino, foi-lhe posto o nome de Jesus, como lhe tinha chamado o anjo, antes de ser concebido no seio materno. Concluídos os dias da sua purificação segundo a Lei de Moisés, levaram-no a Jerusalém para o apresentar ao Senhor, conforme o que está escrito na lei do Senhor: Todo primogênito do sexo masculino será consagrado ao Senhor; e para oferecerem o sacrifício prescrito pela lei do Senhor, um par de rolas ou dois pombinhos. (Lc 2, 21-24).
                    </Text>

                    <Text style={styles.title}>Quinto Mistério: Perda e encontro do Menino Jesus no Templo</Text>
                    <Text style={styles.paragraph}>
                        Seus pais iam todos os anos a Jerusalém para a festa da Páscoa. Tendo ele atingido doze anos, subiram a Jerusalém, segundo o costume da festa. Acabados os dias da festa, quando voltavam, ficou o menino Jesus em Jerusalém, sem que os seus pais o percebessem...
                        Três dias depois o acharam no templo, sentado no meio dos doutores, ouvindo-os e interrogando-os. Todos os que o ouviam estavam maravilhados da sabedoria de suas respostas (Lc 2, 41-47)
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
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
        fontSize: 24,
        marginBottom: 15,
    },
    paragraph: {
        lineHeight: 30,
        fontFamily: commonStyles.fontFamily.text,
        textAlign: 'justify',
        color: commonStyles.colors.textColor,
        marginBottom: 25,
        fontSize: commonStyles.fontSize.normal,
    }
})

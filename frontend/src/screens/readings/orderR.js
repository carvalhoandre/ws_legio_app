import React from "react";
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import commonStyles from '../../styles/commonStyles'

const OrderR = () => {

    return (
        <ScrollView
            contentContainerStyle={styles.scrollView}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.item}>1 - Orações Iniciais</Text>
                    <Text style={styles.item}>2 - Leitura Espiritual</Text>
                    <Text style={styles.observation}>(A sua duração não deve ultrapassar cinco minutos)</Text>
                    <Text style={styles.item}>3 - Leitura da Ata</Text>
                    <Text style={styles.item}>4 - Instrução Permanente</Text>
                    <Text style={styles.observation}>(1° reunião do mês ou se houver membro novo)</Text>
                    <Text style={styles.item}>5 - Chamada e Boas Vindas</Text>
                    <Text style={styles.item}>6 - Relatório da Tesouraria</Text>
                    <Text style={styles.item}>7 - Apresentação dos Relatórios dos Trabalhos</Text>
                    <Text style={styles.item}>8 - Catena Legionis</Text>
                    <Text style={styles.observation}>(A catena deve ser rezada mais ou menos no meio da reunião)</Text>
                    <Text style={styles.item}>9 - Alocução</Text>
                    <Text style={styles.observation}>(A alocução não deverá ultrapassar cinco ou seis minutos)</Text>
                    <Text style={styles.item}>10 - Coleta Secreta</Text>
                    <Text style={styles.observation}>(Deve ser feita sem interromper a reunião)</Text>
                    <Text style={styles.item}>11 - Continuação da Apresentação dos Relatórios</Text>
                    <Text style={styles.observation}>(Quando não terminarem até o momento de rezar a Catena)</Text>
                    <Text style={styles.item}>12 - Recrutamento de Membros Ativos e Auxiliares</Text>
                    <Text style={styles.item}>13 - Estudo do manual (10 minutos)</Text>
                    <Text style={styles.item}>14 - Notícias da Cúria / Comitium / Regia / Senatus</Text>
                    <Text style={styles.item}>
                        15 - Assuntos diversos, recomendações, esclarecimentos, avisos paroquiais, etc.
                    </Text>
                    <Text style={styles.item}>16 - Orações Finais e Bênção do Diretor Espiritual</Text>
                </View>

                <View style={styles.comments}>
                    <Text style={styles.title}>Observações</Text>
                    <Text style={styles.observation}>- Só os quatros primeiros itens são de sequência invariável.</Text>
                    <Text style={styles.observation}>
                        - O(a) Tesoureiro(a) deve informar ao Praesidium o valor da coleta secreta logo após o término da reunião.
                    </Text>
                    <Text style={styles.observation}>
                        - Recomenda-se o Estudo Bíblico nas reuniões, sem omitir os outros itens.
                    </Text>
                    <Text style={styles.observation}>
                        - A Reunião não deve ultrapassar 1h30.
                    </Text>
                </View>
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
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    },
    title: {
        fontSize: commonStyles.fontSize.medium,
        fontFamily: commonStyles.fontFamily.semiBold,
        color: commonStyles.colors.titleColor,
        textAlign: "center",
        marginTop: 20
    },
    item: {
        fontFamily: commonStyles.fontFamily.body,
        marginTop: 15,
        marginLeft: 10,
        fontSize: commonStyles.fontSize.normal
    },
    observation: {
        fontFamily: commonStyles.fontFamily.italic,
        color: commonStyles.colors.textColorLight,
        marginBottom: 5,
        marginLeft: 15,
        lineHeight: 20
    }
})

export default OrderR;

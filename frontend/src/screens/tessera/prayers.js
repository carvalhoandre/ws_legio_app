import React, { useState } from "react";
import { Text, View, StyleSheet } from 'react-native'
import commonStyles from '../../styles/commonStyles'
import { FAB, Portal, Provider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Prayers = () => {

    const navigation = useNavigation();

    const [state, setState] = useState({ open: false });

    const onStateChange = ({ open }) => setState({ open });

    const { open } = state;

    return (
        <>

            <View style={styles.container}>
                <Text style={styles.title}>Orações da Legião</Text>

                <Text style={styles.paragraph}>
                    Damos a seguir as orações da Legião de Maria, conforme devem ser rezadas nas
                    reuniões. Rezadas em particular, dispensam tal ordem.
                </Text>

                <Text style={styles.paragraph}>
                    Os membros Auxiliares deverão rezá-las diariamente por inteiro.
                </Text>

                <Text style={styles.paragraph}>
                    O Sinal da Cruz, que vai no princípio e no fim de cada parte, marca a divisão das
                    orações. No caso de estas se rezarem em seguida, o Sinal da Cruz será feito apenas no
                    início e no fim das mesmas.
                </Text>
            </View>
            <Provider>
                <Portal>
                    <FAB.Group
                        open={open}
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                            {
                                
                                label: 'Orações Iniciais',
                                onPress: (() => {
                                    navigation.navigate('Opening');
                                }),
                            },
                            {
                                
                                label: 'Catena',
                                onPress: (() => {
                                    navigation.navigate('Catena');
                                }),
                            },
                            {
                               
                                label: 'Orações Finais',
                                onPress: (() => {
                                    navigation.navigate('Final');
                                }),
                            },
                            {
                                
                                label: 'Frank Duff',
                                onPress: (() => {
                                    navigation.navigate('Frank');
                                }),
                            },
                            {
                                
                                label: 'Afonso Lambe',
                                onPress: (() => {
                                    navigation.navigate('Afonso');
                                }),
                            },
                            {
                                
                                label: 'Edell Quin',
                                onPress: (() => {
                                    navigation.navigate('Edel');
                                }),
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Provider>

        </>
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

export default Prayers;

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

                <Text style={styles.subtitle}>Capítulo 22 página 129</Text>

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
                        icon={open ? 'close' : 'check'}
                        fabStyle={styles.button}
                        color={"#FFF"}
                        style={styles.fontOption}
                        actions={[
                            {
                                icon: 'chevron-right',                                
                                label: 'Orações Iniciais',
                                onPress: (() => {
                                    navigation.navigate('Opening');
                                }),
                            },
                            {
                                icon: 'chevron-right',        
                                label: 'Catena',
                                onPress: (() => {
                                    navigation.navigate('Catena');
                                })
                            },
                            {
                                icon: 'chevron-right',        
                                label: 'Orações Finais',
                                onPress: (() => {
                                    navigation.navigate('Final');
                                }),
                            },
                            {
                                icon: 'chevron-right',        
                                label: 'Frank Duff',
                                onPress: (() => {
                                    navigation.navigate('Frank');
                                }),
                            },
                            {
                                icon: 'chevron-right',        
                                label: 'Afonso Lambe',
                                onPress: (() => {
                                    navigation.navigate('Afonso');
                                }),
                            },
                            {
                                icon: 'chevron-right',        
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
    container: {
        flex: 1,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },

    title: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.title,
    },

    subtitle: {
        fontFamily: commonStyles.fontFamily.light,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.small,
        marginBottom: 20,
    },
    paragraph: {
        lineHeight: 28,
        textAlign: 'justify',
        fontFamily: commonStyles.fontFamily.text,
        marginBottom: 15,
        fontSize: commonStyles.fontSize.normal,
    },
    button: {
        backgroundColor: commonStyles.colors.firstColorLight,
    },

    fontOption: {
        color: commonStyles.colors.textColor,
        fontFamily: commonStyles.fontFamily.title
    }
})

export default Prayers;

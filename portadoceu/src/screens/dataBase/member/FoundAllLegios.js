import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator, SafeAreaView, ScrollView } from 'react-native';
import { getLegios, deleteLegio, updateLegio } from '../../../service/api';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import { Button } from 'react-native-elements'
import commonStyles from '../../../styles/commonStyles'
import LegioList from './LegioList';

export default function FoundAllLegios() {
    const [legio, setLegio] = useState([]);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState({
        title: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const hideDialog = () => setVisible(false);

    useEffect(() => {
        setLoading(true)
        getLegios()
            .then((response) => {
                setLegio(response.data)
                setLoading(false)
            }, error => {
                setMessage({ title: 'Error 😵😵😵', message: error })
                setLoading(false)
                setVisible(true)
            })
    }, [])

    const deleteForId = (id) => {
        setLoading(true)
        deleteLegio(id)
            .then(() => {
                setMessage({ title: 'Sucesso', message: 'Legionario deleteado com sucesso' })
                setLoading(false)
                setVisible(true)
            }, error => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                console.log(error)
                setLoading(false)
                setVisible(true)
            })
    }

    const newLegio = (legio) => {
        setLoading(true)
        let newObj = {
            id: legio.id,
            name: legio.name,
            type: legio.type,
            birthday: legio.birthday,
            initial: legio.initial
        }

        updateLegio(newObj)
            .then(() => {
                setMessage({ title: 'Sucesso', message: 'Cadastro alterado com sucesso' })
                setLoading(false)
                setVisible(true)
            }, error => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setLoading(false)
                setVisible(true)
            })
    }

    return (
        loading === true ?
            <View style={styles.spinner}>
                <ActivityIndicator size="large" color={commonStyles.colors.primaryColor} />
            </View>
            :
            <>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title style={styles.titleOption}>{message.title}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph style={styles.textOption}>{message.body}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                title="Ok"
                                type="outline"
                                onPress={hideDialog}
                                buttonStyle={styles.dialogButton}
                            />
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                {legio.length >= 1 ?
                    <SafeAreaView
                        behavior={Platform.OS === "ios" ? "padding" : "height"}
                        style={styles.main}
                    >
                        <ScrollView
                            contentContainerStyle={styles.scrollView}
                        >
                            <Text style={styles.subtitle}>Salve Maria!</Text>
                            <Text style={styles.title}>Legionários</Text>
                            <LegioList
                                legio={legio}
                                deleteForId={deleteForId}
                                newLegio={newLegio}
                            />
                        </ScrollView>
                    </SafeAreaView>
                    :
                    <View style={styles.container}>
                        <Text style={styles.title}>Não há Legionarios Cadastrados</Text>
                        <Image source={require('../../../../assets/icons/notFound.png')} style={styles.fest} />
                    </View>
                }
            </>
    );

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : 50,
        paddingLeft: 15,
        paddingRight: 15
    },

    scrollView: {
        marginHorizontal: 0,
    },

    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start'
    },

    container: {
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: commonStyles.colors.containerColor,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E5E5E5',
        shadowColor: '#a7b0c0',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 1,
        marginBottom: 24,
        alignItems: 'center'
    },

    spinner: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: "center",
        position: 'absolute',
        zIndex: 1,
        backgroundColor: commonStyles.colors.background,
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
    },

    title: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.subtitle,
        color: commonStyles.colors.titleColor,
        marginBottom: 30
    },

    subtitle: {
        fontFamily: commonStyles.fontFamily.josefin,
        color: commonStyles.colors.subtitleColor,
        fontSize: commonStyles.fontSize.normal
    },

    textOption: {
        color: commonStyles.colors.subtitleColor,
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.normal
    },

    titleOption: {
        color: commonStyles.colors.titleColor,
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.medium
    },

    dialogButton: {
        backgroundColor: commonStyles.colors.containerColor,
        borderColor: commonStyles.colors.bodyColor,
        borderWidth: 0,
    },

    fest: {
        height: 150,
        width: 160,
    },
})



import React, { useEffect, useState } from 'react';
import { getLegios, createAllAttendance } from '../../service/api';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { checkIsSelected } from '../../utils/helpers'
import { Button } from 'react-native-elements'
import commonStyles from '../../styles/commonStyles'
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import LegioList from './LegioList';
import OrderSummary from './OrderSummary';
import moment from 'moment'
import 'moment/locale/pt-br'

export default function Legios() {
    const [legios, setLegios] = useState([]);
    const [selectedLegios, setSelectedLegios] = useState([]);
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
                setLegios(response.data)
                setLoading(false)
            })
            .catch(error => {
                setMessage({ title: 'Error 😵😵😵', message: error })
                setLoading(false)
                setVisible(true)
            })
    }, [])

    const handleSelectLegio = (legio) => {
        const isAlreadySelected = checkIsSelected(selectedLegios, legio)

        if (isAlreadySelected) {
            const selected = selectedLegios.filter(item => item.id !== legio.id);
            setSelectedLegios(selected)

        } else {
            setSelectedLegios(previous => [...previous, legio]);
        }
    }

    const handleSubmit = () => {
        setLoading(true)
        const payload = []
        const date = moment().locale('pt-br').format('DD-MM-YYYY')
        selectedLegios.forEach(element => {
            payload.push({
                date: date,
                legio: {
                    id: element.id
                },
                attendance: 1
            })
        })

        createAllAttendance(payload)
            .then(() => {
                setMessage({ title: '😁😁😁', message: 'Chamada salva!' })
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
            <View style={styles.container}>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title style={styles.titleOption}>{message.title}</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph style={styles.textOption}>{message.message}</Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                title="Ok"
                                type="outline"
                                onPress={hideDialog}
                                style={styles.buttons}
                            />
                        </Dialog.Actions>
                    </Dialog>
                </Portal>

                <LegioList
                    legios={legios}
                    onSelectLegio={handleSelectLegio}
                    selectedLegios={selectedLegios}
                />

                <OrderSummary
                    amount={selectedLegios.length}
                    onSubmit={handleSubmit}
                />
            </View>
    );

}

const styles = StyleSheet.create({
    option: {
        backgroundColor: commonStyles.colors.bodyColor,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    textOption: {
        color: commonStyles.colors.subtitleColor,
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.normal
    },
    
    spinner: {
        flex: 1,
        justifyContent: "center"
    },

    titleOption: {
        color: commonStyles.colors.titleColor,
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.medium
    },

    buttons: {
        backgroundColor: commonStyles.colors.containerColor,
        justifyContent: 'flex-start',
        borderColor: commonStyles.colors.containerColor,
        borderWidth: 0,
    },

    container: {
        flex: 1,
        height: '100%'
    }
})

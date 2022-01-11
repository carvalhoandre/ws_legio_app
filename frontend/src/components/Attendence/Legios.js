import React, { useEffect, useState } from 'react';
import { getLegios, createAllAttendance } from '../../service/api';
import { StyleSheet, View } from 'react-native';
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

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        getLegios()
            .then((response) => {
                setLegios(response.data)
            })
            .catch(error => {
                setMessage({ title: 'Error 😵😵😵', message: error })
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
                setVisible(true)
            }, error => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setVisible(true)
            })
            .catch((error) => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setVisible(true)
            })
    }

    return (
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

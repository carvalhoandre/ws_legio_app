import React, { useEffect, useState } from 'react';
import { getLegios, createAllAttendance } from '../service/api';
import { StyleSheet } from 'react-native';
import { checkIsSelected } from '../utils/helpers'
import commonStyles from '../styles/commonStyles'
import { View } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import LegioList from './LegioList';
import { Button } from 'react-native-elements'
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

        console.log(isAlreadySelected)

        if (isAlreadySelected) {
            const selected = selectedLegios.filter(item => item.id !== legio.id);
            console.log(selected)
            setSelectedLegios(selected)

        } else {
            setSelectedLegios(previous => [...previous, legio]);
        }
    }

    const question = () => {
        const data = moment().locale('pt-br').format('DD-MM-YYYY')

        legios.forEach((element) => {
            const isAlreadySelected = checkIsSelected(selectedLegios, element)
            const attendance = isAlreadySelected ? 1 : 0
            const payload = {
                date: data,
                legio: {
                    id: element.id
                },
                attendance: attendance
            }
            createAttendance(payload)
                .then(() => {
                    setMessage({ title: '🥳🤗🤗', message: 'Chamada registrada' })
                    setVisible(true)
                })
                .catch(error => {
                    setMessage({ title: 'Error 😵😵😵', message: error })
                    setVisible(true)
                })
        });
    }

    const handleSubmit = () => {
        const list = []
        const data = moment().locale('pt-br').format('DD-MM-YYYY')

        legios.forEach((element) => {
            const isAlreadySelected = checkIsSelected(selectedLegios, element)
            const attendance = isAlreadySelected ? 1 : 0
            list.push({
                date: data,
                legio: {
                    id: element.id
                },
                attendance: attendance
            })
        })
        createAllAttendance(list)
            .then(() => {
                setMessage({ title: '🥳🤗🤗', message: 'Chamada registrada' })
                setVisible(true)
            })
            .catch(error => {
                setMessage({ title: 'Error 😵😵😵', message: error })
                setVisible(true)
            })
    }

    return (
        <View style={styles.container}>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>{message.title}</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{message.message}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button
                            title="Ok"
                            type="outline"
                            onPress={hideDialog}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            <LegioList
                legios={legios}
                onSelectLegio={handleSelectLegio}
                selectedLegios={selectedLegios}
            />

            <Button
                onPress={handleSubmit()}
                contentStyle={styles.buttons}
            >
                Send
            </Button>
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
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '400',

    },

    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
    },

    container: {
        flex: 1,
        height: '100%'
    }
})

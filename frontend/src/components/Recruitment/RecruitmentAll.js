import React, { useEffect, useState } from 'react';
import { getRecruitmentForDate, deleteRecruitment } from '../../service/api';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import RecruitmentList from './RecruitmentList';
import { Button } from 'react-native-elements'
import moment from 'moment'
import 'moment/locale/pt-br'

export default function RecruitmentAll() {
    const [recruitment, setRecruitment] = useState([]);
    const [visible, setVisible] = useState(false);
    const [result, setResult] = useState(false);
    const [message, setMessage] = useState({
        title: '',
        message: '',
    })

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        const date = moment().locale('pt-br').format('DD-MM-YYYY')
        console.log(date)
        getRecruitmentForDate(date)
            .then((response) => {
                const date = response.data
                if (date > 1) {
                    setRecruitment(date)
                    setResult(true)
                }
            })
            .catch(error => {
                setMessage({ title: 'Error 😵😵😵', message: error })
                setVisible(true)
            })
    }, [])

    const deleteForId = (id) => {
        deleteRecruitment(id)
            .then(() => {
                setMessage({ title: '🥳', message: 'Deletado com sucesso' })
                setVisible(true)
            })
            .catch(error => {
                setMessage({ title: 'Error 😵😵😵', message: error })
                setVisible(true)
            })
    }

    const showRecruitment = (id, quantity, person, attendancing) => {
        setMessage({
            title: `Recrutamento de n° ${id}`,
            message: `Foram chamados ${quantity} ${person} e compareceram ${attendancing}`
        })
        setVisible(true)
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
                            style={styles.buttons}
                        />
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            {result ?
                <RecruitmentList
                    recruitment={recruitment}
                    deleteForId={deleteForId}
                    showRecruitment={showRecruitment}
                />
                :
                null
            }

        </View>
    );

}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
    },

    container: {
        flex: 1,
        height: '100%'
    }
})

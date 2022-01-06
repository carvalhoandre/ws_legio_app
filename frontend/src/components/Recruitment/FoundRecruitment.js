import React, { useEffect, useState } from 'react';
import { getRecruitmentForDate, deleteRecruitment } from '../../service/api';
import { StyleSheet, Text, View } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import RecruitmentList from './RecruitmentList';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { backDate } from '../../config/store/actions/date'

function FoundRecruitment(props) {
    const [recruitment, setRecruitment] = useState([]);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState({
        title: '',
        message: '',
    })
    const [data, setData] = useState(props.moment)

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        getRecruitmentForDate(data)
            .then((response) => {
                const obj = response.data
                console.log(obj)
                if (obj.length >= 1) {
                    setRecruitment(obj)
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

const mapStateToProps = ({ date }) => {
    return {
        number: date.number,
        moment: date.moment
    }
}

const mapDispatchToProps = dispatchEvent => {
    return {
        backDate: () => dispatchEvent(backDate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoundRecruitment);

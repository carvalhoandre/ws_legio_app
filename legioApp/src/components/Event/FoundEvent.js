import React, { useEffect, useState } from 'react';
import { getEventForDate, deleteEvent, updateEvent } from '../../service/api';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import EventList from './EventList';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { backDate } from '../../config/store/actions/date'
import commonStyles from '../../styles/commonStyles'

function FoundEvent(props) {
    const [event, setEvent] = useState([]);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState({
        title: '',
        message: '',
    })
    const [data, setData] = useState(props.moment)
    const [loading, setLoading] = useState(false)

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        setLoading(true)
        getEventForDate(data)
            .then((response) => {
                setEvent(response.data)
                setLoading(false)
            }, error => {
                setMessage({ title: 'Error 😵😵😵', message: 'Erro ao buscar recrutamentos' })
                setLoading(false)
                setVisible(true)
            })
    }, [message])

    const deleteForId = (id) => {
        setLoading(true)
        deleteEvent(id)
            .then(() => {
                setMessage({ title: 'Sucesso', message: 'Evento deletado com sucesso' })
                setLoading(false)
                setVisible(true)
            }, error => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setLoading(false)
                setVisible(true)
            })
    }

    const newEvent = (event) => {
        setLoading(true)
        let newAt = parseInt(event.ativos, 10)
        let newG = parseInt(event.guests, 10)
        let newAu = parseInt(event.auxiliares, 10)

        let newObj = {
            id: event.id,
            date: event.date,
            name: event.name,
            guests: newG,
            ativos: newAt,
            auxiliares: newAu,
            dateEvent: event.dateEvent
        }

        updateEvent(newObj)
            .then(() => {
                setMessage({ title: 'Sucesso', message: 'Evento alterado com sucesso' })
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
                            <Paragraph style={styles.textOption}>{message.message}</Paragraph>
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
                {event.length >= 1 ?
                    <EventList
                        event={event}
                        deleteForId={deleteForId}
                        newEvent={newEvent}
                    />
                    :
                    <View style={styles.container}>
                        <Text style={styles.title}>Não há eventos na data informada</Text>
                        <Image source={require('../../../assets/icons/notFound.png')} style={styles.fest} />
                    </View>
                }
            </>
    );

}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start'
    },

    spinner: {
        flex: 1,
        justifyContent: "center"
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
        marginRight: 15,
        marginLeft: 15,
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
        fontFamily: commonStyles.fontFamily.subtitle,
        color: commonStyles.colors.titleColor,
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

export default connect(mapStateToProps, mapDispatchToProps)(FoundEvent);

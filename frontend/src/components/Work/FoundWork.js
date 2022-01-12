import React, { useEffect, useState } from 'react';
import { getWorkForDate, deleteWork, updateWork } from '../../service/api';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import WorkList from './WorkList';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { backDate } from '../../config/store/actions/date'
import commonStyles from '../../styles/commonStyles'

function FoundWork(props) {
    const [work, setWork] = useState([]);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState({
        title: '',
        message: '',
    })
    const [data, setData] = useState(props.moment)
    const [teste, setTeste] = useState(false)

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        getWorkForDate(data)
            .then((response) => {
                setWork(response.data)
            })
            .catch(() => {
                setMessage({ title: 'Error 😵😵😵', message: 'Erro ao buscar trabalhos' })
                setVisible(true)
            })
    }, [teste])

    const deleteForId = (id) => {
        deleteWork(id)
            .then(() => {
                let or = !teste
                setTeste(or)
                setMessage({ title: 'Sucesso', message: 'Trabalho deleteado com sucesso' })
                setVisible(true)
            })
            .catch((error) => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setVisible(true)
            })
    }

    const newWork = (work) => {
        let newA = parseInt(work.adult, 10)
        let newC = parseInt(work.children, 10)
        let newY = parseInt(work.yong, 10)
        let newE = parseInt(work.elderly, 10)
        let tot = newA + newC + newY + newE
        let newH = parseFloat(work.hours, 10)
       
        let newObj = {
            id: work.id,
            date: work.date,
            work: work.work,
            yong: newY,
            adult: newA,
            children: newC,
            elderly: newE,
            total: tot,
            hours: newH,
            observation: work.observation,
            legio: work.legio
        }

        updateWork(newObj)
            .then(() => {
                let or = !teste
                setTeste(or)
                setMessage({ title: 'Sucesso', message: 'Tesouraria alterada com sucesso' })
                setVisible(true)
            })
            .catch((error) => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setVisible(true)
            })
    }

    return (
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
            {work.length >= 1 ?
                <WorkList
                    work={work}
                    deleteForId={deleteForId}
                    newWork={newWork}
                />
                :
                <View style={styles.container}>
                    <Text style={styles.title}>Não há trabalhos na data informada</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(FoundWork);

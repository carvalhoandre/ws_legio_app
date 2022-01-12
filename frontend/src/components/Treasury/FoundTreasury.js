import React, { useEffect, useState } from 'react';
import { getTreasuryForDate, deleteTreasury, updateTreasury } from '../../service/api';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import TreasuryList from './TreasuryList';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { backDate } from '../../config/store/actions/date'
import commonStyles from '../../styles/commonStyles'

function FoundTreasury(props) {
    const [treasury, setTreasury] = useState([]);
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState({
        title: '',
        message: '',
    })
    const [data, setData] = useState(props.moment)
    const [teste, setTeste] = useState(false)
    const [loading, setLoading] = useState(false)

    const hideDialog = () => setVisible(false);

    useEffect(() => {
        setLoading(true)
        getTreasuryForDate(data)
            .then((response) => {
                setTreasury(response.data)
                setLoading(false)
            })
            .catch(() => {
                setMessage({ title: 'Error 😵😵😵', message: 'Erro ao buscar tesouraria' })
                setLoading(false)
                setVisible(true)
            })
    }, [teste])

    const deleteForId = (id) => {
        setLoading(true)
        deleteTreasury(id)
            .then(() => {
                let or = !teste
                setTeste(or)
                setMessage({ title: 'Sucesso', message: 'Tesouraria deleteada com sucesso' })
                setLoading(false)
                setVisible(true)
            })
            .catch((error) => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setLoading(false)
                setVisible(true)
            })
    }

    const newTreasury = (treasury) => {
        setLoading(true)
        let newSA = parseFloat(treasury.saldoAnterior, 10)
        let newC = parseFloat(treasury.coletaDoDia, 10)
        let newD = parseFloat(treasury.despesas, 10)
        let newCDD = parseFloat(treasury.coletaDoDia, 10)
        let newCTB = parseFloat(treasury.contribuicao, 10)
        let tot = newSA + newC - newD - newCTB
        let sub = newSA + newC
        let newDate = formatDate(treasury.date)

        let newObj = {
            id: treasury.id,
            date: treasury.date,
            saldoAnterior: newSA,
            coletaDoDia: newCDD,
            diaDaColeta: newDate,
            contribuicao: newCTB,
            despesas: newC,
            subTotal: sub,
            totalEmCaixa: tot,
        }

        updateTreasury(newObj)
            .then(() => {
                let or = !teste
                setTeste(or)
                setMessage({ title: 'Sucesso', message: 'Tesouraria alterada com sucesso' })
                setLoading(false)
                setVisible(true)
            })
            .catch((error) => {
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
            {treasury.length >= 1 ?
                <TreasuryList
                    treasury={treasury}
                    deleteForId={deleteForId}
                    newTreasury={newTreasury}
                />
                :
                <View style={styles.container}>
                    <Text style={styles.title}>Não há tesouraria na data informada</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(FoundTreasury);

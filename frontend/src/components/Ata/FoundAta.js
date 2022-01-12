import React, { useEffect, useState } from 'react';
import { getAtaForDate, deleteAta, updateAta } from '../../service/api';
import { StyleSheet, View, Text, Image, ActivityIndicator } from 'react-native';
import { Portal, Dialog, Paragraph } from 'react-native-paper';
import AtaList from './AtaList';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import { backDate } from '../../config/store/actions/date'
import commonStyles from '../../styles/commonStyles'

function FoundAta(props) {
    const [ata, setAta] = useState([]);
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
        getAtaForDate(data)
            .then((response) => {
                setAta(response.data)
                setLoading(false)
            })
            .catch(() => {
                setMessage({ title: 'Error 😵😵😵', message: 'Erro ao buscar Ata' })
                setVisible(true)
                setLoading(false)
            })
    }, [teste])

    const deleteForId = (id) => {
        setLoading(true)
        deleteAta(id)
            .then(() => {
                let or = !teste
                setTeste(or)
                setMessage({ title: 'Sucesso', message: 'Ata deleteada com sucesso' })
                setVisible(true)
                setLoading(false)
            })
            .catch((error) => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setVisible(true)
                setLoading(false)
            })
    }

    const newAta = (ata) => {
        setLoading(true)

        let newCap =  parseInt(ata.capituloEspiritual, 10)
        let newPE =  parseInt(ata.paginaEspiritual, 10)
        let newPA =  parseInt(ata.paginaEstudo, 10)
        let newPR =  parseInt(ata.paragrafoEstudo, 10)

        let newObj = {
            id: ata.id,
            date: ata.date,
            inicio: ata.inicio,
            ata: ata.ata,
            participation: ata.participation,
            capituloEspiritual: newCap,
            paginaEspiritual: newPE,
            titleEspiritual: ata.titleEspiritual,
            allocutionAutor: ata.allocutionAutor,
            allocutionAssunto: ata.allocutionAssunto,
            coleta: ata.coleta,
            paginaEstudo: newPA,
            paragrafoEstudo: newPR,
            assuntos: ata.assuntos,
            horaFinal: ata.horaFinal
        }

        updateAta(newObj)
            .then(() => {
                let or = !teste
                setTeste(or)
                setMessage({ title: 'Sucesso', message: 'Tesouraria alterada com sucesso' })
                setVisible(true)
                setLoading(false)
            })
            .catch((error) => {
                setMessage({ title: 'Error 😵😵😵', message: error.message })
                setVisible(true)
                setLoading(false)
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
                {ata.length >= 1 ?
                    <AtaList
                        ata={ata}
                        deleteForId={deleteForId}
                        newAta={newAta}
                    />
                    :
                    <View style={styles.container}>
                        <Text style={styles.title}>Não há Ata na data informada</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(FoundAta);

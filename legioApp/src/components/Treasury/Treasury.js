import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Platform, ActivityIndicator, Text } from 'react-native';
import 'moment/locale/pt-br'
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createTreasury } from '../../service/api'
import DateTimePicker from '@react-native-community/datetimepicker';
import { formatDate } from '../../utils/format'
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
    saldoAnterior: null,
    coletaDoDia: null,
    despesas: null,
    elderly: null,
    hours: null,
    subTotal: '',
    totalEmCaixa: '',
    contribuicao: '',
    loading: false,
    visible: false,
    title: '',
    body: '',
    bodySecond: '',
    date: new Date(),
    mode: 'date',
    show: false
}

export default class Treasury extends Component {
    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    });

    send = async () => {
        this.setState({ loading: true })
        let newSA = parseFloat(this.state.saldoAnterior, 10)
        let newC = parseFloat(this.state.coletaDoDia, 10)
        let newD = parseFloat(this.state.despesas, 10)
        let newCDD = parseFloat(this.state.coletaDoDia, 10)
        let newCTB = parseFloat(this.state.contribuicao, 10)
        let tot = newSA + newC - newD - newCTB
        let sub = newSA + newC
        let newDate = formatDate(this.state.date)

        let newObj = {
            saldoAnterior: newSA,
            coletaDoDia: newCDD,
            diaDaColeta: newDate,
            contribuicao: newCTB,
            despesas: newC,
            subTotal: sub,
            totalEmCaixa: tot,
        }
        createTreasury(newObj)
            .then(() => {
                this.setState({ loading: false })
                this.setState({
                    body: `Sub Total: ${newObj.subTotal}`,
                    visible: true,
                    title: "Adicionado com sucesso! 👏👏👏",
                    bodySecond: `Total em Caixa: ${newObj.totalEmCaixa}`
                })
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ${error}`, visible: true, title: "😱😰😰" })
            })
    }

    render() {
        const validations = []
        const validSaldo = (this.state.saldoAnterior !== null)
        const validColeta = (this.state.coletaDoDia !== null)
        const validDespesas = (this.state.despesas !== null)

        validations.push(validColeta, validDespesas, validSaldo)

        const validForm = validations.reduce((t, a) => t && a)

        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            this.setState({ show: Platform.OS === 'ios' })
            this.setState({ date: currentDate })
        };

        const showMode = (currentMode) => {
            this.setState({ show: true })
            this.setState({ mode: currentMode })
        };

        const showDatepicker = () => {
            showMode('date');
        };

        return (
            this.state.loading ?
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color={commonStyles.colors.primaryColor} />
                </View>
                :
                <>
                    <Portal>
                        <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
                            <Dialog.Title style={styles.titleOption}>{this.state.title}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph style={styles.textOption}>{this.state.body}</Paragraph>
                                <Paragraph style={styles.textOption}>{this.state.bodySecond}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    title="Ok"
                                    type="outline"
                                    onPress={this.hideDialog}
                                    buttonStyle={styles.dialogButton}
                                />
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Saldo Anterior"
                        value={this.state.saldoAnterior}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={saldoAnterior => this.setState({ saldoAnterior })}
                    />

                    <View>
                        <Text style={styles.labelText}>Data da coleta Anterior</Text>
                        <Button
                            onPress={showDatepicker}
                            title={`${formatDate(this.state.date)}`}
                            buttonStyle={styles.button}
                            titleStyle={styles.buttonText}
                            icon={
                                <Icon name={"calendar-sharp"} size={20} color={commonStyles.colors.titleColor} />
                            }
                        />
                    </View>

                    {this.state.show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.date}
                            mode={this.state.mode}
                            display="default"
                            onChange={onChange}
                            dateFormat='shortdate'
                        />
                    )}

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Valor da coleta anterior"
                        value={this.state.coletaDoDia}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={coletaDoDia => this.setState({ coletaDoDia })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Contribuição ao Conselho Superior"
                        value={this.state.contribuicao}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={contribuicao => this.setState({ contribuicao })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Despesas"
                        value={this.state.despesas}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={despesas => this.setState({ despesas })}
                    />

                    <Button
                        onPress={this.send}
                        title={"Enviar"}
                        disabled={!validForm}
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
                        disabledStyle={styles.buttonDisabled}
                        icon={
                            <Icon name={"send-sharp"} size={20} color={"#FFF"} />
                        }
                    />
                </>
        )
    }
}


const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: "center"
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

    scrollView: {
        marginHorizontal: 0,
    },

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.text,
        backgroundColor: 'transparent'
    },

    buttonText: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.titleColor,
        marginLeft: 10
    },

    button: {
        backgroundColor: commonStyles.colors.bodyColor,
        borderColor: commonStyles.colors.bodyColor,
        marginTop: 5,
        borderWidth: 2,
        marginBottom: 5
    },

    buttonDisabled: {
        backgroundColor: commonStyles.colors.disabeldColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
    },

    buttonSend: {
        backgroundColor: commonStyles.colors.firstColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
    },

    buttonTextSend: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.containerColor,
        marginLeft: 10
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
    },

    dialogButton: {
        backgroundColor: commonStyles.colors.containerColor,
        borderColor: commonStyles.colors.bodyColor,
        borderWidth: 0,
    },

    labelText: {
        fontFamily: commonStyles.fontFamily.bold,
        fontSize: commonStyles.fontSize.small,
        color: commonStyles.colors.titleColor
    }
})

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
                    body: `Adicionado com sucesso! Sub Total: ${newObj.subTotal}
                Total em Caixa: ${newObj.totalEmCaixa}`, visible: true, title: "👏👏👏"
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
                                <Icon name={"calendar-sharp"} size={20} color={"#FFF"} />
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

                    <View style={styles.containerButton}>
                        <Button
                            title="Salvar"
                            type="outline"
                            buttonStyle={styles.buttonSend}
                            titleStyle={styles.textButton}
                            disabledTitleStyle={styles.textButton}
                            onPress={this.send}
                            disabled={!validForm}
                            disabledStyle={styles.buttonDisabled}
                        />
                    </View>
                </>
        )
    }
}


const styles = StyleSheet.create({
    spinner: {
        flex: 1,
        justifyContent: "center"
    },

    container: {
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: commonStyles.colors.bodyColor,
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

    title: {
        color: commonStyles.colors.titleColor,
        fontWeight: '400',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: commonStyles.fontSize.subtitle,
        marginBottom: 30,
    },

    text: {
        color: "#757575",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: 11,
        marginTop: -20,
        marginBottom: 20
    },

    subtitle: {
        color: commonStyles.colors.textColorLight,
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: 16.5,
    },

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.text,
        backgroundColor: 'transparent'
    },

    button: {
        backgroundColor: commonStyles.colors.firstColor,
        borderColor: commonStyles.colors.bodyColor,
        marginTop: 5,
        borderWidth: 0
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },

    buttonSend: {
        marginBottom: 30,
        backgroundColor: commonStyles.colors.primaryColor,
        padding: 5,
        borderRadius: 8,
        margin: 'auto',
        borderWidth: 2,
        borderColor: commonStyles.colors.firstColorLight,
        marginTop: 24,
        width: 132,
        height: 40,
    },

    buttonDisabled: {
        borderWidth: 2,
        borderColor: commonStyles.colors.disabeldColor,
        backgroundColor: commonStyles.colors.disabeldColor,
        borderRadius: 8,
        marginBottom: 30,
        marginTop: 24,
        width: 132,
        height: 40
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

    buttonText: {
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.containerColor
    },

    labelText: {
        fontFamily: commonStyles.fontFamily.bold,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.titleColor
    }
})

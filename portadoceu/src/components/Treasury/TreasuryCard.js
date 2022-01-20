import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default class TreasuryCard extends Component {
    constructor(props) {
        super(props)
        this.treasury = props.treasury
        this.deleteForId = props.deleteForId
        this.newTreasury = props.newTreasury
        this.state = {
            id: this.treasury.id,
            date: this.treasury.date,
            saldoAnterior: this.treasury.saldoAnterior,
            coletaDoDia: this.treasury.coletaDoDia,
            contribuicao: this.treasury.contribuicao,
            diaDaColeta: this.treasury.diaDaColeta,
            despesas: this.treasury.despesas,
            subTotal: this.treasury.subTotal,
            totalEmCaixa: this.treasury.totalEmCaixa,
            edit: false,
            mode: 'date',
            show: false
        }
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
            this.state.edit === true ?
                <View style={styles.container}>
                    <View style={styles.fieldButton}>
                        <Button
                            title=""
                            type="outline"
                            buttonStyle={styles.buttonCancel}
                            titleStyle={styles.textButton}
                            onPress={(() => {
                                let newEdit = !this.state.edit
                                this.setState({ edit: newEdit })
                            })}
                            icon={
                                <Icon name={"close"} size={30} color={commonStyles.colors.primaryHoverColor} />
                            }
                        />
                    </View>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Saldo Anterior"
                        value={this.state.saldoAnterior.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={saldoAnterior => this.setState({ saldoAnterior })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Dia da coleta"
                        value={this.state.diaDaColeta}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={diaDaColeta => this.setState({ diaDaColeta })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Valor da coleta anterior"
                        value={this.state.coletaDoDia.toString()}
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
                        value={this.state.contribuicao.toString()}
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
                        value={this.state.despesas.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={despesas => this.setState({ despesas })}
                    />

                    <Button
                        title="Salvar"
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
                        disabled={!validForm}
                        disabledTitleStyle={styles.textButton}
                        disabledStyle={styles.buttonDisabled}
                        onPress={(() => {
                            this.newTreasury(this.state)
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
                        })}
                        icon={
                            <Icon name={"send-sharp"} size={20} color={"#FFF"} />
                        }
                    />
                    <Button
                        title=""
                        type="outline"
                        buttonStyle={styles.buttonDelete}
                        titleStyle={styles.textButton}
                        onPress={() => { this.deleteForId(this.state.id) }}
                        icon={
                            <Icon name={"trash"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
                :
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Saldo Anterior: {this.state.saldoAnterior}
                    </Text>
                    <Text style={styles.text}>
                        Coleta do dia {this.state.diaDaColeta}: {this.state.coletaDoDia}
                    </Text>
                    <Text style={styles.text}>
                        Contribuição ao Conselho Superior: {this.state.contribuicao}
                    </Text>
                    <Text style={styles.text}>
                        Despesas: {this.state.despesas}
                    </Text>
                    <Text style={styles.text}>
                        Sub Total: {this.state.subTotal}
                    </Text>
                    <Text style={styles.text}>
                        Total em Caixa: {this.state.totalEmCaixa}
                    </Text>

                    <Button
                        title="Editar"
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.textButton}
                        onPress={() => {
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
                        }}
                        icon={
                            <Icon name={"pencil"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
        )
    }
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#FFF',
        justifyContent: 'flex-start'
    },

    name: {
        color: commonStyles.colors.textColor,
        fontSize: 18,
    },

    view: {
        marginBottom: 5,
        marginTop: 10
    },

    title: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.normal,
        marginTop: 10,
    },

    text: {
        fontFamily: commonStyles.fontFamily.text,
        color: commonStyles.colors.textColor,
        fontSize: commonStyles.fontSize.small
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

    buttonDelete: {
        backgroundColor: commonStyles.colors.primaryHoverColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 15,
        borderWidth: 0,
    },

    buttonCancel: {
        backgroundColor: commonStyles.colors.containerColor,
        borderWidth: 0,
        width: "20%"
    },

    fieldButton: {
        alignItems: 'flex-end'
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
    },

    option: {
        backgroundColor: 'transparent',
        borderColor: 'transparent'
    },

    textOption: {
        color: commonStyles.colors.textHover,
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.small,
    },

    subtitle: {
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 5,
        fontFamily: commonStyles.fontFamily.subtitle,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.small
    }
})
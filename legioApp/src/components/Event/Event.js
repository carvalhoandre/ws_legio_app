import React, { Component } from 'react'
import { View, StyleSheet, Platform, ActivityIndicator, Text } from 'react-native';
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createEvent } from '../../service/api'
import { formatDate } from '../../utils/format'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
    name: "",
    guests: null,
    ativos: null,
    auxiliares: null,
    loading: false,
    visible: false,
    title: '',
    body: '',
    date: new Date(),
    mode: 'date',
    show: false
}

export default class Event extends Component {
    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    });

    send = async () => {
        this.setState({ loading: true })
        let newObj = {
            name: this.state.name,
            guests: this.state.guests,
            ativos: this.state.ativos,
            auxiliares: this.state.auxiliares,
            dateEvent: formatDate(this.state.date)
        }
        createEvent(newObj)
            .then(() => {
                this.setState({ loading: false })
                this.setState({ body: `Adicionado com sucesso!`, visible: true, title: "👏👏👏" })
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ${error}`, visible: true, title: "😱😰😰" })
            })
    }

    render() {
        const validations = []
        const validName = (this.state.name.length > 3)
        validations.push(validName)

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
                        label="Nome"
                        value={this.state.name}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={name => this.setState({ name: name })}
                    />

                    <Text style={styles.labelText}>Data do Evento</Text>
                    <Button
                        onPress={showDatepicker}
                        title={`${formatDate(this.state.date)}`}
                        buttonStyle={styles.button}
                        titleStyle={styles.buttonText}
                        icon={
                            <Icon name={"calendar-sharp"} size={20} color={commonStyles.colors.titleColor} />
                        }
                    />

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
                        label="Quantidade de Ativos"
                        value={this.state.ativos}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={ativos => this.setState({ ativos: ativos })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de Auxiliares"
                        value={this.state.auxiliares}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={auxiliares => this.setState({ auxiliares: auxiliares })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de Convidados"
                        value={this.state.guests}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={guests => this.setState({ guests: guests })}
                    />

                    <View style={styles.containerButton}>
                        <Button
                            title="Salvar"
                            type="outline"
                            buttonStyle={styles.buttonSend}
                            titleStyle={styles.buttonTextSend}
                            disabledTitleStyle={styles.textButton}
                            onPress={this.send}
                            disabled={!validForm}
                            disabledStyle={styles.buttonDisabled}
                            icon={
                                <Icon name={"send-sharp"} size={20} color={"#FFF"} />
                            }
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

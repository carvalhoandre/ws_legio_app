import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import DateTimePicker from '@react-native-community/datetimepicker';

export default class EventCard extends Component {
    constructor(props) {
        super(props)
        this.event = props.event
        this.deleteForId = props.deleteForId
        this.newEvent = props.newEvent
        this.state = {
            id: this.event.id,
            date: this.event.date,
            name: this.event.name,
            dateEvent: this.event.dateEvent,
            guests: this.event.guests,
            ativos: this.event.ativos,
            auxiliares: this.event.auxiliares,
            edit: false,
            mode: 'date',
            show: false
        }
    }

    render() {
        const validations = []
        const validName = (this.state.name.length > 3)
        validations.push(validName)

        const validForm = validations.reduce((t, a) => t && a)

        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            this.setState({ show: Platform.OS === 'ios' })
            this.setState({ dateEvent: currentDate })
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
                        label="Nome"
                        value={this.state.name}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={name => this.setState({ name: name })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Data do Evento"
                        value={this.state.dateEvent.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={dateEvent => this.setState({ dateEvent: dateEvent })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de Ativos"
                        value={this.state.ativos.toString()}
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
                        value={this.state.auxiliares.toString()}
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
                        value={this.state.guests.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={guests => this.setState({ guests: guests })}
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
                            this.newEvent(this.state)
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
                    <View style={styles.view}>
                        <Text style={styles.title}>{this.state.name}</Text>
                    </View>
                    <Text style={styles.bold}>
                        Data
                    </Text>
                    <Text style={styles.text}>
                        {this.state.dateEvent}
                    </Text>

                    <Text style={styles.bold}>
                        Comparecimentos
                    </Text>
                    <Text style={styles.text}>
                        {this.state.guests >= 1 ? `Convidados: ${this.state.guests} ` : null}
                        {this.state.ativos >= 1 ? `Ativos: ${this.state.ativos} ` : null}
                        {this.state.auxiliares >= 1 ? `Auxiliares: ${this.state.auxiliares} ` : null}
                    </Text>

                    <Button
                        title="Editar"
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
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
        textAlign: 'center'
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
        marginTop: 25,
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
    },

    bold: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.textColor,
        fontSize: commonStyles.fontSize.small,
        marginTop: 15
    },
})
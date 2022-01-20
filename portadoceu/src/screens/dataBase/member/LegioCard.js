import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../../styles/commonStyles'

export default class LegioCard extends Component {
    constructor(props) {
        super(props)
        this.legio = props.legio
        this.deleteForId = props.deleteForId
        this.newLegio = props.newLegio
        this.state = {
            id: this.legio.id,
            name: this.legio.name,
            type: this.legio.type,
            birthday: this.legio.birthday,
            initial: this.legio.initial,
            ativo: false,
            adjuntor: false,
            auxiliar: false,
        }
    }

    render() {
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
                            onChangeText={name => this.setState({ name })}
                        />

                        <TextInput
                            label="Aniversário"
                            value={this.state.birthday}
                            underlineColor={"#A6B0BF"}
                            activeOutlineColor={commonStyles.colors.primaryColor}
                            activeUnderlineColor={commonStyles.colors.primaryColor}
                            style={styles.input}
                            onChangeText={birthday => this.setState({ birthday })}
                        />

                        <Text style={styles.title}>Membro:</Text>
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Ativo'
                            checked={this.state.ativo}
                            onPress={(() => {
                                this.setState({ type: 0, adjuntor: false, auxiliar: false, ativo: true })
                            })}
                            checkedIcon={
                                <Icon name={"radio-button-on"} size={20} color={commonStyles.colors.primaryColor} />
                            }
                            uncheckedIcon={
                                <Icon name={"radio-button-off"} size={20} color={commonStyles.colors.primaryColor} />
                            }
                        />
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Auxiliar'
                            checked={this.state.auxiliar}
                            onPress={(() => {
                                this.setState({ type: 1, adjuntor: false, auxiliar: true, ativo: false })
                            })}
                            checkedIcon={
                                <Icon name={"radio-button-on"} size={20} color={commonStyles.colors.primaryColor} />
                            }
                            uncheckedIcon={
                                <Icon name={"radio-button-off"} size={20} color={commonStyles.colors.primaryColor} />
                            }
                        />
                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Adjuntor'
                            checked={this.state.adjuntor}
                            onPress={(() => {
                                this.setState({ type: 2, adjuntor: true, auxiliar: false, ativo: false })
                            })}
                            checkedIcon={
                                <Icon name={"radio-button-on"} size={20} color={commonStyles.colors.primaryColor} />
                            }
                            uncheckedIcon={
                                <Icon name={"radio-button-off"} size={20} color={commonStyles.colors.primaryColor} />
                            }
                        />

                        <TextInput
                            label="Data de entrada"
                            value={this.state.initial}
                            underlineColor={"#A6B0BF"}
                            activeOutlineColor={commonStyles.colors.primaryColor}
                            activeUnderlineColor={commonStyles.colors.primaryColor}
                            style={styles.input}
                            onChangeText={initial => this.setState({ initial })}
                        />
                       
                        <Button
                            title="Salvar"
                            type="outline"
                            buttonStyle={styles.buttonSend}
                            titleStyle={styles.buttonTextSend}
                            onPress={(() => {
                                this.newLegio(this.state)
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
                    <Text style={styles.subtitle}>
                        {this.state.name}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.type}
                    </Text>
                    <Text style={styles.bold}>
                        Data de Aniversário:
                    </Text>
                    <Text style={styles.text}>
                        {this.state.birthday}
                    </Text>
                    <Text style={styles.bold}>
                        Data de Início:
                    </Text>
                    <Text style={styles.text}>
                        {this.state.initial}
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
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.normal
    },
    bold: {
        fontFamily: commonStyles.fontFamily.title,
        color: commonStyles.colors.textColor,
        fontSize: commonStyles.fontSize.small,
        marginTop: 5
    },
})
import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default function EventCard(props) {
    const event = props.event
    const deleteForId = props.deleteForId
    const newEvent = props.newEvent

    const [obj, setObj] = useState({
        id: event.id,
        date: event.date,
        name: event.name,
        dateEvent: event.dateEvent,
        guests: event.guests,
        ativos: event.ativos,
        auxiliares: event.auxiliares,
        edit: false,
        mode: 'date',
        show: false
    })

    const validations = []
    const validName = (obj.name.length > 3)
    validations.push(validName)
    const validForm = validations.reduce((t, a) => t && a)

    return (
        obj.edit === true ?
            <View style={styles.container}>
                <View style={styles.fieldButton}>
                    <Button
                        title=""
                        type="outline"
                        buttonStyle={styles.buttonCancel}
                        titleStyle={styles.textButton}
                        onPress={(() => {
                            let newEdit = !obj.edit
                            setObj({ ...obj, edit: newEdit })
                        })}
                        icon={
                            <Icon name={"close"} size={30} color={commonStyles.colors.primaryHoverColor} />
                        }
                    />
                </View>

                <TextInput
                    label="Nome"
                    value={obj.name}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={name => setObj({ ...obj, name: name })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Data do Evento"
                    value={obj.dateEvent.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={dateEvent => setObj({ ...obj, dateEvent: dateEvent })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de Ativos"
                    value={obj.ativos.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={ativos => setObj({ ...obj, ativos: ativos })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de Auxiliares"
                    value={obj.auxiliares.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={auxiliares => setObj({ ...obj, auxiliares: auxiliares })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de Convidados"
                    value={obj.guests.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={guests => setObj({ ...obj, guests: guests })}
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
                        newEvent(obj)
                        let newEdit = !obj.edit
                        setObj({ ...obj, edit: newEdit })
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
                    onPress={() => { deleteForId(obj.id) }}
                    icon={
                        <Icon name={"trash"} size={20} color={"#FFF"} />
                    }
                />
            </View>
            :
            <View style={styles.container}>
                <View style={styles.view}>
                    <Text style={styles.title}>{obj.name}</Text>
                </View>
                <Text style={styles.bold}>
                    Data
                </Text>
                <Text style={styles.text}>
                    {obj.dateEvent}
                </Text>

                <Text style={styles.bold}>
                    Comparecimentos
                </Text>
                <Text style={styles.text}>
                    {obj.guests >= 1 ? `Convidados: ${obj.guests} ` : null}
                    {obj.ativos >= 1 ? `Ativos: ${obj.ativos} ` : null}
                    {obj.auxiliares >= 1 ? `Auxiliares: ${obj.auxiliares} ` : null}
                </Text>

                <Button
                    title="Editar"
                    type="outline"
                    buttonStyle={styles.buttonSend}
                    titleStyle={styles.buttonTextSend}
                    onPress={() => {
                        let newEdit = !obj.edit
                        setObj({ ...obj, edit: newEdit })
                    }}
                    icon={
                        <Icon name={"pencil"} size={20} color={"#FFF"} />
                    }
                />
            </View>
    )
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
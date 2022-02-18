import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import { Picker } from '@react-native-picker/picker';

export default function WorkCard(props) {
    const work = props.work
    const deleteForId = props.deleteForId
    const newWork = props.newWork

    const [obj, setObj] = useState({
        id: work.id,
        date: work.date,
        work: work.work,
        yong: work.yong,
        adult: work.adult,
        children: work.children,
        elderly: work.elderly,
        total: work.total,
        hours: work.hours,
        observation: work.observation,
        legio: work.legio,
        edit: false,
    })

    const validations = []
    const validAdult = (obj.adult !== null)
    const validChildren = (obj.yong !== null)
    const validYong = (obj.children !== null)
    const validElderly = (obj.elderly !== null)
    validations.push(validYong, validAdult, validChildren, validElderly)
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

                <Picker
                    selectedValue={obj.work}
                    style={{ height: 50, width: '100%', marginTop: 10 }}
                    onValueChange={(work, itemIndex) => setObj({ ...obj, work: work })}
                >
                    <Picker.Item label="Visita" value={0} style={styles.textOption} />
                    <Picker.Item label="Rosário" value={1} style={styles.textOption} />
                    <Picker.Item label="Ofício" value={2} style={styles.textOption} />
                    <Picker.Item label="Ligação" value={3} style={styles.textOption} />
                    <Picker.Item label="Chamada de Vídeo" value={4} style={styles.textOption} />
                    <Picker.Item label="Propagação de Devoção" value={5} style={styles.textOption} />
                </Picker>

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de Jovens"
                    value={obj.yong.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={yong => setObj({ ...obj, yong: yong })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de adultos"
                    value={obj.adult.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={adult => setObj({ ...obj, adult: adult })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de crianças"
                    value={obj.children.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={children => setObjobj({ ...obj, children: children })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Quantidade de idosos"
                    value={obj.elderly.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={elderly => setObj({ ...obj, elderly: elderly })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Horas de trabalho"
                    value={obj.hours.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={hours => setObj({ ...obj, hours })}
                />

                <TextInput
                    label="Dupla"
                    value={obj.legio}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={legio => setObj({ ...obj, legio: legio })}
                />

                <TextInput
                    label="Observação"
                    multiline={true}
                    value={obj.observation}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={observation => setObj({ ...obj, observation: observation })}
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
                        newWork(obj)
                        let newEdit = !obj.edit
                        setObj({ edit: newEdit })
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
                <Text style={styles.title}>
                    {obj.work}
                </Text>

                <Text style={styles.bold}>
                    Contato com
                </Text>
                <Text style={styles.text}>
                    {obj.yong >= 1 ? ` ${obj.yong} Jovens. ` : null}
                    {obj.adult >= 1 ? `${obj.adult} Adultos. ` : null}
                    {obj.children >= 1 ? `${obj.children} Crianças. ` : null}
                    {obj.elderly >= 1 ? `${obj.elderly} Idosos. ` : null}
                </Text>
                <Text style={styles.bold}>
                    Total de contatos
                </Text>
                <Text style={styles.text}>
                    {obj.total}
                </Text>
                <Text style={styles.bold}>
                    Dupla
                </Text>
                <Text style={styles.text}>
                    {obj.legio}
                </Text>
                <Text style={styles.bold}>
                    Observação
                </Text>
                <Text style={styles.text}>
                    {obj.observation}
                </Text>
                <Text style={styles.bold}>
                    Horas de trabalho
                </Text>
                <Text style={styles.text}>
                    {obj.hours}
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
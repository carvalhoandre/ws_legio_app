import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default function AtaCard(props) {
    const ata = props.ata
    const deleteForId = props.deleteForId
    const newAta = props.newAta

    const [obj, setObj] = useState({
        id: ata.id,
        date: ata.date,
        inicio: ata.inicio,
        ata: ata.ata,
        participation: ata.participation,
        capituloEspiritual: ata.capituloEspiritual !== null ? ata.capituloEspiritual : 0,
        paginaEspiritual: ata.paginaEspiritual !== null ? ata.paginaEspiritual : 0,
        titleEspiritual: ata.titleEspiritual,
        allocutionAutor: ata.allocutionAutor,
        allocutionAssunto: ata.allocutionAssunto,
        coleta: ata.coleta,
        paginaEstudo: ata.paginaEstudo !== null ? ata.paginaEstudo : 0,
        paragrafoEstudo: ata.paragrafoEstudo !== null ? ata.paragrafoEstudo : 0,
        assuntos: ata.assuntos,
        horaFinal: ata.horaFinal,
        edit: false,
        one: true,
        two: false,
        three: false
    })

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
                    type="text"
                    label="Hora de início"
                    value={obj.inicio}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={inicio => setObj({ ...obj, inicio: inicio })}
                />

                <CheckBox
                    containerStyle={styles.option}
                    textStyle={styles.textOption}
                    title='Lida, aprovada e assinada'
                    checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                    uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                    checked={obj.one}
                    onPress={() => setObj({
                        ...obj,
                        one: true,
                        two: false,
                        three: false,
                        ata: 'Lida, aprovada e assinada'
                    })}
                />

                <CheckBox
                    containerStyle={styles.option}
                    textStyle={styles.textOption}
                    title='Lida, aprovada com ressalvas e assinada'
                    checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                    uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                    checked={obj.two}
                    onPress={() => setObj({
                        ...obj,
                        one: false,
                        two: true,
                        three: false,
                        ata: 'Lida, aprovada com ressalvas e assinada'
                    })}
                />

                <CheckBox
                    containerStyle={styles.option}
                    textStyle={styles.textOption}
                    title='Não houve leitura da ata'
                    checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                    uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                    checked={obj.three}
                    onPress={() => setObj({
                        ...obj,
                        one: false,
                        two: false,
                        three: true,
                        ata: 'Não houve leitura da ata'
                    })}
                />

                <TextInput
                    type="text"
                    label="Convidados"
                    value={obj.participation}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={participation => setObj({ ...obj, participation })}
                />

                <Text style={styles.title}>Leitura Espiritual</Text>
                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Capitulo"
                    value={obj.capituloEspiritual.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={capituloEspiritual => setObj({ ...obj, capituloEspiritual })}
                />

                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Página"
                    value={obj.paginaEspiritual.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={paginaEspiritual => setObj({ ...obj, paginaEspiritual })}
                />

                <TextInput
                    type="text"
                    label="Título"
                    value={obj.titleEspiritual}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={titleEspiritual => setObj({ ...obj, titleEspiritual })}
                />

                <Text style={styles.title}>Alocução</Text>
                <TextInput
                    label="Autor"
                    value={obj.allocutionAutor}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={allocutionAutor => setObj({ ...obj, allocutionAutor })}
                />

                <TextInput
                    label="Assunto"
                    value={obj.allocutionAssunto}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={allocutionAssunto => setObj({ ...obj, allocutionAssunto })}
                />

                <CheckBox
                    containerStyle={styles.option}
                    textStyle={styles.textOption}
                    title='Coleta Secreta'
                    checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                    uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                    checked={obj.coleta}
                    onPress={(() => {
                        let colect = !obj.coleta
                        setObj({ ...obj, coleta: colect })
                    })}
                />

                <Text style={styles.title}>Estudo do Manual</Text>
                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Página"
                    value={obj.paginaEstudo.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={paginaEstudo => setObj({ ...obj, paginaEstudo })}
                />
                <TextInput
                    type="number"
                    keyboardType="number-pad"
                    label="Parágrafo"
                    value={obj.paragrafoEstudo.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={paragrafoEstudo => setObj({ ...obj, paragrafoEstudo })}
                />

                <TextInput
                    label="Outros Assuntos"
                    value={obj.assuntos}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={assuntos => setObj({ ...obj, assuntos })}
                />

                <TextInput
                    type="text"
                    label="Hora final"
                    value={obj.horaFinal.toString()}
                    underlineColor={"#A6B0BF"}
                    activeOutlineColor={commonStyles.colors.primaryColor}
                    activeUnderlineColor={commonStyles.colors.primaryColor}
                    style={styles.input}
                    onChangeText={horaFinal => setObj({ ...obj, horaFinal })}
                />

                <Button
                    title="Salvar"
                    type="outline"
                    buttonStyle={styles.buttonSend}
                    titleStyle={styles.buttonTextSend}
                    onPress={(() => {
                        newAta(obj)
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
                <Text style={styles.bold}>
                    Início:
                </Text>
                <Text style={styles.text}>
                    {obj.inicio}
                </Text>
                <Text style={styles.bold}>
                    {obj.ata}
                </Text>
                <Text style={styles.bold}>
                    Participantes (Conviados)
                </Text>
                <Text style={styles.text}>
                    {obj.participation}
                </Text>
                <Text style={styles.subtitle}>Leitura Espiritual</Text>
                <Text style={styles.bold}>
                    Cápitulo
                </Text>
                <Text style={styles.text}>
                    {obj.capituloEspiritual}
                </Text>
                <Text style={styles.bold}>
                    Página
                </Text>
                <Text style={styles.text}>
                    {obj.paginaEspiritual}
                </Text>
                <Text style={styles.bold}>
                    Título
                </Text>
                <Text style={styles.text}>
                    {obj.titleEspiritual}
                </Text>
                <Text style={styles.subtitle}>Alocução</Text>
                <Text style={styles.bold}>
                    Autor
                </Text>
                <Text style={styles.text}>
                    {obj.allocutionAutor}
                </Text>
                <Text style={styles.bold}>
                    Assunto
                </Text>
                <Text style={styles.text}>
                    {obj.allocutionAssunto}
                </Text>

                <Text style={styles.subtitle}>
                    Coleta
                </Text>
                <Text style={styles.text}>
                    {obj.coleta === true ? `Foi passada a coleta secreta` : 'Não foi passada a coleta secreta'}
                </Text>
                <Text style={styles.subtitle}>Estudo do Manual</Text>
                <Text style={styles.bold}>
                    Página
                </Text>
                <Text style={styles.text}>
                    {obj.paginaEstudo}
                </Text>
                <Text style={styles.bold}>
                    Páragrafo
                </Text>
                <Text style={styles.text}>
                    {obj.paragrafoEstudo}
                </Text>
                <Text style={styles.bold}>
                    Assuntos
                </Text>
                <Text style={styles.text}>
                    {obj.assuntos}
                </Text>
                <Text style={styles.bold}>
                    Hora Final
                </Text>
                <Text style={styles.text}>
                    {obj.horaFinal}
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
        marginTop: 25,
        marginBottom: 2,
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
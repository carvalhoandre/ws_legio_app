import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Text, Platform, SafeAreaView, ScrollView, ActivityIndicator, Image } from 'react-native';
import commonStyles from '../../../styles/commonStyles';
import { CheckBox, Button } from 'react-native-elements'
import { createLegio } from '../../../service/api'
import { formatDateMonth } from '../../../utils/format'
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
    name: '',
    type: 0,
    birthday: new Date(),
    initial: new Date(),
    loading: false,
    visible: false,
    ativo: false,
    adjuntor: false,
    auxiliar: false,
    title: '',
    body: '',
    mode: 'date',
    show: false
}


export default class CreateMember extends Component {

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
            type: this.state.type,
            birthday: formatDateMonth(this.state.birthday),
            initial: formatDateMonth(this.state.initial)
        }
        createLegio(newObj)
            .then(() => {
                this.setState({ loading: false })
                this.setState({ body: `${this.state.name} adicionado com sucesso!`, visible: true, title: "👏👏👏" })
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ${error}`, visible: true, title: "😱😰😰" })
            })
    }

    render() {
        const validations = []
        const validName = (this.state.name.length >= 2)
        validations.push(validName)

        const validForm = validations.reduce((t, a) => t && a)

        const onChangeB = (event, selectedDate) => {
            const currentDate = selectedDate || this.state.birthday;
            this.setState({ show: Platform.OS === 'ios' })
            this.setState({ birthday: currentDate })
        };

        const onChangeI = (event, selectedDate) => {
            const currentDate = selectedDate || this.state.initial;
            this.setState({ show: Platform.OS === 'ios' })
            this.setState({ initial: currentDate })
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
                <SafeAreaView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.main}
                >
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                    >
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

                        <>
                            <Text style={styles.subtitle}>Salve Maria!</Text>
                            <Text style={styles.title}>Adicione o novo membro</Text>
                            <View style={styles.container}>
                                <View style={styles.imageView}>
                                    <Image source={require('../../../../assets/icons/filter.png')} style={styles.fest} />
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

                                <Text style={styles.text}>Data de aniversário:</Text>
                                <Button
                                    onPress={showDatepicker}
                                    title={`${formatDateMonth(this.state.birthday)}`}
                                    buttonStyle={styles.button}
                                    titleStyle={styles.buttonText}
                                    icon={
                                        <Icon name={"calendar-sharp"} size={20} color={commonStyles.colors.firstColor} />
                                    }
                                />

                                {this.state.show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={this.state.birthday}
                                        mode={this.state.mode}
                                        display="default"
                                        onChange={onChangeB}
                                        dateFormat='shortdate'
                                    />
                                )}

                                <Text style={styles.text}>Data de "entrada":</Text>
                                <Button
                                    onPress={showDatepicker}
                                    title={`${formatDateMonth(this.state.initial)}`}
                                    buttonStyle={styles.button}
                                    titleStyle={styles.buttonText}
                                    icon={
                                        <Icon name={"calendar-sharp"} size={20} color={commonStyles.colors.firstColor} />
                                    }
                                />

                                {this.state.show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={this.state.initial}
                                        mode={this.state.mode}
                                        display="default"
                                        onChange={onChangeI}
                                        dateFormat='shortdate'
                                    />
                                )}

                                <Text style={styles.text}>Membro:</Text>
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
                            </View>
                        </>
                    </ScrollView>
                </SafeAreaView >
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : 50,
        paddingLeft: 10,
        paddingRight: 10
    },

    spinner: {
        flex: 1,
        justifyContent: "center"
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
        marginBottom: 15
    },

    scrollView: {
        marginHorizontal: 0,
    },

    textOption: {
        fontFamily: commonStyles.fontFamily.text,
        color: commonStyles.colors.textColor,
        fontSize: commonStyles.fontSize.normal
    },

    title: {
        fontFamily: commonStyles.fontFamily.title,
        fontSize: commonStyles.fontSize.medium,
        color: commonStyles.colors.titleColor,
        marginBottom: 30
    },

    subtitle: {
        fontFamily: commonStyles.fontFamily.josefin,
        color: commonStyles.colors.subtitleColor,
        fontSize: commonStyles.fontSize.small
    },

    text: {
        fontFamily: commonStyles.fontFamily.subtitle,
        fontSize: commonStyles.fontSize.normal,
        color: commonStyles.colors.subtitleColor,
        marginBottom: 10
    },

    fest: {
        height: 190,
        width: 220,
        alignItems: 'center'
    },

    imageView: {
        alignItems: 'center'
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

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
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

    dialogButton: {
        backgroundColor: commonStyles.colors.containerColor,
        borderColor: commonStyles.colors.bodyColor,
        borderWidth: 0,
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

    buttonDisabled: {
        backgroundColor: commonStyles.colors.disabeldColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
    },

    option: {
        backgroundColor: commonStyles.colors.containerColor,
        borderWidth: 0
    }
})

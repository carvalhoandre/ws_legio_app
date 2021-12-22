import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Text, Platform, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import 'moment/locale/pt-br'
import commonStyles from '../../../styles/commonStyles';
import { CheckBox, Button } from 'react-native-elements'
import { createLegio } from '../../../service/api'

const initialState = {
    name: '',
    type: 0,
    birthday: '',
    loading: false,
    visible: false,
    ativo: false,
    adjuntor: false,
    auxiliar: false,
    title: '',
    body: ''
}


export default class CreateMember extends Component {

    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        visible: false,
        name: '',
        birthday: '',
        type: 0,
        adjuntor: false,
        auxiliar: false,
        ativo: false
    });

    send = async () => {
        this.setState({ loading: true })
        let newObj = {
            name: this.state.name,
            type: this.state.type,
            birthday: this.state.birthday,
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
        const validBirthday = (this.state.birthday.length >= 4)
        validations.push(validBirthday, validName)

        const validForm = validations.reduce((t, a) => t && a)

        return (
            this.state.loading ?
                <View style={styles.spinner}>
                    <ActivityIndicator size="large" color={commonStyles.colors.primaryHoverColor} />
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
                                <Dialog.Title>{this.state.title}</Dialog.Title>
                                <Dialog.Content>
                                    <Paragraph>{this.state.body}</Paragraph>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button
                                        title="Ok"
                                        type="outline"
                                        onPress={this.hideDialog}
                                    />
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                        <View style={styles.container}>
                            <View styles={{ margin: 'auto' }}>
                                <Text style={styles.title}>Adicionar novo membro</Text>

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
                                <Text style={styles.text}>dia/mes/ano</Text>

                                <Text style={styles.subtitle}>Membro:</Text>
                                <CheckBox
                                    containerStyle={styles.option}
                                    textStyle={styles.textOption}
                                    title='Ativo'
                                    checked={this.state.ativo}
                                    onPress={(() => {
                                        this.setState({ type: 0, adjuntor: false, auxiliar: false, ativo: true })
                                    })}
                                />
                                <CheckBox
                                    containerStyle={styles.option}
                                    textStyle={styles.textOption}
                                    title='Auxiliar'
                                    checked={this.state.auxiliar}
                                    onPress={(() => {
                                        this.setState({ type: 1, adjuntor: false, auxiliar: true, ativo: false })
                                    })}
                                />
                                <CheckBox
                                    containerStyle={styles.option}
                                    textStyle={styles.textOption}
                                    title='Adjuntor'
                                    checked={this.state.adjuntor}
                                    onPress={(() => {
                                        this.setState({ type: 2, adjuntor: true, auxiliar: false, ativo: false })
                                    })}
                                />
                            </View>

                            <View style={styles.containerButton}>
                                <Button
                                    title="Enviar"
                                    type="outline"
                                    buttonStyle={styles.buttonSend}
                                    titleStyle={styles.textButton}
                                    disabledTitleStyle={styles.textButton}
                                    onPress={this.send}
                                    disabled={!validForm}
                                    disabledStyle={styles.buttonDisabled}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Platform.OS === "ios" ? 0 : 50,
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
        fontFamily: commonStyles.fontFamily.WorkSans,
        backgroundColor: 'transparent'
    },

    button: {
        justifyContent: 'flex-start',
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },

    buttonSend: {
        marginBottom: 30,
        backgroundColor: commonStyles.colors.primaryHoverColor,
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

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: "900",
    },

    textOption: {
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '400',

    },

    option: {
        backgroundColor: commonStyles.colors.bodyColor,
        borderColor: commonStyles.colors.bodyColor,
    },
})

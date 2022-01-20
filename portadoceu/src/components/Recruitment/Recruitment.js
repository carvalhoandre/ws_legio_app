import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import 'moment/locale/pt-br'
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createRecruitment } from '../../service/api'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
    quantity: null,
    person: null,
    attendancing: null,
    loading: false,
    visible: false,
    title: '',
    body: '',
}

export default class Recruitment extends Component {

    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    });

    send = async () => {
        if (this.state.quantity < this.state.attendancing) {
            this.setState({ body: `Quantidade de comparecimento maior que de recrutamento`, visible: true, title: "Erro 👀" })
        } else {
            this.setState({ loading: true })
            let newObj = {
                quantity: this.state.quantity,
                person: this.state.person,
                attendancing: this.state.attendancing,
            }
            createRecruitment(newObj)
                .then(() => {
                    this.setState({ loading: false })
                    this.setState({ body: `Adicionado com sucesso!`, visible: true, title: "👏👏👏" })
                }, error => {
                    this.setState({ loading: false })
                    this.setState({ body: `Erro: ${error}`, visible: true, title: "😱😰😰" })
                })
        }
    }

    render() {
        const validations = []
        const validQuantity = (this.state.quantity !== null)
        const validAttendancing = (this.state.attendancing !== null)
        validations.push(validQuantity, validAttendancing)

        const validForm = validations.reduce((t, a) => t && a)

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

                    <Picker
                        selectedValue={this.state.person}
                        style={{ height: 50, width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ person: itemValue })}
                    >
                        <Picker.Item label="Criança" value={0} style={styles.textOption} />
                        <Picker.Item label="Adolescente" value={1} style={styles.textOption} />
                        <Picker.Item label="Jovem" value={2} style={styles.textOption} />
                        <Picker.Item label="Adulto" value={3} style={styles.textOption} />
                        <Picker.Item label="Idoso" value={4} style={styles.textOption} />
                    </Picker>

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade"
                        value={this.state.quantity}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={quantity => this.setState({ quantity: quantity })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Comparecimentos"
                        value={this.state.attendancing}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={attendancing => this.setState({ attendancing: attendancing })}
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

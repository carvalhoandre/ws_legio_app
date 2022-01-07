import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import 'moment/locale/pt-br'
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createRecruitment } from '../../service/api'
import { Picker } from '@react-native-picker/picker';

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
        if (this.state.person < this.state.attendancing) {
            this.setState({ body: `Quantidade de comparecimento maior que de recrutamento`, visible: true, title: "👀" })
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
                    <ActivityIndicator size="large" color={commonStyles.colors.primaryHoverColor} />
                </View>
                :
                <>
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

                    <Picker
                        selectedValue={this.state.person}
                        style={{ height: 50, width: 150 }}
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
                            titleStyle={styles.textButton}
                            disabledTitleStyle={styles.textButton}
                            onPress={this.send}
                            disabled={!validForm}
                            disabledStyle={styles.buttonDisabled}
                        />
                    </View>
                </>
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

    }
})

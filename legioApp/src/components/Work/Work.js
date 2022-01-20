import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import 'moment/locale/pt-br'
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createWork } from '../../service/api'
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

const initialState = {
    work: 0,
    yong: null,
    adult: null,
    children: null,
    elderly: null,
    hours: null,
    observation: '',
    legios: '',
    loading: false,
    visible: false,
    title: '',
    body: '',
}

export default class Work extends Component {
    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    });

    send = async () => {
        this.setState({ loading: true })
        let newA = parseInt(this.state.adult, 10)
        let newC = parseInt(this.state.children, 10)
        let newY = parseInt(this.state.yong, 10)
        let newE = parseInt(this.state.elderly, 10)
        let tot = newA + newC + newY + newE
        let newH = parseFloat(this.state.hours, 10)
        let newObj = {
            work: this.state.work,
            yong: newY,
            adult: newA,
            children: newC,
            elderly: newE,
            total: tot,
            hours: newH,
            legios: this.state.legios,
            observation: this.state.observation
        }
        createWork(newObj)
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
        const validAdult = (this.state.adult !== null)
        const validChildren = (this.state.yong !== null)
        const validYong = (this.state.children !== null)
        const validElderly = (this.state.elderly !== null)
        validations.push(validYong, validAdult, validChildren, validElderly)

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
                        style={{ height: 50, width: '100%', marginTop: 10 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ person: itemValue })}
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
                        value={this.state.yong}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={yong => this.setState({ yong })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de adultos"
                        value={this.state.adult}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={adult => this.setState({ adult })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de crianças"
                        value={this.state.children}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={children => this.setState({ children })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de idosos"
                        value={this.state.elderly}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={elderly => this.setState({ elderly })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Horas de trabalho"
                        value={this.state.hours}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={hours => this.setState({ hours })}
                    />

                    <TextInput
                        label="Dupla"
                        value={this.state.legios}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={legios => this.setState({ legios })}
                    />

                    <TextInput
                        label="Observação"
                        multiline={true}
                        value={this.state.observation}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={observation => this.setState({ observation })}
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

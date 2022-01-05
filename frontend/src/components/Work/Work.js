import React, { Component } from 'react'
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import { View, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import 'moment/locale/pt-br'
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createWork } from '../../service/api'
import { Picker } from '@react-native-picker/picker';
import { connect } from 'react-redux';

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

class Work extends Component {
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
                this.props.addWork(newObj);
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
                        <Picker.Item label="Visita" value={0} style={styles.textOption} />
                        <Picker.Item label="Rosário" value={1} style={styles.textOption} />
                        <Picker.Item label="Ofício" value={2} style={styles.textOption} />
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

const mapDispatchToProps = dispatch => {
    return {
        addWork: work => dispatch(addWork(work))
    }
}

export default connect(null, mapDispatchToProps)(Work);
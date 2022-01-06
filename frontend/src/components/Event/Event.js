import React, { Component } from 'react'
import { View, StyleSheet, Platform, ActivityIndicator, Text } from 'react-native';
import { TextInput, Portal, Dialog, Paragraph } from 'react-native-paper';
import commonStyles from '../../styles/commonStyles';
import { Button } from 'react-native-elements'
import { createEvent } from '../../service/api'
import { connect } from 'react-redux';
import { addEvent } from '../../config/store/actions/event'
import { formatDate } from '../../utils/format'
import DateTimePicker from '@react-native-community/datetimepicker';

const initialState = {
    name: "",
    guests: null,
    ativos: null,
    auxiliares: null,
    loading: false,
    visible: false,
    title: '',
    body: '',
    date: new Date(),
    mode: 'date',
    show: false
}

class Event extends Component {
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
            guests: this.state.guests,
            ativos: this.state.ativos,
            auxiliares: this.state.auxiliares,
            dateEvent: formatDate(this.state.date)
        }
        createEvent(newObj)
            .then(() => {
                this.setState({ loading: false })
                this.setState({ body: `Adicionado com sucesso!`, visible: true, title: "👏👏👏" })
                this.props.addEvent(newObj);
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro: ${error}`, visible: true, title: "😱😰😰" })
            })
    }

    render() {
        const validations = []
        const validName = (this.state.name.length > 3)
        validations.push(validName)

        const validForm = validations.reduce((t, a) => t && a)


        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date;
            this.setState({ show: Platform.OS === 'ios' })
            this.setState({ date: currentDate })
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

                    <TextInput
                        label="Nome"
                        value={this.state.name}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={name => this.setState({ name: name })}
                    />

                    <View>
                        <Text>Data do Evento</Text>
                        <Button onPress={showDatepicker} title={`${formatDate(this.state.date)}`} />
                    </View>

                    {this.state.show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={this.state.date}
                            mode={this.state.mode}
                            display="default"
                            onChange={onChange}
                            dateFormat='shortdate'
                        />
                    )}

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de Ativos"
                        value={this.state.ativos}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={ativos => this.setState({ ativos: ativos })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de Auxiliares"
                        value={this.state.auxiliares}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={auxiliares => this.setState({ auxiliares: auxiliares })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Quantidade de Convidados"
                        value={this.state.guests}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={guests => this.setState({ guests: guests })}
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

const mapDispatchToProps = dispatch => {
    return {
        addEvent: event => dispatch(addEvent(event))
    }
}

export default connect(null, mapDispatchToProps)(Event);

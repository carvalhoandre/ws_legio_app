import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import { Picker } from '@react-native-picker/picker';

export default class WorkCard extends Component {
    constructor(props) {
        super(props)
        this.work = props.work
        this.deleteForId = props.deleteForId
        this.newWork = props.newWork
        this.state = {
            id: this.work.id,
            date: this.work.date,
            work: this.work.work,
            yong: this.work.yong,
            adult: this.work.adult,
            children: this.work.children,
            elderly: this.work.elderly,
            total: this.work.total,
            hours: this.work.hours,
            observation: this.work.observation,
            legio: this.work.legio,
            edit: false,
        }
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
            this.state.edit === true ?
                <View style={styles.container}>
                    <Picker
                        selectedValue={this.state.person}
                        style={{ height: 50, width: '100%', marginTop: 10 }}
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
                        value={this.state.yong.toString()}
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
                        value={this.state.adult.toString()}
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
                        value={this.state.children.toString()}
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
                        value={this.state.elderly.toString()}
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
                        value={this.state.hours.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={hours => this.setState({ hours })}
                    />

                    <TextInput
                        label="Dupla"
                        value={this.state.legios.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={legios => this.setState({ legios })}
                    />

                    <TextInput
                        label="Observação"
                        multiline={true}
                        value={this.state.observation.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={observation => this.setState({ observation })}
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
                            this.newWork(this.state)
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
                        })}
                        icon={
                            <Icon name={"send-sharp"} size={20} color={"#FFF"} />
                        }
                    />

                    <Button
                        title="Cancelar"
                        type="outline"
                        buttonStyle={styles.buttonCancel}
                        titleStyle={styles.textButton}
                        onPress={(() => {
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
                        })}
                    />
                </View>
                :
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Trabalho: {this.state.work}
                    </Text>

                    <Text style={styles.text}>
                        Contato com: 
                        {this.state.yong >= 1 ? ` ${this.state.yong} Jovens. ` : null}
                        {this.state.adult >= 1 ? `${this.state.adult} Adultos. ` : null}
                        {this.state.children >= 1 ? `${this.state.children} Crianças. ` : null}
                        {this.state.elderly >= 1 ? `${this.state.elderly} Idosos. ` : null}
                        {this.state.total >= 1 ? `total de ${this.state.total} contatos. ` : null}

                    </Text>
                    <Text style={styles.text}>
                        Dupla: {this.state.legio}
                    </Text>
                    <Text style={styles.text}>
                        Observação: {this.state.observation}
                    </Text>
                    <Text style={styles.text}>
                        Horas de trabalho: {this.state.hours}
                    </Text>
                
                    <Button
                        title=""
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.textButton}
                        onPress={() => {
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
                        }}
                        icon={
                            <Icon name={"pencil"} size={20} color={"#FFF"} />
                        }
                    />

                    <Button
                        title=""
                        type="outline"
                        buttonStyle={styles.buttonCancel}
                        titleStyle={styles.textButton}
                        onPress={() => { this.deleteForId(this.state.id) }}
                        icon={
                            <Icon name={"trash"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
        )
    }
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
        fontFamily: commonStyles.fontFamily.subtitle,
        color: commonStyles.colors.titleColor,
        fontSize: commonStyles.fontSize.normal
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

    textOption: {
        color: commonStyles.colors.subtitleColor,
        fontFamily: commonStyles.fontFamily.text,
        fontSize: commonStyles.fontSize.normal
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

    buttonCancel: {
        backgroundColor: commonStyles.colors.primaryHoverColor,
        borderColor: commonStyles.colors.titleColor,
        marginTop: 5,
        borderWidth: 0,
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
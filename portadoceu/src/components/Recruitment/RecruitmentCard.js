import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'
import { Picker } from '@react-native-picker/picker'

export default class RecruitmentCard extends Component {
    constructor(props) {
        super(props)
        this.recruitment = props.recruitment
        this.deleteForId = props.deleteForId
        this.newRecruitment = props.newRecruitment
        this.state = {
            id: this.recruitment.id,
            date: this.recruitment.date,
            quantity: this.recruitment.quantity,
            person: this.recruitment.person,
            attendancing: this.recruitment.attendancing,
            edit: false
        }
    }

    render() {
        return (
            this.state.edit === true ?
                <View style={styles.container}>
                    <View style={styles.fieldButton}>
                        <Button
                            title=""
                            type="outline"
                            buttonStyle={styles.buttonCancel}
                            titleStyle={styles.textButton}
                            onPress={(() => {
                                let newEdit = !this.state.edit
                                this.setState({ edit: newEdit })
                            })}
                            icon={
                                <Icon name={"close"} size={30} color={commonStyles.colors.primaryHoverColor} />
                            }
                        />
                    </View>
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
                        value={this.state.quantity.toString()}
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
                        value={this.state.attendancing.toString()}
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
                            onPress={(() => {
                                this.newRecruitment(this.state)
                                let newEdit = !this.state.edit
                                this.setState({ edit: newEdit })
                            })}
                            icon={
                                <Icon name={"send-sharp"} size={20} color={"#FFF"} />
                            }
                        />
                    </View>

                    <Button
                        title=""
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
                        onPress={() => { this.deleteForId(this.state.id) }}
                        icon={
                            <Icon name={"trash"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
                :
                <View style={styles.container}>
                    <View style={styles.view}>
                        <Text style={styles.title}>{this.state.person}</Text>
                    </View>
                    <Text style={styles.bold}>
                        Quantidade
                    </Text>
                    <Text style={styles.text}>
                        {this.state.quantity}
                    </Text>
                    <Text style={styles.bold}>
                        Comparecimentos
                    </Text>
                    <Text style={styles.text}>
                        {this.state.attendancing}
                    </Text>

                    <Button
                        title="Editar"
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
                        onPress={() => {
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
                        }}
                        icon={
                            <Icon name={"pencil"} size={20} color={"#FFF"} />
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
import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import commonStyles from '../../styles/commonStyles'

export default class AtaCard extends Component {
    constructor(props) {
        super(props)
        this.ata = props.ata
        this.deleteForId = props.deleteForId
        this.newAta = props.newAta
        this.state = {
            id: this.ata.id,
            date: this.ata.date,
            inicio: this.ata.inicio,
            ata: this.ata.ata,
            participation: this.ata.participation,
            capituloEspiritual: this.ata.capituloEspiritual,
            paginaEspiritual: this.ata.paginaEspiritual,
            titleEspiritual: this.ata.titleEspiritual,
            allocutionAutor: this.ata.allocutionAutor,
            allocutionAssunto: this.ata.allocutionAssunto,
            coleta: this.ata.coleta,
            paginaEstudo: this.ata.paginaEstudo,
            paragrafoEstudo: this.ata.paragrafoEstudo,
            assuntos: this.ata.assuntos,
            horaFinal: this.ata.horaFinal,
            edit: false,
            one: true,
            two: false,
            three: false
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
                    <CheckBox
                        containerStyle={styles.option}
                        textStyle={styles.textOption}
                        title='Lida, aprovada e assinada'
                        checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                        uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                        checked={this.state.one}
                        onPress={() => this.setState({
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
                        checked={this.state.two}
                        onPress={() => this.setState({
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
                        checked={this.state.three}
                        onPress={() => this.setState({
                            one: false,
                            two: false,
                            three: true,
                            ata: 'Não houve leitura da ata'
                        })}
                    />

                    <TextInput
                        type="text"
                        label="Convidados"
                        value={this.state.participation.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={participation => this.setState({ participation })}
                    />

                    <Text style={styles.title}>Leitura Espiritual</Text>
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Capitulo"
                        value={this.state.capituloEspiritual.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={capituloEspiritual => this.setState({ capituloEspiritual })}
                    />

                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Página"
                        value={this.state.paginaEspiritual.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paginaEspiritual => this.setState({ paginaEspiritual })}
                    />

                    <TextInput
                        type="text"
                        label="Título"
                        value={this.state.titleEspiritual.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={titleEspiritual => this.setState({ titleEspiritual })}
                    />

                    <Text style={styles.title}>Alocução</Text>
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Autor"
                        value={this.state.allocutionAutor.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={allocutionAutor => this.setState({ allocutionAutor })}
                    />

                    <TextInput
                        label="Assunto"
                        value={this.state.allocutionAssunto.toString()}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={allocutionAssunto => this.setState({ allocutionAssunto })}
                    />

                    <CheckBox
                        containerStyle={styles.option}
                        textStyle={styles.textOption}
                        title='Coleta Secreta'
                        checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryColor} />}
                        uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryColor} />}
                        checked={this.state.coleta}
                        onPress={(() => {
                            let colect = !this.state.coleta
                            this.setState({ coleta: colect })
                        })}
                    />

                    <Text style={styles.title}>Estudo do Manual</Text>
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Página"
                        value={this.state.paginaEstudo}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paginaEstudo => this.setState({ paginaEstudo })}
                    />
                    <TextInput
                        type="number"
                        keyboardType="number-pad"
                        label="Parágrafo"
                        value={this.state.paragrafoEstudo}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paragrafoEstudo => this.setState({ paragrafoEstudo })}
                    />

                    <TextInput
                        label="Outros Assuntos"
                        value={this.state.assuntos}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={assuntos => this.setState({ assuntos })}
                    />

                    <Button
                        title="Salvar"
                        type="outline"
                        buttonStyle={styles.buttonSend}
                        titleStyle={styles.buttonTextSend}
                        onPress={(() => {
                            this.newAta(this.state)
                            let newEdit = !this.state.edit
                            this.setState({ edit: newEdit })
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
                        onPress={() => { this.deleteForId(this.state.id) }}
                        icon={
                            <Icon name={"trash"} size={20} color={"#FFF"} />
                        }
                    />
                </View>
                :
                <View style={styles.container}>
                    <Text style={styles.text}>
                        Inicio: {this.state.inicio}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.ata}
                    </Text>
                    <Text style={styles.text}>
                        Participantes (Conviados): {this.state.participation}
                    </Text>
                    <Text style={styles.subtitle}>Leitura Espiritual</Text>
                    <Text style={styles.text}>
                        Cápitulo: {this.state.capituloEspiritual}
                    </Text>
                    <Text style={styles.text}>
                        Página: {this.state.paginaEspiritual}
                    </Text>
                    <Text style={styles.text}>
                        Título: {this.state.titleEspiritual}
                    </Text>
                    <Text style={styles.subtitle}>Alocução</Text>
                    <Text style={styles.text}>
                        Autor: {this.state.allocutionAutor}
                    </Text>
                    <Text style={styles.text}>
                        Assunto: {this.state.allocutionAssunto}
                    </Text>

                    <Text style={styles.subtitle}>
                        Coleta:
                        {this.state.coleta === true ? `Foi pasasda a coleta secreta` : 'Não foi pasasda a coleta secreta'}
                    </Text>
                    <Text style={styles.subtitle}>Estudo do Manual</Text>
                    <Text style={styles.text}>
                        Página: {this.state.paginaEstudo}
                    </Text>
                    <Text style={styles.text}>
                        Páragrafo: {this.state.paragrafoEstudo}
                    </Text>
                    <Text style={styles.subtitle}>
                        Assuntos: {this.state.assuntos}
                    </Text>
                    <Text style={styles.subtitle}>
                        Hora Final: {this.state.horaFinal}
                    </Text>

                    <Button
                        title="Editar"
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
        marginTop: 5,
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
    }
})
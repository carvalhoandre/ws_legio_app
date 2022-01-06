import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import { TextInput, Button, Portal, Dialog, Paragraph } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import moment from 'moment'
import 'moment/locale/pt-br'
import commonStyles from '../../../styles/commonStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Recruitment from '../../../components/Recruitment/Recruitment';
import Work from '../../../components/Work/Work';
import Event from '../../../components/Event/Event';
import { createAtaExtenso } from '../../../service/api'
import Treasury from '../../../components/Treasury';
import Legios from '../../../components/Attendence/Legios'

const initialState = {
    id: 1,
    inicio: moment().locale('pt-br').format('H:mm'),
    ata: 'Lida, aprovada e assinada',
    one: true,
    two: false,
    three: false,
    participation: 'participação do membro auxiliar Raquel',
    capituloEspiritual: '8',
    paginaEspiritual: '318',
    titleEspiritual: 'Liturgia da Palavra',
    coleta: true,
    allocutionAutor: 'Edenilson',
    allocutionAssunto: '"a Festa de Cristo Rei',
    paginaEstudo: '345',
    paragrafoEstudo: '4',
    assunto: 'Planejamento',
    //others
    loading: false,
    visible: false,
    title: '',
    body: '',
}

export default class CreateAta extends Component {

    state = {
        ...initialState
    }

    hideDialog = () => this.setState({
        ...initialState
    })

    send = async () => {
        this.setState({ loading: true })
        let hora = moment().locale('pt-br').format('H:mm')

        let ataExtenso = {
            inicio: this.state.inicio,
            ata: this.state.ata,
            participation: this.state.participation,
            capituloEspiritual: this.state.capituloEspiritual,
            paginaEspiritual: this.state.paginaEspiritual,
            titleEspiritual: this.state.titleEspiritual,
            allocutionAutor: this.state.allocutionAutor,
            allocutionAssunto: this.state.allocutionAssunto,
            coleta: this.state.coleta,
            paginaEstudo: this.state.paginaEstudo,
            paragrafoEstudo: this.state.paragrafoEstudo,
            assuntos: this.state.assunto,
            horaFinal: hora
        }

        createAtaExtenso(ataExtenso)
            .then(() => {
                this.setState({ loading: false })
                this.setState({ body: `Ata Adicionada com sucesso!`, visible: true, title: "👏👏👏" })
            }, error => {
                this.setState({ loading: false })
                this.setState({ body: `Erro ao enviar ata por e-mail`, visible: true, title: "😱😰😰" })
            })

    }

    returnIndicator = () => {

        if (this.state.id === 1) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text>Inicio: {this.state.inicio}</Text>

                    <View style={styles.check}>
                        <Text style={styles.subtitle}>Ata</Text>

                        <CheckBox
                            containerStyle={styles.option}
                            textStyle={styles.textOption}
                            title='Lida, aprovada e assinada'
                            checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                            uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryHoverColor} />}
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
                            checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                            uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                            checked={this.state.one}
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
                            title='Lida, aprovada com ressalvas e assinada'
                            checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                            uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                            checked={this.state.one}
                            onPress={() => this.setState({
                                one: false,
                                two: false,
                                three: true,
                                ata: 'Não houve leitura da ata'
                            })}
                        />

                    </View>

                    <Text style={styles.subtitle}>Leitura Espiritual</Text>
                    <TextInput
                        label="Capítulo"
                        value={this.state.capituloEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={capituloEspiritual => this.setState({ capituloEspiritual })}
                    />
                    <TextInput
                        label="Página"
                        value={this.state.paginaEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={paginaEspiritual => this.setState({ paginaEspiritual })}
                    />
                    <TextInput
                        label="Título"
                        value={this.state.titleEspiritual}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={titleEspiritual => this.setState({ titleEspiritual })}
                    />
                </View>
            )
        }

        if (this.state.id === 2) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Legios />

                    <TextInput
                        label="Visitantes"
                        value={this.state.participation}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={participation => this.setState({ participation })}
                    />
                </View>
            )
        }

        if (this.state.id === 3) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Tesouraria</Text>

                    <Treasury />
                </View>
            )
        }

        if (this.state.id === 4) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Trabalhos</Text>

                    <Work />
                </View>
            )
        }

        if (this.state.id === 5) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Alocução</Text>

                    <TextInput
                        label="Autor"
                        value={this.state.allocutionAutor}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={allocutionAutor => this.setState({ allocutionAutor })}
                    />

                    <TextInput
                        label="Assunto"
                        value={this.state.allocutionAssunto}
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
                        checkedIcon={<Icon name={"checkmark"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                        uncheckedIcon={<Icon name={"close"} size={20} color={commonStyles.colors.primaryHoverColor} />}
                        checked={this.state.coleta}
                        onPress={() => this.setState({ coleta : !coleta })}
                    />
                </View>
            )
        }

        if (this.state.id === 6) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Recrutamento</Text>

                    <Recruitment />
                </View>
            )
        }

        if (this.state.id === 7) {
            return (
                <View styles={{ margin: 'auto' }}>
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

                </View>
            )
        }

        if (this.state.id === 8) {
            return (
                <View styles={{ margin: 'auto' }}>
                    <Text style={styles.title}>Eventos</Text>

                    <Event />
                    <TextInput
                        label="Visitantes"
                        value={this.state.assunto}
                        underlineColor={"#A6B0BF"}
                        activeOutlineColor={commonStyles.colors.primaryColor}
                        activeUnderlineColor={commonStyles.colors.primaryColor}
                        style={styles.input}
                        onChangeText={assassunto => this.setState({ assunto })}
                    />

                    <Button
                        onPress={this.send}
                        contentStyle={styles.buttonSend}
                    >
                        <Text>Enviar</Text>
                    </Button>
                </View>
            )
        }
    }

    rigth = () => {
        return (
            <Button
                onPress={() => {
                    const id = this.state.id + 1
                    this.setState({ id })
                }}
                contentStyle={styles.buttons}
            >
                <Icon name={"chevron-forward-outline"} size={30} color={commonStyles.colors.primaryHoverColor} />
            </Button>
        )
    }

    left = () => {
        return (
            <Button
                onPress={() => {
                    const id = this.state.id - 1
                    this.setState({ id })
                }}

                contentStyle={styles.buttons}
            >
                <Icon name={"chevron-back-outline"} size={30} color={commonStyles.colors.primaryHoverColor} />
            </Button>
        )
    }

    returnButtons = () => {
        if (this.state.id > 1 && this.state.id < 10) {
            return (<>{this.left()}{this.rigth()}</>)
        }

        if (this.state.id === 1) {
            return (<>{this.rigth()}</>)
        }

        if (this.state.id === 10) {
            return (<>{this.left()}</>)
        }
    }

    render() {
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
                    <Portal>
                        <Dialog visible={this.state.visible} onDismiss={this.hideDialog}>
                            <Dialog.Title>{this.state.title}</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>{this.state.body}</Paragraph>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <Button
                                    type="outline"
                                    onPress={this.hideDialog}
                                >
                                    <Text>Ok</Text>
                                </Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                    <ScrollView
                        contentContainerStyle={styles.scrollView}
                    >
                        <View style={styles.container}>
                            {this.returnIndicator()}
                            <View style={styles.containerButton}>
                                {this.returnButtons()}
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
        color: commonStyles.colors.textColorHover,
        fontWeight: '400',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: commonStyles.fontSize.subtitle,
        marginBottom: 30,
    },

    subtitle: {
        color: "#757575",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontSize: 18,
        marginLeft: 13,
        marginTop: 5,
        marginBottom: 2.5,
        fontWeight: '800'
    },

    icon: {
        width: 20,
        height: 20
    },

    check: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginBottom: 20,
    },

    input: {
        marginBottom: 20,
        fontFamily: commonStyles.fontFamily.WorkSans,
        backgroundColor: 'transparent'
    },

    option: {
        backgroundColor: 'transparent',
    },

    textOption: {
        color: '#36393B',
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '400',

    },

    button: {
        justifyContent: 'flex-start',
    },

    buttonText: {
        color: '#787F84',
        fontWeight: '600',
        fontFamily: commonStyles.fontFamily.WorkSans,
    },

    iconNavigate: {
        width: 40,
        height: 40
    },

    buttons: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-end',
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    },

    buttonSend: {
        marginBottom: 30,
        marginTop: 20,
        backgroundColor: commonStyles.colors.primaryColor,
        padding: 5,
        borderRadius: 8,
    },

    textButton: {
        color: "#FFF",
        fontFamily: commonStyles.fontFamily.WorkSans,
        fontWeight: '600',
    },

})
